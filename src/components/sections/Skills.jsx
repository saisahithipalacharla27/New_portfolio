import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    color: "bg-cyan-200",
    skills: [
      { name: "Python", level: 90 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 80 },
    ],
  },
  {
    title: "Databases",
    color: "bg-slate-400",
    skills: [
      { name: "SQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    title: "Data Visualization",
    color: "bg-cyan-200",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 90 },
      { name: "Matplotlib", level: 75 },
    ],
  },
  {
    title: "Tools",
    color: "bg-slate-400",
    skills: [
      { name: "Excel", level: 95 },
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "mySQL Workbench", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center">
            Technical <span className="text-blue-600">Skills</span>
          </h2>

          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            My technical toolkit for solving business problems,
            building dashboards, analyzing datasets, and creating
            actionable insights.
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
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              {category.skills.map((skill, i) => (

                <div key={i} className="mb-6">

                  <div className="flex justify-between mb-2">

                    <span className="font-medium">
                      {skill.name}
                    </span>

                    <span>
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-200">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.2,
                      }}
                      viewport={{ once: true }}
                      className={`${category.color} h-3 rounded-full`}
                    />

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        {/* </div> */}
        {/* <div className="mt-20 flex flex-wrap justify-center gap-4">

  {[
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Tableau",
    "Pandas",
    "NumPy",
    "Git",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
  ].map((tech) => (
    <span
      key={tech}
      className="px-5 py-3 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300"
    >
      {tech}
    </span>
  ))} */}

</div>
      </div>
    </section>
  );
}