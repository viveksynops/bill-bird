"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const trustHighlights = ["Precision Quality", "Durable Materials", "Professional Service"];

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(14% 14% 14% 14% round 32px)", opacity: 0, y: 36 },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
        },
      );
      gsap.to(floatRef.current, {
        yPercent: -8,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Hero section */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(215,189,120,0.16),transparent_30%),linear-gradient(180deg,#fbfaf7_0%,#f4efe6_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:pb-20 lg:pt-10">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-5 inline-flex rounded-full border border-[#d7bd78]/60 bg-[#fffaf0] px-4 py-2 text-[#7b642d] shadow-sm"
          >
            Premium optical glass and eyewear supply
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title max-w-2xl text-balance text-[#19202a]"
          >
            Premium Optical Glass Products for Clearer Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="body-copy mt-5 max-w-lg text-[#5f6670]"
          >
            We provide high-quality optical lenses, eyewear glass, refined frames,
            and practical optical solutions for retailers, clinics, and customers
            who expect dependable clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.76, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-[#19202a] px-7 py-4 text-sm font-semibold text-[#fbfaf7] shadow-[0_18px_42px_rgba(25,32,42,0.2)] transition hover:-translate-y-1 hover:bg-[#2c3745]"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#cfc7b9] bg-[#fbfaf7] px-7 py-4 text-sm font-semibold text-[#19202a] transition hover:-translate-y-1 hover:border-[#bda55f]"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {trustHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ded7ca] bg-[#fffdf9]/85 px-4 py-3 text-sm font-semibold text-[#39424e] shadow-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <div
          ref={imageRef}
          className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-[#ded7ca] bg-[#f8f4ec] shadow-[0_32px_90px_rgba(25,32,42,0.14)] sm:min-h-[560px] lg:min-h-[610px]"
        >
          <div ref={floatRef} className="absolute inset-0">
            <Image
              src="/images/image1.jpeg"
              alt="Premium optical glasses placed on a clean studio surface"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,244,236,0.68)_0%,rgba(248,244,236,0.1)_46%,rgba(248,244,236,0)_100%)]" />
          </div>

          <div className="absolute inset-x-6 top-6 flex items-center justify-between text-sm font-semibold text-[#7c725f] sm:inset-x-8 sm:top-8">
            <span className="rounded-full border border-[#ded7ca] bg-[#fffdf9]/82 px-4 py-2 shadow-sm backdrop-blur-sm">
              Optical glass collection
            </span>
            <span className="rounded-full bg-[#19202a] px-4 py-2 text-[#fbfaf7] shadow-[0_14px_34px_rgba(25,32,42,0.18)]">
              Quality checked
            </span>
          </div>

          <div className="absolute left-5 top-24 max-w-[14rem] rounded-[1.35rem] border border-[#ded7ca] bg-[#fffdf9]/88 p-4 shadow-[0_18px_42px_rgba(25,32,42,0.1)] backdrop-blur-sm sm:left-8 sm:top-28">
            <p className="text-sm font-semibold text-[#19202a]">Lens-first clarity</p>
            <p className="mt-2 text-sm leading-6 text-[#69707a]">
              Clean optics, balanced frames, and fitting guidance.
            </p>
          </div>

          <div className="absolute bottom-5 right-5 w-[68%] max-w-md overflow-hidden rounded-[1.5rem] border border-white/70 bg-[#fbfaf7]/92 p-3 shadow-[0_20px_55px_rgba(25,32,42,0.18)] backdrop-blur-md sm:bottom-7 sm:right-7">
            <div className="relative aspect-[2.7/1] overflow-hidden rounded-[1.1rem] bg-[#ebe7df]">
              <Image
                src="/images/image3.jpeg"
                alt="Front-facing premium optical glasses displayed on a clean studio surface"
                fill
                priority
                sizes="(min-width: 1024px) 26vw, 72vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {["UV options", "Blue cut", "Prescription fit"].map((item) => (
                <div key={item} className="rounded-full bg-[#f1eadf] px-3 py-2 text-center">
                  <p className="text-xs font-semibold text-[#19202a]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
