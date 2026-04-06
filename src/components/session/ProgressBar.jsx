export function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="session-progress-bar">
      <div className="session-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
