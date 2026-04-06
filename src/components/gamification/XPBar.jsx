export function XPBar({ xpToday, dailyXpGoal }) {
  const pct = Math.min(100, Math.round((xpToday / dailyXpGoal) * 100));
  return (
    <div className="xp-bar-wrap" title={`${xpToday}/${dailyXpGoal} XP azi`}>
      <span className="xp-bar-label">{xpToday} XP</span>
      <div className="xp-bar-track">
        <div className="xp-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="xp-bar-goal">{dailyXpGoal}</span>
    </div>
  );
}
