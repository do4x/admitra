import { useReducer, useEffect } from "react";
import { STORAGE_KEY } from "../constants/storage.js";
import { makeInitialState, IDLE_SESSION } from "../state/initialState.js";
import { migrateState } from "../state/migrations.js";
import { updateSpacedRep } from "../utils/spacedRepetition.js";
import { calculateSessionXP } from "../utils/xp.js";
import { todayISO } from "../utils/dateHelpers.js";

export const ACTIONS = {
  COMPLETE_PLACEMENT: "COMPLETE_PLACEMENT",
  START_SESSION: "START_SESSION",
  END_SESSION: "END_SESSION",
  UPDATE_CHAPTER_LEVEL: "UPDATE_CHAPTER_LEVEL",
  UPDATE_CHAPTER_SCORE: "UPDATE_CHAPTER_SCORE",
  UPDATE_DIAGNOSTIC: "UPDATE_DIAGNOSTIC",
  ADD_MISTAKE: "ADD_MISTAKE",
  UPDATE_MISTAKE: "UPDATE_MISTAKE",
  REMOVE_MISTAKE: "REMOVE_MISTAKE",
  SET_SELECTED_DAY: "SET_SELECTED_DAY",
  RESET: "RESET"
};

function getAllChapters(state) {
  return [...state.chapters.math, ...state.chapters.informatics];
}

function updateChapterInState(state, chapterId, updater) {
  const updateList = (list) =>
    list.map((c) => (c.id === chapterId ? updater(c) : c));
  return {
    ...state,
    chapters: {
      math: updateList(state.chapters.math),
      informatics: updateList(state.chapters.informatics)
    }
  };
}

function unlockNextChapter(state, completedChapterId) {
  // Unlock the next chapter in the same subject track
  const mathIds = state.chapters.math.map((c) => c.id);
  const infoIds = state.chapters.informatics.map((c) => c.id);

  const mathIdx = mathIds.indexOf(completedChapterId);
  const infoIdx = infoIds.indexOf(completedChapterId);

  let nextId = null;
  let subject = null;
  if (mathIdx >= 0 && mathIdx < mathIds.length - 1) {
    nextId = mathIds[mathIdx + 1];
    subject = "math";
  } else if (infoIdx >= 0 && infoIdx < infoIds.length - 1) {
    nextId = infoIds[infoIdx + 1];
    subject = "informatics";
  }

  if (!nextId) return state;

  return {
    ...state,
    chapters: {
      ...state.chapters,
      [subject]: state.chapters[subject].map((c) =>
        c.id === nextId && c.level === "locked" ? { ...c, level: "beginner" } : c
      )
    }
  };
}

