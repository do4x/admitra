import { useState, useCallback } from "react";
import { getSessionQuestions, getPlacementQuestions } from "../data/questionRegistry.js";
import { evaluateAnswer } from "../utils/evaluateAnswer.js";

// Session phases: "idle" | "question" | "feedback" | "results"

const INITIAL_SESSION = {
  phase: "idle",
  chapterId: null,
  sessionType: null,
  questions: [],
  currentIndex: 0,
  hearts: 5,
  xpEarned: 0,
  answers: [],
  selectedAnswer: null,
  isCorrect: null,
  startTime: null
};

function questionXPValue(question) {
  const map = { easy: 10, medium: 15, hard: 20 };
  return map[question.difficulty] ?? 10;
}

export function useSession(dispatch) {
  const [session, setSession] = useState(INITIAL_SESSION);

  const startSession = useCallback((chapterId, sessionType, difficultyMix, opts = {}) => {
    let questions;
    if (sessionType === "placement") {
      questions = getPlacementQuestions(chapterId);
    } else {
      const mix = difficultyMix ?? { easy: 4, medium: 5, hard: 3 };
      questions = getSessionQuestions(chapterId, mix, opts);
    }

    if (questions.length === 0) {
      // No questions yet for this chapter
      return false;
    }

    setSession({
      ...INITIAL_SESSION,
      phase: "question",
      chapterId,
      sessionType,
      questions,
      startTime: Date.now()
    });
    return true;
  }, []);

  const submitAnswer = useCallback((rawAnswer) => {
    setSession((prev) => {
      if (prev.phase !== "question") return prev;
      const question = prev.questions[prev.currentIndex];
      const timeTakenMs = Date.now() - (prev.startTime ?? Date.now());
      const isCorrect = evaluateAnswer(question, rawAnswer);
      const xpGained = isCorrect ? questionXPValue(question) : 0;
      const newHearts = isCorrect ? prev.hearts : prev.hearts - 1;

      return {
        ...prev,
        phase: "feedback",
        selectedAnswer: rawAnswer,
        isCorrect,
        xpEarned: prev.xpEarned + xpGained,
        hearts: newHearts,
        startTime: Date.now(),
        answers: [
          ...prev.answers,
          {
            questionId: question.id,
            correct: isCorrect,
            timeTakenMs,
            difficulty: question.difficulty
          }
        ]
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setSession((prev) => {
      if (prev.phase !== "feedback") return prev;
      const isLast = prev.currentIndex >= prev.questions.length - 1;
      const outOfHearts = prev.hearts <= 0;

      if (isLast || outOfHearts) {
        return { ...prev, phase: "results" };
      }

      return {
        ...prev,
        phase: "question",
        currentIndex: prev.currentIndex + 1,
        selectedAnswer: null,
        isCorrect: null,
        startTime: Date.now()
      };
    });
  }, []);

  const finishSession = useCallback(() => {
    if (!dispatch) return;
    const { chapterId, answers, hearts } = session;
    const heartsLost = 5 - hearts;

    dispatch({
      type: "END_SESSION",
      chapterId,
      answers,
      heartsLost
    });

    setSession(INITIAL_SESSION);
  }, [session, dispatch]);

  const resetSession = useCallback(() => {
    setSession(INITIAL_SESSION);
  }, []);

  return { session, startSession, submitAnswer, nextQuestion, finishSession, resetSession };
}
