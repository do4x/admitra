const average = (values) =>
  values.reduce((sum, v) => sum + v, 0) / values.length;

export function chapterPercent(chapter) {
  return (
    Math.round(
      (average([chapter.knowledge, chapter.speed, chapter.confidence]) / 4) *
        10000
    ) / 100
  );
}

export function chapterColor(percent) {
  if (percent < 70) return "red";
  if (percent < 85) return "yellow";
  return "green";
}

export function weightedAverage(chapters, tag) {
  const eligible = chapters.filter((c) => c.tags.includes(tag));
  if (!eligible.length) return 0;
  const weightSum = eligible.reduce((s, c) => s + c.weight, 0);
  const scoreSum = eligible.reduce(
    (s, c) => s + chapterPercent(c) * c.weight,
    0
  );
  return scoreSum / weightSum;
}

export function toExamScore(value) {
  return (Math.round((value / 10) * 100) / 100).toFixed(2);
}

// Derive a Duolingo-style level from chapter percent (used for migration)
export function percentToLevel(percent) {
  if (percent < 10) return "locked";
  if (percent < 50) return "beginner";
  if (percent < 75) return "intermediate";
  if (percent < 90) return "advanced";
  return "mastered";
}
