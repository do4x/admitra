import { useState } from "react";
import blueprint from "../../../data/exam_blueprint.json";
import { LessonAccordion } from "./LessonAccordion.jsx";

export function LessonsPage() {
  const [subject, setSubject] = useState("math");
  const lessons = blueprint.lessons?.[subject] ?? [];

  return (
    <div className="lessons-page">
      <header className="lessons-header">
        <h1>Lecții</h1>
        <p className="lessons-subtitle">
          Teoria organizată după programa oficială Politehnica. Apasă o lecție pentru a vedea capitolele.
        </p>
        <div className="lessons-subject-switch">
          <button
            type="button"
            className={`subject-pill${subject === "math" ? " active" : ""}`}
            onClick={() => setSubject("math")}
          >
            Matematică
          </button>
          <button
            type="button"
            className={`subject-pill${subject === "informatics" ? " active" : ""}`}
            onClick={() => setSubject("informatics")}
          >
            Informatică
          </button>
        </div>
      </header>

      <div className="lessons-list">
        {lessons.map((lesson) => (
          <LessonAccordion key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
