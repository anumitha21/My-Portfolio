import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import profileImage from "@/imports/image-0.png";
import resumePDF from "@/imports/Anumitha V.pdf";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "#4DBBCF" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "#FED43A" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none"
        style={{ background: "#4DBBCF" }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="text-primary text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Anumitha V
            </motion.h1>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >AI and Data Engineer</motion.h2>

            <motion.p
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >Passionate about building&nbsp;&nbsp;scalable Data Pipelines and ProductionAISystemspushing the boundaries of Machine Learning and&nbsp;&nbsp;&nbsp;Artificial Intelligence</motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a href={resumePDF} download="Anumitha_V_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-foreground hover:bg-primary hover:border-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-foreground hover:bg-primary hover:border-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anumitha@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-foreground hover:bg-primary hover:border-primary transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] mx-auto">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #4DBBCF 0%, #FED43A 100%)" }} />
              <div className="absolute -inset-1 rounded-full blur-xl opacity-20" style={{ background: "#4DBBCF" }} />
              <img
                src={profileImage}
                alt="Anumitha V - AI Developer"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}