import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              Sai Sahithi
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Aspiring Data Analyst passionate about transforming
              raw data into meaningful insights using Python,
              SQL, Excel and Power BI.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-blue-400">
                  Education
                </a>
              </li>

              <li>
                <a href="#certifications" className="hover:text-blue-400">
                  Certifications
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:saisahithipalacharla@gmail.com"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-white transition"
            >
              <FaArrowUp />

              Back to Top
            </a>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {currentYear} Sai Sahithi Palacharla.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}