import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>

      {/* Purple dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(128,0,178,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Primary orb — top left */}
      <motion.div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle at 35% 35%, rgba(128,0,178,0.2), transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb — bottom right */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full"
        style={{ background: "radial-gradient(circle at 65% 65%, rgba(128,0,178,0.13), transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Faint center pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(128,0,178,0.07), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Horizontal shimmer line */}
      <motion.div
        className="absolute top-[40%] left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(128,0,178,0.3) 40%, rgba(128,0,178,0.3) 60%, transparent)" }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small top-right accent */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-28 h-28 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(160,51,204,0.12), transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}




