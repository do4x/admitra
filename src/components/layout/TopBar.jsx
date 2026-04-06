import { XPBar } from "../gamification/XPBar.jsx";
import { StreakCounter } from "../gamification/StreakCounter.jsx";
import { useStreak } from "../../hooks/useStreak.js";

export function TopBar({ gamification, activeTab, onTabChange, onReset }) {
  const { currentStreak, isStreakAtRisk } = useStreak(gamification);

  const tabs = [
    ["skillTree", "Lectii"],
    ["statistics", "Statistici"],
    ["weekly", "Planner"],
    ["daily", "Brief Zilnic"],
    ["mistakes", "Greseli"]
  ];

  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <span className="brand-dot" />
        <span className="brand-name">Bac Study Coach</span>
      </div>

      <div className="nav-tabs">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={activeTab === key ? "nav-tab active" : "nav-tab"}
            onClick={() => onTabChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="topbar-gamification">
        <StreakCounter streak={currentStreak} atRisk={isStreakAtRisk} />
        <XPBar xpToday={gamification.xpToday} dailyXpGoal={gamification.dailyXpGoal} />
        <button className="reset-btn" type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </nav>
  );
}
