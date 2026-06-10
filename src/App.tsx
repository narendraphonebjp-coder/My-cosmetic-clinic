import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Philosophy from "./components/Philosophy";
import Works from "./components/Works";
import Biography from "./components/Biography";
import StudioFeedbackHub from "./components/StudioFeedbackHub";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";
import { X, Shield, Star, Award, HeartHandshake } from "lucide-react";

// Official Generated Image Assets relative paths
import doctorPortraitPath from "./assets/images/doctor_portrait_1781088575579.png";
import clinicInteriorPath from "./assets/images/clinic_interior_1781088594430.png";
import smileBeforePath from "./assets/images/smile_before_portrait_1781088609099.png";
import smileAfterPath from "./assets/images/smile_after_portrait_1781088622960.png";

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal relative selection:bg-brand-accent/20">
      {/* Editorial aesthetic noise/grain background structure or ambient glows can go here, let's keep it pristine and elegant */}

      {/* Understated Top Notification / Certification banner */}
      <div className="bg-brand-charcoal py-2 px-6 text-center text-[10px] tracking-widest text-brand-cream/90 uppercase font-mono border-b border-brand-charcoal/20 z-50 relative">
        <span className="inline-flex items-center gap-1.5">
          <Award size={10} className="text-brand-accent animate-pulse" />
          Dr. Anish Gupta (BDS, MDS). State-of-the-Art Aesthetic Dental Studio in Harsh Nagar, Kanpur
        </span>
      </div>

      {/* Core Nav Header */}
      <Header onOpenConsultation={() => setIsConsultationModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Editorial introduction hero block */}
        <Hero
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          doctorPortraitPath={doctorPortraitPath}
        />

        {/* Quantified clinical metrics */}
        <Stats />

        {/* Core dental-cosmic philosophy citation */}
        <Philosophy />

        {/* Interactive Before After Cases Showcase */}
        <Works
          beforeImage={smileBeforePath}
          afterImage={smileAfterPath}
          clinicInteriorImage={clinicInteriorPath}
        />

        {/* Surgeon background narrative / timeline history */}
        <Biography />

        {/* Verified Patient Google Reviews & Maps Hub */}
        <StudioFeedbackHub />

        {/* Pre-Consultation callout section matching Marchetti "A consultation begins with..." */}
        <section className="py-24 md:py-32 bg-brand-cream border-t border-brand-border text-center px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] font-light text-brand-charcoal max-w-2xl mx-auto">
              A consultation begins with a <span className="italic text-brand-accent">long conversation</span>, not a photograph.
            </h2>
            <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed font-sans font-light">
              We look beyond standardized templates to understand individual bone alignment, lip support lines, and clinical history. Allocate 45 minutes for your diagnostic review.
            </p>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-brand-charcoal hover:bg-brand-accent text-[#faf7f2] font-semibold text-xs uppercase tracking-[0.2em] px-10 py-5 transition-colors duration-500 shadow-sm"
              id="cta-btn-schedule-appointment"
            >
              Request a Private Session
            </button>
          </div>
          {/* Subtle watermark background for that beautiful high-end branding feel */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
            <span className="font-serif text-[12vw] tracking-wider uppercase">GUPTA STUDIO</span>
          </div>
        </section>
      </main>

      {/* Core Footer */}
      <Footer />

      {/* Luxury Slide-In Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-[100] flex items-center justify-end animate-fade-in" id="consultation-modal">
          {/* Modal Backdrop Click Area */}
          <div
            className="absolute inset-0"
            onClick={() => setIsConsultationModalOpen(false)}
            aria-hidden="true"
          />

          {/* Sliding container content panel */}
          <div
            className="relative bg-brand-cream w-full max-w-2xl h-screen overflow-y-auto px-6 py-12 md:p-16 border-l border-brand-border flex flex-col justify-between shadow-2xl z-10 animate-slide-left"
            id="consultation-modal-panel"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-brand-border/80 pb-6 mb-8">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest font-mono text-brand-accent uppercase font-medium">RESERVATIONS DESK</span>
                <h3 className="font-serif text-2xl text-brand-charcoal font-light">Request private session</h3>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(false)}
                className="p-2 text-brand-muted hover:text-brand-charcoal transition-colors rounded-full hover:bg-brand-border/40"
                aria-label="Close modal"
                id="btn-close-modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Consultation Form */}
            <div className="flex-grow">
              <ConsultationForm onSuccess={() => {}} />
            </div>

            {/* Modal Contact Footer Information */}
            <div className="border-t border-brand-border/80 pt-8 mt-12 grid grid-cols-2 gap-6 text-[10px] text-brand-muted font-light uppercase tracking-wider font-mono">
              <div>
                <span>STUDIO ADDR</span>
                <p className="text-brand-charcoal font-serif normal-case tracking-normal text-xs font-light mt-1 text-left">
                  111/316, 1st Floor, Harsh Nagar, Kanpur, UP 208012
                </p>
              </div>
              <div>
                <span>TELEPHONE SECTOR</span>
                <p className="text-brand-charcoal font-serif normal-case tracking-normal text-xs font-light mt-1 text-left">
                  +91 94520 22000
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
