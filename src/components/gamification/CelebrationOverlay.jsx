import { useEffect, useState } from "react";

const COLORS = ["#ffb451", "#68b9ff", "#78f0d1", "#ff6d78", "#5fe0a3"];

function makeParticles(n = 40) {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 1.2 + Math.random() * 0.8,
    color: COLORS[i % COLORS.length],
    size: 6 + Math.random() * 8
  }));
}

export function CelebrationOverlay({ show, onDone }) {
  const [particles] = useState(() => makeParticles(40));

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [show, onDone]);

  if (!show) return null;

  return (
    <div className="celebration-overlay" onClick={onDone}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: p.size,
            height: p.size
          }}
        />
      ))}
      <div className="celebration-text">
        <span>🎉</span>
        <p>Sesiune perfecta!</p>
      </div>
    </div>
  );
}
