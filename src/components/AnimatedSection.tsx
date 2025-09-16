// src/components/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}