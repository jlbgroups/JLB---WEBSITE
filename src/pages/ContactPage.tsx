import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle, ChevronDown, AlertCircle } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'
import emailjs from '@emailjs/browser'

const inquiryTypes = [
  'Cloud Management', 'Enterprise Management', 'Data & AI', 'Consulting & Staffing',
  'Background Verification', 'Network Management', 'Sales',
  'Custom Software Development', 'Managed IT Services', 'Partnership Inquiry', 'General Question',
]

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', inquiryType: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  function validate() {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    setServerError('')

    const templateParams = {
      from_name: `${form.firstName} ${form.lastName}`,
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      company: form.company,
      phone: form.phone,
      inquiry_type: form.inquiryType,
      message: form.message,
      to_name: 'JLB Groups Support'
    }

    try {
      await emailjs.send(
        'service_sjuekow',
        'template_soddjzy',
        templateParams,
        'cg99TKJrwPm_Qp0qv'
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setServerError('Something went wrong. Please try again or email us directly at JLB@jlbgroups.com.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-[14px] text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all ${errors[field] ? 'border-red-400' : 'border-border'}`

  return (
    <main className="bg-bg pt-[68px]">
      {/* Header */ }
      < section className = "relative py-16 lg:py-20 px-6 border-b border-border overflow-hidden" >
        {/* Decorative gradient blobs */ }
        < div className = "absolute top-0 right-0 w-[400px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-forest-light/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Contact US</span>
            </div>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[48px] tracking-tight leading-tight mb-4 text-shadow-sm">Let's <span className="text-accent">Connect</span></h1>
            <p className="text-textSecondary text-[15px] max-w-md leading-relaxed">
              Feel free to contact us with any questions or concerns. We appreciate your interest and look forward to hearing from you.
            </p>
          </motion.div>
        </div>
      </section >

    {/* Form + Contact Info */ }
    < section className = "py-16 lg:py-20 px-6 relative" >
      <div className="max-w-container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" variants={slideInLeft} viewport={{ once: true }} className="w-full lg:w-3/5">
            <div className="bg-white card-premium rounded-3xl p-7 md:p-10 shadow-[0_20px_50px_rgba(11,19,43,0.05)] border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-forest text-xl mb-2">Message Sent!</h3>
                  <p className="text-textSecondary text-[14px]">Thank you. Our team will reach out shortly from <strong>JLB@jlbgroups.com</strong>.</p>
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
                      <input type="tel" placeholder="+91 83412 96994" value={form.phone}
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
                  {serverError && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600 text-[13px]">
                      <AlertCircle size={16} />
                      {serverError}
                    </div>
                  )}
                  <button type="submit" disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-accent text-white font-bold text-[15px] transition-all duration-300 shadow-[0_4px_14px_rgba(0,106,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,106,255,0.5)] hover:-translate-y-0.5 active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
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
                    <a href="mailto:JLB@jlbgroups.com" className="text-textSecondary hover:text-accent transition-colors block">JLB@jlbgroups.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[13px]">
                  <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-textPrimary mb-0.5">Phone</p>
                    <a href="tel:+918341296994" className="text-textSecondary hover:text-accent transition-colors block">+91 83412 96994</a>
                    <a href="tel:+918688456559" className="text-textSecondary hover:text-accent transition-colors block">+91 86884 56559</a>
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
                  { flag: '🇺🇸', name: 'USA' },
                ].map(m => (
                  <span key={m.name} className="flex items-center gap-1.5 text-[13px] bg-cream border border-border rounded-full px-3 py-1.5 text-forest font-medium">
                    {m.flag} {m.name}
                  </span>
                ))}
              </div>
              <p className="text-textSecondary text-[12px] mt-4">Headquartered in USA</p>
            </div>

            {/* Partnership CTA */}
            <div className="bg-forest rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-white text-[15px] mb-2">Interested in Partnering?</h3>
              <p className="text-white/55 text-[13px] mb-4">Reach out to explore collaboration opportunities with JLB Groups.</p>
              <a href="mailto:JLB@jlbgroups.com" className="text-accent text-[13px] font-semibold hover:underline">JLB@jlbgroups.com →</a>
            </div>
          </motion.div>
        </div>
      </div>
      </section >
    </main >
  )
}
