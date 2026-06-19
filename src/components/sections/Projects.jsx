import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold mt-2">
            My <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Here are some of my Data Analytics projects built using
            Python, SQL, Excel and Power BI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}