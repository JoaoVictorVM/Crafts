interface SkillBarProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

export function SkillBar({ name, value, onChange }: SkillBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <span
        style={{
          width: 130,
          fontSize: 13,
          color: "rgba(255,255,255,0.72)",
          fontFamily: "'DM Sans', sans-serif",
          flexShrink: 0,
        }}
      >
        {name}
      </span>

      <div
        style={{
          flex: 1,
          height: 4,
          background: "rgba(255,255,255,0.07)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: "linear-gradient(90deg, #5B21B6, #8B5CF6)",
            borderRadius: 2,
            transition: "width 0.06s linear",
          }}
        />
      </div>

      <span
        style={{
          width: 38,
          fontSize: 12,
          color: "#8B5CF6",
          fontFamily: "'DM Mono', monospace",
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {value}%
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: 72,
          accentColor: "#7C3AED",
          cursor: "pointer",
          flexShrink: 0,
        }}
      />
    </div>
  );
}