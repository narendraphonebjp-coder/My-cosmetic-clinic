export default function Philosophy() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-brand-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Step Index Label */}
        <div className="md:col-span-3">
          <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
            01 — PHILOSOPHY
          </span>
        </div>

        {/* Main Quote block */}
        <div className="md:col-span-9 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-light text-brand-charcoal tracking-tight max-w-4xl">
            Aesthetic dentistry, when done well, is invisible. My work is not to author a new family of teeth, but to <span className="italic text-brand-accent">return one</span> — to its proportion, its quiet luster, and the facial harmony your expression already remembers.
          </h2>
          <div className="flex items-center space-x-4 pt-4">
            <span className="h-[1px] w-8 bg-brand-accent"></span>
            <span className="font-serif text-lg italic text-brand-muted">
              Dr. Anish Gupta, BDS, MDS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
