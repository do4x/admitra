import { todayISO, addDays } from "./dateHelpers.js";

export const DEFAULT_SR = {
  dueDate: null, // null = due immediately
  interval: 1,
  easeFactor: 2.5,
  repetitions: 0,
};

function accuracyToQuality(accuracy) {
  // Map 0-1 accuracy to SM-2 quality 0-5
  if (accuracy < 0.4) return 0;
  if (accuracy < 0.5) return 1;
  if (accuracy < 0.6) return 2;
  if (accuracy < 0.75) return 3;
  if (accuracy < 0.9) return 4;
  return 5;
}

export function updateSpacedRep(current, sessionAccuracy) {
  const quality = accuracyToQuality(sessionAccuracy);

  if (quality < 2) {
    // Failed session — reset
    return {
      ...current,
      interval: 1,
      repetitions: 0,
      dueDate: todayISO(),
    };
  }

  const newEase = Math.max(
    1.3,
    current.easeFactor + 0.1 - (5 - quality) * 0.18
  );

  let newInterval;
  if (current.repetitions === 0) newInterval = 1;
  else if (current.repetitions === 1) newInterval = 3;
  else newInterval = Math.round(current.interval * newEase);

  return {
    interval: newInterval,
    easeFactor: newEase,
    repetitions: current.repetitions + 1,
    dueDate: addDays(todayISO(), newInterval),
  };
}

export function isDue(sr) {
  if (!sr.dueDate) return true;
  return sr.dueDate <= todayISO();
}
