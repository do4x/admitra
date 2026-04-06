import { useMemo } from "react";
import { buildMetrics, chapterPercent, chapterColor } from "../../state/selectors.js";
import { ACTIONS } from "../../hooks/useAppState.js";
import { CustomSelect } from "../ui/CustomSelect.jsx";

const weekPattern = [
  "Ziua 1: matematica fundament + informatica fundament",
  "Ziua 2: matematica probleme grele + informatica probleme grele",
  "Ziua 3: antrenament cronometrat mixt",
  "Ziua 4: reparatie pe 2 capitole slabe",
  "Ziua 5: admitere-focused, dificultate mare",
  "Ziua 6: Bac-focused, viteza si acuratete",
  "Ziua 7: evaluare saptamanala completa + recalibrare"
];

function StatCard({ label, value, tone }) {
  return (
    <article className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function SignalPanel({ title, chapters }) {
  return (
    <div className="signal-panel">
      <span className="section-label">{title}</span>
      <div className="chapter-stack">
        {chapters.map((c) => {
          const pct = chapterPercent(c);
          return (
            <div className="chapter-pill" key={c.id}>
              <div>
                <strong>{c.name}</strong>
                <p>{c.subject === "math" ? "Matematica" : "Informatica"}</p>
              </div>
              <span className={`color-dot ${chapterColor(pct)}`}>{pct.toFixed(0)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Statistics({ state, dispatch }) {
  const metrics = useMemo(() => buildMetrics(state), [state]);
  const { gamification } = state;

  return (
    <div className="content-col">
      <header className="hero-card">
        <div>
          <p className="eyebrow">Ciclul {state.profile.targetCycle}</p>
          <h2>{state.profile.studentName}</h2>
          <p className="hero-copy">
            {state.profile.daysPerWeek} zile pe saptamana, {state.profile.dailyHours} ore pe zi,
            track principal {state.profile.primaryTrack}.
          </p>
          <p className="hero-copy" style={{ marginTop: "0.5rem" }}>
            <span style={{ color: "var(--warm)" }}>🔥 {gamification.currentStreak} zile streak</span>
            &nbsp;·&nbsp;
            <span style={{ color: "var(--mint)" }}>{gamification.xpTotal} XP total</span>
          </p>
        </div>
        <div className="hero-stats">
          <StatCard label="Bac M1" value={metrics.bac} tone="warm" />
          <StatCard label="UB FMI" value={metrics.fmi} tone="cool" />
          <StatCard label="UPB ACS" value={metrics.upb} tone="mint" />
        </div>
      </header>

      <div className="panel-grid">
        <section className="card large-card">
          <div className="section-header">
            <h3>Semnal rapid</h3>
            <p>Cele mai slabe si cele mai puternice capitole, actualizate automat.</p>
          </div>
          <div className="signal-grid">
            <SignalPanel title="Capitole critice" chapters={metrics.weakest} />
            <SignalPanel title="Capitole forte" chapters={metrics.strongest} />
          </div>
        </section>

        <section className="card">
          <div className="section-header">
            <h3>Diagnosticul initial</h3>
            <p>Primele 3 zile iti fixeaza profilul personalizat.</p>
          </div>
          <div className="diagnostic-list">
            {state.diagnosticDays.map((entry) => (
              <div className="diagnostic-row" key={entry.day}>
                <div>
                  <span className="day-badge">Ziua {entry.day}</span>
                  <p>{entry.name}</p>
                </div>
                <CustomSelect
                  value={entry.status}
                  options={[
                    { value: "pending", label: "In asteptare" },
                    { value: "completed", label: "Finalizata" }
                  ]}
                  onChange={(val) => dispatch({ type: ACTIONS.UPDATE_DIAGNOSTIC, day: entry.day, status: val })}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="section-header">
            <h3>Distributia timpului</h3>
            <p>Se muta automat in functie de capitolele rosii.</p>
          </div>
          <div className="allocation-bar">
            <div className="allocation-math" style={{ width: `${metrics.mathShare}%` }}>
              Matematica {metrics.mathShare}%
            </div>
            <div className="allocation-info" style={{ width: `${metrics.infoShare}%` }}>
              Informatica {metrics.infoShare}%
            </div>
          </div>
          <ul className="week-list">
            {weekPattern.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}
