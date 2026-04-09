import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import resumePDF from "@/imports/Anumitha_resume.pdf";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const links = [
  { label: "Gmail", value: "anumitha5831@gmail.com", href: "mailto:anumitha5831@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/anumitha-v", href: "https://www.linkedin.com/in/anumitha-v-1a5b29313/", icon: Linkedin },
  { label: "GitHub", value: "github.com/anumitha21", href: "https://github.com/anumitha21", icon: Github },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      <BackgroundEffects />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#690092]/8 rounded-full pointer-events-none" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-lg mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact <span className="text-[#690092]">Me</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#690092] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="flex flex-col gap-4 relative">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a key={item.label} href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 8, boxShadow: "0 12px 32px rgba(105,0,146,0.25)" }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1e1e1e] border border-[#690092]/20 hover:border-[#690092]/60 group transition-all"
              >
                <motion.div className="p-2.5 bg-[#690092] rounded-xl" whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs font-black text-white/30 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold text-white/80 group-hover:text-[#9b33c4] transition-colors">{item.value}</p>
                </div>
              </motion.a>
            );
          })}

          <motion.a href={resumePDF} download="Anumitha_resume.pdf"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(105,0,146,0.5)" }} whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#690092] text-white font-black text-base mt-2 transition-all"
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <Download className="h-5 w-5" />
            </motion.div>
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}

