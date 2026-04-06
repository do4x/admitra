import blueprint from "../../../data/exam_blueprint.json";
import { chapterPercent, chapterColor } from "../../utils/chapterScoring.js";
import { ACTIONS } from "../../hooks/useAppState.js";
import { CustomSelect } from "../ui/CustomSelect.jsx";

const SCORE_OPTIONS = [0, 1, 2, 3, 4].map((v) => ({ value: v, label: String(v) }));

function ScoreTable({ title, subject, chapters, dispatch }) {
  return (
    <div className="table-wrap">
      <h4>{title}</h4>
      <div className="score-table">
        <div className="score-head">Capitol</div>
        <div className="score-head">Cunoastere</div>
        <div className="score-head">Viteza</div>
        <div className="score-head">Incredere</div>
        <div className="score-head">Status</div>
        <div className="score-head">Note</div>
        {chapters.map((chapter) => {
          const percent = chapterPercent(chapter);
          return (
            <div className="score-row" key={chapter.id}>
              <div className="chapter-name">
                <strong>{chapter.name}</strong>
                <span>{percent.toFixed(2)}%</span>
              </div>
              {["knowledge", "speed", "confidence"].map((field) => (
                <CustomSelect
                  key={field}
                  value={chapter[field]}
                  options={SCORE_OPTIONS}
                  onChange={(val) =>
                    dispatch({
                      type: ACTIONS.UPDATE_CHAPTER_SCORE,
                      subject,
                      chapterId: chapter.id,
                      field,
                      value: val
                    })
                  }
                  compact
                />
              ))}
              <span className={`status-badge ${chapterColor(percent)}`}>{chapterColor(percent)}</span>
              <textarea
                rows="2"
                value={chapter.notes}
                placeholder="Ex: teoria e ok, dar ma pierd la timp."
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.UPDATE_CHAPTER_SCORE,
                    subject,
                    chapterId: chapter.id,
                    field: "notes",
                    value: e.target.value
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AssessmentMatrix({ state, dispatch }) {
  return (
    <section className="card large-card">
      <div className="section-header">
        <h3>Matrice diagnostica</h3>
        <p>Acorda note 0-4 la cunoastere, viteza si incredere pentru fiecare capitol.</p>
      </div>
      <ScoreTable title="Matematica" subject="math" chapters={state.chapters.math} dispatch={dispatch} />
      <ScoreTable title="Informatica" subject="informatics" chapters={state.chapters.informatics} dispatch={dispatch} />
    </section>
  );
}
