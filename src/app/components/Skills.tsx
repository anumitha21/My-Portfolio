import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    badgeBg: "bg-violet-500/10 border-violet-500/20 hover:border-violet-400/50",
    skills: ["Python", "C", "C++"],
  },
  {
    label: "Frameworks",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    badgeBg: "bg-blue-500/10 border-blue-500/20 hover:border-blue-400/50",
    skills: ["FastAPI", "LangChain", "LangGraph", "Scikit-Learn", "Streamlit", "Gradio"],
  },
  {
    label: "Big Data & Distributed Systems",
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    badgeBg: "bg-orange-500/10 border-orange-500/20 hover:border-orange-400/50",
    skills: ["Apache Spark", "Apache Airflow", "Astronomer Cloud", "DataBricks"],
  },
  {
    label: "Core",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-400/50",
    skills: [
      "DSA", "OOPs", "SQL", "Machine Learning", "NLP",
      "Generative AI", "AI Agents", "RAG", "Multi-Agent Architecture", "Fine Tuning (Basics)",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-400/50",
    skills: [
      "GitHub", "Git", "VS Code", "Postman", "Docker",
      "LangSmith", "Ollama", "HuggingFace", "n8n", "DataBricks", "AWS",
    ],
  },
  {
    label: "Protocols",
    color: "text-pink-400",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    badgeBg: "bg-pink-500/10 border-pink-500/20 hover:border-pink-400/50",
    skills: ["MCP", "ACP", "A2A"],
  },
  {
    label: "Databases",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    badgeBg: "bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-400/50",
    skills: ["MongoDB", "ChromaDB", "Pinecone", "FAISS"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="flex flex-col gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border ${cat.border} ${cat.bg} backdrop-blur-sm`}
              >
                <span
                  className={`text-sm font-semibold uppercase tracking-widest ${cat.color} sm:w-52 shrink-0 pt-0.5`}
                >
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, delay: i * 0.08 + j * 0.04 }}
                      className={`px-3 py-1 text-sm rounded-full border ${cat.badgeBg} text-foreground/80 hover:text-foreground transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
