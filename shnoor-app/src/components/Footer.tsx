import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  { label: 'Cloud Management', path: '/services#cloud' },
  { label: 'Enterprise Management', path: '/services#enterprise' },
  { label: 'Data & AI', path: '/services#ai' },
  { label: 'Consulting & Staffing', path: '/services#consulting' },
  { label: 'Background Verification', path: '/services#bgv' },
  { label: 'Network Management', path: '/services#network' },
  { label: 'Healthcare IT', path: '/services#healthcare' },
  { label: 'Logistics Management', path: '/services#logistics' },
  { label: 'Export Management', path: '/services#export' },
]

export default function Footer() {
  return (
    <footer className="bg-forest">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/shnoor-logo.jfif" alt="Shnoor Logo" className="h-9 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-white text-[14px] tracking-tight">SHNOOR</span>
                <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase leading-none">International LLC</span>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed mb-6">
              SHNOOR INTERNATIONAL LLC specializes in IT Consulting & Staffing, Product Development, SAP Outsourcing, and Import & Export operations across India, UAE, Bahrain, Qatar, Oman & Malaysia.
            </p>
            <div className="flex gap-2.5">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-accent transition-all duration-200 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-accent transition-all duration-200 flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-accent transition-all duration-200 flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-accent transition-all duration-200 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-[13px] text-white/60 hover:text-accent transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-[13px] text-white/60 hover:text-accent transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-[11px] tracking-[0.2em] uppercase text-white/40 mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-[13px] text-white/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>10009 Mount Tabor Road, Odessa Missouri, United States</span>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-white/60">
                <Mail size={14} className="shrink-0 text-accent" />
                <a href="mailto:info@shnoor.com" className="hover:text-accent transition-colors">info@shnoor.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-white/60">
                <Mail size={14} className="shrink-0 text-accent" />
                <a href="mailto:proc@shnoor.com" className="hover:text-accent transition-colors">proc@shnoor.com <span className="text-white/30">(Sales)</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[12px]">
            © {new Date().getFullYear()} Shnoor International LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="https://www.shnoor.com/privacy-policy" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">Privacy Policy</a>
            <a href="https://www.shnoor.com/terms-and-conditions" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
