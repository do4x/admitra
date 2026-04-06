import { isDue } from "../../utils/spacedRepetition.js";

const LEVEL_EMOJI = {
  locked: "🔒",
  beginner: "📖",
  intermediate: "⚡",
  advanced: "🔥",
  mastered: "⭐"
};

const LEVEL_LABEL = {
  locked: "Blocat",
  beginner: "Incepator",
  intermediate: "Intermediar",
  advanced: "Avansat",
  mastered: "Maestru"
};

export function SkillNode({ chapter, onStart }) {
  const { level, name, xpTotal, questionsAnswered, questionsCorrect, spacedRepetition } = chapter;
  const isLocked = level === "locked";
  const due = !isLocked && isDue(spacedRepetition);
  const accuracy = questionsAnswered > 0
    ? Math.round((questionsCorrect / questionsAnswered) * 100)
    : null;

  return (
    <div
      className={`skill-node level-${level}${due ? " due" : ""}${isLocked ? " locked" : " clickable"}`}
      onClick={() => !isLocked && onStart(chapter.id)}
      role={isLocked ? undefined : "button"}
      tabIndex={isLocked ? -1 : 0}
      onKeyDown={(e) => !isLocked && e.key === "Enter" && onStart(chapter.id)}
      aria-label={isLocked ? `${name} — blocat` : `${name} — ${LEVEL_LABEL[level]}`}
    >
      <div className="skill-node-icon">{LEVEL_EMOJI[level]}</div>
      <div className="skill-node-body">
        <strong className="skill-node-name">{name}</strong>
        <span className={`skill-node-level level-tag-${level}`}>{LEVEL_LABEL[level]}</span>
        {accuracy !== null && (
          <span className="skill-node-acc">{accuracy}% acuratete</span>
        )}
        {xpTotal > 0 && (
          <span className="skill-node-xp">{xpTotal} XP</span>
        )}
        {due && !isLocked && (
          <span className="skill-node-due">Recapitulare!</span>
        )}
      </div>
      {!isLocked && (
        <div className="skill-node-arrow">→</div>
      )}
    </div>
  );
}
