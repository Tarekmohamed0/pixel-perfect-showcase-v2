import { useState } from "react";
import { motion } from "framer-motion";
import { User, ChevronDown, Menu, X } from "lucide-react";
import eatenLogo from "@/assets/eaten-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Catering", href: "#catering" },
    { name: "Loyalty Program", href: "#loyalty" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="container mx-auto px-6 h-[92px] flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#home">
            <img src={eatenLogo} alt="Eaten" className="h-12 md:h-16 lg:h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${link.active ? "active" : ""}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* User Icon */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer text-eaten-charcoal hover:text-black transition-colors">
            <User size={20} />
            <ChevronDown size={16} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-eaten-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-eaten-charcoal font-medium hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
