import { FaBriefcase, FaCalendarAlt, FaTools, FaBuilding } from "react-icons/fa";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My <span className="text-blue-600">Experience</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hands-on experience through internships and real-world data analytics projects.
          </p>

        </div>

        {/* Experience Cards */}
        <div className="space-y-10">

          {experience.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition"
            >

              {/* Role */}
              <div className="flex items-center gap-3 mb-6">

                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="text-blue-600 font-medium">
                    {item.companyName}
                  </p>
                </div>

              </div>

              {/* Details */}

              <div className="grid md:grid-cols-2 gap-6 mb-8">

                <div className="flex items-center gap-3">
                  <FaBuilding className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Company Name</p>
                    <p className="font-semibold">{item.companyName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{item.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Employment Type</p>
                    <p className="font-semibold">
                      {item.employmentType}
                    </p>
                  </div>
                </div>

              </div>

              {/* Tools */}

              <div className="mb-8">

                <div className="flex items-center gap-2 mb-3">

                  <FaTools className="text-blue-600" />

                  <h4 className="font-bold text-lg">
                    Tools & Skills
                  </h4>

                </div>

                <div className="flex flex-wrap gap-3">

                  {item.tools.map((tool, index) => (

                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>

                  ))}

                </div>

              </div>

              {/* Achievements */}

              <div>

                <h4 className="font-bold text-lg mb-4">
                  Key Achievements
                </h4>

                <ul className="space-y-3">

                  {item.achievements.map((point, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <span className="text-green-600 font-bold mt-1">
                        ✔
                      </span>

                      <span className="text-gray-700">
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