import roadmapData from "../data/roadmap.json";

const LEVEL_RANKS = {
  locked: 0,
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  mastered: 4
};

function levelRank(level) {
  return LEVEL_RANKS[level] ?? 0;
}

/**
 * Evaluate which milestones should be auto-completed based on session performance.
 * Skips milestones already manually toggled.
 */
export function evaluateAutoCompletions(state, chapterId, sessionAccuracy) {
  const allChapters = [...state.chapters.math, ...state.chapters.informatics];
  const chapter = allChapters.find((c) => c.id === chapterId);
  if (!chapter) return [];

  const completedIds = [];
  const { manualOverrides = [] } = state.roadmap ?? {};

  for (const phase of roadmapData.phases) {
    // Only evaluate milestones in unlocked phases
    if (!isPhaseUnlocked(phase, roadmapData, state.roadmap.milestones)) continue;

    for (const ms of phase.milestones) {
      // Skip if already completed or manually overridden
      if (state.roadmap.milestones[ms.id]?.completed) continue;
      if (manualOverrides.includes(ms.id)) continue;

      // Only process milestones for this chapter
      if (ms.chapterId !== chapterId) continue;

      const ac = ms.autoComplete;
      if (!ac || ac.type !== "session_accuracy") continue;

      const meetsAccuracy = sessionAccuracy >= ac.minAccuracy;
      const meetsSessions = (chapter.sessionHistory?.length ?? 0) >= ac.minSessions;
      const meetsLevel = levelRank(chapter.level) >= levelRank(ac.requiredLevel);

      if (meetsAccuracy && meetsSessions && meetsLevel) {
        completedIds.push(ms.id);
      }
    }
  }

  return completedIds;
}

/**
 * Check if a phase is unlocked based on previous phase completion.
 */
export function isPhaseUnlocked(phase, roadmapData, milestoneStates) {
  if (phase.order === 1) return true; // First phase always unlocked

  // Find previous phase
  const prevPhase = roadmapData.phases.find((p) => p.order === phase.order - 1);
  if (!prevPhase) return true; // Safety fallback

  // Count completed milestones in previous phase
  const totalInPrev = prevPhase.milestones.length;
  const completedInPrev = prevPhase.milestones.filter(
    (ms) => milestoneStates[ms.id]?.completed
  ).length;

  const ratio = totalInPrev > 0 ? completedInPrev / totalInPrev : 0;
  return ratio >= prevPhase.requiredCompletionRatio;
}

/**
 * Compute progress for a single phase.
 */
export function computePhaseProgress(phase, milestoneStates) {
  const total = phase.milestones.length;
  const completed = phase.milestones.filter(
    (ms) => milestoneStates[ms.id]?.completed
  ).length;
  return {
    total,
    completed,
    ratio: total > 0 ? completed / total : 0
  };
}

/**
 * Get the current (active) phase: first unlocked, incomplete phase.
 */
export function getCurrentPhaseId(roadmapData, milestoneStates) {
  const sortedPhases = [...roadmapData.phases].sort((a, b) => a.order - b.order);

  for (const phase of sortedPhases) {
    const unlocked = isPhaseUnlocked(phase, roadmapData, milestoneStates);
    if (!unlocked) continue;

    const { ratio } = computePhaseProgress(phase, milestoneStates);
    if (ratio < 1) return phase.id;
  }

  // All complete; return the last phase
  return sortedPhases[sortedPhases.length - 1]?.id ?? null;
}

/**
 * Get overall roadmap progress.
 */
export function computeRoadmapProgress(roadmapData, milestoneStates) {
  let totalMilestones = 0;
  let completedMilestones = 0;

  for (const phase of roadmapData.phases) {
    for (const ms of phase.milestones) {
      totalMilestones++;
      if (milestoneStates[ms.id]?.completed) {
        completedMilestones++;
      }
    }
  }

  return {
    total: totalMilestones,
    completed: completedMilestones,
    ratio: totalMilestones > 0 ? completedMilestones / totalMilestones : 0
  };
}
