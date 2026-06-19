import { education } from "../../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold">
            My <span className="text-blue-600">Education</span>
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            My academic journey that built my foundation in data analytics and technology.
          </p>

        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">

          {education.map((item, index) => (

            <div
              key={index}
              className="flex gap-8 mb-14"
            >

              {/* Timeline */}
              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-blue-100"></div>

                {index !== education.length - 1 && (
                  <div className="w-1 h-28 bg-blue-200"></div>
                )}

              </div>

              {/* Education Card */}
              <div className="bg-slate-50 rounded-2xl shadow-md p-6 flex-1 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.degree}
                </h3>

                <p className="text-lg text-gray-600 mt-2">
                  {item.institute}
                </p>

                <p className="text-blue-600 font-semibold mt-3">
                  {item.year}
                </p>

                <p className="text-gray-500 mt-1">
                  {item.score}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}