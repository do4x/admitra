export function PlacementIntro({ onStart, onSkip }) {
  return (
    <div className="placement-intro">
      <div className="placement-intro-card card">
        <span className="eyebrow">Bun venit</span>
        <h2>Hai sa vedem de unde incepem!</h2>
        <p className="placement-desc">
          Voi pune aproximativ <strong>4 intrebari per capitol</strong> — matematica si informatica.
          Bazat pe raspunsurile tale, iti voi stabili nivelul de start pentru fiecare capitol.
        </p>
        <div className="placement-info-grid">
          <div className="placement-info-item">
            <span className="placement-info-icon">📚</span>
            <span>17 capitole</span>
          </div>
          <div className="placement-info-item">
            <span className="placement-info-icon">⏱</span>
            <span>~15-25 minute</span>
          </div>
          <div className="placement-info-item">
            <span className="placement-info-icon">🎯</span>
            <span>Adaptiv — se opreste mai devreme daca e clar</span>
          </div>
        </div>
        <div className="placement-btn-row">
          <button type="button" className="primary-button placement-start-btn" onClick={onStart}>
            Incepe testul de plasament
          </button>
          <button type="button" className="ghost-button" onClick={onSkip}>
            Sari peste — incepe de la nivel Incepator
          </button>
        </div>
      </div>
    </div>
  );
}
