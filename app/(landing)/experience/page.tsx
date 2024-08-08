import ExperienceConfig from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types/index.types";

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <p className="font-semibold">
          <a href={""} className="hover:underline font-heading text-lg">
            {experience.company.name}
          </a>
          <span className="text-xs px-2 py-1 ml-2 bg-secondary rounded">
            {experience.location.name}
          </span>
        </p>
        <p className="text-muted-foreground text-xs">
          {experience.start} - {experience.end}
        </p>
      </div>
      <p className="tracking-tight">{experience.title}</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground">
        {experience.description.map((exp, i) => {
          return <li key={i}>{exp}</li>;
        })}
      </ul>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-xl space-y-10 mt-10">
      {ExperienceConfig.map((exp, i) => {
        return <Experience key={i} experience={exp} />;
      })}
    </div>
  );
}
