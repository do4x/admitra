import { MathText } from "../ui/MathText.jsx";

export function TrueFalseQ({ question, onAnswer, disabled, selectedAnswer, isCorrect }) {
  const renderBtn = (value, label) => {
    let cls = "tf-btn";
    if (disabled) {
      if (value === question.correct) cls += " correct";
      else if (value === selectedAnswer) cls += " incorrect";
    }
    return (
      <button
        key={label}
        type="button"
        className={cls}
        onClick={() => !disabled && onAnswer(value)}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="q-prompt-wrap">
      <MathText as="p" className="q-prompt">{question.statement}</MathText>
      <div className="tf-grid">
        {renderBtn(true, "Adevarat")}
        {renderBtn(false, "Fals")}
      </div>
    </div>
  );
}
