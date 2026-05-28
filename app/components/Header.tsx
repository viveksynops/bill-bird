"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Products", "Quality", "Testimonials", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#ded7ca]/80 bg-[#fbfaf7]/86 shadow-[0_18px_50px_rgba(25,32,42,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Header and navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-[#d7bd78]/70 bg-[#f7efd9] text-sm font-semibold text-[#19202a] shadow-sm">
            BB
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-[0.08em] text-[#19202a]">
              BILL BIRD
            </span>
            <span className="mt-1 text-[11px] font-medium text-[#73706a]">
              Optical Glass Studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#4e5661] transition-colors hover:text-[#19202a]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#19202a] px-5 py-3 text-sm font-semibold text-[#fbfaf7] shadow-[0_14px_34px_rgba(25,32,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2a3442] lg:inline-flex"
        >
          Send Inquiry
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-[#ded7ca] bg-[#fbfaf7]/80 text-[#19202a] shadow-sm lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mx-5 mb-4 rounded-[2rem] border border-[#ded7ca] bg-[#fbfaf7] p-3 shadow-[0_18px_50px_rgba(25,32,42,0.12)] sm:mx-8 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block rounded-full px-5 py-3 text-sm font-semibold text-[#39424e] transition hover:bg-[#f0eadf]"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-full bg-[#19202a] px-5 py-3 text-center text-sm font-semibold text-[#fbfaf7]"
            >
              Get Quote
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
