import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { GraduationCap, Users, Lightbulb } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const softSkills = ["Collaboration", "Communication", "Problem-Solving", "Creative Thinking"];

const education = [
  {
    degree: "B.E — Computer Science & Engineering",
    school: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education",
    school: "Green Park International Sr. Sec. School",
    period: "2022 – 2024",
    icon: GraduationCap,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#4DBBCF] overflow-hidden">
      <BackgroundEffects variant="teal" />
      {/* existing decorative shapes stay */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-[#FED43A]/20 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-[#0a1628]/10 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] mb-4">
            About{" "}
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

        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="bg-[#FED43A] rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#0a1628]/10 relative overflow-hidden mb-6"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative space-y-5">
            <p className="text-[#0a1628] text-lg leading-relaxed">
              I'm a Computer Science undergraduate focused on building real-world AI systems that integrate Artificial Intelligence, Data Engineering, and strong product thinking. I specialize in developing end-to-end applications such as RAG-based systems, Agentic workflows, and intelligent platforms — working across the full pipeline from data processing and retrieval to reasoning and final outputs.
            </p>
            <p className="text-[#0a1628] text-lg leading-relaxed">
              Beyond engineering, I bring a strong sense of design and user experience into my work, aiming to create products that are not only functional but also intuitive and engaging. I'm currently deepening my expertise in data engineering and advanced AI architectures, with a focus on building production-ready systems that deliver meaningful real-world value.
            </p>
          </div>
        </motion.div>

        {/* Bottom grid — Soft Skills + Education */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 90 }}
            className="bg-[#FED43A] rounded-3xl p-6 shadow-xl border-2 border-[#0a1628]/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="p-2.5 bg-[#0a1628] rounded-xl"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="h-5 w-5 text-[#FED43A]" />
              </motion.div>
              <h3 className="font-black text-[#0a1628] text-lg">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.button
                  key={skill}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08, type: "spring" }}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative px-4 py-2 rounded-full font-bold text-sm transition-all"
                  style={{
                    background: hoveredSkill === skill ? "#0a1628" : "transparent",
                    color: hoveredSkill === skill ? "#FED43A" : "#0a1628",
                    border: "2px solid #0a1628",
                  }}
                >
                  {hoveredSkill === skill && (
                    <motion.span
                      layoutId="skill-bg"
                      className="absolute inset-0 bg-[#0a1628] rounded-full"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {skill}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 90 }}
            className="bg-[#FED43A] rounded-3xl p-6 shadow-xl border-2 border-[#0a1628]/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="p-2.5 bg-[#0a1628] rounded-xl"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Lightbulb className="h-5 w-5 text-[#FED43A]" />
              </motion.div>
              <h3 className="font-black text-[#0a1628] text-lg">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-[9px] top-2 w-0.5 bg-[#0a1628]/25"
                initial={{ height: 0 }}
                animate={isInView ? { height: "calc(100% - 8px)" } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 + i * 0.15 }}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 items-start"
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#0a1628] border-4 border-[#FED43A] shrink-0 mt-0.5 z-10"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    />
                    <div>
                      <span className="text-xs font-black bg-[#0a1628] text-[#FED43A] px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      <p className="font-black text-[#0a1628] text-sm mt-1">{edu.degree}</p>
                      <p className="text-[#0a1628]/65 text-xs font-semibold">{edu.school}</p>
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
