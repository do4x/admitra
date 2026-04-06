import { useState } from "react";

const TYPE_LABELS = {
  teorie: "Teorie",
  executie: "Executie",
  viteza: "Viteza",
  atentie: "Atentie",
  strategie: "Strategie"
};

function formatDate(iso) {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("ro-RO", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
}

export function MistakeCard({ mistake, onEdit, onDelete }) {
  const [zoomed, setZoomed] = useState(null);

  const typeLabel = TYPE_LABELS[mistake.type] ?? mistake.type ?? "—";
  const hasImages = mistake.problemImage || mistake.solutionImage;

  return (
    <article className="mistake-card-v2">
      <header className="mistake-card-head">
        <div className="mistake-card-meta">
          <span className="mistake-date-badge">{formatDate(mistake.date)}</span>
          <span className={`mistake-type-tag type-${mistake.type ?? "unknown"}`}>
            {typeLabel}
          </span>
          <span className="mistake-discipline">
            {mistake.discipline ?? "—"}
          </span>
        </div>
        <div className="mistake-card-actions">
          <button type="button" className="ghost-button small" onClick={onEdit}>
            Editeaza
          </button>
          <button type="button" className="ghost-button small danger" onClick={onDelete}>
            Sterge
          </button>
        </div>
      </header>

      {mistake.chapter && (
        <div className="mistake-chapter">{mistake.chapter}</div>
      )}

      {hasImages && (
        <div className="mistake-thumbs">
          {mistake.problemImage && (
            <button
              type="button"
              className="image-thumbnail"
              onClick={() => setZoomed(mistake.problemImage)}
              aria-label="Vezi imaginea problemei"
            >
              <img src={mistake.problemImage} alt="problema" />
              <span className="image-thumbnail-tag">Problema</span>
            </button>
          )}
          {mistake.solutionImage && (
            <button
              type="button"
              className="image-thumbnail"
              onClick={() => setZoomed(mistake.solutionImage)}
              aria-label="Vezi imaginea solutiei"
            >
              <img src={mistake.solutionImage} alt="solutie" />
              <span className="image-thumbnail-tag">Solutie</span>
            </button>
          )}
        </div>
      )}

      {mistake.summary && (
        <div className="mistake-text-block">
          <span className="mistake-text-label">Ce s-a intamplat</span>
          <p>{mistake.summary}</p>
        </div>
      )}

      {mistake.correction && (
        <div className="mistake-text-block">
          <span className="mistake-text-label">Corectie</span>
          <p>{mistake.correction}</p>
        </div>
      )}

      {zoomed && (
        <div
          className="image-lightbox"
          onClick={() => setZoomed(null)}
          role="presentation"
        >
          <img src={zoomed} alt="zoom" />
        </div>
      )}
    </article>
  );
}
