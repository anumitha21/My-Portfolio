import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const projects = [
  { title: "AutoBlogX", description: "An AI-powered automated blogging platform that generates, structures, and publishes content with minimal human intervention. The system leverages intelligent pipelines to transform ideas into complete blog posts.", tags: ["LangChain", "Groq", "FastAPI", "LangGraph"], github: "https://github.com/anumitha21/AutoBlogX" },
  { title: "Policy-Compliance", description: "A production-style AI system designed to analyze contracts against policy documents using a RAG-based pipeline. It performs retrieval, re-ranking, reasoning, and risk scoring to classify compliance.", tags: ["LangChain", "LangGraph", "ChromaDB", "BM25", "Cross-Encoder Reranker", "Groq", "FastAPI"], github: "https://github.com/anumitha21/Policy-Compilance" },
  { title: "SkyFlow-ETL", description: "An Apache Airflow-based data pipeline project designed to demonstrate real-world ETL orchestration. Extracts data from external APIs, transforms it into structured formats, and loads it into PostgreSQL.", tags: ["Apache Airflow", "Open-Meteo API", "Open Notify API", "PostgreSQL", "Docker"], github: "https://github.com/anumitha21/SkyFlow-ETL" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] overflow-hidden">
      <BackgroundEffects />
      <motion.div className="absolute bottom-0 left-0 w-72 h-72 bg-[#690092]/10 rounded-full pointer-events-none" animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My <span className="text-[#690092]">Projects</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#690092] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 50, scale: 0.93 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: index * 0.15, type: "spring", stiffness: 90 }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(105,0,146,0.25)" }}
              className="bg-[#1e1e1e] rounded-2xl p-6 border border-[#690092]/20 hover:border-[#690092]/50 flex flex-col transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <span className="text-3xl font-black text-[#690092]/15 leading-none">0{index + 1}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, j) => (
                  <motion.span key={j} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.15 + j * 0.04 }}
                    className="px-2.5 py-1 bg-[#690092]/15 border border-[#690092]/30 text-[#9b33c4] text-xs font-bold rounded-full"
                  >{tag}</motion.span>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(105,0,146,0.4)" }} whileTap={{ scale: 0.97 }}
                onClick={() => window.open(project.github, "_blank")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#690092] text-white font-bold text-sm transition-all"
              >
                <Github className="h-4 w-4" /> View Code
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

