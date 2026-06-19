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
      className="min-h-screen flex items-center bg-slate-50"
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
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            Aspiring Data Analyst
          </span>

          {/* Name */}
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Sai Sahithi
            <br />
            <span className="text-blue-600">
              Palacharla
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-8">
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
                className="bg-white shadow-md px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="/myresume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Download Resume
            </a>

            {/* <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              View Projects
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-2xl text-slate-700">
            <a
              href="https://www.linkedin.com/in/sahithipalacharla/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/saisahithipalacharla27"
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
              src="/passport_size.jpg"
              alt="Sai Sahithi"
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}