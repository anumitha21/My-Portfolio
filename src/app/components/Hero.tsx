import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import profileImage from "@/imports/image-0.png";
import resumePDF from "@/imports/Anumitha_resume.pdf";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const ROLE = "Passionate AI & Data Engineer";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < ROLE.length) {
      timeout = setTimeout(() => setDisplayed(ROLE.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === ROLE.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(ROLE.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => setDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-[#121212]">

      <BackgroundEffects />

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.p
              className="text-[#ffffff]/60 text-base font-black mb-3 tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#ffffff] mb-4 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Anumitha V
            </motion.h1>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="bg-[#690092] text-[#ffffff] font-black text-3xl sm:text-4xl px-4 py-1.5 rounded-xl inline-flex items-center gap-1">
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-7 bg-[#ffffff] ml-0.5"
                />
              </span>
            </motion.div>

            <motion.p
              className="text-[#ffffff]/70 mb-8 max-w-lg leading-relaxed text-base font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Passionate about building scalable Data Pipelines and Production AI Systems — pushing the boundaries of Machine Learning and Artificial Intelligence.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(105,0,146,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#690092] text-white font-bold px-8 py-3 rounded-xl text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </motion.button>
              <motion.a
                href={resumePDF}
                download="Anumitha_resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(105,0,146,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-[#690092] text-white hover:bg-[#690092] font-bold px-8 py-3 rounded-xl text-base flex items-center gap-2 transition-all duration-200"
              >
                <Download className="h-4 w-4" /> Download CV
              </motion.a>
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
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#690092]/20 border-2 border-[#690092] text-white hover:bg-[#690092] transition-all shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-[#ffffff]/20"
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-3xl border border-[#690092]/40"
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              {/* Yellow offset card */}
              <motion.div
                className="absolute -bottom-5 -right-5 w-full h-full bg-[#690092]/20 rounded-3xl border-2 border-[#690092]"
                animate={{ x: [0, 3, 0], y: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(105,0,146,0.4)" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-[#690092]/60 shadow-2xl"
              >
                <img src={profileImage} alt="Anumitha V" className="w-full h-full object-cover" />
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
              </motion.div>
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
        <span className="text-[#ffffff]/50 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-[#ffffff]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}




