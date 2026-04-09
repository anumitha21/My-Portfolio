import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#FED43A]/70 text-sm flex items-center gap-1.5"
        >
          Built with 😎  by{" "}
          <span className="text-[#FED43A] font-bold">Anumitha V</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#4DBBCF]/50 text-xs"
        >
          © {currentYear} Anumitha V. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
