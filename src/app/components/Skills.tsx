import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layers, Database, Cpu, Wrench, Radio, ServerCrash } from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    teal: true,
    skills: ["Python", "C", "C++"],
  },
  {
    label: "Frameworks",
    icon: Layers,
    teal: false,
    skills: ["FastAPI", "LangChain", "LangGraph", "Scikit-Learn", "Streamlit", "Gradio"],
  },
  {
    label: "Big Data & Distributed Systems",
    icon: ServerCrash,
    teal: true,
    skills: ["Apache Spark", "Apache Airflow", "Astronomer Cloud", "DataBricks", "Kafka"],
  },
  {
    label: "Core",
    icon: Cpu,
    teal: false,
    skills: [
      "DSA", "OOPs", "SQL", "Machine Learning", "NLP",
      "Generative AI", "AI Agents", "RAG", "Multi-Agent Architecture", "Deep Agents", "Fine Tuning (Basics)",
    ],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    teal: true,
    skills: ["GitHub", "Git", "VS Code", "Postman", "Docker", "LangSmith", "Ollama", "HuggingFace", "n8n", "DataBricks", "AWS"],
  },
  {
    label: "Protocols",
    icon: Radio,
    teal: false,
    skills: ["MCP", "ACP", "A2A"],
  },
  {
    label: "Databases",
    icon: Database,
    teal: true,
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              const color = cat.teal ? "#4DBBCF" : "#FED43A";
              const textClass = cat.teal ? "text-primary" : "text-accent";
              const borderClass = cat.teal ? "border-primary/20 hover:border-primary/50" : "border-accent/20 hover:border-accent/50";
              const iconBgClass = cat.teal ? "bg-primary/10 group-hover:bg-primary/20" : "bg-accent/10 group-hover:bg-accent/20";
              const badgeClass = cat.teal
                ? "bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary/80 hover:text-primary"
                : "bg-accent/10 border-accent/20 hover:bg-accent/20 text-accent/80 hover:text-accent";

              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-2xl border ${borderClass} bg-background/40 backdrop-blur-sm p-5 transition-all duration-300 group overflow-hidden`}
                >
                  {/* top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: color }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${iconBgClass} transition-colors`}>
                      <Icon className={`h-4 w-4 ${textClass}`} />
                    </div>
                    <h3 className={`font-semibold text-base tracking-wide ${textClass}`}>
                      {cat.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.2, delay: i * 0.08 + j * 0.035 }}
                        className={`px-3 py-1 text-xs rounded-full border ${badgeClass} transition-all cursor-default`}
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
