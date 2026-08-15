import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Lightbulb } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { TiltCard } from "@/app/components/TiltCard";

const education = [
  { degree: "B.E — Computer Science & Engineering", school: "Sri Eshwar College of Engineering", period: "2024 – 2028" },
  { degree: "Higher Secondary Education", school: "Green Park International Sr. Sec. School", period: "2022 – 2024" },
];

const tabs = [
  {
    id: "builder",
    label: "The Builder",
    emoji: "⚙️",
    content: `I got into AI not from a textbook but from a problem that wouldn't let me go. During my first year, I kept running into the gap between "AI can do this" and "AI actually doing this reliably in production" — and that gap became my obsession. I interned at Tensorik Tech building a multilingual LMS pipeline: Telugu content automatically dubbed and subtitled in Hindi and English, across a full NestJS + Python + Sarvam AI + ElevenLabs + ffmpeg stack. Nothing about that worked on the first try. But debugging a broken ffmpeg-Supabase-ElevenLabs chain at 2am teaches you more about production AI than any course. I've shipped hackathon projects that won (PRAHARI AI, MSME Sahay), built multi-agent systems from scratch (Chefsy 2.0, IntelliTutor, SysWatch-AI), and I keep building because the gap between "possible" and "working" is exactly where I want to live.`,
  },
  {
    id: "thinker",
    label: "The Thinker",
    emoji: "🔭",
    content: `Astronomy drew me in because of the mystery, not despite it. The frontier of what we know in cosmology is genuinely strange — dark matter, the nature of time near singularities, structure emerging from chaos at scales we can barely conceptualize. What I love isn't the answers; it's the fact that the unknown is so much bigger than the known, and that's exciting rather than scary. That same instinct shows up in how I approach AI: I'm most engaged in problems where you have to reason under genuine uncertainty, where the ground truth is fuzzy or missing entirely. Psychology hooked me for a related reason — cognitive biases and mental models show that the same information, fed into different minds, produces wildly different outputs. That's not a flaw; it's the most interesting thing about human intelligence. It's also what makes building AI systems hard in the right way: the model is only half the problem. How people interpret, trust, and misuse it is the other half.`,
  },
  {
    id: "teammate",
    label: "The Teammate",
    emoji: "🤝",
    content: `I naturally gravitate toward leadership in team settings — not because I want to direct people, but because I get anxious when a group is moving without a shared mental model of the problem. In hackathons, that usually means I'm the one sketching out the system architecture in the first 30 minutes, not because I have all the answers, but because getting everyone aligned early saves hours later. I work in public as much as possible — open source, documented projects, honest READMEs. I've learned more from reading other people's build logs and post-mortems than from most structured courses. I think the best teams are the ones where everyone is slightly uncomfortable, always learning, and unafraid to say "I don't know how this part works yet."`,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("builder");

  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">02</div>
      <motion.div className="hidden lg:block absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-[#0e7490]/25 pointer-events-none" animate={{ rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="hidden lg:block absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-[#0e7490]/25 pointer-events-none" animate={{ rotate: [0, -90, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            About <span className="text-[#0e7490]">Me</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2"
        >
          <div className="flex gap-1 p-1.5 bg-[#EAF5F6] border border-[#0e7490]/15 rounded-none w-fit mx-auto mb-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`about-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-[#211C2B]/55 hover:text-[#0e7490]"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="about-tab-bg"
                    className="absolute inset-0 bg-[#0e7490]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)" }}
                  />
                )}
                <span className="relative z-10">{tab.emoji}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <TiltCard
            maxTilt={2}
            clip="bl"
            className="bg-white border border-[#0e7490]/10 shadow-lg shadow-[#0e7490]/5 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#0e7490] to-[#06b6d4] pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-8 sm:p-10 pl-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{activeContent.emoji}</span>
                  <h3 className="font-black text-[#211C2B] text-xl">{activeContent.label}</h3>
                </div>
                <p className="text-[#4A4456] text-base leading-[1.85] font-medium">
                  {activeContent.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </TiltCard>
        </motion.div>

        {/* Education */}
        <TiltCard maxTilt={5} clip="tr" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 90 }}
          className="bg-white p-6 shadow-md shadow-[#0e7490]/5 border border-[#0e7490]/10"
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.div className="p-2.5 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} whileHover={{ rotate: 90 }} transition={{ type: "spring", stiffness: 300 }}>
              <Lightbulb className="h-5 w-5 text-white" />
            </motion.div>
            <h3 className="font-black text-[#211C2B] text-lg">Education</h3>
          </div>
          <div className="relative">
            <motion.div className="absolute left-[9px] top-2 w-0.5 bg-[#0e7490]/20" initial={{ height: 0 }} animate={isInView ? { height: "calc(100% - 8px)" } : {}} transition={{ duration: 0.8, delay: 0.7 }} />
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.65 + i * 0.15 }} whileHover={{ x: 4 }} className="flex gap-4 items-start">
                  <motion.div className="w-5 h-5 bg-[#0e7490] border-4 border-white shrink-0 mt-0.5 z-10" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }} />
                  <div>
                    <span className="text-xs font-black bg-[#0e7490]/10 text-[#0e7490] border border-[#0e7490]/25 px-2.5 py-0.5">{edu.period}</span>
                    <p className="font-black text-[#211C2B] text-sm mt-1">{edu.degree}</p>
                    <p className="text-[#6B6478] text-xs font-semibold">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
