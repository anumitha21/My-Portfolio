import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-primary/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Anumitha V. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-primary fill-primary" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anumitha@example.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-xs">
            AI Developer | Machine Learning Enthusiast | Building the Future
          </p>
        </div>
      </div>
    </footer>
  );
}