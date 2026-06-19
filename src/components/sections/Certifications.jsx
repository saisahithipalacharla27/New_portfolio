import { certificates } from "../../data/certificates";
import CertificateCard from "../cards/certificatecard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            My <span className="text-blue-600">Certifications</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Professional certifications validating my data analytics skills.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
}