import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import resumePDF from "@/imports/Anumitha V.pdf";
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
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#4DBBCF] overflow-hidden">
      <BackgroundEffects variant="teal" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FED43A]/10 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-lg mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            Contact{" "}
            <motion.span
              className="bg-[#FED43A] px-3 rounded-xl inline-block"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ originX: 0 }}
            >
              Me
            </motion.span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-[#0a1628] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <div className="flex flex-col gap-4 relative">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 8, boxShadow: "0 12px 32px rgba(10,22,40,0.2)" }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FED43A] border-2 border-[#0a1628]/10 group transition-all"
              >
                <motion.div
                  className="p-2.5 bg-[#0a1628] rounded-xl"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-5 w-5 text-[#FED43A]" />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs font-black text-[#0a1628]/50 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold text-[#0a1628]">{item.value}</p>
                </div>
              </motion.a>
            );
          })}

          <motion.a
            href={resumePDF}
            download="Anumitha_V_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(10,22,40,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0a1628] text-[#FED43A] font-black text-base mt-2 transition-all"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
