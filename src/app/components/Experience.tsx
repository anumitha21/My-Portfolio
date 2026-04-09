import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Code } from "lucide-react";

const experiences = [
  {
    title: "Caterpillar — Tech Hackathon (Ongoing)",
    organization: "Caterpillar Inc",
    period: "2026",
    description: "",
    icon: Award,
  },
  {
    title: "First Place — Cyber Security Hackathon 2025",
    organization: "Association with SP Office, Namakkal & StartupTN",
    period: "2025",
    description: "Won first place in Cyber Security Hackathon organized in association with the SP Office, Namakkal and StartupTN, showcasing expertise in cybersecurity solutions.",
    icon: Award,
  },
  {
    title: "Third Place — Hack-N-ThonxAdya",
    organization: "Web Development and AI Automation Hackathon",
    period: "2025",
    description: "Secured 3rd place in Hack-N-ThonxAdya hackathon, focusing on web development and AI automation solutions.",
    icon: Award,
  },
  {
    title: "LeetCode Achievement",
    organization: "LeetCode Platform",
    period: "Ongoing",
    description: "Solved 100+ problems | Max Rating: 1488 | Global Rank: 448,155.",
    icon: Code,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#4DBBCF] overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-56 h-56 bg-[#FED43A]/10 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            Experience &{" "}
            <motion.span
              className="bg-[#FED43A] px-3 rounded-xl inline-block"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ originX: 0 }}
            >
              Achievements
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

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-[#0a1628]/30 hidden md:block"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + index * 0.15, type: "spring", stiffness: 90 }}
                  className="relative"
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-6 top-6 hidden md:block z-10">
                    <motion.div
                      className="w-5 h-5 bg-[#FED43A] border-4 border-[#0a1628] rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ x: 6, boxShadow: "0 16px 40px rgba(10,22,40,0.2)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="md:ml-20 bg-[#FED43A] rounded-2xl p-6 border-2 border-[#0a1628]/10 group"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-2.5 bg-[#0a1628] rounded-xl shrink-0"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-5 w-5 text-[#FED43A]" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-black text-[#0a1628]">{exp.title}</h3>
                          <span className="text-xs font-bold bg-[#0a1628] text-[#FED43A] px-2.5 py-1 rounded-full shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-[#0a1628]/70 text-sm font-semibold mb-1">{exp.organization}</p>
                        {exp.description && (
                          <p className="text-[#0a1628]/65 text-sm leading-relaxed">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
