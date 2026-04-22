import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { label: 'IT Solutions', path: '/services#it' },
  { label: 'AI & Data', path: '/services#ai' },
  { label: 'Cloud & Infrastructure', path: '/services#cloud' },
  { label: 'Staffing & Consulting', path: '/services#consulting' },
  { label: 'Trade & Logistics', path: '/services#trade' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-accent' : 'text-textPrimary hover:text-accent'
    }`

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-border' : 'bg-white/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-forest flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg leading-none">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-forest text-sm tracking-tight">SHNOOR</span>
            <span className="text-[10px] text-textSecondary tracking-widest uppercase">International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-textPrimary hover:text-accent transition-colors">
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-border rounded-xl shadow-lg py-2 w-52 z-50">
                {services.map(s => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2 text-sm text-textPrimary hover:text-accent hover:bg-bg transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/industries" className={navLinkClass}>Industries</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors"
          >
            Get Consultation
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-bg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-1">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/industries', label: 'Industries' },
            { to: '/about', label: 'About' },
            { to: '/careers', label: 'Careers' },
            { to: '/contact', label: 'Contact' },
          ].map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium border-b border-border last:border-0 ${
                  isActive ? 'text-accent' : 'text-textPrimary'
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="block mt-3 text-center py-2.5 text-sm font-medium bg-forest text-white rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Get Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
