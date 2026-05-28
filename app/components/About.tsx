"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import MotionSection from "./MotionSection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  ["12+", "Years of Experience"],
  ["8k+", "Happy Customers"],
  ["40+", "Product Categories"],
];

export default function About() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-stat", {
        y: 32,
        opacity: 0,
        stagger: 0.12,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
        },
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <MotionSection id="about" className="bg-[#fbfaf7] py-20 sm:py-28">
      {/* About company section */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#ded7ca] bg-[#f0eadf]">
          <Image
            src="/images/image2.jpeg"
            alt="Optical frame and lens details on a bright display surface"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-[#8a7132]">About Bill Bird Optics</p>
          <h2 className="section-title mt-4 max-w-2xl text-[#19202a]">
            Built around clarity, fit, and consistent optical quality.
          </h2>
          <p className="body-copy mt-6 max-w-2xl text-[#5f6670]">
            We support eyewear retailers, eye-care professionals, and customers with
            carefully sourced optical glass products, lens quality guidance, and
            customer-focused service from inquiry to delivery.
          </p>
          <p className="body-copy mt-4 max-w-2xl text-[#5f6670]">
            Our work centers on reliable lens finishing, comfortable frames,
            clear prescription support, and practical product selection for
            everyday and premium eyewear needs.
          </p>
          <div ref={cardsRef} className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="about-stat rounded-[1.5rem] border border-[#ded7ca] bg-[#fffdf9] p-5 shadow-[0_18px_45px_rgba(25,32,42,0.06)]"
              >
                <p className="text-2xl font-semibold text-[#19202a]">{value}</p>
                <p className="mt-2 text-sm leading-5 text-[#69707a]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
