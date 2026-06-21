import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming",
    icon: <FaPython />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
    ],
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    skills: [
      { name: "SQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    title: "Data Visualization",
    icon: <FaChartBar />,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    title: "Analytics Tools",
    icon: <FaTools />,
    skills: [
      { name: "Excel", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "MySQL Workbench", level: 85 },
    ],
  },
];

const technologies = [
  // "Python",
  // "SQL",
  // "Excel",
  // "Power BI",
  // "Tableau",
  // "Pandas",
  // "NumPy",
  // "MySQL",
  "Data Cleaning",
  "Data Transformation",
  "EDA",
  "Dashboard Development",
  "Statistics",
  "DAX",
  "Data Modeling",
  "Business Intelligence",
  "KPI Reporting",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-8">
            Skilled in data analysis, visualization, business intelligence,
            statistical analysis, and database management using industry-standard
            tools to transform raw data into actionable business insights.
          </p>
        </motion.div>

        {/* Skill Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 p-8"
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="text-4xl text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>

              </div>

              {category.skills.map((skill, i) => (

                <div key={i} className="mb-6">

                  <div className="flex justify-between mb-2">

                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>

                    <span className="text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: i * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    />

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

        {/* Technology Pills */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >

          {technologies.map((tech) => (

            <span
              key={tech}
              className="px-5 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 transition-all duration-300"
            >
              {tech}
            </span>

          ))}

        </motion.div>

      </div>
    </section>
  );
}