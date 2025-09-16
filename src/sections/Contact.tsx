// src/sections/Contact.tsx
"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FormField from "@/components/FormField";

// --- SVG Icons for Form and Links ---

// User Icon for Name Fields
const UserIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
// Email Icon
const EmailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
// Phone Icon
const PhoneIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
// Pencil Icon for Message Area
const PencilIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;

// --- Social Media Icons ---
const InstagramIcon = <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0 1.441c-3.141 0-3.506.012-4.724.068-2.697.123-3.91 1.339-4.029 4.029-.056 1.218-.067 1.583-.067 4.724s.011 3.506.067 4.724c.119 2.69 1.332 3.906 4.029 4.029 1.218.056 1.583.067 4.724.067s3.506-.011 4.724-.067c2.697-.123 3.91-1.339 4.029-4.029.056-1.218.067-1.583.067-4.724s-.011-3.506-.067-4.724c-.119-2.69-1.332-3.906-4.029-4.029-1.218-.056-1.583-.067-4.724-.067zm0 5.831a3.566 3.566 0 100 7.132 3.566 3.566 0 000-7.132zm0 5.716a2.15 2.15 0 110-4.3 2.15 2.15 0 010 4.3zm5.716-6.848a.858.858 0 100 1.716.858.858 0 000-1.716z"></path></svg>;
const FacebookIcon = <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>;
const TwitterIcon = <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>;

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-gray-300">
      <AnimatedSection className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Links */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-widest">NIWANTHI KAUSHALYA.</h3>
              <p className="text-sm uppercase tracking-wider text-gray-400">Software Engineer</p>
              <div className="flex space-x-4 mt-4 text-gray-300">
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{FacebookIcon}</a>
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{InstagramIcon}</a>
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{TwitterIcon}</a>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-2">Navigate</h4>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#home" className="hover:text-[var(--accent)]">Home</a></li>
                  <li><a href="#projects" className="hover:text-[var(--accent)]">Projects</a></li>
                  <li><a href="#about" className="hover:text-[var(--accent)]">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Quick Links</h4>
                 <ul className="space-y-1 text-gray-400">
                  <li><a href="#resume" className="hover:text-[var(--accent)]">My Resume</a></li>
                  <li><button className="font-bold text-white hover:text-[var(--accent)] transition-colors">INQUIRE →</button></li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                    {PhoneIcon}
                    <span>+94 760 578 949</span>
                </div>
                 <div className="flex items-center space-x-2 text-gray-400">
                    {EmailIcon}
                    <span>nimanthikaushalya13@gmail.com</span>
                </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-gray-800 p-8 md:p-12 rounded-lg border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Inquire</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField icon={UserIcon} type="text" placeholder="First Name" name="firstName" />
                <FormField icon={UserIcon} type="text" placeholder="Last Name" name="lastName" />
              </div>
              <FormField icon={EmailIcon} type="email" placeholder="Email Address" name="email" />
              <FormField icon={PhoneIcon} type="tel" placeholder="Phone Number" name="phone" />
              <FormField icon={PencilIcon} type="textarea" placeholder="Let us know how we can help..." name="message" />
              <button
                type="submit"
                className="w-full py-4 rounded-md font-bold text-white uppercase tracking-wider border-2 border-[var(--accent)] bg-[var(--accent)]/20 hover:bg-[var(--accent)]/30 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}