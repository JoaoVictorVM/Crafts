import { useMemo } from "react";
import { InfiniteColumn } from "./InfiniteColumn";
import { designSystems, COLUMN_ORDERS } from "../../data/design-systems";

export function GalleryGrid() {
  // Monta os arrays ordenados de cada coluna
  const columns = useMemo(
    () =>
      [0, 1, 2].map((colIdx) =>
        COLUMN_ORDERS[colIdx].map((i) => designSystems[i]),
      ),
    [],
  );

  return (
    <div className="gallery-grid">
      {columns.map((systems, colIdx) => (
        <InfiniteColumn key={colIdx} systems={systems} colIndex={colIdx} />
      ))}
    </div>
  );
}
