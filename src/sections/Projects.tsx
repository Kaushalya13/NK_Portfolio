// src/sections/Projects.tsx
"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";


const portfolioItems = [
  { 
    id: 1, 
    src: "https://cdn.elearningindustry.com/wp-content/uploads/2016/12/challenges-benefits-of-learning-management-systems.png", 
    title: "LMS - Learning Management System", 
    desc: "A Learning Management System for universities and institutes to manage courses, assignments, and student progress with secure authentication and role-based access.", 
    tech: ["Angular", "Spring Boot", "MySQL", "Docker"], 
    href: "#" 
  },
  { 
    id: 2, 
    src: "https://i.pinimg.com/1200x/52/3b/a7/523ba7ef041e84a5ec10c6dd8610844c.jpg", 
    title: "Clothing website", 
    desc: "A clothing website platform for managing product listings, shopping cart, and secure checkout.", 
    tech: ["Next Js", "TypeScript", "Tailwind CSS"], 
    href: "https://github.com/Kaushalya13/Clothing-Website.git" 
  },
  { 
    id: 3, 
    src: "https://colorlib.com/wp/wp-content/uploads/sites/2/coffee-free-template.jpg.avif",
    title: "Coffee Shop (E-commerce)", 
    desc: "Developed a Coffee Shop POS and E-commerce website as a campus project, enabling online ordering and efficient in-store sales management.",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    href: "https://github.com/Kaushalya13/Coffee-Shop-FE.git" 
  },
  { 
    id: 4, 
    src: "https://i0.wp.com/tagrain.com/wp-content/uploads/2022/09/foot-8.png?w=1325&ssl=1", 
    title: "Shoe Shop (POS System)", 
    desc: "Built a POS system to manage inventory, sales, and customer transactions effectively for a retail shoe shop.",
    tech: ["Java", "JavaFX", "MySQL"],
    href: "https://github.com/Kaushalya13/Shoe_Shop_Front_End.git" 
  },
  { 
    id: 5, 
    src: "https://framerusercontent.com/images/i2GfBUX3y39OD6U7wLYGPiZezLw.png?width=1500&height=847", 
    title: "Highway Ticket Management", 
    desc: "Created a system to manage highway ticketing operations including issuing tickets, tracking vehicles, and processing payments.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    href: "https://github.com/Kaushalya13/Highway-Ticket-Management-System.git" 
  },
  { 
    id: 6, 
    src: "https://media.istockphoto.com/id/1005938962/photo/customer-buying-books.webp?s=2048x2048&w=is&k=20&c=x6qzf56bCSvXWejFnVSNvG7ZZ2XmAIwiuI3-6pR2svc=", 
    title: "Online Billing System - Pahana Edu", 
    desc: "Designed and developed an online billing platform to streamline financial transactions for educational institutions.",
    tech: ["Java EE", "JSP", "CSS", "MySQL"],
    href: "https://github.com/Kaushalya13/OnlineBillingSystem-PahanaEdu.git" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-800">
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-12">
          MY <span style={{ color: "var(--accent)" }}>PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{item.desc}</p>
                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2">
                  {item.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
