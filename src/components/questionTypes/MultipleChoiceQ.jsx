import { MathText } from "../ui/MathText.jsx";

const LABELS = ["A", "B", "C", "D"];

export function MultipleChoiceQ({ question, onAnswer, disabled, selectedAnswer, isCorrect }) {
  return (
    <div className="q-prompt-wrap">
      <MathText as="p" className="q-prompt">{question.prompt}</MathText>
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
              <MathText as="span" className="option-text">{opt}</MathText>
            </button>
          );
        })}
      </div>
    </div>
  );
}
