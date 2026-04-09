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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}