import { useMemo, useState } from "react";
import blueprint from "../../../data/exam_blueprint.json";
import { ACTIONS } from "../../hooks/useAppState.js";
import { CustomSelect } from "../ui/CustomSelect.jsx";
import { MistakeCard } from "./MistakeCard.jsx";
import { MistakeEditor } from "./MistakeEditor.jsx";

const DISCIPLINE_FILTER_OPTIONS = [
  { value: "all", label: "Toate disciplinele" },
  { value: "Matematica", label: "Matematica" },
  { value: "Informatica", label: "Informatica" }
];

const TYPE_FILTER_OPTIONS = [
  { value: "all", label: "Toate tipurile" },
  ...blueprint.error_labels.map((l) => ({
    value: l,
    label: l.charAt(0).toUpperCase() + l.slice(1)
  }))
];

export function MistakesPage({ state, dispatch }) {
  const [editing, setEditing] = useState(null); // { mode: "new" } | { mode: "edit", id }
  const [disciplineFilter, setDisciplineFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const mistakes = state.mistakes ?? [];

  const filtered = useMemo(() => {
    return mistakes.filter((m) => {
      if (disciplineFilter !== "all" && m.discipline !== disciplineFilter) return false;
      if (typeFilter !== "all" && m.type !== typeFilter) return false;
      return true;
    });
  }, [mistakes, disciplineFilter, typeFilter]);

  const startNew = () => setEditing({ mode: "new" });
  const startEdit = (id) => setEditing({ mode: "edit", id });
  const cancel = () => setEditing(null);

  const handleSave = (draft) => {
    if (editing?.mode === "new") {
      dispatch({ type: ACTIONS.ADD_MISTAKE, mistake: draft });
    } else if (editing?.mode === "edit") {
      dispatch({ type: ACTIONS.UPDATE_MISTAKE, id: editing.id, patch: draft });
    }
    setEditing(null);
  };

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.REMOVE_MISTAKE, id });
  };

  const editingMistake =
    editing?.mode === "edit"
      ? mistakes.find((m) => m.id === editing.id) ?? null
      : null;

  return (
    <section className="mistakes-page">
      <header className="mistakes-page-header">
        <div>
          <h2>Jurnal de greseli</h2>
          <p>Fiecare greseala este o lectie pe care nu o mai uiti. Salveaza ce s-a rupt si cum o repari.</p>
        </div>
        {!editing && (
          <button type="button" className="primary-button" onClick={startNew}>
            + Adauga greseala
          </button>
        )}
      </header>

      {editing ? (
        <MistakeEditor
          initial={editingMistake}
          onSave={handleSave}
          onCancel={cancel}
        />
      ) : (
        <>
          <div className="mistakes-filter-row">
            <CustomSelect
              value={disciplineFilter}
              options={DISCIPLINE_FILTER_OPTIONS}
              onChange={setDisciplineFilter}
            />
            <CustomSelect
              value={typeFilter}
              options={TYPE_FILTER_OPTIONS}
              onChange={setTypeFilter}
            />
            <span className="mistakes-count">
              {filtered.length} {filtered.length === 1 ? "greseala" : "greseli"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-card">
              {mistakes.length === 0
                ? "Inca nu ai greseli salvate. Cand apare prima, noteaz-o aici."
                : "Niciun rezultat pentru filtrele selectate."}
            </div>
          ) : (
            <div className="mistakes-grid">
              {filtered.map((m) => (
                <MistakeCard
                  key={m.id}
                  mistake={m}
                  onEdit={() => startEdit(m.id)}
                  onDelete={() => handleDelete(m.id)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
