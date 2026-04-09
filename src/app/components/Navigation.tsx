import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X, Home, User, Zap, FolderOpen, Award, BookOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home",           href: "#home",         icon: Home },
  { name: "About",          href: "#about",        icon: User },
  { name: "Skills",         href: "#skills",       icon: Zap },
  { name: "Projects",       href: "#projects",     icon: FolderOpen },
  { name: "Certifications", href: "#certificates", icon: BookOpen },
  { name: "Achievements",   href: "#experience",   icon: Award },
  { name: "Contact",        href: "#contact",      icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(item.href.slice(1)); break; }
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
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, #8000b2, #a033cc)" }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#121212]/90 backdrop-blur-2xl border-b border-[#8000b2]/20 shadow-xl shadow-[#8000b2]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              whileHover={{ scale: 1.05 }}
              className="text-lg font-black text-white tracking-wide"
            >
              Port<span className="text-[#8000b2]">folio</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-0.5 bg-white/5 rounded-2xl px-2 py-1.5 border border-[#8000b2]/20">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: "linear-gradient(135deg, #8000b2, #a033cc)", zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {item.name}
                  </motion.a>
                );
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#8000b2]/20 border border-[#8000b2]/50 text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-[#8000b2]/20 overflow-hidden"
            >
              <div className="px-4 py-3 grid grid-cols-2 gap-2">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = active === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        isActive ? "bg-[#8000b2] text-white" : "bg-white/5 text-white/70 hover:bg-[#8000b2]/30 hover:text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}



