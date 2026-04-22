import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  { label: 'IT Solutions', path: '/services#it' },
  { label: 'AI & Data Intelligence', path: '/services#ai' },
  { label: 'Cloud & Infrastructure', path: '/services#cloud' },
  { label: 'Staffing & Consulting', path: '/services#consulting' },
  { label: 'Trade & Logistics', path: '/services#trade' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-sm tracking-tight">SHNOOR</span>
                <span className="text-[10px] text-white/50 tracking-widest uppercase">International</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Bridging IT innovation and global trade with precision, expertise, and a commitment to excellence.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <ExternalLink size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>Manama, Bahrain</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone size={15} className="shrink-0 text-accent" />
                <span>+971 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={15} className="shrink-0 text-accent" />
                <span>info@shnoor.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Shnoor International LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
