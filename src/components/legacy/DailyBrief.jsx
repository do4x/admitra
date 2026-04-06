import { useMemo } from "react";
import { buildDailyPlan } from "../../state/selectors.js";
import { ACTIONS } from "../../hooks/useAppState.js";

const dayThemes = { 1:"fundament",2:"probleme grele",3:"antrenament cronometrat mixt",4:"reparatie pe capitole slabe",5:"admitere-focused",6:"Bac-focused",7:"evaluare saptamanala" };

export function DailyBrief({ state, dispatch }) {
  const plan = useMemo(() => buildDailyPlan(state, state.selectedDay), [state]);

  return (
    <section className="card large-card">
      <div className="section-header">
        <h3>Daily Brief</h3>
        <p>Brief-ul zilnic extrage automat exercitii din capitolele tale slabe.</p>
      </div>
      <div className="day-picker">
        {Object.keys(dayThemes).map((day) => (
          <button
            key={day}
            type="button"
            className={Number(day) === state.selectedDay ? "day-chip active" : "day-chip"}
            onClick={() => dispatch({ type: ACTIONS.SET_SELECTED_DAY, day: Number(day) })}
          >
            Ziua {day}
          </button>
        ))}
      </div>
      <div className="brief-layout">
        <div className="brief-card full">
          <span className="section-label">{plan.title}</span>
          <h4>{plan.objective}</h4>
        </div>
        <div className="brief-card">
          <span className="section-label">Matematica (80-90 min)</span>
          <ol>{plan.math.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div className="brief-card">
          <span className="section-label">Informatica (60-75 min)</span>
          <ol>{plan.info.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div className="brief-card">
          <span className="section-label">Timp tinta</span>
          <ul>
            <li>Matematica: 80-90 min</li>
            <li>Informatica: 60-75 min</li>
            <li>Jurnal de greseli + recapitulare activa: 15-20 min</li>
          </ul>
        </div>
        <div className="brief-card full">
          <span className="section-label">Regula de promovare</span>
          <p>{plan.passRule}</p>
        </div>
      </div>
    </section>
  );
}
