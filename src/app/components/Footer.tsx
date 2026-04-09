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
              Built with 😎 by Anumitha
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <div className="flex items-center gap-1">
                   
</div> 
            </p>
          </div>

          {/* Right side - Social Links */}
         
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-xs">
             Copyright  © {currentYear} Anumitha V
          </p>
        </div>
      </div>
    </footer>
  );
}