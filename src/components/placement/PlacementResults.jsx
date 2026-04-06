import blueprint from "../../../data/exam_blueprint.json";

const LEVEL_LABEL = {
  beginner: "Incepator",
  intermediate: "Intermediar",
  advanced: "Avansat"
};
const LEVEL_CLASS = {
  beginner: "level-beginner",
  intermediate: "level-intermediate",
  advanced: "level-advanced"
};

export function PlacementResults({ chapterResults, onContinue }) {
  const allChapters = [
    ...blueprint.math_topics.map((t) => ({ ...t, subject: "math" })),
    ...blueprint.informatics_topics.map((t) => ({ ...t, subject: "informatics" }))
  ];

  return (
    <div className="placement-results">
      <div className="placement-results-card card">
        <span className="eyebrow">Plasament finalizat</span>
        <h2>Profilul tau initial</h2>
        <p style={{ color: "var(--soft-text)", marginTop: 0 }}>
          Iata nivelul determinat pentru fiecare capitol. Poti imbunatati oricand!
        </p>

        <div className="placement-results-grid">
          {["math", "informatics"].map((subj) => (
            <div key={subj} className="placement-subject-col">
              <span className="section-label">{subj === "math" ? "Matematica" : "Informatica"}</span>
              {allChapters
                .filter((c) => c.subject === subj)
                .map((c) => {
                  const result = chapterResults[c.id];
                  const level = result?.determinedLevel ?? "beginner";
                  return (
                    <div key={c.id} className="placement-chapter-row">
                      <span className="placement-chapter-name">{c.name}</span>
                      <span className={`level-badge ${LEVEL_CLASS[level]}`}>
                        {LEVEL_LABEL[level]}
                      </span>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        <button type="button" className="primary-button placement-start-btn" onClick={onContinue}>
          Incepe invatarea →
        </button>
      </div>
    </div>
  );
}
