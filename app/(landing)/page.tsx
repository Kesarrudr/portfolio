import ProjectConfig from "@/config/project.config";
import ProjectCard from "@/components/project-card";

export default function Home() {
  // const projectSorted = ProjectConfig.sort((a, b) => {
  // return new Date(b.date).getTime() - new Date(a.date).getTime();
  // });

  return (
    <div className="mt-10 space-y-6">
      {ProjectConfig.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
