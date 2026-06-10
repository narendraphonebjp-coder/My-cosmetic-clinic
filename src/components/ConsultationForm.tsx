import { useState, FormEvent } from "react";
import { Check, X, Calendar, Lock, ShieldCheck, Mail, Phone, User } from "lucide-react";

interface ConsultationFormProps {
  onSuccess?: () => void;
  inline?: boolean;
}

export default function ConsultationForm({ onSuccess, inline = false }: ConsultationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [procedure, setProcedure] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate luxury API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setProcedure("");
    setMessage("");
    setShowSuccess(false);
  };

  if (showSuccess) {
    return (
      <div
        className="bg-brand-cream border border-brand-accent/30 p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 max-w-xl mx-auto shadow-sm"
        id="submission-success-container"
      >
        <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
          <Check size={32} />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-brand-charcoal">
          Awaiting Your Presence
        </h3>
        <p className="text-sm text-brand-muted leading-relaxed font-sans max-w-sm">
          Thank you, <strong className="text-brand-charcoal">{name}</strong>. Dr. Anish Gupta's private desk has received your request.
          An expert care manager will contact you within the next 2 hours via <strong className="text-brand-charcoal">{phone}</strong> or <strong className="text-brand-charcoal">{email}</strong> to finalize your premium aesthetic session.
        </p>
        <div className="border-t border-brand-border pt-6 w-full text-left space-y-3 font-sans text-xs text-brand-muted">
          <div className="flex justify-between">
            <span>PROCEDURE OF INTEREST</span>
            <span className="font-medium text-brand-charcoal uppercase">{procedure || "General Aesthetics Consultation"}</span>
          </div>
          <div className="flex justify-between">
            <span>CLINIC DEPT</span>
            <span className="font-medium text-brand-charcoal">MY COSMETIC CLINIC, KANPUR</span>
          </div>
          <div className="flex justify-between">
            <span>PRIORITY CODE</span>
            <span className="font-mono text-brand-accent font-medium">MCC-{(Math.random() * 10000).toFixed(0)}</span>
          </div>
        </div>
        <button
          onClick={resetForm}
          className="text-xs uppercase tracking-widest font-medium bg-brand-charcoal hover:bg-brand-accent text-[#faf7f2] px-8 py-3 transition-colors duration-300 w-full"
          id="btn-book-another-consultation"
        >
          Request Another Private Session
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 font-sans max-w-2xl mx-auto" id="consultation-form">
      {/* Name Input */}
      <div className="relative group border-b border-brand-border py-2 focus-within:border-brand-accent transition-colors duration-300">
        <label className="text-[10px] tracking-widest text-brand-muted uppercase block mb-1">
          Full Name *
        </label>
        <div className="flex items-center">
          <User className="text-brand-muted/70 mr-3" size={14} />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aditi Sharma"
            className="w-full bg-transparent border-0 text-sm text-brand-charcoal focus:ring-0 placeholder:text-brand-muted/40 p-0"
            id="input-full-name"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group border-b border-brand-border py-2 focus-within:border-brand-accent transition-colors duration-300">
          <label className="text-[10px] tracking-widest text-brand-muted uppercase block mb-1">
            Email Address *
          </label>
          <div className="flex items-center">
            <Mail className="text-brand-muted/70 mr-3" size={14} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. aditi@domain.com"
              className="w-full bg-transparent border-0 text-sm text-brand-charcoal focus:ring-0 placeholder:text-brand-muted/40 p-0"
              id="input-email-address"
            />
          </div>
        </div>

        <div className="relative group border-b border-brand-border py-2 focus-within:border-brand-accent transition-colors duration-300">
          <label className="text-[10px] tracking-widest text-brand-muted uppercase block mb-1">
            Telephone Number *
          </label>
          <div className="flex items-center">
            <Phone className="text-brand-muted/70 mr-3" size={14} />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-transparent border-0 text-sm text-brand-charcoal focus:ring-0 placeholder:text-brand-muted/40 p-0"
              id="input-telephone-number"
            />
          </div>
        </div>
      </div>

      {/* Procedure dropdown */}
      <div className="relative group border-b border-brand-border py-2 focus-within:border-brand-accent transition-colors duration-300">
        <label className="text-[10px] tracking-widest text-brand-muted uppercase block mb-1">
          Procedure of Interest
        </label>
        <select
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          className="w-full bg-transparent border-0 text-sm text-brand-charcoal focus:ring-0 p-0 appearance-none cursor-pointer"
          id="select-procedure-interest"
        >
          <option value="" className="bg-brand-cream text-brand-muted">Select a treatment...</option>
          <option value="Smile Makeover & Veneers" className="bg-brand-cream">Smile Makeover & Veneers</option>
          <option value="Permanent Dental Implants" className="bg-brand-cream">Permanent Dental Implants</option>
          <option value="Teeth Whitening" className="bg-brand-cream">Teeth Whitening</option>
          <option value="Full Mouth Rehabilitation" className="bg-brand-cream">Full Mouth Rehabilitation</option>
          <option value="Cosmetic Facial Adjustments" className="bg-brand-cream">Cosmetic Facial Adjustments</option>
        </select>
      </div>

      {/* Message */}
      <div className="relative group border-b border-brand-border py-2 focus-within:border-brand-accent transition-colors duration-300">
        <label className="text-[10px] tracking-widest text-brand-muted uppercase block mb-1">
          Message / Notes
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Tell us, in your own words, what you would like to discuss. Dr. Anish Gupta reviews all consultation files personally."
          className="w-full bg-transparent border-0 text-sm text-brand-charcoal focus:ring-0 placeholder:text-brand-muted/40 p-0 resize-none"
          id="textarea-consultation-message"
        />
      </div>

      {/* Disclaimer details */}
      <div className="flex items-start space-x-3 text-[11px] text-brand-muted leading-relaxed">
        <ShieldCheck className="text-brand-accent w-4 h-4 mt-0.5 shrink-0" />
        <p>
          All initial consultations are conducted by Dr. Gupta or senior aesthetic managers personally. Your request registers you for premium queue management. Individual records are stored securely, in compliance with standard clinical protocol.
        </p>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-charcoal hover:bg-brand-accent text-[#faf7f2] transition-colors duration-500 py-4 text-xs font-medium uppercase tracking-[0.2em] relative flex items-center justify-center"
        id="btn-submit-consultation-request"
      >
        {isSubmitting ? (
          <span className="flex items-center space-x-2">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Reviewing files...
          </span>
        ) : (
          "Send Request →"
        )}
      </button>
    </form>
  );
}
