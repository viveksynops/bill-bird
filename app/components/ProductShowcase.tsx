"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-[#f3efe7] py-20 sm:py-28">
      {/* Product showcase section */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#8a7132]">Product range</p>
            <h2 className="section-title mt-4 max-w-3xl text-[#19202a]">
              Optical products made for clear choices.
            </h2>
          </div>
          <p className="body-copy max-w-md text-[#5f6670]">
            A focused catalog for prescription needs, reading comfort, screen protection,
            progressive vision, and premium frame selection.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article
              key={product.name}
              variants={{
                hidden: { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-[1.75rem] border border-[#ded7ca] bg-[#fffdf9] shadow-[0_18px_48px_rgba(25,32,42,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(25,32,42,0.12)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#ebe4d6]">
                <Image
                  src={product.image}
                  alt={`${product.name} product photography`}
                  width={900}
                  height={675}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="card-title text-[#19202a]">{product.name}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#626a73]">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full border border-[#cfc7b9] px-5 py-3 text-sm font-semibold text-[#19202a] transition hover:border-[#bda55f] hover:bg-[#f7efd9]"
                >
                  Inquire Now
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
