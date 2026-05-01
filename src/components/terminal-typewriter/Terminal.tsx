import { useState, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";

export interface TerminalLine {
  prompt: string;
  output?: string;
}

interface TerminalProps {
  lines: TerminalLine[];
  password: string;
}

type Phase = "typing-prompt" | "typing-output" | "user-input" | "result";

export function Terminal({ lines, password }: TerminalProps) {
  const [completedLines, setCompletedLines] = useState<TerminalLine[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-prompt");
  const [userInput, setUserInput] = useState("");
  const [authResult, setAuthResult] = useState<"confirmed" | "denied" | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "typing-prompt" && phase !== "typing-output") return;

    const currentLine = lines[lineIdx];
    if (!currentLine) {
      setPhase("user-input");
      return;
    }

    if (phase === "typing-prompt") {
      if (charIdx < currentLine.prompt.length) {
        const t = setTimeout(() => setCharIdx((c) => c + 1), 58);
        return () => clearTimeout(t);
      }
      if (currentLine.output !== undefined) {
        const t = setTimeout(() => {
          setPhase("typing-output");
          setCharIdx(0);
        }, 280);
        return () => clearTimeout(t);
      }
      setCompletedLines((prev) => [...prev, { prompt: currentLine.prompt }]);
      const next = lineIdx + 1;
      if (next < lines.length) {
        setLineIdx(next);
        setCharIdx(0);
      } else {
        setPhase("user-input");
      }
    }

    if (phase === "typing-output") {
      const output = currentLine.output ?? "";
      if (charIdx < output.length) {
        const t = setTimeout(() => setCharIdx((c) => c + 1), 42);
        return () => clearTimeout(t);
      }
      setCompletedLines((prev) => [
        ...prev,
        { prompt: currentLine.prompt, output: currentLine.output },
      ]);
      const next = lineIdx + 1;
      if (next < lines.length) {
        setLineIdx(next);
        setCharIdx(0);
        setPhase("typing-prompt");
      } else {
        setPhase("user-input");
      }
    }
  }, [phase, lineIdx, charIdx, lines]);

  useEffect(() => {
    if (phase === "user-input") {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [phase]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || phase !== "user-input") return;
    setAuthResult(userInput === password ? "confirmed" : "denied");
    setPhase("result");
  };

  const currentLine = lines[lineIdx];
  const promptSlice =
    phase === "typing-prompt" && currentLine
      ? currentLine.prompt.slice(0, charIdx)
      : null;
  const outputSlice =
    phase === "typing-output" && currentLine
      ? (currentLine.output ?? "").slice(0, charIdx)
      : null;

  return (
    <div
      style={{
        width: 500,
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#1c1c1e",
          height: 38,
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 7,
          position: "relative",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
        <span
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 11,
            color: "rgba(255,255,255,0.28)",
            letterSpacing: "0.04em",
          }}
        >
          bash
        </span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
        style={{
          background: "#0d0d0d",
          padding: "20px 22px 28px",
          minHeight: 220,
          maxHeight: 340,
          overflowY: "auto",
          cursor: "text",
          fontSize: 13,
          lineHeight: "1.8",
        }}
      >
        {completedLines.map((line, i) => (
          <div key={i}>
            <div>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>$ </span>
              <span style={{ color: "rgba(255,255,255,0.88)" }}>{line.prompt}</span>
            </div>
            {line.output !== undefined && (
              <div>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>→ </span>
                <span style={{ color: "rgba(255,255,255,0.48)" }}>{line.output}</span>
              </div>
            )}
          </div>
        ))}

        {promptSlice !== null && (
          <div>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>$ </span>
            <span style={{ color: "rgba(255,255,255,0.88)" }}>{promptSlice}</span>
            <span className="terminal-cursor">█</span>
          </div>
        )}

        {outputSlice !== null && currentLine && (
          <>
            <div>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>$ </span>
              <span style={{ color: "rgba(255,255,255,0.88)" }}>{currentLine.prompt}</span>
            </div>
            <div>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>→ </span>
              <span style={{ color: "rgba(255,255,255,0.48)" }}>{outputSlice}</span>
              <span className="terminal-cursor">█</span>
            </div>
          </>
        )}

        {(phase === "user-input" || phase === "result") && (
          <>
            <div>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>$ </span>
              <span style={{ color: "rgba(255,255,255,0.88)" }}>{userInput}</span>
              {phase === "user-input" && <span className="terminal-cursor">█</span>}
            </div>
            {authResult === "confirmed" && (
              <div style={{ marginTop: 2 }}>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>→ </span>
                <span style={{ color: "#A3BE8C" }}>Acesso confirmado</span>
              </div>
            )}
            {authResult === "denied" && (
              <div style={{ marginTop: 2 }}>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>→ </span>
                <span style={{ color: "#BF616A" }}>Acesso negado</span>
              </div>
            )}
          </>
        )}

        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={phase !== "user-input"}
          style={{
            position: "absolute",
            opacity: 0,
            width: 1,
            height: 1,
            pointerEvents: phase === "user-input" ? "auto" : "none",
          }}
        />
      </div>
    </div>
  );
}