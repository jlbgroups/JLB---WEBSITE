import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const offices = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Business Bay, Dubai, UAE',
    phone: '+971 50 000 0000',
    email: 'uae@shnoor.com',
  },
  {
    city: 'Manama',
    country: 'Bahrain',
    address: 'Diplomatic Area, Manama, Bahrain',
    phone: '+973 1600 0000',
    email: 'bahrain@shnoor.com',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-sm text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${errors[field] ? 'border-red-400' : 'border-border'}`

  return (
    <main className="bg-bg pt-16">
      {/* Hero */}
      <section className="py-20 px-6 bg-white border-b border-border">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <SectionHeader
              label="Contact Us"
              title="Let's Start a Conversation"
              subtitle="Whether you're ready to begin a project or just exploring options — we're here to help you find the right path."
            />
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact form */}
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp}
              viewport={{ once: true }}
              className="w-full lg:w-3/5"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-heading font-bold text-forest text-2xl tracking-tight mb-1">Send Us a Message</h2>
                <p className="text-textSecondary text-sm mb-6">We typically respond within 1 business day.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-forest text-xl mb-2">Message Sent!</h3>
                    <p className="text-textSecondary text-sm">Thank you, {form.name}. Our team will reach out to you at {form.email} shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-textPrimary mb-1.5">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Ahmed Al-Rashidi"
                          value={form.name}
                          onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textPrimary mb-1.5">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="ahmed@company.com"
                          value={form.email}
                          onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-textPrimary mb-1.5">Company Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Your company (optional)"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className={inputClass('company')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-textPrimary mb-1.5">Message *</label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell us about your project, challenge, or question..."
                        value={form.message}
                        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" size="lg" className={`w-full justify-center ${loading ? 'opacity-70 pointer-events-none' : ''}`}>
                      {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Office info */}
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp} custom={1}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 space-y-6"
            >
              {offices.map(office => (
                <div key={office.city} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-forest text-xl tracking-tight mb-1">{office.city}</h3>
                  <p className="text-textSecondary text-sm mb-4">{office.country}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 text-sm text-textSecondary">
                      <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-textSecondary">
                      <Phone size={15} className="text-accent shrink-0" />
                      {office.phone}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-textSecondary">
                      <Mail size={15} className="text-accent shrink-0" />
                      {office.email}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70&auto=format"
                  alt="Dubai skyline"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-textSecondary text-xs leading-relaxed">
                    Our headquarters is located in Business Bay, Dubai — the heart of the UAE's business district.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl px-5 py-4 hover:bg-[#20b557] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.99l6.305-1.654A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.879 9.879 0 01-5.031-1.372l-.361-.214-3.741.981.998-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">Chat on WhatsApp</p>
                  <p className="text-xs text-white/80">Usually responds within hours</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
