import { isDue } from "../utils/spacedRepetition.js";

const DIFFICULTY_MIX = {
  beginner:      { easy: 6, medium: 4, hard: 2 },
  intermediate:  { easy: 3, medium: 5, hard: 4 },
  advanced:      { easy: 1, medium: 4, hard: 7 },
  mastered:      { easy: 1, medium: 3, hard: 8 }
};

export function useAdaptiveEngine(state) {
  const allChapters = [...state.chapters.math, ...state.chapters.informatics];

  const chaptersForReview = allChapters
    .filter((c) => c.level !== "locked" && isDue(c.spacedRepetition))
    .map((c) => c.id);

  function getDifficultyMix(chapterId) {
    const chapter = allChapters.find((c) => c.id === chapterId);
    const level = chapter?.level ?? "beginner";
    return DIFFICULTY_MIX[level] ?? DIFFICULTY_MIX.beginner;
  }

  function shouldLevelUp(chapterId) {
    const chapter = allChapters.find((c) => c.id === chapterId);
    if (!chapter) return false;
    const history = chapter.sessionHistory ?? [];
    const recent = history.slice(-2);
    if (recent.length < 2) return false;
    const avgAccuracy = recent.reduce((s, r) => s + r.accuracy, 0) / recent.length;
    const { level } = chapter;
    if (level === "beginner") return avgAccuracy >= 0.7;
    if (level === "intermediate") return avgAccuracy >= 0.75;
    if (level === "advanced") return avgAccuracy >= 0.85;
    return false;
  }

  // For placement: given correct answers so far in a chapter, decide action
  function placementNextAction(correctSoFar, totalSoFar) {
    if (totalSoFar === 0) return "continue";
    if (totalSoFar === 1 && correctSoFar === 0) return "demote"; // failed easy → beginner, skip rest
    if (totalSoFar >= 4) return "stop";
    return "continue";
  }

  return { chaptersForReview, getDifficultyMix, shouldLevelUp, placementNextAction };
}
