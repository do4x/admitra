import { algQuestions } from "./questions/math/alg.js";
import { funcQuestions } from "./questions/math/func.js";
import { trigQuestions } from "./questions/math/trig.js";
import { geomQuestions } from "./questions/math/geom.js";
import { limitsQuestions } from "./questions/math/limits.js";
import { contQuestions } from "./questions/math/cont.js";
import { derivQuestions } from "./questions/math/deriv.js";
import { integQuestions } from "./questions/math/integ.js";
import { admmixQuestions } from "./questions/math/admmix.js";
import { cppBaseQuestions } from "./questions/informatics/cpp_base.js";
import { controlQuestions } from "./questions/informatics/control.js";
import { arraysQuestions } from "./questions/informatics/arrays.js";
import { stringsQuestions } from "./questions/informatics/strings.js";
import { functionsQuestions } from "./questions/informatics/functions.js";
import { recursionQuestions } from "./questions/informatics/recursion.js";
import { sortSearchQuestions } from "./questions/informatics/sort_search.js";
import { algorithmsQuestions } from "./questions/informatics/algorithms.js";

export const questionRegistry = {
  alg: algQuestions,
  func: funcQuestions,
  trig: trigQuestions,
  geom: geomQuestions,
  limits: limitsQuestions,
  cont: contQuestions,
  deriv: derivQuestions,
  integ: integQuestions,
  admmix: admmixQuestions,
  cpp_base: cppBaseQuestions,
  control: controlQuestions,
  arrays: arraysQuestions,
  strings: stringsQuestions,
  functions: functionsQuestions,
  recursion: recursionQuestions,
  sort_search: sortSearchQuestions,
  algorithms: algorithmsQuestions
};

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getQuestionsForChapter(chapterId, difficulty = null, count = null) {
  const pool = questionRegistry[chapterId] ?? [];
  const filtered = difficulty ? pool.filter((q) => q.difficulty === difficulty) : pool;
  const shuffled = shuffleArray(filtered);
  return count ? shuffled.slice(0, count) : shuffled;
}

// For placement: 1 easy + 2 medium + 1 hard = 4 questions per chapter
export function getPlacementQuestions(chapterId) {
  return [
    ...getQuestionsForChapter(chapterId, "easy", 1),
    ...getQuestionsForChapter(chapterId, "medium", 2),
    ...getQuestionsForChapter(chapterId, "hard", 1)
  ];
}

// For a lesson session with a specified difficulty mix
export function getSessionQuestions(chapterId, mix) {
  const easy = getQuestionsForChapter(chapterId, "easy", mix.easy);
  const medium = getQuestionsForChapter(chapterId, "medium", mix.medium);
  const hard = getQuestionsForChapter(chapterId, "hard", mix.hard);
  // Interleave: easy first, then increasing difficulty
  return [...easy, ...medium, ...hard];
}

export function hasQuestions(chapterId) {
  return (questionRegistry[chapterId]?.length ?? 0) > 0;
}
