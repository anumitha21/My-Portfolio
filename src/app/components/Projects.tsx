import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const projects = [
  { title: "SysWatch AI", description: "Created a production-ready Multi-Agent Observability System that leverages AI agents to monitor servers, diagnose failures, and predict operational risks autonomously.", tags: ["LangChain", "Groq", "FastAPI", "LangGraph","LangSmith","Pydantic","Pytest"], github: "https://github.com/anumitha21/SysWatch-AI" },
  { title: "Policy-Compilance-AI", description: "Built an end-to-end agentic pipeline that reviews contract clauses against company policy documents. Implemented hybrid BM25 + semantic retrieval with cross-encoder reranking for legal text; integrated PII masking via Presidio before any data reaches the LLM; and designed a LangGraph multi-agent loop (compliance → rewrite → validate) with automated retry and human-escalation fallback", tags: ["LangChain", "LangGraph", "ChromaDB", "BM25", "Cross-Encoder Reranker- ms-marco-MiniLM-L-6-v2 ", "Groq", "FastAPI","BM25"," Presidio"], github: "https://github.com/anumitha21/Policy-Compilance" },
  { title: "FMCG-Sales-Data-Pipeline-with-Incremental-Processing", description: "Built a production-grade Databricks Lakehouse platform that automated data ingestion, transformation, and analytics across acquired business entities, enabling reliable reporting through Bronze–Silver–Gold pipelines.", tags: [" Python"," Databricks" ," Apache Spark"," SQL "," Delta Lake" ," Amazon S3"," Genie AI"], github: "https://github.com/anumitha21/FMCG-Sales-Data-Pipeline-with-Incremental-Processing" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">04</div>
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 border border-[#0e7490]/8 pointer-events-none"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            My <span className="text-[#0e7490]">Projects</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index}
              maxTilt={6}
              clip={index % 2 === 0 ? "bl" : "tr"}
              initial={{ opacity: 0, y: 50, scale: 0.93 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: index * 0.15, type: "spring", stiffness: 90 }}
              className="relative bg-white p-6 border border-[#0e7490]/10 hover:border-[#0e7490]/30 flex flex-col transition-colors duration-300 shadow-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0e7490] to-[#06b6d4]" />
              <div className="flex items-start justify-between mb-3 mt-1.5">
                <h3 className="text-xl font-black text-[#211C2B]">{project.title}</h3>
                <span className="text-3xl font-black text-[#0e7490]/12 leading-none">0{index + 1}</span>
              </div>
              <p className="text-[#6B6478] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, j) => (
                  <motion.span key={j} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.15 + j * 0.04 }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5px 100%, 0 calc(100% - 5px))" }}
                    className="px-2.5 py-1 bg-[#0e7490]/8 border border-[#0e7490]/20 text-[#0e7490] text-xs font-bold"
                  >{tag}</motion.span>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(14, 116, 144,0.3)" }} whileTap={{ scale: 0.97 }}
                onClick={() => window.open(project.github, "_blank")}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#0e7490] text-white font-bold text-sm transition-shadow"
              >
                <Github className="h-4 w-4" /> View Code
              </motion.button>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
