import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-8">
            A collection of real-world Data Analytics projects where I transformed
            raw data into meaningful insights using Python, SQL, Excel,
            Power BI, Tableau, and data visualization techniques.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}