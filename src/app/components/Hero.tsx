import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import profileImage from "@/imports/image-0.png";
import resumePDF from "@/imports/Anumitha V.pdf";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-[#4DBBCF]">
      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #0a1628 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #FED43A 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="text-[#0a1628]/70 text-lg font-semibold mb-2 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a1628] mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Anumitha V
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block bg-[#FED43A] text-[#0a1628] font-bold text-xl sm:text-2xl px-4 py-1.5 rounded-lg">
                AI & Data Engineer
              </span>
            </motion.div>

            <motion.p
              className="text-[#0a1628]/75 mb-8 max-w-lg leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Passionate about building scalable Data Pipelines and Production AI Systems — pushing the boundaries of Machine Learning and Artificial Intelligence.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#0a1628] hover:bg-[#0a1628]/90 text-[#FED43A] font-semibold px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-[#FED43A] font-semibold px-8 bg-transparent"
                asChild
              >
                <a href={resumePDF} download="Anumitha_V_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { href: "https://github.com", icon: Github },
                { href: "https://linkedin.com", icon: Linkedin },
                { href: "mailto:anumitha5831@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FED43A] text-[#0a1628] hover:bg-[#0a1628] hover:text-[#FED43A] transition-all shadow-md"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo in yellow card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Yellow card behind */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#FED43A] rounded-3xl" />
              <div className="relative w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-3xl overflow-hidden border-4 border-[#0a1628] shadow-2xl">
                <img
                  src={profileImage}
                  alt="Anumitha V"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
