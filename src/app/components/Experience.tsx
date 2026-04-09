import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "@/app/components/ui/card";
import { Award, Code } from "lucide-react";

const experiences = [
  {
    title: "Caterpillar — Tech Hackathon (Ongoing)",
    organization: "Caterpillar Inc",
    period: "2026",
    description: "",
    icon: Award,
  },
  {
    title: "First Place — Cyber Security Hackathon 2025",
    organization: "Association with SP Office, Namakkal & StartupTN",
    period: "2025",
    description:
      "Won first place in Cyber Security Hackathon organized in association with the SP Office, Namakkal and StartupTN, showcasing expertise in cybersecurity solutions.",
    icon: Award,
  },
  {
    title: "Third Place — Hack-N-ThonxAdya",
    organization: "Web Development and AI Automation Hackathon",
    period: "2025",
    description:
      "Secured 3rd place in Hack-N-ThonxAdya hackathon, focusing on web development and AI automation solutions.",
    icon: Award,
  },
  {
    title: "LeetCode Achievement",
    organization: "LeetCode Platform",
    period: "Ongoing",
    description:
      "Solved 100+ problems | Max Rating: 1488 | Global Rank: 448,155.",
    icon: Code,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-center">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
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
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl">{exp.title}</h3>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <p className="text-primary mb-2">{exp.organization}</p>
                          {exp.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
