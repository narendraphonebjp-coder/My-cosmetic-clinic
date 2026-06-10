export default function Stats() {
  const stats = [
    {
      value: "10+",
      label: "YEARS OF CLINICAL PRACTICE",
    },
    {
      value: "4,500+",
      label: "AESTHETIC SMILES COMPLETED",
    },
    {
      value: "99.4%",
      label: "PATIENT HAPPINESS RATIO",
    },
    {
      value: "1",
      label: "ELITE HEALTHCARE STUDIO",
    },
  ];

  return (
    <section className="border-y border-brand-border py-16 px-6 md:px-12 bg-brand-cream/60">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-border/80">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col space-y-3 pt-6 md:pt-0 ${
              i === 0 ? "pt-0" : ""
            } md:pl-10`}
          >
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight">
              {stat.value}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] leading-relaxed text-brand-muted uppercase font-mono font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
