// src/sections/AdditionalInfo.tsx
"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";

// Data for your additional info
const additionalInfo = [
  "Executive Member - IJSE Student Committee - 2023 / 2024",
  "Participated in Innovesta 2023, organized by IJSE, for outstanding in software development.",
];

// An icon for the list items
const StarIcon = (
  <svg className="w-5 h-5 text-[var(--accent)] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.372 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.372-2.45a1 1 0 00-1.175 0l-3.372 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.054 9.384c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69L9.049 2.927z"></path>
  </svg>
);

export default function AdditionalInfo() {
  return (
    <section id="additional-info" className="py-24 bg-gray-800">
      <AnimatedSection className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-12">
          ADDITIONAL INFORMATION
        </h2>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <ul className="space-y-4">
            {additionalInfo.map((item) => (
              <li key={item} className="flex items-start text-gray-300 text-lg">
                {StarIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </section>
  );
}