"use client";

import { motion } from "framer-motion";

const features = [
  ["Premium Optical Clarity", "Clean vision support for daily use and professional eyewear needs."],
  ["Scratch-Resistant Options", "Coating choices that help lenses stay clearer through regular handling."],
  ["Lightweight & Comfortable", "Frame and lens combinations selected for balanced all-day wear."],
  ["UV / Blue Light Protection", "Protection options for outdoor exposure and screen-heavy workdays."],
  ["Custom Prescription Support", "Guidance for prescription-based orders and fitting requirements."],
  ["Fast Inquiry & Support", "Quick product responses, practical recommendations, and order assistance."],
];

export default function Features() {
  return (
    <section className="bg-[#19202a] py-20 text-[#f7f1e6] sm:py-28">
      {/* Features and benefits section */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#d7bd78]">Benefits</p>
          <h2 className="section-title mt-4">
            Made to feel premium before and after fitting.
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(([title, description], index) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#19202a] p-6 sm:p-7"
            >
              <div className="mb-8 grid size-11 place-items-center rounded-full bg-[#f2e5bd] text-sm font-semibold text-[#19202a]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="card-title">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#c8c1b5]">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
