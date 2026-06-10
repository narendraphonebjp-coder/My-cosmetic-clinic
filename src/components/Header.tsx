import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-cream/90 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#index"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("index");
          }}
          className="font-serif text-xl tracking-tight text-brand-charcoal hover:opacity-80 transition-opacity"
          id="header-brand-logo"
        >
          My Cosmetic Clinic<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <a
            href="#index"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("index");
            }}
            className="text-xs uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal transition-colors duration-300"
            id="nav-link-index"
          >
            Index
          </a>
          <a
            href="#biography"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("biography");
            }}
            className="text-xs uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal transition-colors duration-300"
            id="nav-link-biography"
          >
            Biography
          </a>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("works");
            }}
            className="text-xs uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal transition-colors duration-300"
            id="nav-link-works"
          >
            Works
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-xs uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal transition-colors duration-300"
            id="nav-link-contact"
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenConsultation}
            className="text-xs uppercase tracking-[0.15em] font-medium text-brand-charcoal hover:text-brand-accent border-b border-brand-charcoal hover:border-brand-accent pb-1 transition-all duration-300"
            id="btn-header-consultation"
          >
            Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-charcoal p-1"
          aria-label="Toggle menu"
          id="btn-mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-border px-6 py-8 flex flex-col space-y-6 animate-fade-in">
          <a
            href="#index"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("index");
            }}
            className="text-sm uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal py-2 border-b border-brand-border/50"
            id="mobile-nav-link-index"
          >
            Index
          </a>
          <a
            href="#biography"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("biography");
            }}
            className="text-sm uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal py-2 border-b border-brand-border/50"
            id="mobile-nav-link-biography"
          >
            Biography
          </a>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("works");
            }}
            className="text-sm uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal py-2 border-b border-brand-border/50"
            id="mobile-nav-link-works"
          >
            Works
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-sm uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-charcoal py-2 border-b border-brand-border/50"
            id="mobile-nav-link-contact"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="text-sm uppercase tracking-[0.15em] font-medium text-brand-charcoal border-b border-brand-charcoal pb-1 self-start transition-all duration-300"
            id="mobile-btn-consultation"
          >
            Request Consultation
          </button>
        </div>
      )}
    </header>
  );
}
