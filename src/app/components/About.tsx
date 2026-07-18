import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Users, Lightbulb } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const softSkills = ["Collaboration", "Communication", "Leadership", "Problem-Solving", "Creative Thinking"];
const education = [
  { degree: "B.E — Computer Science & Engineering", school: "Sri Eshwar College of Engineering", period: "2024 – 2028" },
  { degree: "Higher Secondary Education", school: "Green Park International Sr. Sec. School", period: "2022 – 2024" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">02</div>
      <motion.div className="hidden lg:block absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-[#0e7490]/25 pointer-events-none" animate={{ rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="hidden lg:block absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-[#0e7490]/25 pointer-events-none" animate={{ rotate: [0, -90, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            About <span className="text-[#0e7490]">Me</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <TiltCard
          maxTilt={3}
          clip="bl"
          initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 sm:p-10 shadow-lg shadow-[#0e7490]/5 border border-[#0e7490]/10 relative overflow-hidden mb-6"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#0e7490] to-[#06b6d4] pointer-events-none" />
          <div className="relative space-y-5 pl-3">
            <p className="text-[#4A4456] text-lg leading-relaxed">I'm a 3rd yer=arComputer Science undergraduate focused on building real-world AI systems that integrate Artificial Intelligence, Data Engineering, and strong product thinking. I specialize in developing end-to-end applications such as RAG-based systems, Agentic workflows, and intelligent platforms — working across the full pipeline from data processing and retrieval to reasoning and final outputs.</p>
            <p className="text-[#4A4456] text-lg leading-relaxed">Beyond engineering, I bring a strong sense of design and user experience into my work, aiming to create products that are not only functional but also intuitive and engaging. I'm currently deepening my expertise in data engineering and advanced AI architectures, with a focus on building production-ready systems that deliver meaningful real-world value.</p>
          </div>
        </TiltCard>

        <div className="grid md:grid-cols-2 gap-6">
          <TiltCard maxTilt={5} clip="bl" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 90 }}
            className="bg-white p-6 shadow-md shadow-[#0e7490]/5 border border-[#0e7490]/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="p-2.5 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} whileHover={{ rotate: 90 }} transition={{ type: "spring", stiffness: 300 }}>
                <Users className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="font-black text-[#211C2B] text-lg">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.button key={skill}
                  initial={{ opacity: 0, scale: 0.7 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08, type: "spring" }}
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 6px 16px rgba(14, 116, 144,0.2)" }} whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSkill(skill)} onHoverEnd={() => setHoveredSkill(null)}
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                  className={`px-4 py-2 font-bold text-sm border-2 border-[#0e7490] transition-all ${hoveredSkill === skill ? "bg-[#0e7490] text-white" : "bg-transparent text-[#0e7490]"}`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </TiltCard>

          <TiltCard maxTilt={5} clip="tr" initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 90 }}
            className="bg-white p-6 shadow-md shadow-[#0e7490]/5 border border-[#0e7490]/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="p-2.5 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} whileHover={{ rotate: 90 }} transition={{ type: "spring", stiffness: 300 }}>
                <Lightbulb className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="font-black text-[#211C2B] text-lg">Education</h3>
            </div>
            <div className="relative">
              <motion.div className="absolute left-[9px] top-2 w-0.5 bg-[#0e7490]/20" initial={{ height: 0 }} animate={isInView ? { height: "calc(100% - 8px)" } : {}} transition={{ duration: 0.8, delay: 0.7 }} />
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.65 + i * 0.15 }} whileHover={{ x: 4 }} className="flex gap-4 items-start">
                    <motion.div className="w-5 h-5 bg-[#0e7490] border-4 border-white shrink-0 mt-0.5 z-10" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }} />
                    <div>
                      <span className="text-xs font-black bg-[#0e7490]/10 text-[#0e7490] border border-[#0e7490]/25 px-2.5 py-0.5">{edu.period}</span>
                      <p className="font-black text-[#211C2B] text-sm mt-1">{edu.degree}</p>
                      <p className="text-[#6B6478] text-xs font-semibold">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
