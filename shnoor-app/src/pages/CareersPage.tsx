import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Globe, Zap, TrendingUp, Shield, Heart, ChevronDown, ChevronUp, MapPin, Briefcase } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const benefits = [
  { icon: <Globe size={20} strokeWidth={1.5} />, title: 'Global Exposure', desc: 'Work on projects spanning the Middle East, South Asia, and Southeast Asia with international clients.' },
  { icon: <TrendingUp size={20} strokeWidth={1.5} />, title: 'Fast Career Growth', desc: 'A flat structure that rewards performance and initiative, not tenure.' },
  { icon: <Zap size={20} strokeWidth={1.5} />, title: 'Cutting-Edge Tech', desc: 'Access to the latest AI, cloud, and enterprise tools from day one.' },
  { icon: <Shield size={20} strokeWidth={1.5} />, title: 'Stability & Security', desc: 'Competitive salaries, annual reviews, and a growing business behind you.' },
  { icon: <Coffee size={20} strokeWidth={1.5} />, title: 'Flexible Work', desc: 'Hybrid and remote-friendly culture that trusts you to deliver results.' },
  { icon: <Heart size={20} strokeWidth={1.5} />, title: 'Health & Wellness', desc: 'Comprehensive medical insurance and wellness allowances for all full-time employees.' },
]

const roles = [
  {
    title: 'Senior Cloud Engineer',
    department: 'Cloud & Infrastructure',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Architect and manage scalable AWS/Azure environments for our enterprise clients. You\'ll lead cloud migration projects and mentor junior engineers.',
    requirements: ['5+ years cloud experience', 'AWS or Azure certified', 'Terraform/Ansible proficiency', 'Strong Linux background'],
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'Remote (GCC)',
    type: 'Full-time',
    description: 'Build and deploy machine learning models for logistics forecasting, demand planning, and business intelligence for our enterprise clients.',
    requirements: ['Python (PyTorch/TensorFlow)', '3+ years in production ML', 'MLOps experience', 'Strong statistics background'],
  },
  {
    title: 'Trade & Logistics Consultant',
    department: 'Global Trade',
    location: 'Manama, Bahrain',
    type: 'Full-time',
    description: 'Support clients with customs compliance, freight strategy, and supply chain optimization across GCC and Asia trade corridors.',
    requirements: ['5+ years in trade/logistics', 'GCC customs knowledge', 'Arabic preferred', 'Strong client management skills'],
  },
]

export default function CareersPage() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <main className="bg-bg pt-16">
      {/* Hero */}
      <section className="relative py-28 px-6 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden
          />
        </div>
        <div className="relative z-10 max-w-container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">Careers</span>
            <h1 className="font-heading font-bold text-white text-4xl md:text-5xl tracking-tight mb-5">
              Join a Team That's Shaping the Future
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              At Shnoor, you'll work on real challenges that matter — helping businesses across the globe adopt technology, streamline trade, and grow sustainably.
            </p>
            <Button href="#open-roles" variant="accent" size="lg">View Open Roles</Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <SectionHeader label="Why Shnoor" title="What Makes Us Different" subtitle="We invest in our people the same way we invest in our clients — with intention and long-term thinking." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-heading font-semibold text-forest text-base tracking-tight mb-2">{b.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture image strip */}
      <section className="py-4 px-6">
        <div className="max-w-container mx-auto grid grid-cols-3 gap-4 rounded-2xl overflow-hidden">
          {[
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format',
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format',
          ].map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src={src} alt="Team culture" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <SectionHeader label="Open Positions" title="Current Opportunities" subtitle="We're growing. If you're sharp, motivated, and want to make an impact — we want to hear from you." />
          <div className="mt-12 space-y-4">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-bg transition-colors"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <h3 className="font-heading font-semibold text-forest text-lg tracking-tight">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent rounded-full px-2.5 py-0.5 font-medium">
                        <Briefcase size={10} /> {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-bg text-textSecondary border border-border rounded-full px-2.5 py-0.5">
                        <MapPin size={10} /> {role.location}
                      </span>
                      <span className="inline-flex items-center text-xs bg-bg text-textSecondary border border-border rounded-full px-2.5 py-0.5">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  {expanded === i ? <ChevronUp size={18} className="text-textSecondary shrink-0" /> : <ChevronDown size={18} className="text-textSecondary shrink-0" />}
                </button>

                {expanded === i && (
                  <div className="px-6 pb-6 border-t border-border pt-5">
                    <p className="text-textSecondary leading-relaxed mb-4">{role.description}</p>
                    <ul className="space-y-2 mb-6">
                      {role.requirements.map(r => (
                        <li key={r} className="flex items-center gap-2 text-sm text-textPrimary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{r}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary">Apply for This Role</Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl tracking-tight mb-3">
            Don't See the Right Role?
          </h2>
          <p className="text-white/60 mb-8">Send us your CV. We're always interested in exceptional talent.</p>
          <Button href="/contact" size="lg" variant="accent">Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}
