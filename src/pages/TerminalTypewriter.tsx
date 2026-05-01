import { Terminal } from "../components/terminal-typewriter/Terminal";

const LINES = [
  { prompt: "whoami", output: "Frontend Developer" },
  { prompt: "skills --list", output: "React · TypeScript · Node" },
  { prompt: "cat mission.txt", output: "Build things that matter." },
];

export default function TerminalTypewriter() {
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
      <Terminal lines={LINES} password="sudo" />
    </div>
  );
}