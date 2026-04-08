import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description:
      "Developed an intelligent chatbot using LangChain and OpenAI API with context-aware responses and memory management. Implemented RAG for accurate information retrieval.",
    image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NTU2OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "LangChain", "OpenAI", "Streamlit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis Model",
    description:
      "Built a sentiment analysis system using NLP techniques and deep learning. Achieved 92% accuracy on customer reviews dataset with BERT-based transformer model.",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhfGVufDF8fHx8MTc2ODUxMDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PyTorch", "BERT", "NLP", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Created an interactive tool to visualize neural network architectures and training processes. Helps understand deep learning models with real-time updates.",
    image: "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njg1ODU2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "TensorFlow", "Gradio", "NumPy"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all h-full flex flex-col group hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}