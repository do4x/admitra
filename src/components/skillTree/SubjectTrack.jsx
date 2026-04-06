import { SkillNode } from "./SkillNode.jsx";

export function SubjectTrack({ title, chapters, onStart, color }) {
  return (
    <div className={`subject-track track-${color}`}>
      <div className="track-header">
        <span className="track-title">{title}</span>
      </div>
      <div className="track-nodes">
        {chapters.map((chapter, i) => (
          <div key={chapter.id} className="track-node-wrap">
            <SkillNode chapter={chapter} onStart={onStart} />
            {i < chapters.length - 1 && (
              <div className={`track-connector${chapter.level === "locked" ? " locked-conn" : ""}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
