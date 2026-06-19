import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />
      ) : (
        <div className="w-full h-60 bg-gradient-to-br from-slate-100 to-slate-300 flex flex-col items-center justify-center">

          <div className="text-6xl">
            📊
          </div>

          <p className="mt-4 text-gray-600 font-semibold">
            Dashboard Preview
          </p>

          <p className="text-gray-400 text-sm">
            Upload Later
          </p>

        </div>
      )}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}