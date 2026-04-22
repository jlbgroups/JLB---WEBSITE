import { motion } from 'framer-motion'
import {
  Server, Brain, Cloud, Users, Package,
  ArrowRight, Globe, Award, TrendingUp, CheckCircle
} from 'lucide-react'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { fadeUp } from '../utils/animations'

const stats = [
  { value: '100+', label: 'Global Clients', icon: <Users size={20} /> },
  { value: '10+', label: 'Years of Excellence', icon: <Award size={20} /> },
  { value: '5', label: 'Countries Served', icon: <Globe size={20} /> },
  { value: '50+', label: 'Projects Delivered', icon: <TrendingUp size={20} /> },
]

const services = [
  {
    icon: <Server size={20} strokeWidth={1.5} />,
    title: 'IT Solutions',
    description: 'End-to-end technology solutions including enterprise software, system integration, and digital transformation strategies.',
    link: '/services#it',
  },
  {
    icon: <Brain size={20} strokeWidth={1.5} />,
    title: 'AI & Data',
    description: 'Harness the power of artificial intelligence and advanced analytics to make smarter, faster business decisions.',
    link: '/services#ai',
  },
  {
    icon: <Cloud size={20} strokeWidth={1.5} />,
    title: 'Cloud & Infrastructure',
    description: 'Scalable, secure cloud architectures and managed infrastructure tailored to your enterprise needs.',
    link: '/services#cloud',
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'Staffing & Consulting',
    description: 'Expert talent placement and strategic consulting to strengthen your team and drive operational excellence.',
    link: '/services#consulting',
  },
  {
    icon: <Package size={20} strokeWidth={1.5} />,
    title: 'Global Trade',
    description: 'Comprehensive import/export management, logistics coordination, and customs consulting across the GCC and Asia.',
    link: '/services#trade',
  },
]

const caseStudies = [
  {
    industry: 'Logistics',
    headline: 'Streamlined Port Operations for a GCC Freight Leader',
    metric: '40% faster clearance',
    color: 'bg-accent/10 text-accent',
  },
  {
    industry: 'Manufacturing',
    headline: 'AI-driven Quality Control Reduced Defect Rate by 60%',
    metric: '60% defect reduction',
    color: 'bg-gold/10 text-gold',
  },
  {
    industry: 'Retail',
    headline: 'Cloud Migration Cut Infrastructure Costs by Half',
    metric: '50% cost savings',
    color: 'bg-sage/20 text-forest',
  },
]

const regions = [
  { name: 'UAE', x: '62%', y: '46%' },
  { name: 'Bahrain', x: '60%', y: '50%' },
  { name: 'Qatar', x: '61%', y: '48%' },
  { name: 'Oman', x: '64%', y: '52%' },
  { name: 'Malaysia', x: '78%', y: '58%' },
  { name: 'India', x: '70%', y: '52%' },
]

const clients = [
  'AlFuttaim Group', 'Emaar Properties', 'DP World',
  'Gulf Air', 'Bahrain Petroleum', 'Oman LNG',
]

export default function HomePage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_logistics.png"
            alt="Global logistics hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-6 py-24">
          <div className="max-w-xl">
            <motion.span
              initial="hidden" animate="visible" variants={fadeUp} custom={0}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-accent/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              Shnoor International LLC
            </motion.span>

            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6"
            >
              Technology Meets Global Trade for{' '}
              <span className="text-accent">Limitless Growth</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-white/75 text-lg leading-relaxed mb-8"
            >
              We bridge IT innovation and international trade — delivering enterprise solutions,
              AI insights, and logistics expertise across the GCC and Asia.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="flex flex-wrap gap-3"
            >
              <Button href="/contact" size="lg" variant="accent">
                Get a Consultation
              </Button>
              <Button href="/services" size="lg" variant="secondary"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Explore Services <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-y border-border">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-1"
              >
                <div className="text-accent mb-1">{s.icon}</div>
                <span className="font-heading font-bold text-3xl text-forest">{s.value}</span>
                <span className="text-textSecondary text-sm">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader
              label="What We Do"
              title="Integrated Solutions for a Complex World"
              subtitle="From enterprise IT to cross-border trade — we offer the full spectrum of services your business needs to compete globally."
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              View All Services <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader
              label="Global Reach"
              title="Serving Businesses Across Continents"
              subtitle="With offices and partners across the Middle East and South Asia, we deliver local expertise with global scale."
            />
          </motion.div>

          <div className="mt-12 relative bg-bg rounded-2xl border border-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format"
              alt="World map"
              className="w-full h-64 md:h-96 object-cover opacity-30"
            />
            {/* Region markers */}
            {regions.map(r => (
              <div
                key={r.name}
                className="absolute flex flex-col items-center"
                style={{ left: r.x, top: r.y, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/30 animate-pulse" />
                <span className="mt-1 text-[10px] font-semibold text-forest bg-white/90 rounded px-1.5 py-0.5 shadow-sm whitespace-nowrap">
                  {r.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {regions.map(r => (
              <span key={r.name} className="flex items-center gap-1.5 text-sm text-textSecondary">
                <CheckCircle size={13} className="text-accent" /> {r.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader
              label="Case Studies"
              title="Results That Speak for Themselves"
              subtitle="Real impact, measurable outcomes. Here's how we've helped our clients grow."
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <motion.div
                key={c.headline}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className={`text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1 ${c.color}`}>
                  {c.industry}
                </span>
                <h3 className="font-heading font-semibold text-forest text-lg leading-snug mt-4 mb-3 tracking-tight">
                  {c.headline}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-accent">{c.metric}</span>
                  <ArrowRight size={16} className="text-textSecondary group-hover:text-accent transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 px-6 bg-white border-y border-border">
        <div className="max-w-container mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-textSecondary mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map(c => (
              <span key={c} className="font-heading font-semibold text-sm text-textSecondary/60 hover:text-forest transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Ready to scale?
            </span>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl tracking-tight mb-4">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Talk to our experts and discover how Shnoor can accelerate your business across IT, AI, and global trade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" variant="accent">
                Get a Consultation
              </Button>
              <Button href="/about" size="lg" variant="secondary"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
