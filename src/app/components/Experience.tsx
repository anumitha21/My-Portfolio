import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Code } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const experiences = [
  { title: "Caterpillar — Tech Hackathon (Semi-Finalist)", organization: "Caterpillar Inc", period: "2026", description: "", icon: Award },
  { title: "First Place — Cyber Security Hackathon 2025", organization: "Association with SP Office, Namakkal & StartupTN", period: "2025", description: "Won first place in Cyber Security Hackathon organized in association with the SP Office, Namakkal and StartupTN, showcasing expertise in cybersecurity solutions.", icon: Award },
  { title: "Third Place — Hack-N-ThonxAdya", organization: "Web Development and AI Automation Hackathon", period: "2025", description: "Secured 3rd place in Hack-N-ThonxAdya hackathon, focusing on web development and AI automation solutions.", icon: Award },
  { title: "LeetCode Achievement", organization: "LeetCode Platform", description: "Solved 200+ problems | Max Rating: 1488 | Global Rank: 448,155.", icon: Code },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">05</div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            Experience & <span className="text-[#0e7490]">Achievements</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-8 top-0 w-0.5 bg-[#0e7490]/20 hidden md:block" initial={{ height: 0 }} animate={isInView ? { height: "100%" } : {}} transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }} />
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.3 + index * 0.15, type: "spring", stiffness: 90 }} className="relative">
                  <div className="absolute left-6 top-6 hidden md:block z-10">
                    <motion.div className="w-5 h-5 bg-[#0e7490] border-4 border-[#FAFAF8]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)", boxShadow: "0 0 10px rgba(14, 116, 144,0.35)" }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }} />
                  </div>
                  <TiltCard maxTilt={3} clip="tr" className="md:ml-20 bg-white p-6 border border-[#0e7490]/10 hover:border-[#0e7490]/30 transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <motion.div className="p-2.5 bg-[#0e7490] shrink-0" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} whileHover={{ rotate: 90, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-black text-[#211C2B]">{exp.title}</h3>
                          <span className="text-xs font-bold bg-[#0e7490]/10 text-[#0e7490] border border-[#0e7490]/25 px-2.5 py-1 shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-[#0e7490] text-sm font-semibold mb-1">{exp.organization}</p>
                        {exp.description && <p className="text-[#6B6478] text-sm leading-relaxed">{exp.description}</p>}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
