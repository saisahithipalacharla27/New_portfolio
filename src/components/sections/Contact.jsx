import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Contact <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Feel free to connect with me regarding opportunities,
            collaborations, or projects.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}

          <div className="bg-gray-50 rounded-2xl shadow-md p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-blue-600 text-xl" />

                <div>
                  <p className="font-semibold">Email</p>

                  <p className="text-gray-600">
                    saisahithipalacharla27@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaPhone className="text-blue-600 text-xl" />

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="text-gray-600">
                    +91 9182327074
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-blue-600 text-xl" />

                <div>

                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="text-gray-600">
                    Andhra Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://www.linkedin.com/in/sahithipalacharla/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-600 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/saisahithipalacharla27"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-800 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-gray-50 rounded-2xl shadow-md p-8">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Sai Sahithi Palacharla"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="saisahithipalacharla27@gmail.com"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg p-3 w-full mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="border rounded-lg p-3 w-full mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-6 hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}