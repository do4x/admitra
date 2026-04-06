export function MilestoneItem({
  milestone,
  milestoneState,
  isPhaseUnlocked,
  onToggle,
  onStartLesson,
  chapter
}) {
  const { completed = false, autoCompleted = false } = milestoneState ?? {};
  const isDisabled = !isPhaseUnlocked;

  const getLevelEmoji = (level) => {
    switch (level) {
      case "mastered": return "⭐";
      case "advanced": return "🔥";
      case "intermediate": return "⚡";
      case "beginner": return "📖";
      default: return "🔒";
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case "mastered": return "Mastered";
      case "advanced": return "Advanced";
      case "intermediate": return "Intermediate";
      case "beginner": return "Beginner";
      default: return "Locked";
    }
  };

  return (
    <div className={`milestone-item ${isDisabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        className={`milestone-checkbox ${milestone.subject}`}
        checked={completed}
        onChange={() => onToggle(milestone.id)}
        disabled={isDisabled}
        aria-label={`Mark ${milestone.title} complete`}
      />
      <div className="milestone-content">
        <div className="milestone-header">
          <h4 className={completed ? "completed" : ""}>{milestone.title}</h4>
          <div className="milestone-badges">
            {autoCompleted && <span className="milestone-auto-badge">auto</span>}
          </div>
        </div>
        <p className="milestone-description">{milestone.description}</p>
      </div>
      {chapter && (
        <div className="milestone-chapter-info">
          <span className="level-badge">
            {getLevelEmoji(chapter.level)} {getLevelText(chapter.level)}
          </span>
          {chapter.questionsAnswered > 0 && (
            <span className="accuracy-badge">
              {Math.round((chapter.questionsCorrect / chapter.questionsAnswered) * 100)}%
            </span>
          )}
        </div>
      )}
      <button
        className="milestone-start-btn"
        onClick={() => onStartLesson(milestone.chapterId)}
        disabled={isDisabled}
        title="Start a practice session on this chapter"
      >
        Lectie
      </button>
    </div>
  );
}
