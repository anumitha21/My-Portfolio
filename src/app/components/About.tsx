import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed"></p>
            
            
            
            <p className="text-lg text-muted-foreground leading-relaxed"> I’m a Computer Science undergraduate focused on building real-world AI systems that integrate Artificial Intelligence, Data Engineering, and strong product thinking. I specialize in developing end-to-end applications such as RAG-based systems, Agentic workflows, and intelligent platforms—working across the full pipeline from data processing and retrieval to reasoning and final outputs. My approach is centered on solving practical problems with scalable, efficient, and impactful solutions. </p> <p className="text-lg text-muted-foreground leading-relaxed"> Beyond engineering, I bring a strong sense of design and user experience into my work, aiming to create products that are not only functional but also intuitive and engaging. I’m currently deepening my expertise in data engineering and advanced AI architectures, with a focus on building production-ready systems that deliver meaningful real-world value. </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}