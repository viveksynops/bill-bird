"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fbfaf7] py-20 sm:py-28">
      {/* Testimonials section */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#8a7132]">Testimonials</p>
            <h2 className="section-title mt-4 max-w-3xl text-[#19202a]">
              Trusted by people who sell and wear optical products.
            </h2>
          </div>
          <p className="body-copy max-w-md text-[#5f6670]">
            Clear communication, dependable products, and careful support keep
            customers returning for new eyewear requirements.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[1.75rem] border border-[#ded7ca] bg-[#fffdf9] p-7 shadow-[0_18px_48px_rgba(25,32,42,0.07)]"
            >
              <div className="text-sm font-semibold text-[#c79d35]" aria-label="5 star rating">
                5 / 5 rating
              </div>
              <p className="mt-6 text-base leading-7 text-[#4e5661]">
                {testimonial.review}
              </p>
              <div className="mt-8 border-t border-[#e6dfd4] pt-5">
                <p className="font-semibold text-[#19202a]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#73706a]">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
