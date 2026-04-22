import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Globe, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const values = [
  { icon: <Shield size={22} strokeWidth={1.5} />, title: 'Integrity', desc: 'We operate with full transparency and hold ourselves accountable to every commitment we make.' },
  { icon: <Lightbulb size={22} strokeWidth={1.5} />, title: 'Innovation', desc: 'We continuously push boundaries, embracing new technologies to stay ahead of industry change.' },
  { icon: <Globe size={22} strokeWidth={1.5} />, title: 'Global Mindset', desc: 'Diverse teams, diverse markets — we bring regional expertise and international perspective to every project.' },
  { icon: <Target size={22} strokeWidth={1.5} />, title: 'Results-Driven', desc: 'We measure success through client outcomes — not deliverables. Real results, real impact.' },
  { icon: <Heart size={22} strokeWidth={1.5} />, title: 'Partnership', desc: 'We treat every client engagement as a long-term relationship built on trust and mutual success.' },
  { icon: <Eye size={22} strokeWidth={1.5} />, title: 'Clarity', desc: 'We communicate with precision and provide clear strategies — no jargon, no ambiguity.' },
]

const timeline = [
  { year: '2012', event: 'Shnoor International founded in Dubai, UAE' },
  { year: '2014', event: 'Launched IT Solutions division, first enterprise client won' },
  { year: '2016', event: 'Expanded into Bahrain and Oman markets' },
  { year: '2018', event: 'Trade & Logistics division established' },
  { year: '2020', event: 'AI & Data Intelligence practice launched' },
  { year: '2022', event: 'Operations expanded to Malaysia and India' },
  { year: '2024', event: '100+ clients served across 5 countries' },
]

const metrics = [
  { value: '100+', label: 'Global Clients' },
  { value: '10+', label: 'Years in Business' },
  { value: '5', label: 'Countries' },
  { value: '200+', label: 'Team Members' },
]

export default function AboutPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Page hero */}
      <section className="relative py-24 px-6 overflow-hidden bg-forest">
        <div className="absolute inset-0 opacity-10">
          <img src="/about_team.png" alt="" className="w-full h-full object-cover" aria-hidden />
        </div>
        <div className="relative z-10 max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">About Shnoor</span>
            <h1 className="font-heading font-bold text-white text-4xl md:text-5xl tracking-tight mb-5">
              A Legacy of Innovation and Global Trade
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Founded in Dubai in 2012, Shnoor International has grown from a regional IT firm into a multi-disciplinary powerhouse connecting technology and commerce across the Middle East and Asia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white border-b border-border">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="font-heading font-bold text-4xl text-forest block">{m.value}</span>
                <span className="text-textSecondary text-sm">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <img
                  src="/about_team.png"
                  alt="Shnoor International team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp} custom={1}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <SectionHeader
                label="Who We Are"
                title="More Than a Service Provider — A Growth Partner"
                align="left"
              />
              <p className="text-textSecondary leading-relaxed mt-5 mb-4">
                Shnoor International LLC is a UAE-headquartered firm specializing in IT solutions, AI and data intelligence, cloud infrastructure, staffing, and global trade. We serve enterprises in logistics, manufacturing, retail, healthcare, and energy.
              </p>
              <p className="text-textSecondary leading-relaxed mb-6">
                Our strength lies in our unique dual focus — deep technology capability combined with hands-on trade and logistics expertise. This positions us as a rare partner that can both digitize your operations and streamline your supply chain.
              </p>
              <Button href="/contact">Work With Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <SectionHeader label="Our Purpose" title="Vision & Mission" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp}
              viewport={{ once: true }}
              className="bg-bg border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Eye size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-forest text-xl tracking-tight">Our Vision</h3>
              </div>
              <p className="text-textSecondary leading-relaxed">
                To be the most trusted technology and trade partner for enterprises across the Middle East and Asia — known for precision, reliability, and transformative impact.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp} custom={1}
              viewport={{ once: true }}
              className="bg-forest text-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-accent flex items-center justify-center">
                  <Target size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-white text-xl tracking-tight">Our Mission</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                To empower organizations by integrating smart technology with global trade intelligence — accelerating growth, reducing complexity, and building resilient operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <SectionHeader label="What Guides Us" title="Core Values" subtitle="Six principles that define every engagement, every decision, every result." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">{v.icon}</div>
                <h3 className="font-heading font-semibold text-forest text-lg tracking-tight mb-2">{v.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-2xl">
          <SectionHeader label="Our Journey" title="Key Milestones" />
          <div className="mt-12 relative">
            <div className="absolute left-[calc(theme(spacing.16)+1px)] top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i * 0.5}
                viewport={{ once: true }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <span className="w-16 text-right font-heading font-bold text-accent text-sm shrink-0 pt-0.5">{t.year}</span>
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 shrink-0" />
                </div>
                <p className="text-textPrimary text-sm leading-relaxed pt-0.5">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
