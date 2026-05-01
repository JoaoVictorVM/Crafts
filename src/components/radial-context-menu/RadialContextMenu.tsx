import { useState, useRef } from "react";
import { Code2, Globe, FileText, Briefcase, Mail, BookOpen, X } from "lucide-react";
import { RadialMenuItem } from "./RadialMenuItem";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "GitHub", icon: <Code2 size={18} />, href: "", color: "#e6edf3" },
  { label: "LinkedIn", icon: <Globe size={18} />, href: "", color: "#0A66C2" },
  { label: "CV", icon: <FileText size={18} />, href: "", color: "#A3BE8C" },
  { label: "Contato", icon: <Mail size={18} />, href: "", color: "#88C0D0" },
  { label: "Projetos", icon: <Briefcase size={18} />, href: "", color: "#EBCB8B" },
  { label: "Blog", icon: <BookOpen size={18} />, href: "", color: "#B48EAD" },
];

const RADIUS = 100;
const ITEM_SIZE = 72;

export function RadialContextMenu() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const openAt = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Clamp so radial items don't overflow the container
    const x = Math.max(RADIUS + ITEM_SIZE / 2, Math.min(clientX - rect.left, rect.width - RADIUS - ITEM_SIZE / 2));
    const y = Math.max(RADIUS + ITEM_SIZE / 2, Math.min(clientY - rect.top, rect.height - RADIUS - ITEM_SIZE / 2));
    setPosition({ x, y });
    setOpen(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!open) {
      openAt(e.clientX, e.clientY);
    } else {
      setOpen(false);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    openAt(e.clientX, e.clientY);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      style={{
        width: 600,
        height: 360,
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
        cursor: "crosshair",
        userSelect: "none",
      }}
    >
      {!open && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.15)",
            fontSize: 11,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.12em",
            pointerEvents: "none",
          }}
        >
          clique em qualquer ponto · botão direito também
        </div>
      )}

      {open && (
        <>
          {/* Dim overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
              pointerEvents: "none",
            }}
          />

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            style={{
              position: "absolute",
              left: position.x - 20,
              top: position.y - 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 30,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <X size={14} />
          </button>

          {/* Menu items */}
          {MENU_ITEMS.map((item, i) => {
            const angle = (i / MENU_ITEMS.length) * 2 * Math.PI - Math.PI / 2;
            const x = position.x + Math.cos(angle) * RADIUS - ITEM_SIZE / 2;
            const y = position.y + Math.sin(angle) * RADIUS - ITEM_SIZE / 2;

            return (
              <RadialMenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                color={item.color}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  left: x,
                  top: y,
                  animation: `radial-appear 0.22s ease ${i * 0.03}s both`,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}