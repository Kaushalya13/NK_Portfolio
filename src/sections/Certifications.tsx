// src/sections/Certifications.tsx
"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image"; 
import AnimatedSection from "@/components/AnimatedSection";
import CertificateModal from "@/components/CertificateModal";

// --- IMPORT YOUR LOCAL IMAGES HERE ---
import uiUxBeginner from "@/assets/images/ui/ux_beginner.jpg";
import frontEndHtml from "@/assets/images/ui/frontend.jpg";

// New data structure for your certifications using imported images
const certifications = [
  {
    title: "UI / UX for Beginners",
    provider: "Great Learning Academy",
    date: "On March 2024",
    imgSrc: uiUxBeginner, 
  },
  {
    title: "Front End Development - HTML",
    provider: "Great Learning Academy",
    date: "On August 2024",
    imgSrc: frontEndHtml,
  },
];

export default function Certifications() {
  // Update state to handle the image object type
  const [selectedCert, setSelectedCert] = useState<string | StaticImageData | null>(null);

  return (
    <>
      <section id="certifications" className="py-24 bg-gray-800">
        <AnimatedSection className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-100 mb-12">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={cert.imgSrc}
                    alt={cert.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                    placeholder="blur" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{cert.title}</h3>
                  <p className="text-gray-400">{cert.provider}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <button
                    onClick={() => setSelectedCert(cert.imgSrc)}
                    className="w-full py-2 rounded-md font-bold text-gray-900 uppercase tracking-wider bg-[var(--accent)] transition-all duration-300 hover:brightness-110"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* The Modal for displaying the certificate */}
      <CertificateModal 
        imgSrc={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </>
  );
}