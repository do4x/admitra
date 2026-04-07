import { MathText } from "../ui/MathText.jsx";

export function ChapterTheoryView({ section }) {
  const hasTheory = section.theory && section.theory.trim().length > 0;

  return (
    <div className="theory-block">
      <h3 className="theory-title">{section.name}</h3>
      {hasTheory ? (
        <div className="theory-body">
          <MathText as="div">{section.theory}</MathText>
        </div>
      ) : (
        <div className="theory-placeholder">
          Conținut în curând. (Adaugă teoria în <code>data/exam_blueprint.json</code> pentru capitolul <code>{section.id}</code>.)
        </div>
      )}
    </div>
  );
}
