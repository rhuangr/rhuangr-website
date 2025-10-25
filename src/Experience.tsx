import { Card } from "./components/ui/card";

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
        <div className="flex">
          {image && image}
          <div className="flex flex-col ml-4 justify-center">
            {heading && <h3 className="text-base">{heading}</h3>}
            {subheading && (
              <p className="text-muted-foreground">{subheading}</p>
            )}
          </div>
        </div>
        {date && <div>{date}</div>}
      </div>
    </Card>
  );
}

export function Experience() {
  return (
    <div>
      <div className="flex items-center justify-between w-full pb-5">
        <h2 className="text-2xl">Experience</h2>
      </div>
      <div className="flex flex-col gap-2">
        <ExperienceCard
          image={<img src="public/Assets/shoppy/svg/shopify_glyph.svg" alt="Shopify logo" className="w-10 h-10" />}
          heading="Shopify"
          subheading="Software Engineer Intern"
          date="01/2025 - 09/2025"
        />
        <ExperienceCard
          image={<div className="outline-dashed outline-3 rounded-xs h-9 w-9 mt-1"></div>}
          heading="More to come"
          subheading="Hopefully!"  
        />
      </div>
    </div>
  );
}
