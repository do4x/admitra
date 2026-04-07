import blueprint from "../../data/exam_blueprint.json";
import { DEFAULT_SR } from "../utils/spacedRepetition.js";
import { DAILY_XP_GOAL_DEFAULT } from "../utils/xp.js";
import { STATE_VERSION } from "../constants/storage.js";

const defaultProfile = {
  studentName: "Elev",
  language: "Romana",
  targetCycle: "2026",
  dailyHours: "2-3",
  daysPerWeek: 7,
  primaryTrack: "C++ algoritmic",
  excludeTrivial: false
};

function createChapter(topic, subject, index) {
  return {
    subject,
    id: topic.id,
    name: topic.name,
    weight: topic.weight,
    tags: topic.tags,
    exerciseBank: topic.exercise_bank,
    // Legacy score fields
    knowledge: 0,
    speed: 0,
    confidence: 0,
    notes: "",
    // v2 fields
    level: index === 0 ? "beginner" : "locked", // first chapter starts unlocked
    xpTotal: 0,
    questionsAnswered: 0,
    questionsCorrect: 0,
    lastSessionDate: null,
    spacedRepetition: { ...DEFAULT_SR },
    sessionHistory: []
  };
}

export function makeInitialState() {
  return {
    stateVersion: STATE_VERSION,
    profile: { ...defaultProfile },
    placement: {
      completed: false,
      chapterResults: {}
    },
    chapters: {
      math: blueprint.math_topics.map((t, i) => createChapter(t, "math", i)),
      informatics: blueprint.informatics_topics.map((t, i) => createChapter(t, "informatics", i))
    },
    gamification: {
      xpTotal: 0,
      xpToday: 0,
      dailyXpGoal: DAILY_XP_GOAL_DEFAULT,
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      dailyActivity: {}
    },
    session: {
      active: false,
      chapterId: null,
      sessionType: null,
      questions: [],
      currentIndex: 0,
      hearts: 5,
      xpEarned: 0,
      answers: [],
      startedAt: null
    },
    questionHistory: [],
    mistakes: [],
    selectedDay: 1,
    diagnosticDays: [
      { day: 1, name: "Test matematica Bac M1 + corectare ghidata", status: "pending" },
      { day: 2, name: "Test informatica Bac/admitere in C++ + corectare ghidata", status: "pending" },
      { day: 3, name: "Mini-proba de admitere mixta + profil personalizat", status: "pending" }
    ],
    roadmap: {
      milestones: {},
      manualOverrides: []
    }
  };
}

export const IDLE_SESSION = {
  active: false,
  chapterId: null,
  sessionType: null,
  questions: [],
  currentIndex: 0,
  hearts: 5,
  xpEarned: 0,
  answers: [],
  startedAt: null
};

export const DEFAULT_GAMIFICATION = {
  xpTotal: 0,
  xpToday: 0,
  dailyXpGoal: DAILY_XP_GOAL_DEFAULT,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  dailyActivity: {}
};
