import { calculateSessionXP } from "../../utils/xp.js";

export function SessionResults({ session, onFinish, chapterName }) {
  const total = session.answers.length;
  const correct = session.answers.filter((a) => a.correct).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const heartsLost = 5 - session.hearts;
  const failed = session.hearts <= 0;
  const xpEarned = calculateSessionXP(session.answers, heartsLost);

  return (
    <div className="session-results">
      <div className={`results-header${failed ? " failed" : " passed"}`}>
        <span className="results-icon">{failed ? "💔" : accuracy >= 80 ? "🏆" : "✅"}</span>
        <h2>{failed ? "Sesiune terminata" : "Bravo!"}</h2>
        <p className="results-chapter">{chapterName}</p>
      </div>

      <div className="results-stats">
        <div className="stat-pill">
          <span className="stat-pill-label">Corect</span>
          <strong className="stat-pill-value warm">{correct}/{total}</strong>
        </div>
        <div className="stat-pill">
          <span className="stat-pill-label">Acuratete</span>
          <strong className="stat-pill-value cool">{accuracy}%</strong>
        </div>
        <div className="stat-pill">
          <span className="stat-pill-label">XP castigat</span>
          <strong className="stat-pill-value mint">+{xpEarned}</strong>
        </div>
        <div className="stat-pill">
          <span className="stat-pill-label">Inimi pierdute</span>
          <strong className="stat-pill-value" style={{ color: heartsLost > 0 ? "var(--red)" : "var(--green)" }}>
            {heartsLost}
          </strong>
        </div>
      </div>

      <button type="button" className="primary-button results-done-btn" onClick={onFinish}>
        Continua
      </button>
    </div>
  );
}
