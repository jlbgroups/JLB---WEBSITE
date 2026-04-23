import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Cloud Management', path: '/services#cloud' },
  { label: 'Enterprise Management', path: '/services#enterprise' },
  { label: 'Data & Artificial Intelligence', path: '/services#ai' },
  { label: 'Consulting & Staffing', path: '/services#consulting' },
  { label: 'Background Verification', path: '/services#bgv' },
  { label: 'Network Management', path: '/services#network' },
  { label: 'Healthcare IT', path: '/services#healthcare' },
  { label: 'Logistics Management', path: '/services#logistics' },
  { label: 'Export Management', path: '/services#export' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Timeout ref to delay closing — prevents dropdown vanishing when cursor
  // crosses the small gap between the trigger and the menu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Immediately open, delay close by 120 ms so cursor can cross the gap
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
      isActive
        ? 'text-forest after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:rounded-full'
        : 'text-textPrimary hover:text-accent'
    }`

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-border'
          : 'bg-white border-b border-border-light'
      }`}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/shnoor-logo.jfif"
            alt="Shnoor Logo"
            className="h-9 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-forest text-[14px] tracking-tight">
              SHNOOR
            </span>
            <span className="text-[9px] text-textSecondary tracking-[0.15em] uppercase leading-none">
              International LLC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

          {/* Services dropdown — uses delayed close to fix gap click problem */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-forest after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:rounded-full'
                    : 'text-textPrimary hover:text-accent'
                }`
              }
            >
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </NavLink>

            {/* Invisible bridge: fills the gap between trigger and dropdown
                so the mouse doesn't "leave" the hover zone while crossing */}
            <div className="absolute top-full left-0 right-0 h-3" />

            <div
              className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white border border-border rounded-xl shadow-xl py-1.5 w-64 z-50 transition-all duration-150 ${
                servicesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              {services.map(s => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-textPrimary hover:text-accent hover:bg-cream transition-colors rounded-lg mx-1"
                  onClick={() => setServicesOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/industries" className={navLinkClass}>Industries</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-forest text-white rounded-lg hover:bg-forest-light transition-all duration-200 group/btn"
          >
            Let's Connect
            <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-cream transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bg-white border-t border-border transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible translate-y-0 max-h-screen'
            : 'opacity-0 invisible -translate-y-4 max-h-0'
        } overflow-y-auto`}
        style={{ maxHeight: mobileOpen ? 'calc(100vh - 68px)' : '0' }}
      >
        <div className="px-6 py-5 space-y-1">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/services', label: 'Services' },
            { to: '/industries', label: 'Industries' },
            { to: '/careers', label: 'Careers' },
            { to: '/contact', label: 'Contact' },
          ].map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between py-3.5 text-[15px] font-medium border-b border-border-light last:border-0 transition-colors ${
                  isActive ? 'text-accent' : 'text-textPrimary'
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              <ArrowRight size={14} className="text-textSecondary" />
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 mt-4 py-3 text-[14px] font-semibold bg-forest text-white rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Let's Connect <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  )
}
