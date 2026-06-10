import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  doctorPortraitPath: string;
}

export default function Hero({ onOpenConsultation, doctorPortraitPath }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="index" className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Subtitle Accent */}
        <span className="text-[10px] tracking-[0.25em] font-medium text-brand-muted uppercase block animate-fade-in">
          Advanced Aesthetic Dentistry & Smile Design — Est. 2017
        </span>

        {/* Hero Headline */}
        <h1 className="font-serif text-[44px] sm:text-[60px] md:text-[84px] leading-[0.95] tracking-tight font-light text-brand-charcoal max-w-4xl animate-slide-up">
          The quiet <br />
          <span className="italic text-brand-accent/90">architecture</span> <br />
          of a smile.
        </h1>

        {/* Description paragraph and actions block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 animate-fade-in-delayed">
          <p className="text-base md:text-lg text-brand-muted leading-relaxed font-sans font-light md:col-span-6 lg:col-span-5">
            Dr. Anish Gupta, BDS, MDS — over a decade of practice devoted to clinical restraint, facial symmetry, and cosmetic results that go unnoticed by everyone but you.
          </p>

          <div className="flex flex-wrap gap-6 items-center md:col-span-6 lg:col-span-7 md:justify-end pt-2 md:pt-0">
            <button
              onClick={onOpenConsultation}
              className="bg-brand-charcoal hover:bg-brand-accent text-[#faf7f2] font-medium text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-500 flex items-center group shadow-sm"
              id="hero-btn-request-consultation"
            >
              Request Consultation
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                →
              </span>
            </button>

            <button
              onClick={() => scrollToSection("works")}
              className="text-xs uppercase tracking-widest font-medium text-brand-charcoal hover:text-brand-accent py-4 border-b border-brand-charcoal hover:border-brand-accent transition-all duration-300"
              id="hero-btn-see-cases"
            >
              See Selected Cases
            </button>
          </div>
        </div>

        {/* Big practitioner image with description caption at bottom row */}
        <div className="pt-8 animate-fade-in-delayed">
          <div className="relative w-full overflow-hidden border border-brand-border bg-brand-border/20">
            <img
              src={doctorPortraitPath}
              alt="Dr. Anish Gupta, Master of Dental Surgery"
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[450px] md:h-[650px] object-cover transition-transform duration-[2000ms] hover:scale-[1.02]"
              id="hero-practitioner-portrait"
            />
          </div>
          {/* Subtitles rows */}
          <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-brand-muted pt-4 font-mono">
            <span>Dr. Anish Gupta, BDS, MDS</span>
            <span>Aesthetic Studio — Kanpur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
