import { useRef } from "react";
import type { DesignSystem } from "../../data/design-systems";

interface CardProps {
  system: DesignSystem;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function Card({ system, onHoverStart, onHoverEnd }: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    window.open(system.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="ds-card"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={handleClick}
      aria-label={`Ver ${system.name} de ${system.company}`}
    >
      {/* Fallback bg quando não há vídeo */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${system.accentColor}18 0%, #0d0d0d 65%)`,
        }}
      />

      {/* Vídeo */}
      <video
        ref={videoRef}
        src={system.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Linha accent no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, ${system.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Badge empresa */}
      <div className="absolute top-3 left-3 z-10">
        <span className="ds-badge" style={{ color: system.accentColor }}>
          {system.company}
        </span>
      </div>

      {/* Label inferior — aparece no hover */}
      <div className="card-label">
        <p className="card-label__eyebrow">Ver design system</p>
        <p className="card-label__title">{system.name}</p>
        <div className="card-label__tags">
          {system.tags.map((tag) => (
            <span
              key={tag}
              className="ds-tag"
              style={{
                color: system.accentColor,
                backgroundColor: `${system.accentColor}14`,
                borderColor: `${system.accentColor}28`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
