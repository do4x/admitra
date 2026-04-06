import { useState } from "react";

export function CodeTraceQ({ question, onAnswer, disabled, isCorrect }) {
  const [input, setInput] = useState("");

  const submit = () => {
    if (!input.trim()) return;
    onAnswer(input.trim());
  };

  return (
    <div className="q-prompt-wrap">
      <p className="q-prompt">{question.prompt}</p>
      <pre className="code-block"><code>{question.code}</code></pre>
      <div className="fill-row">
        <input
          type="text"
          className={`fill-input${disabled ? (isCorrect ? " correct" : " incorrect") : ""}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !disabled && submit()}
          disabled={disabled}
          placeholder="Ce afiseaza programul?"
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
