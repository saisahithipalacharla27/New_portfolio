import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Contact <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mt-4">
            Feel free to connect regarding opportunities, collaborations, or projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-md">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    saisahithipalacharla27@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    +91 9182327074
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <a
                href="https://www.linkedin.com/in/sahithipalacharla/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/saisahithipalacharla27"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-md"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full mt-5 p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full mt-5 p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}