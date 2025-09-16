"use client";

import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import profileImage from "@/assets/images/p2.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-84px)] flex items-center bg-gray-900"
      style={{ background: "#1a202c" }} 
    >
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <AnimatedSection className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-50 leading-tight">
            I&apos;m Niwanthi
            <span className="text-blue-400"> Kaushalya</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A passionate Software Engineering student focused on Quality Assurance and Frontend Development.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-bold text-gray-900 uppercase tracking-wider transition-all duration-300 hover:brightness-110 bg-blue-500"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-semibold text-gray-200 uppercase tracking-wider border-2 border-gray-600 transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              My Projects
            </a>
          </div>
        </AnimatedSection>

        {/* Right Profile Image */}
        <AnimatedSection className="flex justify-center relative">
          <div className="relative w-full max-w-sm h-[450px] sm:h-[550px] rounded-[40px] overflow-hidden shadow-2xl">
            {/* Solid background behind image */}
            <div className="absolute inset-0 bg-[#2d3748] rounded-[40px] z-0"></div>

            {/* Profile Image */}
            <Image
              src={profileImage}
              alt="Niwanthi Kaushalya"
              className="relative z-10 rounded-[40px]"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
