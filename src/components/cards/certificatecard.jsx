import { useState } from "react";
import { FiAward, FiX } from "react-icons/fi";

export default function CertificateCard({ certificate }) {
  // console.log(certificate);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition duration-300 text-center">

        <button
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto hover:bg-blue-600 hover:text-white transition"
        >
          <FiAward size={38} />
        </button>

        <h3 className="font-bold text-lg mt-5">
          {certificate.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {certificate.issuer}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-5 text-blue-600 font-semibold hover:underline"
        >
          View Certificate
        </button>

      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl p-4 w-[95%] md:w-[80%] lg:w-[65%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <FiX size={28} />
            </button>

            <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full rounded-lg object-contain max-h-[85vh]"
            onLoad={() => console.log("Loaded:", certificate.image)}
            onError={() => console.log("Failed:", certificate.image)}
          />
          </div>
        </div>
      )}
    </>
  );
}
