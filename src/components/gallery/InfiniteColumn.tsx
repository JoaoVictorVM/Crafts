import { useCallback, useState } from "react";
import { Card } from "./Card";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { COLUMN_SPEEDS } from "../../data/design-systems";
import type { DesignSystem } from "../../data/design-systems";

interface InfiniteColumnProps {
  systems: DesignSystem[];
  colIndex: number;
}

export function InfiniteColumn({ systems, colIndex }: InfiniteColumnProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { trackRef, pause, resume } = useInfiniteScroll({
    speed: COLUMN_SPEEDS[colIndex],
  });

  // Duplica os itens para o loop infinito perfeito
  const items = [...systems, ...systems];

  const handleHoverStart = useCallback(() => {
    pause();
    setIsHovered(true);
  }, [pause]);

  const handleHoverEnd = useCallback(() => {
    resume();
    setIsHovered(false);
  }, [resume]);

  return (
    <div className="relative overflow-hidden h-full">
      <div
        ref={trackRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          willChange: "transform",
        }}
      >
        {items.map((system, idx) => (
          <Card
            key={`col${colIndex}-${system.id}-${idx}`}
            system={system}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        ))}
      </div>
    </div>
  );
}
