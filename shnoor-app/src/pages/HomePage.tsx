import { motion } from 'framer-motion'
import {
  Server, Brain, Cloud, Users, Package,
  ArrowRight, Smile, Globe, Briefcase, BarChart3,
  Truck, ShoppingBag, Factory, Heart, Building, Zap
} from 'lucide-react'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const stats = [
  { value: '50+', label: 'Happy Clients', icon: <Smile size={22} strokeWidth={1.5} /> },
  { value: '5+', label: 'Countries', icon: <Globe size={22} strokeWidth={1.5} /> },
  { value: '100+', label: 'Projects Delivered', icon: <Briefcase size={22} strokeWidth={1.5} /> },
  { value: '98%', label: 'Client Satisfaction', icon: <BarChart3 size={22} strokeWidth={1.5} /> },
]

const services = [
  {
    icon: <Server size={22} strokeWidth={1.5} />,
    title: 'IT Solutions',
    description: 'Custom software and enterprise solutions that drive growth.',
    link: '/services#it',
  },
  {
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'AI & Data Intelligence',
    description: 'AI-powered insights and automation to supercharge smarter decisions.',
    link: '/services#ai',
  },
  {
    icon: <Cloud size={22} strokeWidth={1.5} />,
    title: 'Cloud & Infrastructure',
    description: 'Secure, scalable and reliable infrastructure for modern businesses.',
    link: '/services#cloud',
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: 'Staffing & Consulting',
    description: 'Top talent and expert consulting to strengthen your business.',
    link: '/services#consulting',
  },
  {
    icon: <Package size={22} strokeWidth={1.5} />,
    title: 'Global Trade & Logistics',
    description: 'End-to-end trade and logistics solutions across the globe.',
    link: '/services#trade',
  },
]

const industries = [
  {
    icon: <Truck size={20} strokeWidth={1.5} />,
    title: 'Logistics & Supply Chain',
    description: 'Optimizing operations and improving visibility across the supply chain.',
  },
  {
    icon: <ShoppingBag size={20} strokeWidth={1.5} />,
    title: 'Retail & E-commerce',
    description: 'Enhancing customer experience and driving growth with digital solutions.',
  },
  {
    icon: <Factory size={20} strokeWidth={1.5} />,
    title: 'Manufacturing',
    description: 'Improving efficiency and streamlining manufacturing processes.',
  },
  {
    icon: <Heart size={20} strokeWidth={1.5} />,
    title: 'Healthcare',
    description: 'Building secure, compliant and innovative solutions for healthcare.',
  },
  {
    icon: <Building size={20} strokeWidth={1.5} />,
    title: 'Real Estate',
    description: 'Enabling smarter property management and investment decisions.',
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: 'Energy & Utilities',
    description: 'Delivering reliable solutions for a sustainable future.',
  },
]

