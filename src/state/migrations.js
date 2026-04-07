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
    parsed = migrateV1toV2(parsed);
  }

  if ((parsed.stateVersion ?? 1) < 3) {
    parsed = migrateV2toV3(parsed);
  }

  if ((parsed.stateVersion ?? 1) < 4) {
    parsed = migrateV3toV4(parsed);
  }

  if ((parsed.stateVersion ?? 1) < 5) {
    parsed = migrateV4toV5(parsed);
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
    stateVersion: 2,
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

function migrateV2toV3(v2) {
  const fresh = makeInitialState();

  return {
    ...v2,
    stateVersion: 3,
    profile: v2.profile ?? fresh.profile,
    placement: v2.placement ?? fresh.placement,
    chapters: v2.chapters ?? fresh.chapters,
    gamification: v2.gamification ?? fresh.gamification,
    session: v2.session ?? fresh.session,
    questionHistory: v2.questionHistory ?? fresh.questionHistory,
    mistakes: v2.mistakes ?? fresh.mistakes,
    selectedDay: v2.selectedDay ?? fresh.selectedDay,
    diagnosticDays: v2.diagnosticDays ?? fresh.diagnosticDays,
    roadmap: fresh.roadmap
  };
}

function migrateV3toV4(v3) {
  return {
    ...v3,
    stateVersion: 4,
    mistakes: (v3.mistakes ?? []).map((m) => ({
      problemImage: null,
      solutionImage: null,
      ...m
    }))
  };
}

function migrateV4toV5(v4) {
  return {
    ...v4,
    stateVersion: 5,
    profile: {
      ...v4.profile,
      excludeTrivial: v4.profile?.excludeTrivial ?? false
    }
  };
}
