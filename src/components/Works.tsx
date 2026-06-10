import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  patientBio: string;
  duration: string;
  recovery: string;
  beforeImage: string;
  afterImage: string;
}

interface WorksProps {
  beforeImage: string;
  afterImage: string;
  clinicInteriorImage: string;
}

export default function Works({ beforeImage, afterImage, clinicInteriorImage }: WorksProps) {
  const [activeCase, setActiveCase] = useState("case-01");

  const cases: CaseStudy[] = [
    {
      id: "case-01",
      category: "AESTHETIC VENEERS",
      title: "Anterior Smile Harmony",
      description: "Correction of severe enamel fluorosis and spatial irregularity of the central and lateral incisors.",
      patientBio: "Patient, age 29. Primary complaint was dark staining and asymmetric incisal edges. Six handcrafted lithium-disilicate ceramic veneers were bonded with strict attention to facial meridian lines.",
      duration: "2 Sessions",
      recovery: "0 Days",
      beforeImage: beforeImage,
      afterImage: afterImage,
    },
    {
      id: "case-02",
      category: "ALIGH TRANSFORMATION",
      title: "Orthodontic & Laser Whitening",
      description: "Restructuring tooth alignment using clear, invisible aligners coupled with modern laser-activated therapy.",
      patientBio: "Patient, age 32. Showcased dental crowding on lower mandibles and a dull shade index of A3. Underwent a customized 16-week comfortable aligner therapy followed by one in-office Zoom bleaching session.",
      duration: "16 Weeks",
      recovery: "None",
      beforeImage: beforeImage, // fallback beautiful images which is safe
      afterImage: afterImage,
    },
  ];

  const currentCase = cases.find((c) => c.id === activeCase) || cases[0];

  return (
    <section id="works" className="py-24 md:py-36 px-6 md:px-12 bg-brand-cream border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
              03 — WORKS
            </span>
          </div>

          <div className="md:col-span-9 space-y-6">
            <h2 className="font-serif text-[42px] md:text-[68px] leading-[1.0] font-light text-brand-charcoal">
              Drag to reveal. <br />
              <span className="italic text-brand-accent">The result</span> is <br />
              the only argument.
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans font-light max-w-2xl">
              A private selection of patient case studies. Photographed under standardized dental laboratory light, at identical focal distance — the only honest way to assess real micro-aesthetic transformations.
            </p>
          </div>
        </div>

        {/* Dynamic Case Tab Selectors */}
        <div className="flex border-b border-brand-border pb-4 gap-8 overflow-x-auto select-none">
          {cases.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(cs.id)}
              className={`text-xs uppercase tracking-[0.15em] font-medium pb-2 transition-all duration-300 relative shrink-0 ${
                activeCase === cs.id
                  ? "text-brand-charcoal"
                  : "text-brand-muted hover:text-brand-charcoal"
              }`}
            >
              {cs.title}
              {activeCase === cs.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent" />
              )}
            </button>
          ))}
        </div>

        {/* active case details and before after block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Metadata */}
          <div className="lg:col-span-4 space-y-8 font-sans">
            <div>
              <span className="text-[9px] tracking-widest font-mono text-brand-accent uppercase font-medium">
                {currentCase.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-light tracking-tight mt-1">
                {currentCase.title}
              </h3>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed font-light">
              {currentCase.patientBio}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-brand-border/60 pt-6">
              <div>
                <span className="text-[9px] tracking-widest text-brand-muted uppercase block font-mono">
                  DURATION
                </span>
                <span className="font-serif text-lg text-brand-charcoal mt-1 block">
                  {currentCase.duration}
                </span>
              </div>
              <div>
                <span className="text-[9px] tracking-widest text-brand-muted uppercase block font-mono">
                  RECOVERY
                </span>
                <span className="font-serif text-lg text-brand-charcoal mt-1 block">
                  {currentCase.recovery}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="lg:col-span-8 w-full">
            <BeforeAfterSlider
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              beforeLabel="BEFORE TREATMENT"
              afterLabel="POST-TREATMENT RESULT"
            />
          </div>
        </div>

        {/* Extra full width clinic atmosphere banner exactly like the template */}
        <div className="pt-16">
          <div className="relative border border-brand-border">
            <img
              src={clinicInteriorImage}
              alt="My Cosmetic Clinic consultation studio in Kanpur"
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[400px] md:h-[550px] object-cover"
              id="works-atmosphere-banner"
            />
            {/* Ambient Label Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 text-[#faf7f2]">
              <span className="text-[10px] tracking-widest font-mono uppercase">THE STUDIO</span>
              <h4 className="font-serif text-xl md:text-3xl font-light mt-1 max-w-lg leading-snug">
                111/316, Ashok Nagar, Kanpur.
              </h4>
              <p className="text-xs font-light text-brand-cream/80 max-w-sm mt-2">
                A private, light-filled clinical sanctum on a quiet lane of Harsh Nagar. Consultation by prior reservation only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
