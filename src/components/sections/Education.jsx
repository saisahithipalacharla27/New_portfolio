import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
            EDUCATION
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-3">
            My <span className="text-blue-600">Education</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            My academic journey that built the analytical and technical foundation for my career in data analytics.
          </p>

        </div>

        <div className="space-y-8">

          {education.map((item) => (

            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300"
            >

              {/* Degree */}
              <div className="flex items-center gap-3 mb-8">

                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {item.specialization}
                  </p>
                </div>

              </div>

              {/* Details */}
              <div className="grid md:grid-cols-3 gap-6">

                {/* Institution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaUniversity className="text-blue-600" />
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Institution
                    </h4>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300">
                    {item.institute}
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaCalendarAlt className="text-blue-600" />
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Duration
                    </h4>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300">
                    {item.duration}
                  </p>
                </div>

                {/* Score */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaAward className="text-blue-600" />
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Score
                    </h4>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300">
                    {item.score}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}