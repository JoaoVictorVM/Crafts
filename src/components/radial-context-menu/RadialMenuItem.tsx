import type { ReactNode } from "react";

interface RadialMenuItemProps {
  icon: ReactNode;
  label: string;
  color: string;
  href: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

export function RadialMenuItem({ icon, label, color, href, style, onClick }: RadialMenuItemProps) {
  return (
    <a
      href={href || "#"}
      onClick={(e) => {
        e.stopPropagation();
        if (!href) e.preventDefault();
        onClick();
      }}
      style={{
        position: "absolute",
        width: 72,
        height: 72,
        borderRadius: 12,
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        cursor: "pointer",
        zIndex: 20,
        textDecoration: "none",
        ...style,
      }}
    >
      <span style={{ color }}>{icon}</span>
      <span
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </span>
    </a>
  );
}