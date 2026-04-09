import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AutoBlogX",
    description: "An AI-powered automated blogging platform that generates, structures, and publishes content with minimal human intervention. The system leverages intelligent pipelines to transform ideas into complete blog posts.",
    tags: ["LangChain", "Groq", "FastAPI", "LangGraph"],
    github: "https://github.com/anumitha21/AutoBlogX",
  },
  {
    title: "Policy-Compliance",
    description: "A production-style AI system designed to analyze contracts against policy documents using a RAG-based pipeline. It performs retrieval, re-ranking, reasoning, and risk scoring to classify compliance.",
    tags: ["LangChain", "LangGraph", "ChromaDB", "BM25", "Cross-Encoder Reranker", "Groq", "FastAPI"],
    github: "https://github.com/anumitha21/Policy-Compilance",
  },
  {
    title: "SkyFlow-ETL",
    description: "An Apache Airflow-based data pipeline project designed to demonstrate real-world ETL orchestration. Extracts data from external APIs, transforms it into structured formats, and loads it into PostgreSQL.",
    tags: ["Apache Airflow", "Open-Meteo API", "Open Notify API", "PostgreSQL", "Docker"],
    github: "https://github.com/anumitha21/SkyFlow-ETL",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#4DBBCF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#0a1628]">
            My <span className="bg-[#FED43A] px-2 rounded">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#0a1628] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#FED43A] rounded-2xl p-6 border-2 border-[#0a1628]/10 hover:border-[#0a1628]/30 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{project.title}</h3>
                <p className="text-[#0a1628]/75 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 bg-[#0a1628] text-[#FED43A] text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0a1628] text-[#FED43A] font-semibold text-sm hover:bg-[#0a1628]/80 transition-all"
                >
                  <Github className="h-4 w-4" /> View Code
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
