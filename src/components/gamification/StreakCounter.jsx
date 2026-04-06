export function StreakCounter({ streak, atRisk }) {
  return (
    <div className={`streak-wrap${atRisk ? " at-risk" : ""}`} title={`${streak} zile la rand`}>
      <span className="streak-flame">{atRisk ? "🌧" : "🔥"}</span>
      <span className="streak-count">{streak}</span>
    </div>
  );
}
