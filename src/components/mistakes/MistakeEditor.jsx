import { useState } from "react";
import blueprint from "../../../data/exam_blueprint.json";
import { CustomSelect } from "../ui/CustomSelect.jsx";
import { ImageUploader } from "./ImageUploader.jsx";

const DISCIPLINES = ["Matematica", "Informatica"];

const TYPE_OPTIONS = blueprint.error_labels.map((l) => ({
  value: l,
  label: l.charAt(0).toUpperCase() + l.slice(1)
}));

export function MistakeEditor({ initial, onSave, onCancel }) {
  const [draft, setDraft] = useState(() => ({
    date: initial?.date ?? new Date().toISOString().slice(0, 10),
    discipline: initial?.discipline ?? "Matematica",
    chapter: initial?.chapter ?? "",
    type: initial?.type ?? "teorie",
    summary: initial?.summary ?? "",
    correction: initial?.correction ?? "",
    problemImage: initial?.problemImage ?? null,
    solutionImage: initial?.solutionImage ?? null
  }));

  const setField = (field, value) =>
    setDraft((prev) => ({ ...prev, [field]: value }));

  const handleSave = () => onSave(draft);

  return (
    <div className="mistake-editor card">
      <div className="mistake-editor-row">
        <label className="mistake-field">
          <span>Data</span>
          <input
            type="date"
            value={draft.date}
            onChange={(e) => setField("date", e.target.value)}
          />
        </label>

        <div className="mistake-field">
          <span>Disciplina</span>
          <div className="pill-toggle-group">
            {DISCIPLINES.map((d) => (
              <button
                key={d}
                type="button"
                className={`pill-toggle${draft.discipline === d ? " active" : ""}`}
                onClick={() => setField("discipline", d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mistake-field">
          <span>Tip greseala</span>
          <CustomSelect
            value={draft.type}
            options={TYPE_OPTIONS}
            onChange={(val) => setField("type", val)}
          />
        </div>
      </div>

      <label className="mistake-field">
        <span>Capitol</span>
        <input
          type="text"
          value={draft.chapter}
          onChange={(e) => setField("chapter", e.target.value)}
          placeholder="ex: Algebra, Functii, Vectori..."
        />
      </label>

      <div className="mistake-editor-row two">
        <ImageUploader
          label="Imagine problema"
          value={draft.problemImage}
          onChange={(val) => setField("problemImage", val)}
        />
        <ImageUploader
          label="Imagine solutie"
          value={draft.solutionImage}
          onChange={(val) => setField("solutionImage", val)}
        />
      </div>

      <label className="mistake-field">
        <span>Ce s-a intamplat</span>
        <textarea
          rows={3}
          value={draft.summary}
          onChange={(e) => setField("summary", e.target.value)}
          placeholder="Descrie pe scurt unde s-a rupt rationamentul..."
        />
      </label>

      <label className="mistake-field">
        <span>Corectie</span>
        <textarea
          rows={3}
          value={draft.correction}
          onChange={(e) => setField("correction", e.target.value)}
          placeholder="Cum repari aceasta greseala data viitoare..."
        />
      </label>

      <div className="mistake-editor-actions">
        <button type="button" className="ghost-button" onClick={onCancel}>
          Anuleaza
        </button>
        <button type="button" className="primary-button" onClick={handleSave}>
          Salveaza
        </button>
      </div>
    </div>
  );
}
