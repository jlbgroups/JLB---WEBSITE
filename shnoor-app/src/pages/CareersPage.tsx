import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Heart, ChevronDown, ChevronUp, MapPin, Briefcase } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const benefits = [
  { icon: <TrendingUp size={22} strokeWidth={1.5} />, title: 'Growth Opportunities', desc: 'Learn, grow and advance your career with us.' },
  { icon: <Users size={22} strokeWidth={1.5} />, title: 'Great Culture', desc: 'Collaborative, diverse and people-first.' },
  { icon: <Zap size={22} strokeWidth={1.5} />, title: 'Impactful Work', desc: 'Solve meaningful problems and create real impact.' },
  { icon: <Heart size={22} strokeWidth={1.5} />, title: 'Work-Life Balance', desc: 'Flexible and supportive work environment.' },
]

const roles = [
  {
    title: 'Senior Cloud Engineer', department: 'Cloud & Infrastructure', location: 'Dubai, UAE', type: 'Full-time',
    description: 'Architect and manage scalable AWS/Azure environments for enterprise clients.',
    requirements: ['5+ years cloud experience', 'AWS or Azure certified', 'Terraform/Ansible proficiency', 'Strong Linux background'],
  },
  {
    title: 'AI/ML Engineer', department: 'AI & Data', location: 'Remote (GCC)', type: 'Full-time',
    description: 'Build and deploy ML models for logistics forecasting and business intelligence.',
    requirements: ['Python (PyTorch/TensorFlow)', '3+ years in production ML', 'MLOps experience', 'Strong statistics background'],
  },
  {
    title: 'Trade & Logistics Consultant', department: 'Global Trade', location: 'Manama, Bahrain', type: 'Full-time',
    description: 'Support clients with customs compliance, freight strategy, and supply chain optimization.',
    requirements: ['5+ years in trade/logistics', 'GCC customs knowledge', 'Arabic preferred', 'Strong client management'],
  },
]

export default function CareersPage() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <main className="bg-bg pt-[68px]">
      {/* Hero */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={slideInLeft} className="w-full lg:w-1/2">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Careers</span>
              <h1 className="font-heading font-bold text-forest text-[30px] md:text-[40px] tracking-tight leading-tight mb-5">
                Build Your Future With Us
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-7">
                Join a team of innovators and problem solvers who are passionate about creating impact.
              </p>
              <Button href="#open-roles" variant="primary" size="lg" withArrow>View Open Positions</Button>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format" alt="Team collaboration" className="w-full h-[300px] md:h-[360px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader title="Why Work With Us?" />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest mx-auto mb-4">{b.icon}</div>
                <h3 className="font-heading font-semibold text-forest text-[15px] tracking-tight mb-2">{b.title}</h3>
                <p className="text-textSecondary text-[13px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 lg:py-20 px-6 bg-white border-y border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Open Positions" title="Current Opportunities" subtitle="We're growing. If you're motivated and want to make an impact — we want to hear from you." />
          </motion.div>
          <div className="mt-12 space-y-4">
            {roles.map((role, i) => (
              <motion.div key={role.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-bg border border-border rounded-xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-cream/50 transition-colors"
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                    <h3 className="font-heading font-semibold text-forest text-[16px] tracking-tight">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] bg-accent/10 text-accent rounded-full px-2.5 py-0.5 font-medium">
                        <Briefcase size={10} /> {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5">
                        <MapPin size={10} /> {role.location}
                      </span>
                      <span className="inline-flex items-center text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5">{role.type}</span>
                    </div>
                  </div>
                  {expanded === i ? <ChevronUp size={18} className="text-textSecondary shrink-0" /> : <ChevronDown size={18} className="text-textSecondary shrink-0" />}
                </button>
                {expanded === i && (
                  <div className="px-6 pb-6 border-t border-border pt-5">
                    <p className="text-textSecondary text-[14px] leading-relaxed mb-4">{role.description}</p>
                    <ul className="space-y-2 mb-6">
                      {role.requirements.map(r => (
                        <li key={r} className="flex items-center gap-2 text-[13px] text-textPrimary">
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[18px]">Ready to Make an Impact?</p>
            <p className="text-textSecondary text-[14px]">Explore exciting career opportunities and grow with us.</p>
          </div>
          <Button href="/contact" variant="accent" size="lg" withArrow>Explore Careers</Button>
        </div>
      </section>
    </main>
  )
}
