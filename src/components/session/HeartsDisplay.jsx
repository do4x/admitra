const MAX_HEARTS = 5;

export function HeartsDisplay({ hearts }) {
  return (
    <div className="hearts-row">
      {Array.from({ length: MAX_HEARTS }, (_, i) => (
        <span key={i} className={`heart-icon${i < hearts ? "" : " lost"}`}>
          {i < hearts ? "❤" : "🖤"}
        </span>
      ))}
    </div>
  );
}
