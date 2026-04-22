import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Globe2, ChevronDown, ChevronUp, MapPin, AlertTriangle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useState } from 'react'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const benefits = [
  { icon: <TrendingUp size={22} strokeWidth={1.5} />, title: 'Career Growth', desc: 'A company where your skills make a real difference — across technology and global trade.' },
  { icon: <Users size={22} strokeWidth={1.5} />, title: 'Collaborative Culture', desc: 'Passionate, diverse, and forward-thinking team that believes in pushing boundaries.' },
  { icon: <Zap size={22} strokeWidth={1.5} />, title: 'Impactful Work', desc: 'From IT Consulting to international export — your work spans industries, regions, and technologies.' },
  { icon: <Globe2 size={22} strokeWidth={1.5} />, title: 'Global Exposure', desc: 'Work with clients and partners across India, UAE, Bahrain, Qatar, Oman & Malaysia.' },
]

const openings = [
  { title: 'SAP Consultant (ABAP / MM)', department: 'Enterprise Management', location: 'Muscat, Oman', type: 'Full-time', desc: 'Support full lifecycle SAP outsourcing including development, customization, and maintenance for our enterprise clients.' },
  { title: 'Cloud Solutions Engineer', department: 'Cloud Management', location: 'Remote / UAE', type: 'Full-time', desc: 'Architect and manage AWS, Azure, and GCP environments for our global client base.' },
  { title: 'IT Staffing Specialist', department: 'Consulting & Staffing', location: 'Muscat, Oman', type: 'Full-time', desc: 'Source, screen, and place top-tier IT professionals across the GCC region for client engagements.' },
  { title: 'Logistics & Trade Coordinator', department: 'Export Management', location: 'Mumbai / Mundra', type: 'Full-time', desc: 'Coordinate dry container shipments from Mumbai & Mundra ports, manage customs documentation and delivery.' },
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
                Are You Ready to Take On the Challenge?
              </h1>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-4">
                At SHNOOR International LLC, we believe that great companies are built by great people. We're looking for innovators, problem-solvers, and go-getters who are passionate about making an impact in the worlds of technology and global trade.
              </p>
              <p className="text-textSecondary text-[15px] leading-relaxed mb-7">
                Whether you're an IT expert, software developer, SAP consultant, business strategist, or trade professional — at SHNOOR International, you won't just be doing a job. You'll be building a career where your skills make a difference.
              </p>
              <Button href="#open-roles" variant="primary" size="lg" withArrow>View Open Positions</Button>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInRight} className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format" alt="SHNOOR team collaboration" className="w-full h-[300px] md:h-[360px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <SectionHeader label="Life at Shnoor" title="Explore SHNOOR" subtitle="When you join us, you become part of a dynamic hub where technology meets global trade, creating opportunities that challenge your skills and expand your horizons." />
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
            <SectionHeader label="Open Positions" title="Latest Openings" subtitle="We're growing across technology and trade. Find your next opportunity with SHNOOR International." />
          </motion.div>
          <div className="mt-12 space-y-4">
            {openings.map((role, i) => (
              <motion.div key={role.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-bg border border-border rounded-xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-cream/50 transition-colors"
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                    <h3 className="font-heading font-semibold text-forest text-[16px] tracking-tight">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] bg-accent/10 text-accent rounded-full px-2.5 py-0.5 font-medium">{role.department}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5"><MapPin size={9} /> {role.location}</span>
                      <span className="text-[11px] bg-cream text-textSecondary border border-border rounded-full px-2.5 py-0.5">{role.type}</span>
                    </div>
                  </div>
                  {expanded === i ? <ChevronUp size={18} className="text-textSecondary shrink-0" /> : <ChevronDown size={18} className="text-textSecondary shrink-0" />}
                </button>
                {expanded === i && (
                  <div className="px-6 pb-6 border-t border-border pt-5">
                    <p className="text-textSecondary text-[14px] leading-relaxed mb-5">{role.desc}</p>
                    <Button href="/contact" variant="primary">Apply for This Role</Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Scam Warning */}
      <section className="px-6 py-10">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-semibold text-amber-800 text-[15px] mb-2">⚠️ Recruitment Scam Alert</h3>
              <p className="text-amber-700 text-[13px] leading-relaxed">
                SHNOOR International LLC <strong>never charges fees</strong>, requests payments, or asks for financial information at any stage of our hiring process. All official communications come from <strong>@shnoor.com</strong> email addresses. If you receive suspicious communication claiming to be from SHNOOR, please treat it as a scam.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 mb-6">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[18px]">SHNOOR — Get the Future You Want!</p>
            <p className="text-textSecondary text-[14px]">Send your resume to <a href="mailto:info@shnoor.com" className="text-accent font-medium">info@shnoor.com</a></p>
          </div>
          <Button href="/contact" variant="accent" size="lg" withArrow>Apply Now</Button>
        </div>
      </section>
    </main>
  )
}
