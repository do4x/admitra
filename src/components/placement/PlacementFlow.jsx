import { useState, useCallback } from "react";
import { getPlacementQuestions } from "../../data/questionRegistry.js";
import { evaluateAnswer } from "../../utils/evaluateAnswer.js";
import { QuestionCard } from "../session/QuestionCard.jsx";
import { AnswerFeedback } from "../session/AnswerFeedback.jsx";
import { PlacementResults } from "./PlacementResults.jsx";
import blueprint from "../../../data/exam_blueprint.json";

const ALL_CHAPTER_IDS = [
  ...blueprint.math_topics.map((t) => t.id),
  ...blueprint.informatics_topics.map((t) => t.id)
];

function determineLevel(correct, asked) {
  if (asked <= 1) return correct === 0 ? "beginner" : "intermediate";
  const ratio = correct / asked;
  if (ratio < 0.5) return "beginner";
  if (ratio < 1.0) return "intermediate";
  return "advanced";
}

export function PlacementFlow({ onComplete }) {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [questions, setQuestions] = useState(() => getPlacementQuestions(ALL_CHAPTER_IDS[0]));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [chapterCorrect, setChapterCorrect] = useState(0);
  const [chapterAsked, setChapterAsked] = useState(0);
  const [chapterResults, setChapterResults] = useState({});
  const [phase, setPhase] = useState("question"); // "question" | "feedback" | "done"
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const chapterId = ALL_CHAPTER_IDS[chapterIndex];
  const chapterName = [
    ...blueprint.math_topics,
    ...blueprint.informatics_topics
  ].find((t) => t.id === chapterId)?.name ?? chapterId;

  const advanceChapter = useCallback((results) => {
    const nextIdx = chapterIndex + 1;
    if (nextIdx >= ALL_CHAPTER_IDS.length) {
      onComplete(results);
      return;
    }
    const nextId = ALL_CHAPTER_IDS[nextIdx];
    const nextQs = getPlacementQuestions(nextId);
    setChapterIndex(nextIdx);
    setQuestions(nextQs);
    setQuestionIndex(0);
    setChapterCorrect(0);
    setChapterAsked(0);
    setCurrentQuestion(nextQs[0]);
    setPhase("question");
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [chapterIndex, onComplete]);

  const submitAnswer = useCallback((rawAnswer) => {
    const correct = evaluateAnswer(currentQuestion, rawAnswer);
    const newCorrect = chapterCorrect + (correct ? 1 : 0);
    const newAsked = chapterAsked + 1;

    setIsCorrect(correct);
    setSelectedAnswer(rawAnswer);
    setChapterCorrect(newCorrect);
    setChapterAsked(newAsked);
    setPhase("feedback");

    // Early exit: failed easy question → mark beginner, skip rest
    const isFirstQ = questionIndex === 0;
    if (isFirstQ && !correct) {
      const newResults = {
        ...chapterResults,
        [chapterId]: { correct: 0, asked: newAsked, determinedLevel: "beginner" }
      };
      setChapterResults(newResults);
      // Will advance on next click
    }
  }, [currentQuestion, chapterCorrect, chapterAsked, questionIndex, chapterId, chapterResults]);

  const nextStep = useCallback(() => {
    // Check if we should skip rest of chapter or move to next question
    const isFirstQ = questionIndex === 0 && !isCorrect; // failed easy
    const isDone = isFirstQ || questionIndex >= questions.length - 1;

    const level = determineLevel(chapterCorrect, chapterAsked);
    const newResults = {
      ...chapterResults,
      [chapterId]: { correct: chapterCorrect, asked: chapterAsked, determinedLevel: level }
    };
    setChapterResults(newResults);

    if (isDone) {
      advanceChapter(newResults);
    } else {
      const nextQIdx = questionIndex + 1;
      setQuestionIndex(nextQIdx);
      setCurrentQuestion(questions[nextQIdx]);
      setPhase("question");
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  }, [questionIndex, isCorrect, questions, chapterCorrect, chapterAsked, chapterId, chapterResults, advanceChapter]);

  if (phase === "done") {
    return <PlacementResults chapterResults={chapterResults} onContinue={() => onComplete(chapterResults)} />;
  }

  return (
    <div className="placement-flow">
      <div className="placement-progress-header">
        <span className="placement-chapter-indicator">
          Capitol {chapterIndex + 1} / {ALL_CHAPTER_IDS.length}
        </span>
        <strong className="placement-chapter-name-label">{chapterName}</strong>
        <div className="placement-dots">
          {ALL_CHAPTER_IDS.map((_, i) => (
            <span
              key={i}
              className={`placement-dot${i < chapterIndex ? " done" : i === chapterIndex ? " active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="placement-question-wrap">
        <QuestionCard
          question={currentQuestion}
          onAnswer={submitAnswer}
          disabled={phase === "feedback"}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect}
        />
      </div>

      {phase === "feedback" && (
        <AnswerFeedback
          isCorrect={isCorrect}
          explanation={currentQuestion.explanation}
          onNext={nextStep}
        />
      )}
    </div>
  );
}
