import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layers, Database, Cpu, Wrench, ServerCrash } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

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
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      <BackgroundEffects />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-[#690092]/10 rounded-full pointer-events-none"
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
          <h2 className="text-4xl sm:text-5xl font-black text-[#ffffff] mb-4">
            Technical{" "}
            <motion.span
              className="bg-[#690092] px-3 rounded-xl inline-block"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ originX: 0 }}
            >
              Skills
            </motion.span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-[#ffffff] mx-auto"
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
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(105,0,146,0.2)" }}
                className="bg-[#690092] rounded-2xl p-5 border-2 border-[#ffffff]/10 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-2 rounded-xl bg-[#ffffff]"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-4 w-4 text-[#690092]" />
                  </motion.div>
                  <h3 className="font-black text-sm text-[#ffffff] uppercase tracking-wide">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: i * 0.07 + j * 0.04, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#ffffff] text-[#690092] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




