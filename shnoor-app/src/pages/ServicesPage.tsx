import { motion } from 'framer-motion'
import { Server, Brain, Cloud, Users, Package, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const services = [
  {
    id: 'it',
    icon: <Server size={28} strokeWidth={1.5} />,
    title: 'IT Solutions',
    subtitle: 'Enterprise Technology That Drives Results',
    description: 'We deliver comprehensive IT solutions that modernize your business operations. From system integration and ERP implementation to cybersecurity and digital transformation — we engineer solutions that scale.',
    capabilities: [
      'Enterprise Resource Planning (ERP)',
      'System Integration & API Development',
      'Cybersecurity & Risk Management',
      'Digital Transformation Strategy',
      'IT Support & Managed Services',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    imageAlt: 'IT infrastructure servers',
  },
  {
    id: 'ai',
    icon: <Brain size={28} strokeWidth={1.5} />,
    title: 'AI & Data Intelligence',
    subtitle: 'Turning Data Into Competitive Advantage',
    description: 'Our AI and data practice helps businesses extract meaningful insights from complex data. We design predictive models, automate workflows, and build dashboards that make intelligence actionable.',
    capabilities: [
      'Predictive Analytics & Forecasting',
      'Machine Learning Model Development',
      'Business Intelligence Dashboards',
      'Data Engineering & Pipelines',
      'Natural Language Processing (NLP)',
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format',
    imageAlt: 'AI and data analytics',
  },
  {
    id: 'cloud',
    icon: <Cloud size={28} strokeWidth={1.5} />,
    title: 'Cloud & Infrastructure',
    subtitle: 'Scalable Infrastructure for the Modern Enterprise',
    description: 'We architect, migrate, and manage cloud environments across AWS, Azure, and GCP. Our infrastructure team ensures reliability, security, and cost-efficiency at every layer of your stack.',
    capabilities: [
      'Cloud Migration & Lift-and-Shift',
      'Multi-Cloud Architecture Design',
      'DevOps & CI/CD Pipelines',
      'Cloud Security & Compliance',
      'Infrastructure Cost Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format',
    imageAlt: 'Cloud infrastructure',
  },
  {
    id: 'consulting',
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Staffing & Consulting',
    subtitle: 'The Right Talent, Right When You Need It',
    description: 'We connect you with vetted IT and trade professionals across the GCC and Asia. From short-term contract staffing to long-term strategic consulting, we match expertise to opportunity.',
    capabilities: [
      'IT Talent Placement (Contract & Permanent)',
      'CTO / CIO Advisory Services',
      'Organizational Change Management',
      'Process Optimization Consulting',
      'Vendor Selection & Management',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format',
    imageAlt: 'Professional team consulting',
  },
  {
    id: 'trade',
    icon: <Package size={28} strokeWidth={1.5} />,
    title: 'Trade & Logistics',
    subtitle: 'Global Trade, Simplified',
    description: 'Shnoor manages the full import/export lifecycle — from customs compliance and documentation to freight coordination and last-mile delivery across the Middle East, South Asia, and Southeast Asia.',
    capabilities: [
      'Import/Export Documentation & Compliance',
      'Customs Clearance & Tariff Advisory',
      'Freight Forwarding & Route Optimization',
      'Warehouse & Inventory Management',
      'Trade Finance Advisory',
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format',
    imageAlt: 'Container port logistics',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Page hero */}
      <section className="py-20 px-6 bg-white border-b border-border">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <SectionHeader
              label="Our Services"
              title="Comprehensive Solutions Across IT & Trade"
              subtitle="Five service pillars, one integrated partner. We help enterprises navigate technology and global commerce with clarity and confidence."
            />
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <div className="max-w-container mx-auto px-6 py-20 space-y-24">
        {services.map((s, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={s.id}
              id={s.id}
              initial="hidden" whileInView="visible" variants={fadeUp}
              viewport={{ once: true }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{s.title}</span>
                </div>
                <h2 className="font-heading font-bold text-forest text-2xl md:text-3xl tracking-tight mb-3">
                  {s.subtitle}
                </h2>
                <p className="text-textSecondary leading-relaxed mb-6">{s.description}</p>

                <ul className="space-y-2.5 mb-7">
                  {s.capabilities.map(cap => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-textPrimary">
                      <CheckCircle size={15} className="text-accent mt-0.5 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="primary">
                  Discuss Your Requirements
                </Button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl tracking-tight mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Talk to our team. We'll assess your situation and recommend the right approach.
          </p>
          <Button href="/contact" size="lg" variant="accent">Get a Free Consultation</Button>
        </div>
      </section>
    </main>
  )
}
