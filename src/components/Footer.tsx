import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight, Phone } from 'lucide-react'

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
  { label: 'Sales', path: '/services#sales' },
  { label: 'Custom Software Development', path: '/services#software-dev' },
  { label: 'Managed IT Services', path: '/services#managed-services' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-tech tech-grid pt-20 pb-5">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[300px] h-[300px] bg-forest-light/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/jlb-logo.jpg" alt="JLB Groups Logo" className="h-10 w-auto object-contain brightness-110" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-white text-[16px] tracking-tight">JLB GROUPS</span>
                <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Consulting & Services</span>
              </div>
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-sm">
              JLB Groups specializes in IT Consulting & Staffing, Software Development, and Managed Services across the USA.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/jblgroups/" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent hover:border-accent transition-all duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white/50 group-hover:text-white transition-colors duration-300">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-[14px] text-white/60 hover:text-accent font-medium transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-white mb-6">Expertise</h4>
            <ul className="space-y-4">
              {serviceLinks.slice(0, 6).map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-[14px] text-white/60 hover:text-accent font-medium transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-[12px] tracking-[0.2em] uppercase text-white mb-6">Let's Connect</h4>
            <ul className="space-y-5">
              
              <li className="flex items-center gap-3 text-[14px] text-white/60 group">
                <Mail size={18} className="shrink-0 text-accent" />
                <a href="mailto:JLB@jlbgroups.com" className="hover:text-accent transition-colors duration-300 underline-offset-4 group-hover:underline">JLB@jlbgroups.com</a>
              </li>
              <li className="flex flex-col gap-2 text-[14px] text-white/60">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-accent" />
                  <a href="tel:+918341296994" className="hover:text-accent transition-colors duration-300">+91 83412 96994</a>
                </div>
                <div className="flex items-center gap-3 ml-[30px]">
                  <a href="tel:+918688456559" className="hover:text-accent transition-colors duration-300">+91 86884 56559</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-[13px] font-medium">
            © {new Date().getFullYear()} JLB Groups. Crafted for excellence.
          </p>
          <div className="flex items-center gap-8">
            <a href="/jlb-groups-company-profile.pdf" download="jlb-groups-company-profile.pdf" className="text-white/40 hover:text-white text-[13px] font-medium transition-colors duration-300">Company Profile</a>
            <Link to="/privacy" className="text-white/40 hover:text-white text-[13px] font-medium transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-[13px] font-medium transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
