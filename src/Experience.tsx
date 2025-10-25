import { Card } from "./components/ui/card";
import { Leader } from "./components/Leader";

interface ExperienceCardProps {
  image?: React.ReactNode;
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
        <div className="flex items-center">
          <div className="w-12">{image && image}</div>
          <div className="flex flex-col justify-center">
            {heading && <h3 className="text-base">{heading}</h3>}
            {subheading && (
              <p className="text-muted-foreground">{subheading}</p>
            )}
          </div>
        </div>
        {date && <div className="text-xs text-muted-foreground">{date}</div>}
      </div>
    </Card>
  );
}

export function Experience() {
  return (
    <div>
      <div className="flex items-center justify-between w-full mb-10">
        <h2>Experience</h2>
        <Leader />
      </div>
      <div className="flex flex-col gap-2">
        <ExperienceCard
          image={
            <img
              src="Assets/shoppy/svg/shopify_glyph.svg"
              alt="Shopify logo"
              className="w-8 h-8"
            />
          }
          heading="Shopify"
          subheading="Software Engineer Intern"
          date="01/2025 - 09/2025"
        />
        <ExperienceCard
          image={
            <div className="outline-dashed outline-3 rounded-xs h-7 w-7 mt-1"></div>
          }
          heading="More to come"
          subheading="Hopefully!"
        />
      </div>
    </div>
  );
}
