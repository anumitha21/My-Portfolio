import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import resumePDF from "@/imports/Anumitha V.pdf";

const links = [
  {
    label: "Gmail",
    value: "anumitha5831@gmail.com",
    href: "mailto:anumitha5831@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anumitha-v",
    href: "https://linkedin.com/in/anumitha-v",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/anumitha",
    href: "https://github.com/anumitha",
    icon: Github,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />

          <div className="flex flex-col gap-4">
            {links.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-background/40 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Download CV */}
            <motion.a
              href={resumePDF}
              download="Anumitha_V_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium mt-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
