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
    <div className="min-h-screen bg-[#4DBBCF] text-[#0a1628] overflow-x-hidden">

      <Navigation />
      <main>
        <Hero />
        {/* Wave divider */}
        <div className="bg-[#4DBBCF] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#FED43A" fillOpacity="0.15" />
          </svg>
        </div>
        <About />
        <div className="bg-[#4DBBCF] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,0 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#3aa8bc" />
          </svg>
        </div>
        <Skills />
        <div className="bg-[#3aa8bc] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,0 1080,40 1440,20 L1440,40 L0,40 Z" fill="#4DBBCF" />
          </svg>
        </div>
        <Projects />
        <div className="bg-[#4DBBCF] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#4DBBCF" />
          </svg>
        </div>
        <Experience />
        <div className="bg-[#4DBBCF] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,0 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#3aa8bc" />
          </svg>
        </div>
        <Certificates />
        <div className="bg-[#3aa8bc] overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 40" className="w-full block" preserveAspectRatio="none">
            <path d="M0,20 C360,0 1080,40 1440,20 L1440,40 L0,40 Z" fill="#4DBBCF" />
          </svg>
        </div>
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
