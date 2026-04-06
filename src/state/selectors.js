import { chapterPercent, chapterColor, weightedAverage, toExamScore } from "../utils/chapterScoring.js";

const dayThemes = {
  1: "fundament",
  2: "probleme grele",
  3: "antrenament cronometrat mixt",
  4: "reparatie pe capitole slabe",
  5: "admitere-focused",
  6: "Bac-focused",
  7: "evaluare saptamanala"
};

export { chapterPercent, chapterColor };

export function buildMetrics(state) {
  const math = state.chapters.math;
  const info = state.chapters.informatics;
  const all = [...math, ...info].sort((a, b) => chapterPercent(a) - chapterPercent(b));
  const mathRed = math.filter((c) => chapterColor(chapterPercent(c)) === "red").length;
  const infoRed = info.filter((c) => chapterColor(chapterPercent(c)) === "red").length;
  let mathShare = 50, infoShare = 50;
  if (mathRed > infoRed) { mathShare = 60; infoShare = 40; }
  else if (infoRed > mathRed) { mathShare = 40; infoShare = 60; }
  return {
    bac: toExamScore(weightedAverage(math, "bac") * 0.6 + weightedAverage(info, "bac") * 0.4),
    fmi: toExamScore(weightedAverage(math, "fmi") * 0.5 + weightedAverage(info, "fmi") * 0.5),
    upb: toExamScore(weightedAverage(math, "upb") * 0.55 + weightedAverage(info, "upb") * 0.45),
    weakest: all.slice(0, 5),
    strongest: [...all].reverse().slice(0, 5),
    mathShare,
    infoShare
  };
}

export function buildWeeklySummary(state, metrics) {
  const ranked = [...state.chapters.math, ...state.chapters.informatics].sort(
    (a, b) => chapterPercent(a) - chapterPercent(b)
  );
  return {
    estimates: [["Bac M1", metrics.bac], ["UB FMI", metrics.fmi], ["UPB ACS/CTI/IS", metrics.upb]],
    priority: ranked.slice(0, 4),
    maintenance: ranked.filter((c) => chapterPercent(c) >= 85).slice(0, 4),
    mathShare: metrics.mathShare,
    infoShare: metrics.infoShare
  };
}

export function buildDailyPlan(state, day) {
  const weakestMath = [...state.chapters.math]
    .sort((a, b) => chapterPercent(a) - chapterPercent(b))
    .slice(0, 3);
  const weakestInfo = [...state.chapters.informatics]
    .sort((a, b) => chapterPercent(a) - chapterPercent(b))
    .slice(0, 3);
  return {
    title: `Brief zilnic - Ziua ${day}`,
    objective: `Ridica stabilitatea pe capitolele cele mai slabe in ziua de ${dayThemes[day]}.`,
    math: weakestMath.map((c, i) => c.exerciseBank[Math.min(i, c.exerciseBank.length - 1)]),
    info: weakestInfo.map((c, i) => c.exerciseBank[Math.min(i, c.exerciseBank.length - 1)]),
    passRule:
      day === 7
        ? "Promovezi daca obtii minimum 70% la ambele mini-teste si etichetezi toate greselile."
        : `Promovezi daca rezolvi cel putin 70% din set in timpul tinta si nu ramane rosu niciun exercitiu-cheie din ${weakestMath[0]?.name ?? "matematica"} sau ${weakestInfo[0]?.name ?? "informatica"}.`
  };
}
