import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Bug, Zap, BookOpen } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const methods = [
  {
    id: "debug",
    icon: Bug,
    label: "How I debug",
    accent: "from-[#0e7490] to-[#0891b2]",
    body: `The Tensorik LMS pipeline broke in a way that took three days to understand. The ffmpeg transcoding was finishing, Sarvam AI was returning audio, ElevenLabs was generating the dubbed track — but the final Supabase S3 upload was silently failing on certain file sizes. Nothing in the logs was wrong. I learned to instrument every boundary: log the input, log the output, never assume the middle is fine. Now my first move in any broken pipeline is to draw the data flow on paper and mark every point where data crosses a boundary — API call, queue, storage write. Then I add logging at each boundary and watch what actually crosses versus what I thought should cross. The bug is almost always at a boundary, not inside a system.`,
    tag: "Production mindset",
  },
  {
    id: "hackathon",
    icon: Zap,
    label: "How I hackathon",
    accent: "from-[#0891b2] to-[#06b6d4]",
    body: `The first 30 minutes matter more than the last 10 hours. I've seen teams lose hackathons because they spent 8 hours building something that didn't answer the prompt. My approach: spend the first half-hour doing nothing but understanding the constraint and picking the smallest version of the solution that would still be impressive. Scope ruthlessly — what's the one thing the judges need to see working? Build that first. Then layer. PRAHARI AI started as a single NL→SQL→map flow; the Kannada voice, HDBSCAN clustering, and RBAC came after we had something queryable and live. Ship the core, then make it interesting.`,
    tag: "Ship the core first",
  },
  {
    id: "learn",
    icon: BookOpen,
    label: "How I learn",
    accent: "from-[#06b6d4] to-[#0e7490]",
    body: `I learn by building immediately after reading. A paper on HDBSCAN is abstract until I run it on real crime coordinates and watch the clusters form. A blog post about LangGraph orchestration is theory until I break it while trying to add a new agent mid-graph. I try to be in public about this — open source repos, real READMEs that say what broke, not just what worked. The most valuable thing I've learned is that "I don't know how this part works yet" is the start of the best learning, not a confession of failure. I keep a running doc of things I don't understand yet and work through it deliberately.`,
    tag: "Build, then understand",
  },
];

export function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="howork" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF5F6] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">04</div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            How I <span className="text-[#0e7490]">Work</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto mb-4" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
          <p className="text-[#6B6478] text-sm font-semibold max-w-md mx-auto">
            Not what I've shipped — how I actually think, debug, and learn. Process, not résumé.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {methods.map((method, i) => {
            const Icon = method.icon;
            return (
              <TiltCard
                key={method.id}
                maxTilt={5}
                clip={i % 2 === 0 ? "bl" : "tr"}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.18, type: "spring", stiffness: 80 }}
                className="bg-white border border-[#0e7490]/10 hover:border-[#0e7490]/28 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Gradient header strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${method.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`p-3 bg-gradient-to-br ${method.accent} shrink-0`}
                      style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-black text-[#211C2B] text-base leading-tight">{method.label}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0e7490]/55">{method.tag}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <p className="text-[#4A4456] text-sm leading-[1.8] flex-1">
                    {method.body}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
