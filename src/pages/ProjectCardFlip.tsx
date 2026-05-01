import { ProjectCardFlip } from "../components/project-card-flip/ProjectCardFlip";

const PROJECTS = [
  {
    title: "E-commerce Dashboard",
    tags: ["React", "TypeScript", "Recharts"],
    description: "Painel completo com métricas de vendas, gráficos interativos e gestão de pedidos em tempo real.",
  },
  {
    title: "Chat em tempo real",
    tags: ["Socket.io", "Node.js", "Redis"],
    description: "Aplicação de mensagens com salas, presença online e histórico persistido em Redis.",
  },
  {
    title: "Design System",
    tags: ["Storybook", "Figma tokens", "CSS"],
    description: "Sistema de componentes com tokens de design, temas e documentação interativa no Storybook.",
  },
  {
    title: "Mobile App · Fintech",
    tags: ["React Native", "Expo", "Stripe"],
    description: "App de pagamentos com autenticação biométrica, carteira digital e integração com Stripe.",
  },
];

export default function ProjectCardFlipPage() {
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
      <ProjectCardFlip projects={PROJECTS} />
    </div>
  );
}