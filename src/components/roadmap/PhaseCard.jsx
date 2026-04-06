import { MilestoneItem } from "./MilestoneItem.jsx";
import { computePhaseProgress } from "../../utils/roadmapHelpers.js";

export function PhaseCard({
  phase,
  isUnlocked,
  isCurrent,
  milestoneStates,
  onToggleMilestone,
  onStartLesson,
  chapters
}) {
  const { completed, total, ratio } = computePhaseProgress(phase, milestoneStates);
  const percentage = Math.round(ratio * 100);

  // Find all chapters referenced in this phase's milestones
  const allChapters = [...chapters.math, ...chapters.informatics];

  return (
    <div className={`phase-card ${!isUnlocked ? "phase-locked" : ""} ${isCurrent ? "phase-current" : ""}`}>
      <div className="phase-header">
        <div className="phase-title-group">
          {!isUnlocked && <span className="phase-lock-icon">🔒</span>}
          <div>
            <h3>{phase.title}</h3>
            <p className="phase-description">{phase.description}</p>
          </div>
        </div>
        <div className="phase-progress-summary">
          <span className="milestone-count">
            {completed}/{total}
          </span>
        </div>
      </div>

      <div className="phase-progress-bar">
        <div className="phase-progress-fill" style={{ width: `${Math.max(5, percentage)}%` }} />
      </div>
      <div className="phase-progress-label">
        {percentage}% · {completed} din {total} milestone-uri
      </div>

      {!isUnlocked && (
        <div className="phase-locked-message">
          <p>🔐 Completează {Math.ceil(phase.requiredCompletionRatio * 100)}% din faza anterioară pentru a debloca.</p>
        </div>
      )}

      {isUnlocked && (
        <div className="phase-milestones">
          {phase.milestones.map((milestone) => {
            const chapter = allChapters.find((c) => c.id === milestone.chapterId);
            return (
              <MilestoneItem
                key={milestone.id}
                milestone={milestone}
                milestoneState={milestoneStates[milestone.id]}
                isPhaseUnlocked={isUnlocked}
                onToggle={onToggleMilestone}
                onStartLesson={onStartLesson}
                chapter={chapter}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
