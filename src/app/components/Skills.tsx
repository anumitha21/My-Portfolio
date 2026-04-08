import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Layers, Database, Cpu, Wrench, Radio, ServerCrash } from "lucide-react";

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    accent: "from-violet-500 to-purple-600",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    badgeBg: "bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20",
    skills: ["Python", "C", "C++"],
  },
  {
    label: "Big Data & Distributed Systems",
    icon: ServerCrash,
    accent: "from-orange-500 to-amber-500",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    badgeBg: "bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20",
    skills: ["Apache Spark", "Apache Airflow", "Astronomer Cloud", "DataBricks","Kafka"],
  },
  {
    label: "Core",
    icon: Cpu,
    accent: "from-emerald-500 to-green-500",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20",
    skills: [
      "DSA", "OOPs", "SQL", "Machine Learning", "NLP",
      "Generative AI", "AI Agents", "RAG", "Multi-Agent Architecture","Deep Agents", "Fine Tuning (Basics)",
    ],
  },
  {
    label: "Frameworks & Tools",
    icon: Wrench,
    accent: "from-cyan-500 to-sky-500",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20",
    skills: ["LangChain", "LangGraph","LangSmith", "FastAPI","Postman", "Docker", "AWS",,"Ollama", "HuggingFace","Scikit-Learn", "n8n", "Streamlit"],
  },

  {
    label: "Databases",
    icon: Database,
    accent: "from-yellow-500 to-amber-400",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
    badgeBg: "bg-yellow-500/10 border-yellow-500/20 hover:bg-yellow-500/20",
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
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-2xl border ${cat.border} bg-background/40 backdrop-blur-sm p-5 hover:border-opacity-60 hover:shadow-lg transition-all duration-300 group overflow-hidden`}
                >
                  {/* top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  {/* card header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.accent} bg-opacity-10`}>
                      <Icon className={`h-4 w-4 text-white`} />
                    </div>
                    <h3 className={`font-semibold text-base tracking-wide ${cat.iconColor}`}>
                      {cat.label}
                    </h3>
                  </div>

                  {/* badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.2, delay: i * 0.08 + j * 0.035 }}
                        className={`px-3 py-1 text-xs rounded-full border ${cat.badgeBg} text-foreground/75 hover:text-foreground transition-all cursor-default`}
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
