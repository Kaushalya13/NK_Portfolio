// src/sections/Navbar.tsx
"use client";

import Image from "next/image";
import menuIcon from "@/assets/images/menu.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoText = "KAUSHALYA"; 

  return (
    <>
      <header className="py-4 lg:py-5 fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
        <div className="mx-auto flex w-full max-w-6xl px-6 items-center justify-between">
          <a href="#home" className="text-3xl font-bold text-gray-50 tracking-wider">
            {logoText}
          </a>

          <nav className="hidden lg:flex gap-x-8 font-semibold text-gray-300">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="hover:text-[var(--accent)] transition-colors uppercase text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <Image
                src={menuIcon}
                alt="menu"
                width={28}
                height={28}
                className="invert"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden bg-gray-900"
            >
              <div className="flex flex-col items-center gap-6 py-6 text-gray-200">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[var(--accent)] transition-colors font-semibold uppercase"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="pb-[72px] lg:pb-[84px]" />
    </>
  );
}