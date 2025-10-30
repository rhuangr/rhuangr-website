import { ContentBlock } from "./ContentBlock";

type ProjectEntry = {
  title: string;
  period: string;
  description: string;
};

const projects: ProjectEntry[] = [
  {
    title: "Customer Identity Platform",
    period: "2025",
    description:
      "Built an authentication experience for Shopify accounts with a focus on biometric login and recovery flows.",
  },
  {
    title: "Rhuangr GPT",
    period: "2024",
    description:
      "Shipped an AI-assisted Q&A surface that stitches together personal notes and public research to help recruiters learn more quickly.",
  },
  {
    title: "Design System Playground",
    period: "2023",
    description:
      "Developed a modular component playground for rapid prototyping with automated accessibility checks and snapshot testing.",
  },
];

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-6 py-10">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ContentBlock
          key={project.title}
          header={
            <div className="flex items-center justify-between gap-4">
              <span>{project.title}</span>
              <span className="font-family-geist-mono text-subheading text-muted-foreground">
                {project.period}
              </span>
            </div>
          }
        >
          <p className="text-muted-foreground">{project.description}</p>
        </ContentBlock>
      ))}
      <span data-route-sentinel="true" aria-hidden="true" className="block h-1 w-full" />
    </section>
  );
}
