// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niwanthi Kaushalya | Software Engineering Portfolio",
  description: "Final-year Software Engineering student specializing in QA and Frontend Development.",
  keywords: [
    "Niwanthi Kaushalya",
    "Portfolio",
    "Software Engineer",
    "QA Engineer",
    "Frontend Developer",
    "React",
    "Angular",
    "Java",
  ],
  authors: [{ name: "Niwanthi Kaushalya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}