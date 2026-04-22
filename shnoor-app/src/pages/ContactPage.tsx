import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const offices = [
  { city: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&auto=format' },
  { city: 'Doha', country: 'Qatar', image: 'https://images.unsplash.com/photo-1548972207-3b400e3e3d78?w=400&q=80&auto=format' },
  { city: 'Muscat', country: 'Oman', image: 'https://images.unsplash.com/photo-1587547131116-a8c1a0e28282?w=400&q=80&auto=format' },
  { city: 'Kuala Lumpur', country: 'Malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80&auto=format' },
  { city: 'Mumbai', country: 'India', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80&auto=format' },
]

const inquiryTypes = [
  'IT Solutions',
  'AI & Data Intelligence',
  'Cloud & Infrastructure',
  'Staffing & Consulting',
  'Trade & Logistics',
  'Partnership Inquiry',
  'General Question',
]

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', inquiryType: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all ${errors[field] ? 'border-red-400' : 'border-border'}`

  return (
    <main className="bg-bg pt-[68px]">
      {/* Header */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Contact</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight mb-4">Let's Connect</h1>
            <p className="text-textSecondary text-[15px] max-w-md leading-relaxed">Have a question or need a solution? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" variants={slideInLeft} viewport={{ once: true }} className="w-full lg:w-3/5">
              <div className="bg-white border border-border rounded-2xl p-7 md:p-9">
                {submitted ? (
                  <div className="text-center py-14">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-forest text-xl mb-2">Message Sent!</h3>
                    <p className="text-textSecondary text-[14px]">Thank you. Our team will reach out shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">First Name *</label>
                        <input type="text" placeholder="First Name" value={form.firstName}
                          onChange={e => { setForm({ ...form, firstName: e.target.value }); setErrors({ ...errors, firstName: '' }) }}
                          className={inputClass('firstName')} />
                        {errors.firstName && <p className="mt-1 text-[11px] text-red-500">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Last Name</label>
                        <input type="text" placeholder="Last Name" value={form.lastName}
                          onChange={e => setForm({ ...form, lastName: e.target.value })}
                          className={inputClass('lastName')} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Email Address *</label>
                        <input type="email" placeholder="email@company.com" value={form.email}
                          onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                          className={inputClass('email')} />
                        {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Company Name</label>
                        <input type="text" placeholder="Company Name" value={form.company}
                          onChange={e => setForm({ ...form, company: e.target.value })}
                          className={inputClass('company')} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Phone Number</label>
                        <input type="tel" placeholder="+971 50 000 0000" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className={inputClass('phone')} />
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">What do you need?</label>
                        <div className="relative">
                          <select value={form.inquiryType} onChange={e => setForm({ ...form, inquiryType: e.target.value })}
                            className={`${inputClass('inquiryType')} appearance-none cursor-pointer`}>
                            <option value="">Select a service</option>
                            {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Your Message *</label>
                      <textarea rows={4} placeholder="Tell us about your project..." value={form.message}
                        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                        className={`${inputClass('message')} resize-none`} />
                      {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                    </div>
                    <Button type="submit" variant="accent" size="lg" className={`w-full justify-center ${loading ? 'opacity-70 pointer-events-none' : ''}`}>
                      {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" variants={slideInRight} viewport={{ once: true }} className="w-full lg:w-2/5 space-y-5">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-forest text-[16px] mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-[13px]">
                    <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary">Address</p>
                      <p className="text-textSecondary">P&T Fortune Towers, Cluster G5, Business Bay, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary">Phone</p>
                      <p className="text-textSecondary">+971 50 000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary">Email</p>
                      <p className="text-textSecondary">info@shnoor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary">Business Hours</p>
                      <p className="text-textSecondary">Mon – Fri: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
                {/* Social */}
                <div className="flex gap-2.5 mt-6 pt-5 border-t border-border">
                  {['in', 'f', '𝕏', '📷'].map((s, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-lg bg-cream flex items-center justify-center text-forest text-[13px] font-bold hover:bg-accent/10 hover:text-accent transition-all">{s}</a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 lg:py-20 px-6 bg-white border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-3 text-center">Worldwide</p>
            <h2 className="font-heading font-bold text-forest text-[28px] md:text-[34px] tracking-tight text-center mb-12">Our Global Offices</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {offices.map((o, i) => (
              <motion.div key={o.city} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="group rounded-xl overflow-hidden border border-border card-hover">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-3 text-center">
                  <p className="font-heading font-semibold text-forest text-[14px]">{o.city}</p>
                  <p className="text-textSecondary text-[11px]">{o.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
