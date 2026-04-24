import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle, Globe2, Layers, Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const whyUs = [
  { icon: <Award size={20} strokeWidth={1.5} />, title: 'Proven IT Track Record', desc: 'Demonstrated expertise across multiple IT domains with a history of successful delivery.' },
  { icon: <CheckCircle size={20} strokeWidth={1.5} />, title: 'Quality & Innovation', desc: 'Commitment to quality, innovation, and client satisfaction in every engagement.' },
  { icon: <Globe2 size={20} strokeWidth={1.5} />, title: 'Global Talent Network', desc: 'Extensive network of skilled professionals across the USA.' },
  { icon: <Layers size={20} strokeWidth={1.5} />, title: 'Agile Delivery', desc: 'Faster time-to-market with agile methodologies and lean development processes.' },
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
                About JLB Groups
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
                JLB Groups is a premier IT Staffing and Consulting firm dedicated to bridging the talent gap in the digital economy. With expertise spanning IT Staffing, Software Development, and Managed Services, we empower businesses with top-tier technology talent and innovative digital solutions.
              </p>
              <p className="text-textSecondary text-[15px] leading-relaxed">
                Operating across the <strong className="text-forest">USA</strong>, we help scaling organizations build high-performing teams and deliver robust software products.
              </p>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format" alt="JLB Groups IT Professional team" className="w-full h-[300px] md:h-[360px] object-cover" />
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
                To provide innovative IT solutions and elite staffing services that empower our clients to build, scale, and succeed in a rapidly evolving digital landscape. We aim to deliver excellence through expert talent, agile processes, and a customer-centric approach.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} custom={1} viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest mb-5">
                <Eye size={22} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-forest text-[20px] tracking-tight mb-3">Our Vision</h2>
              <p className="text-textSecondary text-[14px] leading-relaxed">
                To be a global leader in IT talent orchestration and software innovation — transforming businesses with smart human capital and cutting-edge technology that drives digital excellence and mutual success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-border">
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: '100+', label: 'Clients Served' }, { value: '1', label: 'Primary Market' }, { value: '9+', label: 'Service Verticals' }, { value: 'USA', label: 'Headquartered' }].map((s, i) => (
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
            <SectionHeader label="Our Approach" title="In a world where talent matters, we bring experts and technology together." titleClassName="max-w-2xl mx-auto text-[24px] md:text-[30px]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
              At JLB Groups, we believe talent is the true driver of innovation. Our unique approach focuses on identifying, nurturing, and deploying top IT professionals who can solve complex problems and build future-ready software solutions.
            </p>
            <p className="text-textSecondary text-[15px] leading-relaxed">
              Our team combines deep industry insights with rigorous vetting to ensure our clients get the best skills for their specific needs. Whether you're seeking to augment your existing team or build a new product from scratch — JLB Groups provides the expertise and dedication you need to win.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 px-6 bg-cream/40 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Why Choose Us" title="Why Choose JLB Groups?" />
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
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Global Delivery</span>
              <h2 className="font-heading font-bold text-forest text-[26px] md:text-[32px] tracking-tight leading-tight mb-4">
                Your Bridge to Global Tech Talent
              </h2>
              <p className="text-textSecondary text-[14px] leading-relaxed mb-4">
                Our expertise in international staffing means smooth hiring processes, compliant onboarding, and access to a vast pool of global talent. Whether it's remote software developers or on-site IT consultants, JLB Groups is your bridge to excellence.
              </p>
              <p className="text-textSecondary text-[14px] leading-relaxed mb-6">
                We work closely with clients across multiple industries to understand their technical requirements and project goals, ensuring the perfect match between talent and opportunity in the global market.
              </p>
              <div className="flex flex-wrap gap-2">
                {['🇺🇸 USA'].map(c => (
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
              Let's discuss how JLB Groups can help your business build great teams and products.
            </p>
            <Button href="/contact" size="lg" variant="accent" withArrow>Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
