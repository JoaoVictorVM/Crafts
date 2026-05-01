import { useState } from "react";

interface FlipCardProps {
  title: string;
  tags: string[];
  description: string;
}

export function FlipCard({ title, tags, description }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px", width: 240, height: 160, cursor: "default" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12,
            padding: "20px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                marginBottom: 6,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.3,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.28)",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.02em",
              }}
            >
              {tags.join(" · ")}
            </p>
          </div>
          <p
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.16)",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.08em",
            }}
          >
            Passe o mouse para ver →
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #12122a 0%, #1a1030 100%)",
            border: "1px solid rgba(139,92,246,0.18)",
            borderRadius: 12,
            padding: "20px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              lineHeight: 1.65,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}