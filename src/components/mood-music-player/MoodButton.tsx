import type { ReactNode } from "react";

interface MoodButtonProps {
  icon: ReactNode;
  label: string;
  accentColor: string;
  isActive: boolean;
  onClick: () => void;
}

export function MoodButton({ icon, label, accentColor, isActive, onClick }: MoodButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "16px 12px",
        background: isActive ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isActive ? accentColor + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 10,
        cursor: "pointer",
        transition: "all 0.2s ease",
        flex: 1,
        minWidth: 0,
        color: isActive ? accentColor : "rgba(255,255,255,0.45)",
      }}
    >
      {icon}
      <span
        style={{
          fontSize: 11,
          color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.04em",
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </span>
    </button>
  );
}