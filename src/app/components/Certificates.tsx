import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const certificates = [
  { title: "Data Science, Machine Learning, Deep Learning & NLP Bootcamp", organization: "Udemy — Krish Naik", period: "2025" },
  { title: "Complete Agentic AI Bootcamp With LangGraph and LangChain Generative", organization: "Udemy", period: "2025", description: "Advanced certification in building AI agents using LangGraph and LangChain frameworks. Covered workflow orchestration, memory management, and production-ready agentic systems." },
  { title: "AI for Everyone — Generative AI Learning Path", organization: "Coursera — Andrew Ng (Google Cloud)", period: "2025", description: "Foundational course on AI and Generative AI concepts taught by Andrew Ng. Covered applications, implications, and practical use cases of Generative AI technologies." },
  { title: "Mastering Data Structures and Algorithms using C", organization: "Google & Udemy", period: "2025", description: "In-depth course on fundamental and advanced data structures and algorithms. Built strong foundation in problem-solving and algorithmic thinking using C programming." },
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden">
      <BackgroundEffects />
      <motion.div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#8000b2]/8 rounded-full pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="text-[#8000b2]">Certifications</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#8000b2] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-8 top-0 w-0.5 bg-[#8000b2]/30 hidden md:block" initial={{ height: 0 }} animate={isInView ? { height: "100%" } : {}} transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }} />
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.3 + index * 0.15, type: "spring", stiffness: 90 }} className="relative">
                <div className="absolute left-6 top-6 hidden md:block z-10">
                  <motion.div className="w-5 h-5 bg-[#8000b2] border-4 border-[#1a1a1a] rounded-full" style={{ boxShadow: "0 0 12px rgba(128,0,178,0.6)" }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }} />
                </div>
                <motion.div whileHover={{ x: 6, boxShadow: "0 16px 40px rgba(128,0,178,0.2)" }} transition={{ type: "spring", stiffness: 200 }}
                  className="md:ml-20 bg-[#1e1e1e] rounded-2xl p-6 border border-[#8000b2]/20 hover:border-[#8000b2]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div className="p-2.5 bg-[#8000b2] rounded-xl shrink-0" whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                      <BookOpen className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-black text-white">{cert.title}</h3>
                        <span className="text-xs font-bold bg-[#8000b2]/20 text-[#a033cc] border border-[#8000b2]/30 px-2.5 py-1 rounded-full shrink-0">{cert.period}</span>
                      </div>
                      <p className="text-[#8000b2] text-sm font-semibold mb-1">{cert.organization}</p>
                      {cert.description && <p className="text-white/50 text-sm leading-relaxed">{cert.description}</p>}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


