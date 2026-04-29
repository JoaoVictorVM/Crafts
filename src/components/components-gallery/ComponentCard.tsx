import { useRef } from "react";
import type { ComponentItem } from "../../data/components";

interface ComponentCardProps {
  item: ComponentItem;
}

export function ComponentCard({ item }: ComponentCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="component-card-wrapper">
      <article className="component-card">
        <div
          className="component-card__media"
          style={{ aspectRatio: item.aspectRatio }}
        >
          <video
            ref={videoRef}
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className="component-card__video"
          />
          <div className="component-card__name-overlay">
            <span style={{ color: item.nameColor }}>{item.name}</span>
          </div>
        </div>
      </article>

      <a
        href={`/components/${item.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="component-card__btn"
      >
        Ver componente
      </a>
    </div>
  );
}
