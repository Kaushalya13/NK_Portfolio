// src/components/ContactInfoCard.tsx
import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

export default function ContactInfoCard({
  icon,
  title,
  detail,
}: ContactInfoCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ background: "var(--accent)" }}
      >
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-100 mb-2">{title}</h4>
      <p className="text-gray-400">{detail}</p>
    </div>
  );
}