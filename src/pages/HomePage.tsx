import { motion } from 'framer-motion'
import { Cloud, Building2, Brain, Users, ShieldCheck, Network, HeartPulse, Package, Globe2 } from 'lucide-react'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import GeoTradeMap from '../components/GeoTradeMap'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const services = [
  { icon: <Cloud size={22} strokeWidth={1.5} />, title: 'Cloud Management', description: 'AWS, Google Cloud & Azure solutions — design, deploy, and manage for efficiency, security, and scalability.', link: '/services#cloud' },
  { icon: <Building2 size={22} strokeWidth={1.5} />, title: 'Enterprise Management', description: 'ERP, SAP Outsourcing, business process automation, and IT infrastructure management.', link: '/services#enterprise' },
  { icon: <Brain size={22} strokeWidth={1.5} />, title: 'Data & Artificial Intelligence', description: 'ML models, predictive analytics, AI-powered automation to transform data into actionable decisions.', link: '/services#ai' },
  { icon: <Users size={22} strokeWidth={1.5} />, title: 'Consulting & Staffing', description: 'Expert IT consulting and top-tier talent acquisition — from short-term projects to long-term growth.', link: '/services#consulting' },
  { icon: <ShieldCheck size={22} strokeWidth={1.5} />, title: 'Background Verification', description: 'AI-powered, compliance-first background checks completed in 24–48 hours with clear actionable reports.', link: '/services#bgv' },
  { icon: <Network size={22} strokeWidth={1.5} />, title: 'Network Management', description: 'Proactive monitoring, security management and expert support to keep your network running smoothly.', link: '/services#network' },
  { icon: <HeartPulse size={22} strokeWidth={1.5} />, title: 'Healthcare IT', description: 'Secure healthcare management systems, clinical analytics, and data compliance solutions for providers.', link: '/services#healthcare' },
  { icon: <Package size={22} strokeWidth={1.5} />, title: 'Logistics Management', description: 'Dry container supply from Mumbai & Mundra ports, customs clearance, and end-to-end supply chain support.', link: '/services#logistics' },
  { icon: <Globe2 size={22} strokeWidth={1.5} />, title: 'Export Management', description: 'Quality products from India to UAE, Bahrain, Qatar, Oman & Malaysia — built on trust and timely delivery.', link: '/services#export' },
]

export default function HomePage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="relative pt-[68px] overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
            <motion.div initial="hidden" animate="visible" variants={slideInLeft} className="w-full lg:w-1/2">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-5">Bridging Innovation & Trade</span>
              <h1 className="font-heading font-bold text-forest text-[36px] md:text-[46px] lg:text-[52px] tracking-tight leading-[1.1] mb-6">
                Where Technology<br className="hidden md:block" />
                Meets Global Trade<br className="hidden md:block" />
                for <span className="italic text-accent">Limitless Growth.</span>
              </h1>
              <p className="text-textSecondary text-[15px] md:text-base leading-relaxed mb-8 max-w-lg">
                SHNOOR INTERNATIONAL LLC specializes in IT Consulting & Staffing, Product Development, SAP Outsourcing, and Import & Export operations across India, UAE, Bahrain, Qatar, Oman & Malaysia.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button href="/services" size="lg" variant="primary" withArrow>Explore Solutions</Button>
                <Button href="/contact" size="lg" variant="outline" withArrow>Talk to an Expert</Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['🇦🇪','🇮🇳','🇧🇭','🇴🇲','🇲🇾'].map((flag, i) => (
                    <span key={i} className="w-8 h-8 rounded-full bg-cream border-2 border-white flex items-center justify-center text-sm">{flag}</span>
                  ))}
                </div>
                <div>
                  <div className="text-accent text-[13px]">★★★★★</div>
                  <p className="text-textSecondary text-[12px]">Top rated by <strong className="text-forest">100+ clients</strong></p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format" alt="Global shipping — Shnoor International" className="w-full h-[320px] md:h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <p className="font-heading font-bold text-forest text-[14px]">6 Countries</p>
                  <p className="text-textSecondary text-[11px]">India · UAE · Bahrain · Qatar · Oman · Malaysia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-white">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: '100+', label: 'Clients Served' }, { value: '6', label: 'Countries' }, { value: '9+', label: 'Service Verticals' }, { value: '2', label: 'Major Port Hubs' }].map((s, i) => (
              <motion.div key={s.label} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }} className="flex flex-col items-center text-center gap-1">
                <span className="font-heading font-bold text-[34px] text-forest leading-none">{s.value}</span>
                <span className="text-textSecondary text-[13px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="What We Do" title="Connecting Technology & Trade Together"
              subtitle="From IT Consulting and SAP Outsourcing to global import-export operations — we are your single partner for growth."
              titleClassName="text-2xl md:text-[32px] max-w-2xl mx-auto" />
          </motion.div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }} className="h-full">
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section className="relative overflow-hidden bg-[#0A1A11]">
        {/* Subtle Grid Lines Overlay */}
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#3FA26E 0.5px, transparent 0.5px), linear-gradient(90deg, #3FA26E 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-forest/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-container mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" variants={slideInLeft} viewport={{ once: true }} className="w-full lg:w-[45%]">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-5">Our Presence</span>
              <h2 className="font-heading font-bold text-white text-[30px] md:text-[40px] lg:text-[44px] tracking-tight leading-[1.1] mb-5">
                Global Reach.<br /><span className="text-accent drop-shadow-[0_0_15px_rgba(63,162,110,0.4)]">Local Expertise.</span>
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-sm">
                Headquartered in Muscat, Oman — operating across India, UAE, Bahrain, Qatar, Oman & Malaysia, building strong trade bridges and lasting partnerships worldwide.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ value: '6', label: 'Countries' }, { value: '100+', label: 'Clients' }, { value: 'Oman', label: 'HQ' }].map((s) => (
                  <div key={s.label} className="border border-white/10 rounded-xl p-4 text-center bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                    <span className="font-heading font-bold text-white text-[22px] leading-none block">{s.value}</span>
                    <span className="text-white/40 text-[12px] mt-1 block font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              <Button href="/about" variant="accent" withArrow className="shadow-[0_0_20px_rgba(63,162,110,0.3)]">View Our Presence</Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={slideInRight} viewport={{ once: true }} className="w-full lg:w-[55%]">
              <GeoTradeMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-24 px-6 bg-white border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-5 text-accent text-lg">★★★★★</div>
            <blockquote className="font-heading text-forest text-[18px] md:text-[22px] leading-relaxed tracking-tight mb-6">
              "Working with SHNOOR International LLC has been a game-changer for our business. Their IT consulting team understood our requirements perfectly and delivered a custom solution that improved our efficiency by leaps and bounds. On top of that, their import services were smooth, reliable, and hassle-free."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest font-bold text-[14px]">AK</div>
              <div className="text-left">
                <p className="font-semibold text-forest text-[14px]">Amita Khanna</p>
                <p className="text-textSecondary text-[12px]">Delivery Head · SF Technologies, Singapore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-6 my-12">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[16px]">Ready to grow your business globally?</p>
            <p className="text-textSecondary text-[13px]">IT solutions + global trade expertise, under one roof.</p>
          </div>
          <Button href="/contact" variant="primary" withArrow>Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}