export default function HomePage() {
  return (
    <main className="bg-bg">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-[68px] overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
            {/* Left Content */}
            <motion.div
              initial="hidden" animate="visible" variants={slideInLeft}
              className="w-full lg:w-1/2"
            >
              <h1 className="font-heading font-bold text-forest text-[36px] md:text-[46px] lg:text-[52px] tracking-tight leading-[1.1] mb-6">
                Where Technology{' '}
                <br className="hidden md:block" />
                Meets Global Trade{' '}
                <br className="hidden md:block" />
                for <span className="italic text-accent font-bold">Limitless Growth.</span>
              </h1>

              <p className="text-textSecondary text-[15px] md:text-base leading-relaxed mb-8 max-w-lg">
                Shnoor International delivers intelligent IT solutions and global trade services that empower businesses to innovate, optimize and expand across borders.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href="/services" size="lg" variant="primary" withArrow>
                  Explore Solutions
                </Button>
                <Button href="/contact" size="lg" variant="outline" withArrow>
                  Talk to an Expert
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden" animate="visible" variants={slideInRight}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/hero_logistics.png"
                  alt="Global logistics and shipping"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-y border-border bg-white">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-1.5"
              >
                <div className="text-forest/40 mb-1">{s.icon}</div>
                <span className="font-heading font-bold text-[32px] text-forest leading-none">{s.value}</span>
                <span className="text-textSecondary text-[13px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader
              label="What We Do"
              title="End-to-end solutions that drive innovation, efficiency and global success."
              titleClassName="text-2xl md:text-[32px] max-w-2xl mx-auto"
            />
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Global Reach (Dark Banner) ─── */}
      <section className="relative overflow-hidden bg-forest">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-container mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Text Content */}
            <motion.div
              initial="hidden" whileInView="visible" variants={slideInLeft}
              viewport={{ once: true }}
              className="w-full lg:w-[45%]"
            >
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-5">
                Our Presence
              </span>
              <h2 className="font-heading font-bold text-white text-[30px] md:text-[40px] lg:text-[44px] tracking-tight leading-[1.1] mb-5">
                Global Reach.<br />
                <span className="text-accent">Local Expertise.</span>
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-8 max-w-sm">
                Operating in key markets with a strong network of partners and clients across the Middle East, South Asia, and Southeast Asia.
              </p>

              {/* Key market stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '5+', label: 'Countries' },
                  { value: '50+', label: 'Clients' },
                  { value: '10+', label: 'Years' },
                ].map((s) => (
                  <div key={s.label} className="border border-white/10 rounded-xl p-4 text-center bg-white/5">
                    <span className="font-heading font-bold text-white text-[26px] leading-none block">{s.value}</span>
                    <span className="text-white/40 text-[12px] mt-1 block">{s.label}</span>
                  </div>
                ))}
              </div>

              <Button href="/about" variant="accent" withArrow>
                View Our Presence
              </Button>
            </motion.div>

            {/* Right: World Map with Pins */}
            <motion.div
              initial="hidden" whileInView="visible" variants={slideInRight}
              viewport={{ once: true }}
              className="w-full lg:w-[55%]"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-forest-light/30">
                {/* World map image - higher opacity */}
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=85&auto=format"
                  alt="Global reach world map"
                  className="w-full h-[280px] md:h-[360px] object-cover opacity-30 mix-blend-luminosity"
                />
                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-transparent to-forest/40" />

                {/* Location Pins */}
                {[
                  { name: 'Dubai', flag: '🇦🇪', x: '63%', y: '44%' },
                  { name: 'Bahrain', flag: '🇧🇭', x: '60%', y: '48%' },
                  { name: 'Oman', flag: '🇴🇲', x: '65%', y: '52%' },
                  { name: 'India', flag: '🇮🇳', x: '71%', y: '52%' },
                  { name: 'Malaysia', flag: '🇲🇾', x: '79%', y: '58%' },
                ].map((loc, i) => (
                  <div
                    key={loc.name}
                    className="absolute flex flex-col items-center"
                    style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Pulse ring */}
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-accent z-10 relative shadow-lg shadow-accent/50" />
                      <div
                        className="absolute inset-0 w-3 h-3 rounded-full bg-accent/40 animate-ping"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      <div className="absolute -inset-2 w-7 h-7 rounded-full bg-accent/10" />
                    </div>
                    {/* Label */}
                    <div className="mt-2 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg whitespace-nowrap">
                      <span className="text-[11px] font-semibold text-forest">{loc.flag} {loc.name}</span>
                    </div>
                  </div>
                ))}

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/90 to-transparent px-5 py-4">
                  <p className="text-white/60 text-[12px]">
                    Serving clients across UAE, Bahrain, Oman, India & Malaysia
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Trusted by Businesses ─── */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader
              label="Industries"
              title="Trusted by Businesses Worldwide"
            />
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="group bg-white border border-border rounded-xl p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center text-forest mb-4 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                  {ind.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest text-[16px] mb-2 tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-textSecondary text-[13px] leading-relaxed mb-4">
                  {ind.description}
                </p>
                <ArrowRight size={14} className="text-forest/30 group-hover:text-accent transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="mx-6 mb-12">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[16px]">Don't see your industry?</p>
            <p className="text-textSecondary text-[13px]">Let's discuss how we can help your business.</p>
          </div>
          <Button href="/contact" variant="primary" withArrow>
            Talk to an Expert
          </Button>
        </div>
      </section>
    </main>
  )
}
