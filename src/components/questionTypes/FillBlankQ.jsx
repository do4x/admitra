import { useState } from "react";
import { MathText } from "../ui/MathText.jsx";

export function FillBlankQ({ question, onAnswer, disabled, isCorrect }) {
  const [input, setInput] = useState("");

  const submit = () => {
    if (!input.trim()) return;
    onAnswer(input.trim());
  };

  return (
    <div className="q-prompt-wrap">
      <MathText as="p" className="q-prompt">{question.prompt}</MathText>
      <div className="fill-row">
        <input
          type="text"
          className={`fill-input${disabled ? (isCorrect ? " correct" : " incorrect") : ""}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !disabled && submit()}
          disabled={disabled}
          placeholder="Raspunsul tau..."
          autoFocus
        />
        {!disabled && (
          <button type="button" className="primary-button" onClick={submit}>
            Verifica
          </button>
        )}
      </div>
    </div>
  );
}
