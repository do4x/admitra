import roadmapData from "../../data/roadmap.json";
import { computeRoadmapProgress, getCurrentPhaseId } from "../../utils/roadmapHelpers.js";

export function RoadmapProgress({ milestoneStates }) {
  const { total, completed, ratio } = computeRoadmapProgress(roadmapData, milestoneStates);
  const currentPhaseId = getCurrentPhaseId(roadmapData, milestoneStates);
  const currentPhase = roadmapData.phases.find((p) => p.id === currentPhaseId);

  const percentage = Math.round(ratio * 100);

  return (
    <div className="roadmap-header">
      <div className="roadmap-header-content">
        <div className="roadmap-header-text">
          <h2>Parcursul tău de studiu</h2>
          <p className="soft-text">
            {currentPhase ? (
              <>Faza actuală: <strong>{currentPhase.title}</strong></>
            ) : (
              <>Ai completat toate fazele! Felicitări!</>
            )}
          </p>
        </div>
        <div className="roadmap-progress-indicator">
          <div className="progress-number">
            <span className="completed">{completed}</span>
            <span className="slash">/</span>
            <span className="total">{total}</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.max(5, percentage)}%` }}
              />
            </div>
            <span className="progress-percent">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
