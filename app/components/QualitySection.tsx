"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const qualityPoints = [
  "Precision lens finishing",
  "Comfortable and durable materials",
  "Clear vision technology",
  "Quality checked products",
  "Professional fitting support",
  "Long-lasting optical solutions",
];

export default function QualitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quality-item", {
        opacity: 0,
        x: 26,
        stagger: 0.08,
        duration: 0.58,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
      gsap.to(imageRef.current, {
        yPercent: -7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="quality" className="overflow-hidden bg-[#fbfaf7] py-20 sm:py-28">
      {/* Quality and craftsmanship section */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-[#8a7132]">Quality and craftsmanship</p>
          <h2 className="section-title mt-4 max-w-3xl text-[#19202a]">
            Reliable optical products depend on careful details.
          </h2>
          <p className="body-copy mt-6 max-w-2xl text-[#5f6670]">
            Every product recommendation is shaped by clarity, comfort, durability,
            and fitting practicality. From lens coatings to frame balance, our
            process supports confident buying decisions.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {qualityPoints.map((point) => (
              <div
                key={point}
                className="quality-item flex items-center gap-3 rounded-2xl border border-[#ded7ca] bg-[#fffdf9] px-4 py-3 shadow-sm"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f2e5bd] text-sm font-bold text-[#6b5526]">
                  OK
                </span>
                <span className="text-sm font-semibold text-[#39424e]">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#ded7ca] bg-[#efe8dc] shadow-[0_28px_74px_rgba(25,32,42,0.12)]">
          <div ref={imageRef} className="absolute inset-0 scale-110">
            <Image
              src="/images/girl.jpg"
              alt="Model wearing premium optical glasses in a warm studio portrait"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
