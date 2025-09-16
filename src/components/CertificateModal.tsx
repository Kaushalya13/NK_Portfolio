// src/components/CertificateModal.tsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

interface CertificateModalProps {
  imgSrc: string | StaticImageData | null; // Allow both string and StaticImageData
  onClose: () => void;
}

export default function CertificateModal({ imgSrc, onClose }: CertificateModalProps) {
  if (!imgSrc) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl h-auto bg-gray-900 p-2 rounded-lg cursor-default"
        >
          <Image
            src={imgSrc}
            alt="Certificate"
            width={1200}
            height={800}
            objectFit="contain"
            className="rounded"
          />
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-10 h-10 bg-[var(--accent)] text-gray-900 rounded-full flex items-center justify-center font-bold text-xl"
          >
            &times;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}