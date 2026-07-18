import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layers, Database, Cpu, Wrench, ServerCrash } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const skillCategories = [
  { label: "Languages", icon: Code2, skills: ["Python", "C", "C++"] },
  { label: "Frameworks", icon: Layers, skills: ["FastAPI", "LangChain", "LangGraph", "Scikit-Learn", "Streamlit", "Gradio"] },
  { label: "Big Data & Distributed Systems", icon: ServerCrash, skills: ["Apache Spark", "Apache Airflow", "Astronomer Cloud", "DataBricks", "Kafka"] },
  { label: "Core", icon: Cpu, skills: ["DSA", "OOPs", "SQL", "Machine Learning", "NLP", "Generative AI", "AI Agents", "RAG", "Multi-Agent Architecture", "Deep Agents", "Fine Tuning (Basics)"] },
  { label: "Tools & Platforms", icon: Wrench, skills: ["GitHub", "Git", "VS Code", "Postman", "Docker", "LangSmith", "Ollama", "HuggingFace", "n8n", "DataBricks", "AWS"] },
  { label: "Databases", icon: Database, skills: ["MongoDB", "ChromaDB", "Pinecone", "FAISS"] },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF5F6] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.06] leading-none pointer-events-none select-none">03</div>
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 border border-[#0e7490]/10 pointer-events-none"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            Technical{" "}
            <motion.span
              className="bg-[#0e7490] px-3 inline-block text-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))", originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Skills
            </motion.span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-[#0e7490] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <TiltCard
                key={cat.label}
                maxTilt={6}
                clip={i % 2 === 0 ? "bl" : "tr"}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
                className="bg-[#0e7490] p-5 border-2 border-white/10 transition-shadow duration-300 group cursor-default shadow-md shadow-[#0e7490]/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-2 bg-white"
                    style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
                    whileHover={{ rotate: 90, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-4 w-4 text-[#0e7490]" />
                  </motion.div>
                  <h3 className="font-black text-sm text-white uppercase tracking-wide">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: i * 0.07 + j * 0.04, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}
                      className="px-3 py-1 text-xs font-bold bg-white text-[#0e7490] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
