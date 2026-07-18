import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FolderOpen, Trophy, BookOpen, Code2 } from "lucide-react";

const stats = [
  { label: "Projects Shipped", value: 3, suffix: "+", icon: FolderOpen },
  { label: "Hackathon Podiums", value: 3, suffix: "", icon: Trophy },
  { label: "Certifications", value: 4, suffix: "+", icon: BookOpen },
  { label: "Problems Solved", value: 100, suffix: "+", icon: Code2 },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1100;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <>{display}{suffix}</>;
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(14,116,144,0.14)" }}
              className="relative bg-white p-5 border border-[#0e7490]/12"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center bg-[#0e7490]/10 mb-3"
                style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
              >
                <Icon className="h-4.5 w-4.5 text-[#0e7490]" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-[#211C2B] tabular-nums">
                <Counter value={s.value} suffix={s.suffix} active={isInView} />
              </p>
              <p className="text-xs font-bold text-[#6B6478] uppercase tracking-wide mt-1">{s.label}</p>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-[#0e7490]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
