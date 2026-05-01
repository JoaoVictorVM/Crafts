import { useState, useRef, useCallback } from "react";

export interface HoverListItem {
  index: string;
  name: string;
  tags: string;
  image?: string;
  caption?: string;
}

interface ImageCursorListProps {
  items: HoverListItem[];
}

export function ImageCursorList({ items }: ImageCursorListProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const hovered = hoveredIdx !== null ? items[hoveredIdx] : null;

  // Keep image inside container horizontally
  const imgWidth = 172;
  const imgHeight = 110;
  const containerWidth = 500;

  const imgLeft = Math.min(pos.x + 20, containerWidth - imgWidth - 4);
  const imgTop = pos.y - imgHeight - 10;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIdx(null)}
      style={{ position: "relative", width: 500, fontFamily: "'DM Sans', sans-serif" }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIdx(i)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 4px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.18)",
                fontFamily: "'DM Mono', monospace",
                minWidth: 20,
                flexShrink: 0,
              }}
            >
              {item.index}
            </span>
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: hoveredIdx === i ? "#8B5CF6" : "rgba(255,255,255,0.85)",
                  transition: "color 0.2s ease",
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.26)",
                  fontFamily: "'DM Mono', monospace",
                  marginTop: 3,
                  letterSpacing: "0.02em",
                }}
              >
                {item.tags}
              </div>
            </div>
          </div>

          <span
            style={{
              color: "#8B5CF6",
              opacity: hoveredIdx === i ? 1 : 0,
              transition: "opacity 0.2s ease",
              fontSize: 16,
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            →
          </span>
        </div>
      ))}

      {/* Floating image follows cursor */}
      <div
        style={{
          position: "absolute",
          left: imgLeft,
          top: imgTop,
          pointerEvents: "none",
          zIndex: 10,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      >
        <div
          style={{
            width: imgWidth,
            height: imgHeight,
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
          }}
        >
          {hovered?.image ? (
            <img
              src={hovered.image}
              alt={hovered.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #0f0f20 0%, #1a1030 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "8px 12px",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(139,92,246,0.75)",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {hovered?.caption ?? hovered?.tags.toLowerCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}