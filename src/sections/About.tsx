// src/sections/About.tsx
"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImage from "@/assets/images/p1.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-12">
          ABOUT <span style={{ color: "var(--accent)" }}>ME</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Circle Image */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gray-800 shadow-xl">
              <Image
                src={aboutImage}
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Circles */}
            <span
              className="absolute -top-6 -left-6 w-16 h-16 rounded-full"
              style={{ background: "var(--accent)" }}
            ></span>
            <span
              className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full"
              style={{ background: "var(--accent)" }}
            ></span>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Sub Heading */}
            <h3 className="text-3xl font-bold text-gray-100">
              B.Sc. Software Engineering Student
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              I am a dedicated and responsible developer with a strong passion
              for learning and self-improvement. I enjoy exploring new
              technologies and applying my knowledge to create efficient and
              user-friendly applications.
            </p>

            {/* Info Box */}
            <div className="bg-gray-800 p-6 rounded-xl grid grid-cols-1 md:grid-cols-1 gap-4 text-gray-300">
              <p>
                <span className="font-bold text-gray-100">Name:</span> Niwanthi
                Kaushalya
              </p>
              <p>
                <span className="font-bold text-gray-100">University:</span>{" "}
                Cardiff Metropolitan University - (ICBT Campus)
              </p>
              <p>
                <span className="font-bold text-gray-100">Email:</span>{" "}
                nimanthikaushalya13@gmail.com
              </p>
              <p>
                <span className="font-bold text-gray-100">Phone:</span> +94 760
                578 949
              </p>
              <p>
                <span className="font-bold text-gray-100">From:</span> Dodangoda,
                Kalutara
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-gray-900 transition duration-300"
                style={{ background: "var(--accent)" }}
              >
                Contact Me
              </a>
              <a
                href="/Niwanthi Kaushalya Resume.pdf"
                download="Niwanthi_Kaushalya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold border transition duration-300"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
