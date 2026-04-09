import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Certificates } from "@/app/components/Certificates";
import { Projects } from "@/app/components/Projects";
import { Experience } from "@/app/components/Experience";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "@/app/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#ffffff] overflow-x-hidden">

      <Navigation />
      <main>
        <Hero />
        {/* Wave divider */}
        <div className="bg-[#121212] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#8000b2" fillOpacity="0.15" />
          </svg>
        </div>
        <About />
        <div className="bg-[#121212] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,0 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#1a1a1a" />
          </svg>
        </div>
        <Skills />
        <div className="bg-[#1a1a1a] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,0 1080,40 1440,20 L1440,40 L0,40 Z" fill="#121212" />
          </svg>
        </div>
        <Projects />
        <div className="bg-[#121212] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#121212" />
          </svg>
        </div>
        <Experience />
        <div className="bg-[#121212] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,0 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#1a1a1a" />
          </svg>
        </div>
        <Certificates />
        <div className="bg-[#1a1a1a] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,0 1080,40 1440,20 L1440,40 L0,40 Z" fill="#121212" />
          </svg>
        </div>
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}



