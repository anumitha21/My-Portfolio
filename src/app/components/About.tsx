import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Users, Lightbulb } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const softSkills = ["Collaboration", "Communication", "Problem-Solving", "Creative Thinking"];
const education = [
  { degree: "B.E — Computer Science & Engineering", school: "Sri Eshwar College of Engineering", period: "2024 – 2028" },
  { degree: "Higher Secondary Education", school: "Green Park International Sr. Sec. School", period: "2022 – 2024" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      <BackgroundEffects />
      <motion.div className="absolute top-10 right-10 w-32 h-32 bg-[#8000b2]/15 rounded-full pointer-events-none" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-10 left-10 w-20 h-20 bg-[#8000b2]/10 rounded-full pointer-events-none" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="text-[#8000b2]">Me</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#8000b2] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} whileHover={{ y: -4 }}
          className="bg-[#1e1e1e] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#8000b2]/20 relative overflow-hidden mb-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8000b2]/5 via-transparent to-transparent pointer-events-none rounded-3xl" />
          <div className="relative space-y-5">
            <p className="text-white/75 text-lg leading-relaxed">I'm a Computer Science undergraduate focused on building real-world AI systems that integrate Artificial Intelligence, Data Engineering, and strong product thinking. I specialize in developing end-to-end applications such as RAG-based systems, Agentic workflows, and intelligent platforms — working across the full pipeline from data processing and retrieval to reasoning and final outputs.</p>
            <p className="text-white/75 text-lg leading-relaxed">Beyond engineering, I bring a strong sense of design and user experience into my work, aiming to create products that are not only functional but also intuitive and engaging. I'm currently deepening my expertise in data engineering and advanced AI architectures, with a focus on building production-ready systems that deliver meaningful real-world value.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 90 }}
            className="bg-[#1e1e1e] rounded-3xl p-6 shadow-xl border border-[#8000b2]/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="p-2.5 bg-[#8000b2] rounded-xl" whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <Users className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="font-black text-white text-lg">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.button key={skill}
                  initial={{ opacity: 0, scale: 0.7 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 15px rgba(128,0,178,0.4)" }} whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSkill(skill)} onHoverEnd={() => setHoveredSkill(null)}
                  className={`px-4 py-2 rounded-full font-bold text-sm border-2 border-[#8000b2] transition-all ${hoveredSkill === skill ? "bg-[#8000b2] text-white" : "bg-transparent text-white/80"}`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 90 }}
            className="bg-[#1e1e1e] rounded-3xl p-6 shadow-xl border border-[#8000b2]/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="p-2.5 bg-[#8000b2] rounded-xl" whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <Lightbulb className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="font-black text-white text-lg">Education</h3>
            </div>
            <div className="relative">
              <motion.div className="absolute left-[9px] top-2 w-0.5 bg-[#8000b2]/30" initial={{ height: 0 }} animate={isInView ? { height: "calc(100% - 8px)" } : {}} transition={{ duration: 0.8, delay: 0.7 }} />
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.65 + i * 0.15 }} whileHover={{ x: 4 }} className="flex gap-4 items-start">
                    <motion.div className="w-5 h-5 rounded-full bg-[#8000b2] border-4 border-[#1e1e1e] shrink-0 mt-0.5 z-10" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }} />
                    <div>
                      <span className="text-xs font-black bg-[#8000b2]/20 text-[#a033cc] border border-[#8000b2]/30 px-2.5 py-0.5 rounded-full">{edu.period}</span>
                      <p className="font-black text-white text-sm mt-1">{edu.degree}</p>
                      <p className="text-white/45 text-xs font-semibold">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


