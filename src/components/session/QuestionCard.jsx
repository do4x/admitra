import { MultipleChoiceQ } from "../questionTypes/MultipleChoiceQ.jsx";
import { TrueFalseQ } from "../questionTypes/TrueFalseQ.jsx";
import { FillBlankQ } from "../questionTypes/FillBlankQ.jsx";
import { CodeTraceQ } from "../questionTypes/CodeTraceQ.jsx";

const DIFFICULTY_LABEL = { easy: "Usor", medium: "Mediu", hard: "Dificil" };
const DIFFICULTY_CLASS = { easy: "diff-easy", medium: "diff-medium", hard: "diff-hard" };

export function QuestionCard({ question, onAnswer, disabled, selectedAnswer, isCorrect }) {
  const renderQuestion = () => {
    const props = { question, onAnswer, disabled, selectedAnswer, isCorrect };
    switch (question.type) {
      case "multiple_choice": return <MultipleChoiceQ {...props} />;
      case "true_false":      return <TrueFalseQ {...props} />;
      case "fill_blank":      return <FillBlankQ {...props} />;
      case "code_trace":      return <CodeTraceQ {...props} />;
      default: return <p>Tip de intrebare necunoscut: {question.type}</p>;
    }
  };

  return (
    <div className="question-card">
      <div className="question-meta">
        <span className={`diff-badge ${DIFFICULTY_CLASS[question.difficulty]}`}>
          {DIFFICULTY_LABEL[question.difficulty]}
        </span>
        <span className="xp-badge">+{question.xpValue} XP</span>
      </div>
      {renderQuestion()}
    </div>
  );
}
