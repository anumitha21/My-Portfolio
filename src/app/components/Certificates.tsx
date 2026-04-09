import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
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
    description: "Advanced certification in building AI agents using LangGraph and LangChain frameworks. Covered workflow orchestration, memory management, and production-ready agentic systems.",
  },
  {
    title: "AI for Everyone — Generative AI Learning Path",
    organization: "Coursera — Andrew Ng (Google Cloud)",
    period: "2025",
    description: "Foundational course on AI and Generative AI concepts taught by Andrew Ng. Covered applications, implications, and practical use cases of Generative AI technologies.",
  },
  {
    title: "Mastering Data Structures and Algorithms using C",
    organization: "Google & Udemy",
    period: "2025",
    description: "In-depth course on fundamental and advanced data structures and algorithms. Built strong foundation in problem-solving and algorithmic thinking using C programming.",
  },
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3aa8bc]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#0a1628]">
            <span className="bg-[#FED43A] px-2 rounded">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-[#0a1628] mx-auto mb-12" />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0a1628]/30 hidden md:block" />
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute left-6 top-6 w-5 h-5 bg-[#FED43A] border-4 border-[#0a1628] rounded-full hidden md:block z-10" />
                  <div className="md:ml-20 bg-[#FED43A] rounded-2xl p-6 border-2 border-[#0a1628]/10 hover:border-[#0a1628]/30 hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-[#0a1628] rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-5 w-5 text-[#FED43A]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="text-base font-bold text-[#0a1628]">{cert.title}</h3>
                          <span className="text-xs font-semibold bg-[#0a1628] text-[#FED43A] px-2.5 py-1 rounded-full shrink-0">{cert.period}</span>
                        </div>
                        <p className="text-[#0a1628]/70 text-sm font-semibold mb-1">{cert.organization}</p>
                        {cert.description && (
                          <p className="text-[#0a1628]/65 text-sm leading-relaxed">{cert.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
