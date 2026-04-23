import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle, Globe2, Layers, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const whyUs = [
  { icon: <Award size={20} strokeWidth={1.5} />, title: 'Proven IT Track Record', desc: 'Demonstrated expertise across multiple IT domains with a history of successful delivery.' },
  { icon: <CheckCircle size={20} strokeWidth={1.5} />, title: 'Quality & Innovation', desc: 'Commitment to quality, innovation, and client satisfaction in every engagement.' },
  { icon: <Globe2 size={20} strokeWidth={1.5} />, title: 'Strong Trade Network', desc: 'Extensive international trade network spanning India, UAE, Bahrain, Qatar, Oman & Malaysia.' },
  { icon: <Layers size={20} strokeWidth={1.5} />, title: 'Seamless Delivery', desc: 'End-to-end service delivery across industries and geographies without friction.' },
]

export default function AboutPage() {
  return (
    <main className="bg-bg pt-[68px]">
      {/* Hero */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={slideInLeft} className="w-full lg:w-1/2">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">About Us</span>
              <h1 className="font-heading font-bold text-forest text-[30px] md:text-[40px] tracking-tight leading-tight mb-5">
                About SHNOOR International LLC
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
                SHNOOR International LLC is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting & Staffing, IT Product Development, Application Designing & Development, and SAP Outsourcing, we empower businesses with cutting-edge digital solutions.
              </p>
              <p className="text-textSecondary text-[15px] leading-relaxed">
                Headquartered in <strong className="text-forest">Muscat, Oman</strong>, we also specialize in import and export of quality products from India to the UAE, Bahrain, Qatar, Oman, and Malaysia — building strong trade bridges and lasting partnerships worldwide.
              </p>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format" alt="SHNOOR International team" className="w-full h-[300px] md:h-[360px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} custom={0} viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest mb-5">
                <Target size={22} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-forest text-[20px] tracking-tight mb-3">Our Mission</h2>
              <p className="text-textSecondary text-[14px] leading-relaxed">
                To provide innovative IT solutions and seamless global trade services that empower our clients to grow, adapt, and succeed in an ever-changing business landscape. We aim to deliver excellence through expertise, reliability, and customer-centric service.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} custom={1} viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest mb-5">
                <Eye size={22} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-forest text-[20px] tracking-tight mb-3">Our Vision</h2>
              <p className="text-textSecondary text-[14px] leading-relaxed">
                To be a global leader in uniting technology and trade — transforming businesses with smart IT solutions and fostering stronger international connections that drive economic growth and mutual success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-border">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: '100+', label: 'Clients Served' }, { value: '6', label: 'Countries' }, { value: '9+', label: 'Service Verticals' }, { value: 'Muscat', label: 'Headquartered' }].map((s, i) => (
              <motion.div key={s.label} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }} className="flex flex-col items-center text-center gap-1">
                <span className="font-heading font-bold text-[30px] text-forest leading-none">{s.value}</span>
                <span className="text-textSecondary text-[13px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Our Approach" title="In a world where connections matter, we bring technology, trust, and trade together." titleClassName="max-w-2xl mx-auto text-[24px] md:text-[30px]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
              At SHNOOR International LLC, we believe innovation should have no borders. Our unique approach combines cutting-edge IT solutions with seamless global trade services, helping businesses thrive in both the digital space and the global marketplace.
            </p>
            <p className="text-textSecondary text-[15px] leading-relaxed">
              Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future-ready. Whether you're seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity — SHNOOR International is here to help you achieve success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 px-6 bg-cream/40 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Why Choose Us" title="Why Choose SHNOOR INTERNATIONAL LLC?" />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 card-hover">
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center text-forest mb-4">{w.icon}</div>
                <h3 className="font-heading font-semibold text-forest text-[15px] tracking-tight mb-2">{w.title}</h3>
                <p className="text-textSecondary text-[13px] leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Expertise */}
      <section className="py-16 lg:py-20 px-6 bg-white border-t border-border">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" variants={slideInLeft} viewport={{ once: true }} className="w-full lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format" alt="Global trade and logistics" className="rounded-2xl w-full h-[300px] object-cover shadow-lg" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={slideInRight} viewport={{ once: true }} className="w-full lg:w-1/2">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Trade Expertise</span>
              <h2 className="font-heading font-bold text-forest text-[26px] md:text-[32px] tracking-tight leading-tight mb-4">
                Your Bridge to International Business Growth
              </h2>
              <p className="text-textSecondary text-[14px] leading-relaxed mb-4">
                Our expertise in cross-border trade means smooth operations, transparent processes, and compliance with international standards. Whether it's sourcing premium goods from India or delivering products to global destinations, SHNOOR International is your bridge to international business growth.
              </p>
              <p className="text-textSecondary text-[14px] leading-relaxed mb-6">
                We deal with producers, farmers, wholesalers, importers, and other stakeholders to establish a strong global presence in international trade — closing the gap between buyers and sellers in the foreign market.
              </p>
              <div className="flex flex-wrap gap-2">
                {['🇮🇳 India', '🇦🇪 UAE', '🇧🇭 Bahrain', '🇶🇦 Qatar', '🇴🇲 Oman', '🇲🇾 Malaysia'].map(c => (
                  <span key={c} className="text-[12px] bg-cream text-forest border border-border rounded-full px-3 py-1 font-medium">{c}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[34px] tracking-tight mb-3">Ready to Work With Us?</h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-lg mx-auto">
              Let's discuss how SHNOOR International can help your business grow and succeed globally.
            </p>
            <Button href="/contact" size="lg" variant="accent" withArrow>Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
