import { motion } from "motion/react";

interface Props {
  variant?: "teal" | "dark";
}

export function BackgroundEffects({ variant = "teal" }: Props) {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(${isDark ? "#FED43A" : "#0a1628"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal light beam — top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${isDark ? "#4DBBCF" : "#FED43A"}, transparent 65%)`,
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft orb — bottom right */}
      <motion.div
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.10]"
        style={{
          background: `radial-gradient(circle at 70% 70%, ${isDark ? "#FED43A" : "#0a1628"}, transparent 65%)`,
        }}
        animate={{ scale: [1, 1.12, 1], x: [0, -14, 0], y: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Small accent orb — mid */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.07]"
        style={{
          background: `radial-gradient(circle, ${isDark ? "#4DBBCF" : "#FED43A"}, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Thin horizontal line accent */}
      <motion.div
        className="absolute top-[38%] left-0 right-0 h-px opacity-[0.08]"
        style={{ background: `linear-gradient(90deg, transparent, ${isDark ? "#FED43A" : "#0a1628"} 40%, ${isDark ? "#FED43A" : "#0a1628"} 60%, transparent)` }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
