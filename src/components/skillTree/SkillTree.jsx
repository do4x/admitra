import { SubjectTrack } from "./SubjectTrack.jsx";
import { useAdaptiveEngine } from "../../hooks/useAdaptiveEngine.js";

export function SkillTree({ state, onStartLesson }) {
  const { chaptersForReview } = useAdaptiveEngine(state);

  const reviewCount = chaptersForReview.length;

  return (
    <div className="skill-tree-view">
      <div className="skill-tree-header card">
        <div>
          <span className="eyebrow">Arborele tau de studiu</span>
          <h2 style={{ margin: "0.2rem 0 0.4rem" }}>Alege un capitol</h2>
          <p style={{ color: "var(--soft-text)", margin: 0, fontSize: "0.88rem" }}>
            Completeaza lectiile pentru a debloca capitolele urmatoare.
            {reviewCount > 0 && (
              <span style={{ color: "var(--warm)", marginLeft: "0.5rem" }}>
                {reviewCount} capitol(e) de recapitulat azi!
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="skill-tree-tracks">
        <SubjectTrack
          title="Matematica"
          chapters={state.chapters.math}
          onStart={onStartLesson}
          color="warm"
        />
        <SubjectTrack
          title="Informatica"
          chapters={state.chapters.informatics}
          onStart={onStartLesson}
          color="mint"
        />
      </div>
    </div>
  );
}
