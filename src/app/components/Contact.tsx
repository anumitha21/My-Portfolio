import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import resumePDF from "@/imports/Anumitha_resume.pdf";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { Magnetic } from "@/app/components/Magnetic";

const links = [
  { label: "Gmail", value: "anumitha5831@gmail.com", href: "mailto:anumitha5831@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/anumitha-v", href: "https://www.linkedin.com/in/anumitha-v-1a5b29313/", icon: Linkedin },
  { label: "GitHub", value: "github.com/anumitha21", href: "https://github.com/anumitha21", icon: Github },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF5F6] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.06] leading-none pointer-events-none select-none">07</div>

      <div className="max-w-lg mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            Contact <span className="text-[#0e7490]">Me</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="flex flex-col gap-4 relative">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a key={item.label} href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 8, boxShadow: "0 10px 26px rgba(14, 116, 144,0.16)" }}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
                className="flex items-center gap-4 p-4 bg-white border border-[#0e7490]/10 hover:border-[#0e7490]/35 group transition-all shadow-sm"
              >
                <motion.div className="p-2.5 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} whileHover={{ rotate: 90, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs font-black text-[#211C2B]/40 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold text-[#211C2B]/85 group-hover:text-[#0e7490] transition-colors">{item.value}</p>
                </div>
              </motion.a>
            );
          })}

          <Magnetic strength={0.15} className="block mt-2">
            <motion.a href={resumePDF} download="Anumitha_resume.pdf"
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 26px rgba(14, 116, 144,0.3)" }} whileTap={{ scale: 0.97 }}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
              className="flex items-center justify-center gap-3 p-4 bg-[#0e7490] text-white font-black text-base w-full transition-shadow"
            >
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <Download className="h-5 w-5" />
              </motion.div>
              Download CV
            </motion.a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
