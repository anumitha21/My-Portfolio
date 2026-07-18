import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[#0e7490]/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#211C2B]/50 text-sm flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-[#0e7490]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />
          Built by <span className="text-[#0e7490] font-bold">Anumitha V 😎</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#211C2B]/30 text-xs">
          © {currentYear} Anumitha V. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
