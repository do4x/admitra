import { ProgressBar } from "./ProgressBar.jsx";
import { HeartsDisplay } from "./HeartsDisplay.jsx";
import { QuestionCard } from "./QuestionCard.jsx";
import { AnswerFeedback } from "./AnswerFeedback.jsx";
import { SessionResults } from "./SessionResults.jsx";

export function SessionRunner({ session, onSubmitAnswer, onNextQuestion, onFinish, chapterName }) {
  if (session.phase === "results") {
    return (
      <SessionResults
        session={session}
        onFinish={onFinish}
        chapterName={chapterName}
      />
    );
  }

  const question = session.questions[session.currentIndex];
  const total = session.questions.length;
  const current = session.currentIndex;

  return (
    <div className="session-shell">
      <div className="session-topbar">
        <HeartsDisplay hearts={session.hearts} />
        <ProgressBar current={current} total={total} />
        <span className="session-counter">{current + 1}/{total}</span>
      </div>

      <div className="session-body">
        <QuestionCard
          question={question}
          onAnswer={onSubmitAnswer}
          disabled={session.phase === "feedback"}
          selectedAnswer={session.selectedAnswer}
          isCorrect={session.isCorrect}
        />
      </div>

      {session.phase === "feedback" && (
        <AnswerFeedback
          isCorrect={session.isCorrect}
          explanation={question.explanation}
          onNext={onNextQuestion}
        />
      )}
    </div>
  );
}
