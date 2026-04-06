import { useMemo } from "react";
import { buildMetrics, buildWeeklySummary, chapterPercent } from "../../state/selectors.js";

const weekPattern = [
  "Ziua 1: matematica fundament + informatica fundament",
  "Ziua 2: matematica probleme grele + informatica probleme grele",
  "Ziua 3: antrenament cronometrat mixt",
  "Ziua 4: reparatie pe 2 capitole slabe",
  "Ziua 5: admitere-focused, dificultate mare",
  "Ziua 6: Bac-focused, viteza si acuratete",
  "Ziua 7: evaluare saptamanala completa + recalibrare"
];

export function WeeklyCoach({ state }) {
  const metrics = useMemo(() => buildMetrics(state), [state]);
  const summary = useMemo(() => buildWeeklySummary(state, metrics), [state, metrics]);

  return (
    <section className="card large-card">
      <div className="section-header">
        <h3>Weekly Coach</h3>
        <p>Fisa saptamanala e construita direct din diagnosticul tau.</p>
      </div>
      <div className="weekly-layout">
        <div className="summary-card">
          <span className="section-label">Scoruri estimate</span>
          {summary.estimates.map(([label, value]) => (
            <div className="summary-row" key={label}>
              <span>{label}</span>
              <strong>{value}/10</strong>
            </div>
          ))}
        </div>
        <div className="summary-card">
          <span className="section-label">Prioritate mare</span>
          {summary.priority.map((c) => (
            <div className="summary-row" key={c.id}>
              <span>{c.name}</span>
              <strong>{chapterPercent(c).toFixed(0)}%</strong>
            </div>
          ))}
        </div>
        <div className="summary-card">
          <span className="section-label">Mentenanta</span>
          {summary.maintenance.length === 0 && <p>Niciun capitol nu este inca in mentenanta.</p>}
          {summary.maintenance.map((c) => (
            <div className="summary-row" key={c.id}>
              <span>{c.name}</span>
              <strong>{chapterPercent(c).toFixed(0)}%</strong>
            </div>
          ))}
        </div>
        <div className="summary-card full">
          <span className="section-label">Ritmul saptamanii</span>
          <div className="allocation-bar">
            <div className="allocation-math" style={{ width: `${summary.mathShare}%` }}>
              Matematica {summary.mathShare}%
            </div>
            <div className="allocation-info" style={{ width: `${summary.infoShare}%` }}>
              Informatica {summary.infoShare}%
            </div>
          </div>
          <ul className="week-list">
            {weekPattern.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
