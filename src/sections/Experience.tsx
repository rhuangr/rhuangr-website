import { Card } from "../components/ui/card";
import { ContentBlock } from "./ContentBlock";
import { CircleQuestionMark } from "lucide-react";

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
      <Card className="h-18">
        <div className="text-muted-foreground text-center h-full flex items-center justify-center">
          {children}
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-18">
      <div className="flex justify-between items-center px-5 h-full">
        <div className="flex items-center">
          <div className="w-12">{image && image}</div>
          <div className="flex flex-col justify-center">
            {heading && <h4 className="font-[500]">{heading}</h4>}
            {subheading && (
              <p className="text-muted-foreground">{subheading}</p>
            )}
          </div>
        </div>
        {date && <div className="text-muted-foreground">{date}</div>}
      </div>
    </Card>
  );
}

export function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <ContentBlock sideHeader="01/2025 - 09/2025">
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
            />
          </ContentBlock>
          <ContentBlock sideHeader="MM/YYYY - MM/YYYY">
          <ExperienceCard
            image={
              <CircleQuestionMark className="w-8 h-8" />
            }
            heading="More to come"
            subheading="Hopefully!"
          />
          </ContentBlock>
        </div>
      </div>
    </div>
  );
}
