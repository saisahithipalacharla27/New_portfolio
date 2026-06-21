import { FaBriefcase, FaCalendarAlt, FaTools, FaBuilding } from "react-icons/fa";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My <span className="text-blue-600">Experience</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hands-on experience through internships and industry-level data analytics roles.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">

          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >

              {/* Role + Company */}
              <div className="flex items-start gap-4 mb-6">

                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {item.companyName}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.employmentType}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3 mb-8 text-sm text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="text-blue-600" />
                <span>{item.duration}</span>
              </div>

              {/* Tools */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <FaTools className="text-blue-600" />
                  <h4 className="font-bold">Tools & Skills</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-bold mb-4 text-lg">
                  Key Achievements
                </h4>

                <ul className="space-y-3">
                  {item.achievements.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}