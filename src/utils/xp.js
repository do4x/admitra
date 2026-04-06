export const XP_PER_DIFFICULTY = { easy: 10, medium: 15, hard: 20 };
export const PERFECT_SESSION_BONUS = 50;
export const DAILY_XP_GOAL_DEFAULT = 100;

export function questionXP(difficulty) {
  return XP_PER_DIFFICULTY[difficulty] ?? 10;
}

export function calculateSessionXP(answers, heartsLost) {
  const base = answers.reduce(
    (sum, a) => sum + (a.correct ? questionXP(a.difficulty) : 0),
    0
  );
  const perfect = heartsLost === 0 ? PERFECT_SESSION_BONUS : 0;
  return base + perfect;
}
