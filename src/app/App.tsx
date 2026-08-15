import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { HowIWork } from "@/app/components/HowIWork";
import { BeyondStack } from "@/app/components/BeyondStack";
import { Experience } from "@/app/components/Experience";
import { Certificates } from "@/app/components/Certificates";
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
        {/* Primary narrative sections */}
        <Hero />
        <About />
        <Divider from="bg-[#FAFAF8]" to="bg-[#FAFAF8]" />
        <Projects />
        <Divider from="bg-[#FAFAF8]" to="bg-[#EAF5F6]" />
        <HowIWork />
        <Divider from="bg-[#EAF5F6]" to="bg-[#FAFAF8]" />
        <BeyondStack />

        {/* Recruiter-facing sections — kept below narrative */}
        <Divider from="bg-[#FAFAF8]" to="bg-[#EAF5F6]" />
        <Experience />
        <Divider from="bg-[#EAF5F6]" to="bg-[#FAFAF8]" />
        <Certificates />

        <Divider from="bg-[#FAFAF8]" to="bg-[#EAF5F6]" />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
