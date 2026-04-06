import roadmapData from "../../data/roadmap.json";
import { ACTIONS } from "../../hooks/useAppState.js";
import { isPhaseUnlocked, getCurrentPhaseId } from "../../utils/roadmapHelpers.js";
import { RoadmapProgress } from "./RoadmapProgress.jsx";
import { PhaseCard } from "./PhaseCard.jsx";

export function RoadmapView({ state, dispatch, onStartLesson }) {
  const milestoneStates = state.roadmap?.milestones ?? {};
  const currentPhaseId = getCurrentPhaseId(roadmapData, milestoneStates);

  const handleToggleMilestone = (milestoneId) => {
    dispatch({ type: ACTIONS.TOGGLE_MILESTONE, milestoneId });
  };

  return (
    <div className="roadmap-view">
      <RoadmapProgress milestoneStates={milestoneStates} />

      <div className="phases-container">
        {roadmapData.phases.map((phase) => {
          const phaseUnlocked = isPhaseUnlocked(phase, roadmapData, milestoneStates);
          const isCurrent = phase.id === currentPhaseId;

          return (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isUnlocked={phaseUnlocked}
              isCurrent={isCurrent}
              milestoneStates={milestoneStates}
              onToggleMilestone={handleToggleMilestone}
              onStartLesson={onStartLesson}
              chapters={state.chapters}
            />
          );
        })}
      </div>
    </div>
  );
}
