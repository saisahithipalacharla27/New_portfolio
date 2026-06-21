import { useState } from "react";
import { FiAward, FiX } from "react-icons/fi";

export default function CertificateCard({ certificate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6 text-center hover:shadow-xl transition">

        <button
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto hover:bg-blue-600 hover:text-white transition"
        >
          <FiAward size={38} />
        </button>

        <h3 className="font-bold text-lg mt-5 text-slate-900 dark:text-white">
          {certificate.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          {certificate.issuer}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-5 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          View Certificate
        </button>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-xl p-4 w-[95%] md:w-[80%] lg:w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-slate-600 dark:text-white hover:text-red-500"
            >
              <FiX size={26} />
            </button>

            {/* IMAGE ONLY (NO TEXT ABOVE IT) */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}