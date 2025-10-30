import { ContentBlock } from "./ContentBlock";

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

const timeline: ExperienceEntry[] = [
  {
    company: "Shopify",
    role: "Engineering Intern",
    period: "Jan 2025 – Sep 2025",
    summary:
      "Developed customer identity services, shipping features that improved login success rates and recovery automation.",
  },
  {
    company: "McGill LaunchPad",
    role: "Product Engineer",
    period: "2024",
    summary:
      "Led the front-end track for student founders, coaching teams on design systems, component tooling, and analytics instrumentation.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 – Present",
    summary:
      "Delivered web experiences for early-stage startups with an emphasis on accessibility, performance, and brand consistency.",
  },
];

export function Experience() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-6 py-10">
      <h2>Experience</h2>
      {timeline.map((item) => (
        <ContentBlock
          key={item.company + item.period}
          header={
            <div className="flex items-center justify-between gap-4">
              <span>{item.company}</span>
              <span className="font-family-geist-mono text-subheading text-muted-foreground">
                {item.period}
              </span>
            </div>
          }
        >
          <p className="text-muted-foreground">
            {item.role} — {item.summary}
          </p>
        </ContentBlock>
      ))}
      <span data-route-sentinel="true" aria-hidden="true" className="block h-1 w-full" />
    </section>
  );
}
