import { STATE_VERSION } from "../constants/storage.js";
import { makeInitialState, DEFAULT_GAMIFICATION, IDLE_SESSION } from "./initialState.js";
import { DEFAULT_SR } from "../utils/spacedRepetition.js";
import { percentToLevel, chapterPercent } from "../utils/chapterScoring.js";

export function migrateState(raw) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return makeInitialState();
  }

  if (!parsed || typeof parsed !== "object") return makeInitialState();

  const version = parsed.stateVersion ?? 1;

  if (version < 2) {
    return migrateV1toV2(parsed);
  }

  return parsed;
}

function upgradeChapter(chapter, index) {
  const pct = chapterPercent(chapter);
  return {
    ...chapter,
    level: index === 0 ? (pct > 0 ? percentToLevel(pct) : "beginner") : percentToLevel(pct),
    xpTotal: 0,
    questionsAnswered: 0,
    questionsCorrect: 0,
    lastSessionDate: null,
    spacedRepetition: { ...DEFAULT_SR },
    sessionHistory: []
  };
}

function migrateV1toV2(v1) {
  const fresh = makeInitialState();

  return {
    stateVersion: STATE_VERSION,
    profile: v1.profile ?? fresh.profile,
    placement: {
      completed: false, // force placement even for existing users
      chapterResults: {}
    },
    chapters: {
      math: (v1.chapters?.math ?? fresh.chapters.math).map((c, i) => upgradeChapter(c, i)),
      informatics: (v1.chapters?.informatics ?? fresh.chapters.informatics).map((c, i) => upgradeChapter(c, i))
    },
    gamification: { ...DEFAULT_GAMIFICATION },
    session: { ...IDLE_SESSION },
    questionHistory: [],
    mistakes: v1.mistakes ?? [],
    selectedDay: v1.selectedDay ?? 1,
    diagnosticDays: v1.diagnosticDays ?? fresh.diagnosticDays
  };
}
