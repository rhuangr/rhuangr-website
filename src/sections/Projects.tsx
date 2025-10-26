import { Card } from "@/components/ui/card";
import { Leader } from "@/components/Leader";

interface ExperienceCardProps {
  image?: string;
  heading?: string;
  subheading?: string;
  date?: string;
  children?: React.ReactNode;
}

function ExperienceCard({
  image,
  heading,
  subheading,
  date,
  children,
}: ExperienceCardProps) {
  if (children) {
    return (
      <Card className="h-20">
        <div className="text-muted-foreground text-center text-sm h-full flex items-center justify-center">
          {children}
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-20">
      <div className="flex justify-between items-center px-5 h-full">
        <div className="flex">
          {image && (
            <img src={image} alt={`${heading} logo`} className="w-10 h-10" />
          )}
          <div className="flex-col ml-4 items-center text-base">
            {heading && <p className="">{heading}</p>}
            {subheading && (
              <p className="text-md text-muted-foreground text-sm">
                {subheading}
              </p>
            )}
          </div>
        </div>
        {date && <div className="">{date}</div>}
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <div>
      <div className="flex items-center justify-between w-full pb-5">
        <h2>Projects</h2>
        <Leader/>
      </div>
      <div className="flex flex-col gap-2">
        <ExperienceCard
          image="public/Assets/shoppy/svg/shopify_glyph_white.svg"
          heading="Shopify"
          subheading="Software Engineer Intern"
          date="01/2025 - 08/2025"
        />
        <ExperienceCard>
          More to come <br /> hopefully...
        </ExperienceCard>
      </div>
    </div>
  );
}
