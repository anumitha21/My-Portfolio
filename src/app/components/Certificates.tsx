import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "@/app/components/ui/card";
import { BookOpen } from "lucide-react";

const certificates = [
  {
    title: "Data Science, Machine Learning, Deep Learning & NLP Bootcamp",
    organization: "Udemy — Krish Naik",
    period: "2025",
     },
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and LangChain Generative",
    organization: "Udemy",
    period: "2025",
    },
  {
    title: "AI for Everyone — Generative AI Learning Path",
    organization: "Coursera — Andrew Ng (Google Cloud)",
    period: "2025",
     },
  {
    title: "Mastering Data Structures and Algorithms using C",
    organization: "Google & Udemy",
    period: "2025",
     },
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                  <Card className="md:ml-20 p-6 bg-card border-primary/20 hover:border-primary/40 transition-all group hover:scale-105 duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl">{cert.title}</h3>
                          <span className="text-sm text-muted-foreground">{cert.period}</span>
                        </div>
                        <p className="text-primary mb-2">{cert.organization}</p>
                         
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
