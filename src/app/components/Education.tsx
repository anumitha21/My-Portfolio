import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Sri Eshwar College of Engineering",
    period: "2024 - 2028",
    grade: "CGPA: 8.1",
    description: "Pursuing Bachelor's degree with focus on AI/ML, Data Structures, and Software Engineering",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Green Park International Sr. Sec. School",
    period: "2023 - 2024",
    grade: "Percentage: 85.8%",
    description: "Completed HSC with strong foundation in Mathematics and Computer Science",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Green Park International Sr. Sec. School",
    period: "2021 - 2022",
    grade: "Percentage: 89.2%",
    description: "Completed SSLC with excellent academic performance",
  },
];

const certifications = [
  {
    title: "Datascience, Machine Learning, Deep Learning, NLP Bootcamp",
    issuer: "Krish Naik",
    date: "2025",
    description: "Comprehensive bootcamp covering Data Science, ML, Deep Learning, and NLP fundamentals",
  },
  {
    title: "Complete Agentic AI Bootcamp With LangGraph and Langchain",
    issuer: "Generative AI Course",
    date: "2025",
    description: "Advanced bootcamp on building Agentic AI systems using LangGraph and LangChain",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div className="space-y-6">
              <h3 className="text-2xl mb-6 text-primary">🎓 Education</h3>
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-secondary/50 border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-1">{edu.degree}</h4>
                        <p className="text-primary text-sm">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-3 ml-16">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-primary font-medium text-sm">{edu.grade}</span>
                    </div>
                    <p className="text-muted-foreground text-sm ml-16">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="space-y-6">
              <h3 className="text-2xl mb-6 text-primary">📜 Certifications</h3>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                >
                  <div className="bg-secondary/50 border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-1">{cert.title}</h4>
                        <p className="text-primary text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3 ml-16">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm ml-16">{cert.description}</p>
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