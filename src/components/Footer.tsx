import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-cream border-t border-brand-border py-16 px-6 md:px-12 text-brand-charcoal font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Brand / Practice statement */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl tracking-tight text-brand-charcoal">
              My Cosmetic Clinic<span className="text-brand-accent">.</span>
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed font-light max-w-sm">
              Custom-crafted orthodontic solutions, dental crowns, and porcelain veneers designed specifically around facial anatomy and individual facial meridians. By reservation only.
            </p>
          </div>

          {/* Contact 1: Location */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] tracking-wider text-brand-muted uppercase font-mono block">
              THE STUDIO LOCATION
            </span>
            <div className="space-y-2">
              <a
                href="https://maps.app.goo.gl/TANtYpj3hBiuJey68"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-charcoal hover:text-brand-accent leading-relaxed font-light flex items-start group"
                id="footer-maps-link"
              >
                <MapPin className="text-brand-accent mr-2 shrink-0 mt-0.5" size={14} />
                <span>
                  First Floor, 111/316, Harsh Nagar,<br />
                  next to CarMahal, Ashok Nagar,<br />
                  Kanpur, Uttar Pradesh 208012
                </span>
                <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity self-center shrink-0" size={10} />
              </a>
            </div>
          </div>

          {/* Contact 2: Hours & Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] tracking-wider text-brand-muted uppercase font-mono block">
              DESK RESERVATION
            </span>
            <div className="space-y-2 font-light text-xs text-brand-muted">
              <div className="flex items-center text-brand-charcoal hover:text-brand-accent transition-colors">
                <Phone className="text-brand-accent mr-2" size={12} />
                <a href="tel:+919452022000" id="footer-tel-link">+91 94520 22000</a>
              </div>
              <div className="flex items-center text-brand-charcoal hover:text-brand-accent transition-colors">
                <Mail className="text-brand-accent mr-2" size={12} />
                <a href="mailto:desk@mycosmeticclinic.studio" id="footer-mail-link">desk@mycosmeticclinic.studio</a>
              </div>
              <div className="flex items-center pt-1">
                <Clock className="text-brand-accent/70 mr-2" size={12} />
                <span>Mon — Sat: 10:00 — 20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line, disclaimer, certification exactly like the template */}
        <div className="border-t border-brand-border/60 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-muted gap-4">
          <div className="flex flex-col space-y-1">
            <span>© {currentYear} My Cosmetic Clinic. All rights reserved.</span>
            <span>Aesthetics and Clinical Dentistry by Dr. Anish Gupta (BDS, MDS).</span>
          </div>
          <div className="flex space-x-6">
            <a href="#index" className="hover:text-brand-charcoal transition-colors">PRIVACY CODE</a>
            <span className="text-brand-accent font-medium uppercase font-mono tracking-wider">BOARD REGISTERED CLINIC · UP-10842</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
