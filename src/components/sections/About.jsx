import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaDatabase,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: "2",
    title: "Projects",
  },
  {
    icon: <FaDatabase />,
    number: "10+",
    title: "Technologies",
  },
  {
    icon: <FaChartLine />,
    number: "500+",
    title: "Hours of Analysis",
  },
  {
    icon: <FaLaptopCode />,
    number: "Continuous",
    title: "Learning",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-8">
            I'm an aspiring Data Analyst passionate about transforming raw data
            into meaningful insights using SQL, Python, Excel, Power BI, and
            Tableau. I enjoy solving business problems through data
            visualization, dashboards, and statistical analysis.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              My Journey
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-8">
              I am currently building my expertise in Data Analytics by working
              on real-world datasets and business-oriented projects. My goal is
              to become a skilled Data Analyst capable of helping organizations
              make data-driven decisions through insightful dashboards and
              analytical solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-8 mt-6">
              I continuously improve my technical skills by exploring new tools,
              practicing SQL queries, developing Python analytics projects, and
              creating interactive Power BI dashboards.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md p-8 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {item.number}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

