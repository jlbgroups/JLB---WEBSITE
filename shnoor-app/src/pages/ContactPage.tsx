import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const inquiryTypes = [
  'Cloud Management', 'Enterprise Management', 'Data & AI', 'Consulting & Staffing',
  'Background Verification', 'Network Management', 'Healthcare IT',
  'Logistics Management', 'Export Management', 'Partnership Inquiry', 'General Question',
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
            <p className="text-textSecondary text-[15px] max-w-md leading-relaxed">
              Feel free to contact us with any questions or concerns. We appreciate your interest and look forward to hearing from you.
            </p>
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
                    <p className="text-textSecondary text-[14px]">Thank you. Our team will reach out shortly from <strong>info@shnoor.com</strong>.</p>
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
                          onChange={e => setForm({ ...form, lastName: e.target.value })} className={inputClass('lastName')} />
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
                          onChange={e => setForm({ ...form, company: e.target.value })} className={inputClass('company')} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-medium text-textPrimary mb-1.5">Phone Number</label>
                        <input type="tel" placeholder="+968 00 000 000" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass('phone')} />
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
                      <textarea rows={4} placeholder="Tell us about your project or enquiry..." value={form.message}
                        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                        className={`${inputClass('message')} resize-none`} />
                      {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={loading}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-[14px] transition-all hover:bg-accent/90 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                      {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                    </button>
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
                    <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary mb-0.5">Email</p>
                      <a href="mailto:info@shnoor.com" className="text-textSecondary hover:text-accent transition-colors block">info@shnoor.com <span className="text-textSecondary/50">(General)</span></a>
                      <a href="mailto:proc@shnoor.com" className="text-textSecondary hover:text-accent transition-colors block">proc@shnoor.com <span className="text-textSecondary/50">(Sales)</span></a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary mb-0.5">Address</p>
                      <p className="text-textSecondary">10009 Mount Tabor Road, Odessa Missouri, United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[13px]">
                    <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-textPrimary mb-0.5">Business Hours</p>
                      <p className="text-textSecondary">Monday – Friday: 10:00 – 19:00</p>
                      <p className="text-textSecondary">Saturday – Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Markets Served */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-forest text-[15px] mb-4">Markets We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { flag: '🇮🇳', name: 'India' },
                    { flag: '🇦🇪', name: 'UAE' },
                    { flag: '🇧🇭', name: 'Bahrain' },
                    { flag: '🇶🇦', name: 'Qatar' },
                    { flag: '🇴🇲', name: 'Oman' },
                    { flag: '🇲🇾', name: 'Malaysia' },
                  ].map(m => (
                    <span key={m.name} className="flex items-center gap-1.5 text-[13px] bg-cream border border-border rounded-full px-3 py-1.5 text-forest font-medium">
                      {m.flag} {m.name}
                    </span>
                  ))}
                </div>
                <p className="text-textSecondary text-[12px] mt-4">Headquartered in Muscat, Oman</p>
              </div>

              {/* Partnership CTA */}
              <div className="bg-forest rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white text-[15px] mb-2">Interested in Partnering?</h3>
                <p className="text-white/55 text-[13px] mb-4">Reach out to explore collaboration opportunities with SHNOOR International.</p>
                <a href="mailto:partners@shnoor.com" className="text-accent text-[13px] font-semibold hover:underline">partners@shnoor.com →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
