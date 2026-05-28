"use client";

import { motion } from "framer-motion";

const badges = [
  "Quality Checked",
  "Expert Assistance",
  "Custom Fit Support",
  "Warranty Support",
  "Easy Inquiry Process",
];

export default function TrustStrip() {
  return (
    <section className="bg-[#f3efe7] py-10">
      {/* Trust and service highlights strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-10"
      >
        {badges.map((badge) => (
          <div
            key={badge}
            className="rounded-full border border-[#d5cbbb] bg-[#fffdf9] px-5 py-4 text-center text-sm font-semibold text-[#39424e] shadow-sm"
          >
            {badge}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