function computeNewLevel(chapter, sessionAccuracy) {
  const history = chapter.sessionHistory ?? [];
  const recent = [...history.slice(-2), { accuracy: sessionAccuracy }]; // last 2 + current = up to 3

  const avgAccuracy = recent.reduce((s, r) => s + r.accuracy, 0) / recent.length;

  const current = chapter.level;

  // Level up thresholds
  if (current === "beginner" && avgAccuracy >= 0.7 && recent.length >= 2)
    return "intermediate";
  if (current === "intermediate" && avgAccuracy >= 0.75 && recent.length >= 2)
    return "advanced";
  if (current === "advanced" && avgAccuracy >= 0.85 && recent.length >= 3)
    return "mastered";

  // Level down
  if (sessionAccuracy < 0.5) {
    if (current === "mastered") return "advanced";
    if (current === "advanced") return "intermediate";
    if (current === "intermediate") return "beginner";
  }

  return current;
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.COMPLETE_PLACEMENT: {
      const { chapterResults } = action;
      // Apply determined levels to chapters
      const applyLevels = (list) =>
        list.map((c, i) => {
          const result = chapterResults[c.id];
          if (!result) return c;
          // Only first chapter in each track is unlocked; subsequent only if placement says intermediate+
          return {
            ...c,
            level: result.determinedLevel,
            knowledge: result.correct,  // rough proxy
            speed: 0,
            confidence: 0
          };
        });

      // After placement, unlock chapters that are not "locked"
      let newState = {
        ...state,
        placement: { completed: true, chapterResults },
        chapters: {
          math: applyLevels(state.chapters.math),
          informatics: applyLevels(state.chapters.informatics)
        }
      };
      return newState;
    }

    case ACTIONS.END_SESSION: {
      const { chapterId, answers, heartsLost } = action;
      const today = todayISO();
      const correct = answers.filter((a) => a.correct).length;
      const total = answers.length;
      const accuracy = total > 0 ? correct / total : 0;
      const xpEarned = calculateSessionXP(answers, heartsLost);

      // Update gamification
      const prevActivity = state.gamification.dailyActivity ?? {};
      const todayXP = (prevActivity[today] ?? 0) + xpEarned;
      const newActivity = { ...prevActivity, [today]: todayXP };

      // Cap activity at last 90 days
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 90);
      const cutoffStr = cutoff.toISOString().slice(0, 10);
      Object.keys(newActivity).forEach((d) => {
        if (d < cutoffStr) delete newActivity[d];
      });

      // Streak logic
      const lastDate = state.gamification.lastActivityDate;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);
      let streak = state.gamification.currentStreak;
      if (lastDate === today) {
        // already logged today, no change
      } else if (lastDate === yesterdayStr) {
        streak += 1;
      } else if (lastDate !== today) {
        streak = 1;
      }
      const longestStreak = Math.max(state.gamification.longestStreak, streak);

      const newGamification = {
        ...state.gamification,
        xpTotal: state.gamification.xpTotal + xpEarned,
        xpToday: todayXP,
        currentStreak: streak,
        longestStreak,
        lastActivityDate: today,
        dailyActivity: newActivity
      };

      // Update question history (cap at 500)
      const newHistory = [
        ...answers.map((a) => ({
          questionId: a.questionId,
          chapterId,
          answeredAt: new Date().toISOString(),
          correct: a.correct,
          timeTakenMs: a.timeTakenMs ?? 0,
          difficulty: a.difficulty ?? "medium"
        })),
        ...state.questionHistory
      ].slice(0, 500);

      // Update chapter
      let newState = updateChapterInState(state, chapterId, (chapter) => {
        const newLevel = computeNewLevel(chapter, accuracy);
        const newSR = updateSpacedRep(chapter.spacedRepetition, accuracy);
        const sessionEntry = {
          date: today,
          accuracy,
          questionsAnswered: total,
          xpEarned,
          heartsLost
        };
        const newHistory10 = [...(chapter.sessionHistory ?? []), sessionEntry].slice(-10);

        return {
          ...chapter,
          level: newLevel,
          xpTotal: chapter.xpTotal + xpEarned,
          questionsAnswered: chapter.questionsAnswered + total,
          questionsCorrect: chapter.questionsCorrect + correct,
          lastSessionDate: today,
          spacedRepetition: newSR,
          sessionHistory: newHistory10
        };
      });

      // Check if chapter moved to completed/mastered, unlock next
      const updatedChapter = [...newState.chapters.math, ...newState.chapters.informatics]
        .find((c) => c.id === chapterId);
      if (updatedChapter && ["advanced", "mastered"].includes(updatedChapter.level)) {
        newState = unlockNextChapter(newState, chapterId);
      }

      return {
        ...newState,
        gamification: newGamification,
        questionHistory: newHistory,
        session: { ...IDLE_SESSION }
      };
    }

    case ACTIONS.UPDATE_CHAPTER_SCORE: {
      const { subject, chapterId, field, value } = action;
      return {
        ...state,
        chapters: {
          ...state.chapters,
          [subject]: state.chapters[subject].map((c) =>
            c.id === chapterId
              ? { ...c, [field]: field === "notes" ? value : Number(value) }
              : c
          )
        }
      };
    }

    case ACTIONS.UPDATE_DIAGNOSTIC: {
      return {
        ...state,
        diagnosticDays: state.diagnosticDays.map((entry) =>
          entry.day === action.day ? { ...entry, status: action.status } : entry
        )
      };
    }

    case ACTIONS.ADD_MISTAKE: {
      return {
        ...state,
        mistakes: [
          {
            id: crypto.randomUUID(),
            date: new Date().toISOString().slice(0, 10),
            discipline: "Matematica",
            chapter: "",
            type: "teorie",
            summary: "",
            correction: ""
          },
          ...state.mistakes
        ]
      };
    }

    case ACTIONS.UPDATE_MISTAKE: {
      return {
        ...state,
        mistakes: state.mistakes.map((m) =>
          m.id === action.id ? { ...m, [action.field]: action.value } : m
        )
      };
    }

    case ACTIONS.REMOVE_MISTAKE: {
      return {
        ...state,
        mistakes: state.mistakes.filter((m) => m.id !== action.id)
      };
    }

    case ACTIONS.SET_SELECTED_DAY: {
      return { ...state, selectedDay: action.day };
    }

    case ACTIONS.RESET: {
      return makeInitialState();
    }

    default:
      return state;
  }
}

function loadState() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return makeInitialState();
  return migrateState(raw);
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, null, loadState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return { state, dispatch };
}
