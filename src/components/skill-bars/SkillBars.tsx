import { useState } from "react";
import { SkillBar } from "./SkillBar";

export interface Skill {
  name: string;
  initialValue: number;
}

interface SkillBarsProps {
  skills: Skill[];
}

export function SkillBars({ skills }: SkillBarsProps) {
  const [values, setValues] = useState<number[]>(skills.map((s) => s.initialValue));

  const handleChange = (i: number, v: number) => {
    setValues((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  return (
    <div
      style={{
        width: 500,
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "20px 24px 8px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          value={values[i]}
          onChange={(v) => handleChange(i, v)}
        />
      ))}
    </div>
  );
}