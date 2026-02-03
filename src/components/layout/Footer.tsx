import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Figo04", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/figo-alfa-romeo-40b659300/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:fiigoo0404@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="font-bold">
                <span className="text-foreground">Fiigoo</span>
                <span className="text-primary">.dev</span>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
