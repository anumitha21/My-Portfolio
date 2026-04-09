import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certificates" },
  { name: "Achievements", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#4DBBCF]/95 backdrop-blur-xl border-b-2 border-[#0a1628]/15 shadow-xl shadow-[#0a1628]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black text-[#0a1628] flex items-center gap-0.5"
          >
            Anumitha
            <motion.span
              className="text-[#FED43A] bg-[#0a1628] px-1.5 py-0.5 rounded text-sm ml-0.5"
              whileHover={{ rotate: -3 }}
            >
              .dev
            </motion.span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active === item.href.slice(1)
                    ? "text-[#0a1628]"
                    : "text-[#0a1628]/70 hover:text-[#0a1628]"
                }`}
              >
                {active === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#FED43A] rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0a1628] p-2 rounded-lg hover:bg-[#FED43A] transition-all"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#4DBBCF] border-t-2 border-[#0a1628]/15 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active === item.href.slice(1)
                      ? "bg-[#FED43A] text-[#0a1628]"
                      : "text-[#0a1628]/80 hover:bg-[#FED43A] hover:text-[#0a1628]"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
