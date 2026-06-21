import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
            Aspiring Data Analyst
          </span>

          {/* Name */}
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Sai Sahithi
            <br />
            <span className="text-blue-600">
              Palacharla
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-8">
            Turning{" "}
            <span className="text-blue-600 font-semibold">
              Data
            </span>{" "}
            Into Meaningful{" "}
            <span className="text-blue-600 font-semibold">
              Insights
            </span>
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "SQL",
              "Power BI",
              "Excel",
              "Tableau",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-md dark:shadow-slate-900/40 px-4 py-2 rounded-full text-sm transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            {/* <a
              href={`${import.meta.env.BASE_URL}myresume.pdf`}
              download
              className="px-7 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a> */}
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              View Projects ↓
            </a>

<a
  href="#contact"
  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
>
  Contact Me ↓
</a>

            {/* <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              View Projects
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-2xl text-slate-700 dark:text-slate-300">
            <a
              href="https://www.linkedin.com/in/sahithipalacharla/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/saisahithipalacharla27"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* <a href="mailto:saisahithipalacharla27@gmail.com">
              <FaEnvelope />
            </a> */}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-30 rounded-full"></div>

            {/* Profile Image */}
            <img
              src={`${import.meta.env.BASE_URL}passport_size.jpg`}
              alt="Sai Sahithi"
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}