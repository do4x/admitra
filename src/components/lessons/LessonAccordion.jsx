import { useState } from "react";
import { ChapterTheoryView } from "./ChapterTheoryView.jsx";

export function LessonAccordion({ lesson }) {
  const [open, setOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);

  const sections = lesson.sections ?? [];
  const activeSection = sections.find((s) => s.id === activeSectionId) ?? null;

  return (
    <div className={`lesson-accordion${open ? " open" : ""}`}>
      <button
        type="button"
        className="lesson-header"
        onClick={() => setOpen((p) => !p)}
      >
        <span className="lesson-name">{lesson.name}</span>
        <span className="lesson-meta">
          <span className="lesson-count">{sections.length} capitole</span>
          <span className={`lesson-chevron${open ? " open" : ""}`}>&#9662;</span>
        </span>
      </button>

      {open && (
        <div className="lesson-content">
          <div className="lesson-sections">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`lesson-section-item${activeSectionId === section.id ? " active" : ""}`}
                onClick={() =>
                  setActiveSectionId((prev) => (prev === section.id ? null : section.id))
                }
              >
                <span className="section-id">{section.id}</span>
                <span className="section-name">{section.name}</span>
              </button>
            ))}
          </div>

          {activeSection && <ChapterTheoryView section={activeSection} />}
        </div>
      )}
    </div>
  );
}
