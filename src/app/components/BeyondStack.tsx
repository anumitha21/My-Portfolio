import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { BackgroundEffects } from "@/app/components/BackgroundEffects";

const interests = [
  {
    id: "astronomy",
    emoji: "🔭",
    label: "Astronomy",
    tagline: "The mystery is the point.",
    shortText: "I'm drawn to astronomy not for what we know, but for how much we don't.",
    longText: `The frontier of cosmology is genuinely strange — dark matter that we can only detect by what it does to other things, the behavior of time near singularities, structure at scales that human intuition wasn't built for. What I love most isn't the answers we've found; it's the fact that the unknown is so much bigger than the known, and that's exciting rather than scary. That comfort with irreducible mystery shows up in how I work. I'm most engaged in AI problems where you're genuinely reasoning under uncertainty — where the ground truth is fuzzy, the data is incomplete, and you have to make a decision anyway. The instinct isn't to wait for certainty; it's to build the best model you can with what you have and stay honest about what you're not sure of.`,
    accentFrom: "#0e7490",
    accentTo: "#06b6d4",
    bgAccent: "bg-[#EAF5F6]",
    borderColor: "border-[#0e7490]/20",
  },
  {
    id: "psychology",
    emoji: "🧠",
    label: "Psychology",
    tagline: "Same information. Different minds. Wildly different outcomes.",
    shortText: "Cognitive biases and mental models are the most interesting design constraints I know.",
    longText: `What hooked me about psychology is a simple observation: the same information, fed into different people, produces wildly different outputs — and not randomly. There are patterns to how and why people misinterpret, over-trust, dismiss, or catastrophize the same input. Cognitive biases aren't bugs in human thinking; they're features that evolved for different contexts. That matters enormously for building AI systems. The model is only half the problem. How people interpret its outputs, how much they trust it, when they override it correctly and when they don't — that's the other half, and it's the part that decides whether your system actually helps anyone. When I think about product decisions or interface design, I'm always asking: what mental model does a user bring to this? What's the most likely misinterpretation? What does trust look like here, and how could it break?`,
    accentFrom: "#6B6478",
    accentTo: "#4A4456",
    bgAccent: "bg-[#F5F3F8]",
    borderColor: "border-[#6B6478]/20",
  },
];

function InterestPanel({ interest, index, isInView }: { interest: typeof interests[0]; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2 + index * 0.15, type: "spring", stiffness: 80 }}
      className={`relative bg-white border ${interest.borderColor} shadow-sm overflow-hidden`}
      style={{ clipPath: index === 0 ? "polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))" : "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
    >
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-1.5 h-full pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${interest.accentFrom}, ${interest.accentTo})` }}
      />

      <div className="p-6 pl-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{interest.emoji}</span>
            <div>
              <h3 className="font-black text-[#211C2B] text-xl">{interest.label}</h3>
              <p className="text-[#0e7490] text-xs font-bold italic mt-0.5">{interest.tagline}</p>
            </div>
          </div>
        </div>

        {/* Short text always visible */}
        <p className="text-[#4A4456] text-sm leading-relaxed mb-4 font-medium">
          {interest.shortText}
        </p>

        {/* Expandable long text */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className={`${interest.bgAccent} border ${interest.borderColor} p-4 mb-4 rounded-sm`}>
                <p className="text-[#4A4456] text-sm leading-[1.85]">{interest.longText}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand toggle */}
        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setExpanded(!expanded)}
          id={`beyond-expand-${interest.id}`}
          className="flex items-center gap-2 text-[#0e7490] font-bold text-sm hover:text-[#0891b2] transition-colors"
        >
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
          {expanded ? "Show less" : "Read more"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export function BeyondStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="beyond" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden">
      <BackgroundEffects />
      <div className="hidden lg:block absolute top-16 right-16 text-[110px] font-black text-[#0e7490]/[0.05] leading-none pointer-events-none select-none">05</div>

      {/* Floating geometric decoration */}
      <motion.div
        className="absolute top-20 left-8 w-32 h-32 border border-[#0e7490]/8 pointer-events-none"
        style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-4">
          <h2 className="text-4xl sm:text-5xl font-black text-[#211C2B] mb-4">
            Beyond the <span className="text-[#0e7490]">Stack</span>
          </h2>
          <motion.div className="w-20 h-1 bg-[#0e7490] mx-auto mb-4" initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} style={{ originX: 0.5 }} />
          <p className="text-[#6B6478] text-sm font-semibold max-w-sm mx-auto">
            Not decorative hobbies. Things that visibly shape how I think.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {interests.map((interest, i) => (
            <InterestPanel key={interest.id} interest={interest} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Connection note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
          className="text-center text-[#6B6478] text-sm italic mt-8 max-w-lg mx-auto leading-relaxed"
        >
          Both come back to the same thing: systems with irreducible complexity, where you have to reason carefully with incomplete information.
        </motion.p>
      </div>
    </section>
  );
}
