import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground">Dr. Sarah Mitchell</p>
            <p className="text-sm text-muted-foreground mt-1">Professor of Computer Science</p>
            <p className="text-sm text-muted-foreground">Stanford University</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:sarah.mitchell@stanford.edu"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. Sarah Mitchell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
