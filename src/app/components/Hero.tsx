import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import profileImage from "@/imports/image-0.png";
import resumePDF from "@/imports/Anumitha_resume.pdf";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { GeometricMesh } from "@/app/components/GeometricMesh";
import { Magnetic } from "@/app/components/Magnetic";

const ROLES = ["Passionate AI Engineer", "Systems Thinker", "Curious Generalist"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 72);
    } else if (!deleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length - 1)), 38);
    } else if (deleting && displayed.length === 0) {
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentRole]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-[#FAFAF8]">

      <BackgroundEffects />
      <GeometricMesh />

      {/* Corner brackets — viewfinder feel */}
      <div className="hidden lg:block absolute top-10 left-10 w-10 h-10 border-t-2 border-l-2 border-[#0e7490]/35 pointer-events-none" />
      <div className="hidden lg:block absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 border-[#0e7490]/35 pointer-events-none" />

      {/* Big faint index numeral */}
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">
        01
      </div>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />
              <p className="text-[#0e7490] text-sm font-black tracking-[0.25em] uppercase">
                Hi, I'm
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#211C2B] mb-4 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Anumitha V
            </motion.h1>

            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span
                className="bg-[#0e7490] text-white font-black text-2xl sm:text-3xl px-4 py-1.5 inline-flex items-center gap-1 min-w-[260px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
              >
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-[#ffffff] ml-0.5 shrink-0"
                />
              </span>
            </motion.div>

            {/* One-liner hook */}
            <motion.p
              className="text-[#4A4456] mb-8 max-w-lg leading-relaxed text-base font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I build AI systems that work in the real world — and ask questions about everything else.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Magnetic>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 10px 26px rgba(14,116,144,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#0e7490] text-white font-bold px-8 py-3 text-base"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </motion.button>
              </Magnetic>
              <Magnetic>
                <motion.a
                  href={resumePDF}
                  download="Anumitha_resume.pdf"
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 20px rgba(14,116,144,0.18)" }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-[#0e7490] text-[#0e7490] hover:bg-[#0e7490] hover:text-white font-bold px-8 py-3 text-base flex items-center gap-2 transition-all duration-200"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}
                >
                  <Download className="h-4 w-4" /> Download CV
                </motion.a>
              </Magnetic>
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {[
                { href: "https://github.com/anumitha21", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/anumitha-v-1a5b29313/", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }, i) => (
                <Magnetic key={label} strength={0.5}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="w-12 h-12 flex items-center justify-center bg-[#0e7490]/8 border-2 border-[#0e7490] text-[#0e7490] hover:bg-[#0e7490] hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                </Magnetic>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, type: "spring", stiffness: 80 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Rotating angular frame */}
              <motion.div
                className="absolute -inset-6 border-2 border-[#0e7490]/25"
                style={{ clipPath: "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)" }}
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-10 border border-[#06b6d4]/30"
                style={{ clipPath: "polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)" }}
                animate={{ rotate: [0, -3, 0, 3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              {/* Offset accent panel */}
              <motion.div
                className="absolute -bottom-5 -right-5 w-full h-full bg-[#0e7490]/10 border-2 border-[#0e7490]/40"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))" }}
                animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 24px 50px rgba(14,116,144,0.24)" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden border-2 border-[#0e7490]/35 shadow-lg"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))" }}
              >
                <img src={profileImage} alt="Anumitha V" className="w-full h-full object-cover" />
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
              </motion.div>
              {/* Floating diamond accents */}
              <motion.div
                className="absolute -top-4 -left-4 w-6 h-6 bg-[#06b6d4]"
                style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
                animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[#4A4456]/70 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-[#0e7490]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
