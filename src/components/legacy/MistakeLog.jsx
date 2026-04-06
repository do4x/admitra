import blueprint from "../../../data/exam_blueprint.json";
import { ACTIONS } from "../../hooks/useAppState.js";

function MistakeEditor({ mistake, dispatch }) {
  const upd = (field, value) => dispatch({ type: ACTIONS.UPDATE_MISTAKE, id: mistake.id, field, value });
  return (
    <div className="mistake-card">
      <div className="mistake-grid">
        <label>Data<input type="date" value={mistake.date} onChange={(e) => upd("date", e.target.value)} /></label>
        <label>Disciplina
          <select value={mistake.discipline} onChange={(e) => upd("discipline", e.target.value)}>
            <option>Matematica</option>
            <option>Informatica</option>
          </select>
        </label>
        <label>Tip
          <select value={mistake.type} onChange={(e) => upd("type", e.target.value)}>
            {blueprint.error_labels.map((l) => <option key={l}>{l}</option>)}
          </select>
        </label>
      </div>
      <label>Capitol<input type="text" value={mistake.chapter} onChange={(e) => upd("chapter", e.target.value)} /></label>
      <label>Ce s-a intamplat<textarea rows="3" value={mistake.summary} onChange={(e) => upd("summary", e.target.value)} /></label>
      <label>Corectie<textarea rows="3" value={mistake.correction} onChange={(e) => upd("correction", e.target.value)} /></label>
      <button className="ghost-button small" type="button" onClick={() => dispatch({ type: ACTIONS.REMOVE_MISTAKE, id: mistake.id })}>
        Sterge
      </button>
    </div>
  );
}

export function MistakeLog({ state, dispatch }) {
  return (
    <section className="card large-card">
      <div className="section-header">
        <h3>Mistake Log</h3>
        <p>Dupa fiecare sesiune, lasa urme clare: ce s-a rupt si cum repari.</p>
      </div>
      <div className="toolbar-row">
        <button className="primary-button" type="button" onClick={() => dispatch({ type: ACTIONS.ADD_MISTAKE })}>
          Adauga greseala
        </button>
      </div>
      <div className="mistake-list">
        {state.mistakes.length === 0 && (
          <div className="empty-card">Inca nu ai greseli salvate. Bravo!</div>
        )}
        {state.mistakes.map((m) => (
          <MistakeEditor key={m.id} mistake={m} dispatch={dispatch} />
        ))}
      </div>
    </section>
  );
}
