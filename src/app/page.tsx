import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import Resume from "@/sections/Resum";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import AdditionalInfo from "@/sections/AdditionalInfo";

export default function Page() {
  return(
    <>
      <Navbar />
      <main>
       <Home />
        <About />
        <Resume />
        <Certifications />
        <Projects />
        <AdditionalInfo /> {/* <-- Add the new section here */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}