import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layers, Database, Cpu, Wrench, Radio, ServerCrash } from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++"],
  },
  {
    label: "Frameworks",
    icon: Layers,
    skills: ["FastAPI", "LangChain", "LangGraph", "Scikit-Learn", "Streamlit", "Gradio"],
  },
  {
    label: "Big Data & Distributed Systems",
    icon: ServerCrash,
    skills: ["Apache Spark", "Apache Airflow", "Astronomer Cloud", "DataBricks", "Kafka"],
  },
  {
    label: "Core",
    icon: Cpu,
    skills: ["DSA", "OOPs", "SQL", "Machine Learning", "NLP", "Generative AI", "AI Agents", "RAG", "Multi-Agent Architecture", "Deep Agents", "Fine Tuning (Basics)"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    skills: ["GitHub", "Git", "VS Code", "Postman", "Docker", "LangSmith", "Ollama", "HuggingFace", "n8n", "DataBricks", "AWS"],
  },
  {
    label: "Protocols",
    icon: Radio,
    skills: ["MCP", "ACP", "A2A"],
  },
  {
    label: "Databases",
    icon: Database,
    skills: ["MongoDB", "ChromaDB", "Pinecone", "FAISS"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3aa8bc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#0a1628]">
            Technical <span className="bg-[#FED43A] px-2 rounded">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#0a1628] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#FED43A] rounded-2xl p-5 border-2 border-[#0a1628]/10 hover:border-[#0a1628]/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#0a1628] group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4 text-[#FED43A]" />
                    </div>
                    <h3 className="font-bold text-base text-[#0a1628]">{cat.label}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.2, delay: i * 0.08 + j * 0.035 }}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-[#0a1628] text-[#FED43A] cursor-default hover:bg-[#0a1628]/80 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
