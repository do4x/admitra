export function AnswerFeedback({ isCorrect, explanation, onNext }) {
  return (
    <div className={`feedback-panel${isCorrect ? " correct" : " incorrect"}`}>
      <div className="feedback-icon">{isCorrect ? "✓" : "✗"}</div>
      <div className="feedback-body">
        <p className="feedback-label">{isCorrect ? "Corect!" : "Gresit"}</p>
        <p className="feedback-explanation">{explanation}</p>
      </div>
      <button type="button" className="primary-button feedback-next-btn" onClick={onNext}>
        Continua
      </button>
    </div>
  );
}
