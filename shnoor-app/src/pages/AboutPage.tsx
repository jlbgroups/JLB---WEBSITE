import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Smile, Globe, Briefcase, BarChart3 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const pillars = [
  {
    icon: <Eye size={22} strokeWidth={1.5} />,
    title: 'Our Vision',
    desc: 'To be a global leader in technology and trade, creating value everywhere.',
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: 'Our Mission',
    desc: 'Deliver innovative solutions that empower businesses to grow and thrive.',
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: 'Our Values',
    desc: 'Integrity, innovation, excellence and sustainable success.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: 'Our Commitment',
    desc: 'We are committed to building lasting partnerships and delivering results.',
  },
]

const stats = [
  { value: '50+', label: 'Happy Clients', icon: <Smile size={20} strokeWidth={1.5} /> },
  { value: '5+', label: 'Countries', icon: <Globe size={20} strokeWidth={1.5} /> },
  { value: '100+', label: 'Projects Delivered', icon: <Briefcase size={20} strokeWidth={1.5} /> },
  { value: '98%', label: 'Client Satisfaction', icon: <BarChart3 size={20} strokeWidth={1.5} /> },
]

const timeline = [
  { year: '2012', event: 'Founded with a vision to bridge technology and global presence.' },
  { year: '2015', event: 'Expanded IT services and strengthened global presence.' },
  { year: '2018', event: 'Launched AI & data services and new trade verticals.' },
  { year: '2022+', event: 'Continuing our journey of innovation and global impact.' },
]

export default function AboutPage() {
  return (
    <main className="bg-bg pt-[68px]">
      {/* ─── Hero Section ─── */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden" animate="visible" variants={slideInLeft}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                About Us
              </span>
              <h1 className="font-heading font-bold text-forest text-[30px] md:text-[38px] tracking-tight leading-tight mb-5">
                About Shnoor International
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-3">
                Shnoor International LLC is a global company delivering innovative IT solutions and reliable trade services.
              </p>
              <p className="text-textSecondary text-[15px] leading-relaxed">
                We help businesses grow with technology, optimize operations and expand across borders.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden" animate="visible" variants={slideInRight}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/about_team.png"
                  alt="Shnoor International team"
                  className="w-full h-[300px] md:h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Vision / Mission / Values / Commitment ─── */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center text-forest mb-4">
                  {p.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest text-[15px] tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-textSecondary text-[13px] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-white border-y border-border">
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

      {/* ─── Our Journey (Horizontal Timeline) ─── */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader title="Our Journey" />
          </motion.div>

          <div className="mt-14 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />

            {/* Timeline dots and years */}
            <div className="hidden md:flex justify-between relative mb-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                  style={{ width: `${100 / timeline.length}%` }}
                >
                  <div className="w-3 h-3 rounded-full bg-forest ring-4 ring-cream mb-3 relative z-10" />
                  <span className="font-heading font-bold text-forest text-[14px]">{t.year}</span>
                </motion.div>
              ))}
            </div>

            {/* Timeline cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                  viewport={{ once: true }}
                  className="bg-white border border-border rounded-xl p-5"
                >
                  <span className="md:hidden font-heading font-bold text-accent text-[14px] block mb-2">{t.year}</span>
                  <p className="text-textSecondary text-[13px] leading-relaxed">
                    {t.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[34px] tracking-tight mb-3">
              Ready to Work With Us?
            </h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-lg mx-auto">
              Let's discuss how Shnoor can help your business grow and succeed globally.
            </p>
            <Button href="/contact" size="lg" variant="accent" withArrow>Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
