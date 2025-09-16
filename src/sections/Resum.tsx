// src/sections/Resume.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion components
import AnimatedSection from "@/components/AnimatedSection";
import SkillCard from "@/components/SkillCard";

// --- Data for Education & Experience ---
const education = [
  {
    year: "May 2025 - Present",
    institution: "ICBT Campus (Cardiff Metropolitan University)",
    degree: "BSc (Hons) Software Engineering",
  },
  {
    year: "Aug 2022 - April 2025",
    institution: "Institute of Software Engineering (IJSE)",
    degree: "Graduate Diploma in Software Engineering",
  },
];

const experience = [
  {
    year: "Nov 2024 - Mar 2025",
    company: "HCode Solutions Pvt Ltd",
    role: "Trainee Associate QA Engineer",
  },
  {
    year: "Sep 2024 - Nov 2024",
    company: "HCode Solutions Pvt Ltd",
    role: "Trainee Frontend Development",
  },
];

// --- CATEGORIZED SKILLS DATA WITH IMAGE URLS ---
const skills = {
  "Programming Languages": [
    { name: "Java", imgSrc: "https://i.pinimg.com/1200x/07/49/b8/0749b89936136f826c352867bb997a48.jpg" },
    { name: "JavaScript", imgSrc: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
    { name: "TypeScript", imgSrc: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { name: "Python", imgSrc: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "React", imgSrc: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "React Native", imgSrc: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Angular", imgSrc: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg" },
    { name: "Next.js", imgSrc: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "HTML5", imgSrc: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { name: "CSS3", imgSrc: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { name: "Bootstrap", imgSrc: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" },
    { name: "Tailwind CSS", imgSrc: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", imgSrc: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "Express.js", imgSrc: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    { name: "Spring Boot", imgSrc: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
  ],
  "Databases": [
    { name: "MySQL", imgSrc: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
    { name: "MongoDB", imgSrc: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  ],
  "Testing Tools": [
    { name: "Selenium", imgSrc: "data:image/png;base64,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" },
    { name: "Postman", imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ],
  "Design & PM": [
    { name: "Figma", imgSrc: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "Canva", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_m7sXyjSiCYD5jTl-clyLGjdEv6uXQKXgQdmsycq_Xlrm5DGDuEnEkc-7PNMyAkRuL8&usqp=CAU" },
    { name: "ClickUp", imgSrc: "data:image/png;base64,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" },
  ],
  "Version Controlling": [
    { name: "Git", imgSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "GitHub", imgSrc: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  ]
};

const skillCategories = Object.keys(skills);

export default function Resume() {
  const [activeTab, setActiveTab] = useState(skillCategories[0]);

  return (
    <section id="resume" className="py-24 bg-gray-900">
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-16">
          MY <span style={{ color: "var(--accent)" }}>RESUME</span>
        </h2>
        
        {/* -- Education & Experience -- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="p-6 bg-gray-800 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-gray-900 bg-[var(--accent)] inline-block px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </p>
                  <h4 className="text-xl font-bold text-gray-100">{item.degree}</h4>
                  <p className="text-gray-400">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="p-6 bg-gray-800 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-gray-900 bg-[var(--accent)] inline-block px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </p>
                  <h4 className="text-xl font-bold text-gray-100">{item.role}</h4>
                  <p className="text-gray-400">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -- Categorized Skills Section -- */}
        <div>
            <h3 className="text-center text-3xl font-bold text-gray-100 mb-8">Technical Skills</h3>
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === category
                      ? 'bg-[var(--accent)] text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skill Cards Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {skills[activeTab as keyof typeof skills].map((skill) => (
                  <div key={skill.name} className="w-36">
                    <SkillCard name={skill.name} imgSrc={skill.imgSrc} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
        </div>

      </AnimatedSection>
    </section>
  );
}