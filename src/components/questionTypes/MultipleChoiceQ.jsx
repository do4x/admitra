const LABELS = ["A", "B", "C", "D"];

export function MultipleChoiceQ({ question, onAnswer, disabled, selectedAnswer, isCorrect }) {
  return (
    <div className="q-prompt-wrap">
      <p className="q-prompt">{question.prompt}</p>
      <div className="options-grid">
        {question.options.map((opt, idx) => {
          let cls = "option-btn";
          if (disabled) {
            if (idx === question.correctIndex) cls += " correct";
            else if (idx === selectedAnswer) cls += " incorrect";
          }
          return (
            <button
              key={idx}
              type="button"
              className={cls}
              onClick={() => !disabled && onAnswer(idx)}
              disabled={disabled}
            >
              <span className="option-label">{LABELS[idx]}</span>
              <span className="option-text">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
