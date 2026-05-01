import { FlipCard } from "./FlipCard";

export interface Project {
  title: string;
  tags: string[];
  description: string;
}

interface ProjectCardFlipProps {
  projects: Project[];
}

export function ProjectCardFlip({ projects }: ProjectCardFlipProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center",
        maxWidth: 520,
      }}
    >
      {projects.map((project, i) => (
        <FlipCard
          key={i}
          title={project.title}
          tags={project.tags}
          description={project.description}
        />
      ))}
    </div>
  );
}