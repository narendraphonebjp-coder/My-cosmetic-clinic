import { TimelineEvent, Publication } from "../types";

export default function Biography() {
  const educationTimeline: TimelineEvent[] = [
    {
      year: "2008",
      title: "BDS | Bachelor of Dental Surgery",
      institution: "Honors Graduate",
      details: "Ranked among the top of his class with specialized focus on pediatric and adult clinical dentistry.",
    },
    {
      year: "2012",
      title: "MDS | Master of Dental Surgery",
      institution: "Post-Graduate Specialty in Prosthodontics",
      details: "Gold Medalist. Dedicated 3 years to crown, bridge, and full-mouth aesthetic reconstructions.",
    },
    {
      year: "2013",
      title: "Fellowship, Advanced Implantology & Prosthetics",
      institution: "Elite Aesthetic Training",
      details: "Participated in global research relating to metal-free zirconia and direct bonding ceramics.",
    },
    {
      year: "2017",
      title: "Founded My Cosmetic Clinic",
      institution: "Harsh Nagar, Kanpur",
      details: "Brought together a curated team of specialists to focus purely on high-precision smile makeovers.",
    },
    {
      year: "2021",
      title: "Digital Smile Design Integration (CAD/CAM)",
      institution: "3D Computer Guided Dentistry",
      details: "Upgraded the studio to absolute digital integration, enabling patients to preview smiles in 3D before treatment.",
    },
  ];

  const pressPublications: Publication[] = [
    {
      source: "THE TIMES OF INDIA",
      title: "Redefining Aesthetic Dentistry in Northern India",
      date: "2025",
    },
    {
      source: "JOURNAL OF PROSTHETIC DENTISTRY",
      title: "Clinical longevity of ultra-thin lithia-silicate veneers",
      date: "2024",
    },
    {
      source: "INDIAN DENTAL DIGEST",
      title: "The shift towards patient-specific, non-invasive aligners",
      date: "2023",
    },
    {
      source: "AESTHETIC CLINICAL MONTHLY",
      title: "A comparative review of computerized Smile Match vs standard crowns",
      date: "2022",
    },
  ];

  return (
    <section id="biography" className="py-24 md:py-36 px-6 md:px-12 bg-brand-cream border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
              02 — BIOGRAPHY
            </span>
          </div>

          <div className="md:col-span-9 space-y-12">
            <h2 className="font-serif text-[42px] md:text-[68px] leading-[1.0] font-light text-brand-charcoal max-w-3xl">
              A sculptor's <br />
              <span className="italic text-brand-accent">second language</span> <br />
              is symmetry.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans font-light">
                Dr. Anish Gupta was born and raised with a fascination for detail. Seeing how clinical science and structural design overlap, he chose cosmetic dental surgery as his lifetime medium. Over twelve years, his clinical style has developed a strict compliance with organic dentition and a firm resistance to the unnaturally high-bleached, artificial white smiles popular in mass production.
              </p>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans font-light">
                "We do not promise a brand new plastic mask," Dr. Gupta notes. "We promise restoration. Many of our patients find that within eight days of treatment, colleagues ask if they have been on a facial wellness holiday, rather than knowing they underwent cosmetic veneer work. The best architecture is silent."
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-brand-border/60">
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
              ACADEMIC JOURNEY
            </span>
          </div>

          <div className="md:col-span-9 space-y-12">
            <div className="divide-y divide-brand-border" id="timeline-list">
              {educationTimeline.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 first:pt-0 last:pb-0" id={`timeline-item-${index}`}>
                  <span className="md:col-span-2 font-mono text-xs text-brand-accent font-medium tracking-wider">
                    {item.year}
                  </span>
                  <div className="md:col-span-10 space-y-2">
                    <h4 className="font-serif text-lg font-medium text-brand-charcoal">
                      {item.title}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-brand-muted block font-sans">
                      {item.institution}
                    </span>
                    <p className="text-xs text-brand-muted font-sans leading-relaxed pt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press & Publications */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 border-t border-brand-border/60">
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
              SELECTIONS & PRESS
            </span>
          </div>

          <div className="md:col-span-9">
            <div className="divide-y divide-brand-border" id="press-list">
              {pressPublications.map((pub, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 first:pt-0 last:pb-0 gap-3"
                  id={`press-item-${index}`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-brand-muted uppercase font-medium">
                    {pub.source}
                  </span>
                  <span className="font-serif text-base text-brand-charcoal sm:max-w-xl text-left hover:text-brand-accent transition-colors duration-300">
                    {pub.title}
                  </span>
                  <span className="text-xs font-mono text-brand-muted font-light sm:text-right">
                    {pub.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
