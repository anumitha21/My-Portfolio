import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "@/app/components/ui/card";
import { Brain, Box, Database, Rocket } from "lucide-react";

const techCategories = [
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    techs: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "Agentic AI",
      "RAG Systems",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Box,
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    techs: [
      "PyTorch",
      "scikit-learn",
      "LangChain",
      "LangGraph",
      "n8n",
      "FastAPI",
    ],
  },
  {
    title: "Data & Tools",
    icon: Database,
    color: "from-green-500/20 to-green-500/5",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    techs: ["ChromaDB", "FAISS", "Pinecone", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Tooling",
    icon: Rocket,
    color: "from-orange-500/20 to-orange-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    techs: ["Docker", "GitHub", "Postman"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-6">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`p-6 bg-gradient-to-br ${category.color} border-primary/20 hover:border-primary/40 transition-all h-full group hover:scale-105 duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 ${category.iconBg} rounded-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`h-6 w-6 ${category.iconColor}`} />
                      </div>
                      <h3 className="text-xl">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          className="px-3 py-1.5 bg-background/50 border border-primary/10 rounded-full text-sm hover:bg-background/70 hover:border-primary/30 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}