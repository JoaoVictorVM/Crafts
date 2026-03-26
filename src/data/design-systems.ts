export interface DesignSystem {
  id: number;
  name: string;
  company: string;
  description: string;
  url: string;
  video: string;
  accentColor: string;
  tags: string[];
}

export const designSystems: DesignSystem[] = [
  {
    id: 1,
    name: "Material Design",
    company: "Google",
    description:
      "Sistema de design open-source do Google com componentes adaptativos.",
    url: "https://m3.material.io",
    video: "/videos/material.mp4",
    accentColor: "#4285F4",
    tags: ["Components", "Tokens", "Motion"],
  },
  {
    id: 2,
    name: "Carbon Design",
    company: "IBM",
    description:
      "Sistema open-source para produtos e experiências digitais da IBM.",
    url: "https://carbondesignsystem.com",
    video: "/videos/carbon.mp4",
    accentColor: "#0F62FE",
    tags: ["Enterprise", "Accessibility", "React"],
  },
  {
    id: 3,
    name: "Fluent 2",
    company: "Microsoft",
    description:
      "Linguagem de design criando consistência em todos os produtos Microsoft.",
    url: "https://fluent2.microsoft.design",
    video: "/videos/fluent.mp4",
    accentColor: "#0078D4",
    tags: ["Windows", "Components", "Figma"],
  },
  {
    id: 4,
    name: "Lightning Design",
    company: "Salesforce",
    description: "Framework para construção de interfaces ricas e responsivas.",
    url: "https://www.lightningdesignsystem.com",
    video: "/videos/lightning.mp4",
    accentColor: "#00A1E0",
    tags: ["Enterprise", "Tokens", "CRM"],
  },
];

// Ordem por coluna conforme spec:
// Col 0: 1→2→3→4  (índices 0,1,2,3)
// Col 1: 3→1→4→2  (índices 2,0,3,1)
// Col 2: 2→3→4→1  (índices 1,2,3,0)
export const COLUMN_ORDERS: Record<number, number[]> = {
  0: [0, 1, 2, 3],
  1: [2, 0, 3, 1],
  2: [1, 2, 3, 0],
};

// Velocidade em px/s por coluna
// Col 0: média | Col 1: mais lenta | Col 2: mais rápida
export const COLUMN_SPEEDS: Record<number, number> = {
  0: 40,
  1: 27,
  2: 56,
};
