import { Hero } from "@/app/components/Hero";
import { Stats } from "@/app/components/Stats";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Certificates } from "@/app/components/Certificates";
import { Projects } from "@/app/components/Projects";
import { Experience } from "@/app/components/Experience";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { CustomCursor } from "@/app/components/CustomCursor";
import { Toaster } from "@/app/components/ui/sonner";

function Divider({ from, to }: { from: string; to: string }) {
  return (
    <div className={`relative h-10 ${from} overflow-hidden`}>
      <div
        className={`absolute inset-0 ${to}`}
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#211C2B] overflow-x-hidden">

      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Divider from="bg-[#FAFAF8]" to="bg-[#EAF5F6]" />
        <Skills />
        <Divider from="bg-[#EAF5F6]" to="bg-[#FAFAF8]" />
        <Projects />
        <Experience />
        <Divider from="bg-[#FAFAF8]" to="bg-[#EAF5F6]" />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
