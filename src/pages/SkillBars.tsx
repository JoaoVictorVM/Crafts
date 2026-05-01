import { SkillBars } from "../components/skill-bars/SkillBars";

const SKILLS = [
  { name: "React", initialValue: 31 },
  { name: "TypeScript", initialValue: 67 },
  { name: "Node.js", initialValue: 100 },
  { name: "CSS / Tailwind", initialValue: 60 },
  { name: "GraphQL", initialValue: 100 },
];

export default function SkillBarsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <SkillBars skills={SKILLS} />
    </div>
  );
}