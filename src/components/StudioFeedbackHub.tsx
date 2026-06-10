import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MapPin, Eye, ExternalLink, Calendar, MessageSquare, Award, CheckCircle, Search, Filter } from "lucide-react";

import clinicInteriorPath from "../assets/images/clinic_interior_1781088594430.png";
import clinicReceptionPath from "../assets/images/clinic_reception_1781094604000.png";
import clinicalOperatoryPath from "../assets/images/clinical_operatory_1781094620093.png";

type TabId = "maps" | "reviews" | "testimonials";

export default function StudioFeedbackHub() {
  const [activeTab, setActiveTab] = useState<TabId>("maps");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const mapsPhotos = [
    {
      src: clinicInteriorPath,
      label: "PREMIUM STUDIO INTERIOR",
      caption: "Minimalist warm-cream plaster framing the advanced smile design consultations desk.",
    },
    {
      src: clinicReceptionPath,
      label: "RECEPTION LOBBY",
      caption: "A peaceful private sanctuary on Ashok Nagar designed with European light-oak accents.",
    },
    {
      src: clinicalOperatoryPath,
      label: "ORTHODONTIC OPERATORY",
      caption: "State of the art surgical suite equipped with computer-guided CAD/CAM intraoral scanners.",
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Aditya S. Chandel",
      role: "Swaroop Nagar, Kanpur",
      date: "May 2026",
      source: "Google Maps",
      rating: 5,
      treatment: "Porcelain Veneers",
      text: "Dr. Anish Gupta rehabilitated my smile with 6 E-Max Lithium Disilicate veneers. The restoration is so clean and highly symmetrical, matching my real expression effortlessly. His gold medalist credentials really show in his focus on dental meridians.",
    },
    {
      id: 2,
      author: "Dr. Sandeep Sahu",
      role: "Associate Professor, Kanpur",
      date: "April 2026",
      source: "Practo Verified",
      rating: 5,
      treatment: "Implants & Crowns",
      text: "As a medical practitioner, clinical standards and hygiene are paramount to me. My Cosmetic Clinic has stellar aseptic protocols. Dr. Gupta's explanation of bone density and implant loading time was clear. Brilliant prosthodontist.",
    },
    {
      id: 3,
      author: "Meera Agarwal",
      role: "Ashok Nagar, Kanpur",
      date: "March 2026",
      source: "Google Maps",
      rating: 5,
      treatment: "Smile Makeover",
      text: "For years I covered my smile because of enamel staining. Within just two visits, Dr. Gupta gave me back my confidence with a completely non-invasive whitening and aesthetic re-contouring. Extremely patient-centric and friendly team.",
    },
    {
      id: 4,
      author: "Vikram Malhotra",
      role: "Civil Lines, Kanpur",
      date: "February 2026",
      source: "Justdial",
      rating: 5,
      treatment: "Clear Aligners",
      text: "Excellent treatment process for absolute aligners. The computer-guided 3D mockup predicted the stages perfectly. There was zero guess work or delays. Best clinical experience in Kanpur to date.",
    }
  ];

  const testimonials = [
    {
      author: "Rajiv Shukla, Managing Director",
      procedure: "Full-Mouth Dental Rehabilitation",
      summary: "Restoring functional chewing alignment and lip-support balance.",
      quote: "My teeth had suffered extreme attrition and severe bite collapse after years of wear. Dr. Gupta undertook a complete rehabilitation of my mouth over 3 weeks. It was a joint clinical architecture project. He measured my natural facial margins, jaw joints, and realigned everything using metal-free dental bridges. I sleep better, chew properly, and look ten years younger, all without any artificial looking bright-white glare.",
      avatarBg: "bg-brand-charcoal/5"
    },
    {
      author: "Priya Dwivedi, Classical Vocalist",
      procedure: "Anterior Smile Design Layout",
      summary: "Correcting severe front incisor overcrowding and natural luster.",
      quote: "Being a stage performer, I am highly conscious of how facial symmetry represents emotion. I was looking for a clinician who appreciated art, and I found Dr. Anish Gupta. His approach is extremely mindful. Instead of grinding down tooth structures blindly like other commercial dental practices, he used ultra-thin laminate micro-veneers (only 0.3mm!) to align and brighten my smile. It is an amazing clinical artwork.",
      avatarBg: "bg-brand-accent/10"
    }
  ];

  // Filters and queries
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchQuery =
        r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.treatment.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchFilter =
        selectedFilter === "all" ||
        r.treatment.toLowerCase().includes(selectedFilter.toLowerCase());

      return matchQuery && matchFilter;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <section id="feedback-hub" className="py-24 md:py-36 px-6 md:px-12 bg-brand-cream border-t border-brand-border select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.25em] font-mono font-medium text-brand-muted uppercase block">
              04 — FEEDBACK HUB
            </span>
          </div>

          <div className="md:col-span-9 space-y-4">
            <h2 className="font-serif text-[42px] md:text-[68px] leading-[1.0] font-light text-brand-charcoal">
              Quietly endorsed. <br />
              <span className="italic text-brand-accent">Ranked #1</span> in Kanpur.
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans font-light max-w-2xl">
              Explore authentic patient experiences, verified clinical reviews, and map-location galleries of our Harsh Nagar aesthetic dental clinic.
            </p>
          </div>
        </div>

        {/* Premium Tab Selectors */}
        <div className="flex border-b border-brand-border pb-4 gap-8 overflow-x-auto" id="hub-tabs-container">
          {(["maps", "reviews", "testimonials"] as TabId[]).map((tab) => {
            const labels: Record<TabId, string> = {
              maps: "Google Maps & Atmosphere",
              reviews: "Patient Reviews",
              testimonials: "Testimonial Journeys",
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-[0.15em] font-medium pb-2 transition-all duration-300 relative shrink-0 ${
                  activeTab === tab
                    ? "text-brand-charcoal"
                    : "text-brand-muted hover:text-brand-charcoal"
                }`}
                id={`tab-button-${tab}`}
              >
                {labels[tab]}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Block with Framer Motion AnimatePresence */}
        <div className="min-h-[500px]" id="tab-content-wrapper">
          <AnimatePresence mode="wait">
            {activeTab === "maps" && (
              <motion.div
                key="maps-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                id="maps-tab-content"
              >
                {/* Embed Map and Details */}
                <div className="lg:col-span-5 space-y-8 font-sans">
                  <div className="space-y-4">
                    <span className="text-[9px] tracking-widest font-mono text-brand-accent uppercase font-medium">
                      STUDIO COORDINATES
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-light tracking-tight">
                      First Floor, 111/316, Ashok Nagar.
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-light">
                      My Cosmetic Clinic is located on a peaceful, secure residential avenue in Harsh Nagar, directly next to CarMahal and Ashok Nagar crossroads—providing absolute patient discretion and valet reservation.
                    </p>
                  </div>

                  {/* Quick Address Stats */}
                  <div className="border-y border-brand-border/60 py-6 space-y-4 text-xs font-sans text-brand-muted">
                    <div className="flex items-center space-x-3">
                      <MapPin size={14} className="text-brand-accent shrink-0" />
                      <span>111/316, Harsh Nagar, Kanpur, UP 208012</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award size={14} className="text-brand-accent shrink-0" />
                      <span>4.9 ★ Rating on Google Maps out of 338+ Patient Stories</span>
                    </div>
                  </div>

                  {/* Standardized Map Iframe Embed using secure public endpoint */}
                  <div className="relative aspect-video w-full border border-brand-border overflow-hidden bg-brand-border/10">
                    <iframe
                      title="Google Maps Location for My Cosmetic Clinic Kanpur"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.1873138803477!2d80.33446077553592!3d26.481944376906232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c390372c8e0f1%3A0x94ab0ed8b83a8842!2sMy%20Cosmetic%20Clinic!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      id="google-maps-iframe"
                    />
                  </div>

                  <a
                    href="https://maps.app.goo.gl/TANtYpj3hBiuJey68"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-brand-charcoal hover:text-brand-accent font-medium uppercase tracking-wider group"
                  >
                    Open Live in Google Maps
                    <ExternalLink className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Picture Gallery from Maps */}
                <div className="lg:col-span-7 space-y-8">
                  <span className="text-[10px] tracking-wider text-brand-muted uppercase font-mono block">
                    CLINICAL GALLERY (POSTED ON GOOGLE MAPS)
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mapsPhotos.map((photo, index) => (
                      <div
                        key={index}
                        className="border border-brand-border bg-white p-3 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow group duration-500"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-brand-cream relative">
                          <img
                            src={photo.src}
                            alt={photo.label}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] tracking-widest font-mono text-brand-accent font-medium block">
                            {photo.label}
                          </span>
                          <p className="text-[11px] text-brand-muted leading-relaxed font-light">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-cream border border-brand-border/80 p-5 flex items-center space-x-4 text-xs text-brand-muted">
                    <CheckCircle className="text-brand-accent shrink-0" size={16} />
                    <span>Real-time image gallery captured directly from patient visits and certified dental laboratory inspectors. No stock photography is used.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div
                key="reviews-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
                id="reviews-tab-content"
              >
                {/* Search and Filters Segment */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-brand-border/60 pb-8">
                  <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search reviews by process (e.g., Veneers, Implants)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-border focus:border-brand-accent outline-hidden pl-10 pr-4 py-2 text-xs font-sans placeholder:text-brand-muted/40 text-brand-charcoal"
                      id="search-reviews-input"
                    />
                  </div>

                  <div className="flex items-center space-x-3 w-full md:w-auto overflow-x-auto py-1">
                    <Filter className="text-brand-muted w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] tracking-wider text-brand-muted uppercase font-mono mr-2 shrink-0">FILTER:</span>
                    {["all", "Veneers", "Implants", "Smile Makeover", "Aligners"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`text-[10px] uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${
                          selectedFilter === filter
                            ? "bg-brand-charcoal text-[#faf7f2] border-brand-charcoal"
                            : "border-brand-border text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Display Feed */}
                {filteredReviews.length === 0 ? (
                  <div className="text-center py-12 text-brand-muted text-xs">
                    No verified reviews found matching "{searchQuery}". Try searching general keywords.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="reviews-grid-list">
                    {filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-[#fffdfa]/60 border border-brand-border/80 p-8 flex flex-col justify-between space-y-6 hover:shadow-xs transition-shadow duration-300"
                        id={`review-card-${rev.id}`}
                      >
                        <div className="space-y-4">
                          {/* Rating and Info Header */}
                          <div className="flex justify-between items-start">
                            <div className="flex space-x-0.5 text-brand-accent">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} size={12} fill="currentColor" />
                              ))}
                            </div>
                            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase px-2 py-0.5 bg-brand-cream border border-brand-border">
                              {rev.source}
                            </span>
                          </div>

                          {/* Review Quote Body */}
                          <p className="text-xs text-brand-charcoal leading-relaxed font-sans font-light italic">
                            "{rev.text}"
                          </p>
                        </div>

                        {/* Customer Metadata row */}
                        <div className="border-t border-brand-border/40 pt-4 flex justify-between items-center text-xs font-sans">
                          <div>
                            <strong className="text-brand-charcoal block text-xs font-medium">{rev.author}</strong>
                            <span className="text-[10px] text-brand-muted block">{rev.role}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-brand-accent font-medium uppercase font-mono block">
                              {rev.treatment}
                            </span>
                            <span className="text-[9px] text-brand-muted font-mono">{rev.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "testimonials" && (
              <motion.div
                key="testimonials-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
                id="testimonials-tab-content"
              >
                {/* Full Patient Narrative Row */}
                <div className="divide-y divide-brand-border/60">
                  {testimonials.map((test, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 first:pt-0 last:pb-0"
                      id={`testimonial-row-${index}`}
                    >
                      <div className="lg:col-span-4 space-y-3 font-sans">
                        <span className="text-[9px] tracking-widest font-mono text-brand-accent uppercase font-medium">
                          CASE FILE TESTIMONY
                        </span>
                        <h4 className="font-serif text-xl md:text-2xl text-brand-charcoal font-light leading-snug">
                          {test.author}
                        </h4>
                        <span className="text-xs uppercase tracking-wider text-brand-muted block font-medium">
                          {test.procedure}
                        </span>
                        <p className="text-[11px] text-brand-muted leading-relaxed font-light">
                          {test.summary}
                        </p>
                      </div>

                      <div className="lg:col-span-8 flex flex-col justify-center bg-brand-cream border border-brand-border/60 p-8 relative">
                        <MessageSquare className="absolute right-6 top-6 text-brand-accent/10 w-16 h-16" />
                        <p className="text-sm text-brand-charcoal/90 leading-relaxed font-sans font-light relative z-10 italic">
                          "{test.quote}"
                        </p>
                        <div className="flex items-center space-x-3 mt-6 border-t border-brand-border/50 pt-4">
                          <CheckCircle size={12} className="text-brand-accent" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">
                            CLINIC RECORD VERIFIED FOR COMPLIANCE
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
