import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const projects = [
  {
    id: "prahari",
    index: "01",
    title: "PRAHARI AI",
    subtitle: "KSP Datathon — Crime Intelligence Platform",
    tagline: "NL2SQL querying, Kannada voice, predictive clustering for law enforcement.",
    tags: ["LangGraph", "NL2SQL", "HDBSCAN", "XGBoost", "Sarvam AI", "RBAC", "FastAPI", "React"],
    tagColors: {
      "LangGraph": "bg-[#0e7490]/10 text-[#0e7490] border-[#0e7490]/25",
      "NL2SQL": "bg-[#06b6d4]/10 text-[#0891b2] border-[#06b6d4]/25",
    } as Record<string, string>,
    problem: "Law enforcement analysts were manually sifting through fragmented crime databases to spot patterns — slow, error-prone, and bottlenecked by technical skill requirements to write SQL.",
    approach: "Built a multi-layer intelligence pipeline: natural language queries convert to SQL via LangGraph agents, HDBSCAN clusters crime hotspots spatially, XGBoost predicts recurrence probability, and Sarvam AI handles Kannada voice input so the interface works for officers in the field. RBAC gates access by role.",
    outcome: "Finalist-level system at KSP Datathon. Demonstrated live NL→SQL→map querying with Kannada voice commands and real-time hotspot visualization.",
    github: "https://github.com/anumitha21",
  },
  {
    id: "msme",
    index: "02",
    title: "MSME Sahay",
    subtitle: "IDBI Innovate — Alternate Credit Scoring",
    tagline: "Credit scoring for businesses that banks ignore — using GST, UPI, and EPFO instead of credit history.",
    tags: ["XGBoost", "SHAP", "Gemini", "GST API", "UPI", "AA Framework", "EPFO", "FastAPI"],
    tagColors: {} as Record<string, string>,
    problem: "Small businesses in India often can't access formal credit because they lack traditional credit history — even if they're financially healthy. Banks reject them by default.",
    approach: "Fused alternate data sources — GST filing consistency, UPI transaction patterns, Account Aggregator cash flow, and EPFO payroll data — into an XGBoost credit scoring model. SHAP explains every decision. Gemini generates a plain-language rationale the business owner can actually read and contest.",
    outcome: "Built and submitted for IDBI Innovate hackathon. The SHAP + Gemini explainability layer was the differentiator — it turns a black-box score into something a loan officer and a business owner can have a real conversation about.",
    github: "https://github.com/anumitha21",
  },
  {
    id: "chefsy",
    index: "03",
    title: "Chefsy 2.0",
    subtitle: "Multi-Agent AI Chef App",
    tagline: "Six specialized agents collaborating to turn your pantry into a meal plan.",
    tags: ["LangGraph", "FastAPI", "Supabase", "Groq", "React", "Multi-Agent"],
    tagColors: {} as Record<string, string>,
    problem: "Recipe apps give you a single recipe. Real cooking is messier — you have partial ingredients, dietary constraints, meal plan goals, and varying skill levels. A single LLM call can't handle that complexity coherently.",
    approach: "Designed a LangGraph multi-agent pipeline with specialized roles: an ingredient parser, a constraint enforcer, a recipe generator, a nutrition analyst, a substitution agent, and a meal planner. Each agent has a focused scope; LangGraph handles the orchestration and state across turns.",
    outcome: "Full-stack app with real-time streaming responses via FastAPI + Supabase. The agent architecture means it degrades gracefully — if you're missing an ingredient, the substitution agent kicks in automatically rather than failing.",
    github: "https://github.com/anumitha21/Chefsy2.0",
  },
  {
    id: "syswatch",
    index: "04",
    title: "SysWatch-AI",
    subtitle: "Multi-Agent Server Monitoring",
    tagline: "Five specialized agents watching your infrastructure, diagnosing failures, and predicting problems before they happen.",
    tags: ["LangGraph", "LangChain", "Groq", "FastAPI", "LangSmith", "Pydantic", "Pytest"],
    tagColors: {} as Record<string, string>,
    problem: "Traditional monitoring tools alert you when something breaks. By then, it's already broken. The real goal is early diagnosis — understanding why metrics are degrading before the outage hits.",
    approach: "Built five specialized agents: Supervisor (orchestrates), Log Analyzer (parses error patterns), Metrics Agent (watches resource trends), Root Cause Agent (correlates across signals), and Prediction Agent (forecasts failure probability). LangSmith provides full observability into agent decisions. Pydantic enforces structured outputs so agents can reliably pass state.",
    outcome: "Production-ready system with automated retry logic, structured logging, and a test suite via Pytest. The Prediction Agent's early warning reduced simulated mean-time-to-detect by flagging anomalies before threshold breaches.",
    github: "https://github.com/anumitha21/SysWatch-AI",
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, type: "spring", stiffness: 90 }}
      className="relative bg-white border border-[#0e7490]/10 hover:border-[#0e7490]/30 transition-colors duration-300 shadow-sm overflow-hidden flex flex-col"
      style={{ clipPath: index % 2 === 0 ? "polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))" : "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0e7490] to-[#06b6d4]" />

      <div className="p-6 pt-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-black tracking-[0.22em] text-[#0e7490]/50 uppercase">{project.subtitle}</span>
            <h3 className="text-xl font-black text-[#211C2B] leading-tight mt-0.5">{project.title}</h3>
          </div>
          <span className="text-3xl font-black text-[#0e7490]/10 leading-none ml-3 shrink-0">{project.index}</span>
        </div>

        <p className="text-[#6B6478] text-sm leading-relaxed mb-4 italic">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag}
              className={`px-2.5 py-0.5 text-xs font-bold border ${project.tagColors[tag] ?? "bg-[#0e7490]/6 text-[#0e7490] border-[#0e7490]/18"}`}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable case study */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#0e7490]/10 pt-4 mb-4 space-y-3">
                {[
                  { label: "Problem", text: project.problem, color: "bg-red-50 border-red-200/60" },
                  { label: "Approach", text: project.approach, color: "bg-[#EAF5F6] border-[#0e7490]/15" },
                  { label: "Outcome", text: project.outcome, color: "bg-emerald-50 border-emerald-200/60" },
                ].map(({ label, text, color }) => (
                  <div key={label} className={`p-3 border ${color} rounded-sm`}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#211C2B]/40 block mb-1">{label}</span>
                    <p className="text-[#4A4456] text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 6px 18px rgba(14,116,144,0.25)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setExpanded(!expanded)}
            id={`project-expand-${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-[#0e7490] text-[#0e7490] hover:bg-[#0e7490] hover:text-white font-bold text-sm transition-all"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%)" }}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {expanded ? "Close" : "Case Study"}
          </motion.button>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            id={`project-github-${project.id}`}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#0e7490] text-white font-bold text-sm"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%)" }}
          >
            <Github className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">03</div>
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 border border-[#0e7490]/8 pointer-events-none"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-4">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            What I'm <span className="text-[#0e7490]">Building</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto mb-4" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
          <motion.p
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
            className="text-[#6B6478] text-sm font-semibold"
          >
            Click <span className="text-[#0e7490]">Case Study</span> to expand the full problem → approach → outcome
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Tensorik mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
          className="mt-8 p-5 bg-[#EAF5F6] border border-[#0e7490]/15 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
        >
          <div className="p-2.5 bg-[#0e7490] shrink-0" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}>
            <ExternalLink className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#0e7490] mb-0.5">Production Work — Tensorik Tech Internship</p>
            <p className="text-[#4A4456] text-sm leading-relaxed">
              Shipped a multilingual LMS pipeline in production: Telugu content auto-dubbed and subtitled to Hindi & English via <span className="font-bold text-[#211C2B]">Sarvam AI + ElevenLabs + ffmpeg</span>, orchestrated through <span className="font-bold text-[#211C2B]">NestJS + BullMQ + Supabase S3</span>. This is the real-world work that taught me what "production-grade" actually means.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
