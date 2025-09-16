// src/components/SkillCard.tsx
import React from "react";
import Image from "next/image";

interface SkillCardProps {
  imgSrc: string;
  name: string;
}

export default function SkillCard({ imgSrc, name }: SkillCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2">
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={imgSrc}
          alt={`${name} logo`}
          layout="fill"
          objectFit="contain" 
        />
      </div>
      <h4 className="text-lg font-semibold text-gray-200">{name}</h4>
    </div>
  );
}