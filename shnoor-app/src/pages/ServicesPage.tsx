import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Brain, Cloud, Users, Package, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

const services = [
  {
    id: 'it',
    icon: <Server size={22} strokeWidth={1.5} />,
    title: 'IT Solutions',
    description: 'We deliver comprehensive IT solutions that modernize your business operations. From system integration and ERP implementation to cybersecurity and digital transformation — we engineer scalable solutions that drive real results.',
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
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'AI & Data Intelligence',
    description: 'Our AI and data practice helps businesses extract meaningful insights from complex data. We design predictive models, automate workflows, and build dashboards that make intelligence actionable across your organization.',
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
    icon: <Cloud size={22} strokeWidth={1.5} />,
    title: 'Cloud & Infrastructure',
    description: 'We architect, migrate, and manage cloud environments across AWS, Azure, and GCP. Our infrastructure team ensures reliability, security, and cost-efficiency at every layer of your technology stack.',
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
    icon: <Users size={22} strokeWidth={1.5} />,
    title: 'Staffing & Consulting',
    description: 'We connect you with vetted IT and trade professionals across the GCC and Asia. From short-term contract staffing to long-term strategic consulting, we match the right expertise to your opportunities.',
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
    icon: <Package size={22} strokeWidth={1.5} />,
    title: 'Global Trade & Logistics',
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
  const [activeTab, setActiveTab] = useState(0)
  const active = services[activeTab]

  return (
    <main className="bg-bg pt-[68px]">
      {/* ─── Page Header ─── */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight max-w-lg mb-4">
              Integrated solutions designed to solve today's challenges and build tomorrow's success.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── Tabbed Services Layout ─── */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* Left: Tab Navigation */}
            <motion.div
              initial="hidden" whileInView="visible" variants={slideInLeft}
              viewport={{ once: true }}
              className="w-full lg:w-[280px] shrink-0"
            >
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {services.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-[14px] font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                      activeTab === i
                        ? 'bg-forest text-white shadow-sm'
                        : 'bg-white text-textPrimary border border-border hover:border-accent/30 hover:bg-cream'
                    }`}
                  >
                    <span className={`shrink-0 ${activeTab === i ? 'text-accent' : 'text-forest/40'}`}>
                      {s.icon}
                    </span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Right: Service Content */}
            <motion.div
              key={active.id}
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="flex-1"
            >
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-[260px] md:h-[340px] overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {active.icon}
                    </div>
                    <h2 className="font-heading font-bold text-white text-xl tracking-tight">
                      {active.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-9">
                  <p className="text-textSecondary text-[15px] leading-relaxed mb-7">
                    {active.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {active.capabilities.map(cap => (
                      <div key={cap} className="flex items-start gap-2.5 text-[14px] text-textPrimary">
                        <CheckCircle size={15} className="text-accent mt-0.5 shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant="primary" withArrow>
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Need Custom Solution CTA ─── */}
      <section className="mx-6 mb-12">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[16px]">Need a Custom Solution for Your Business?</p>
            <p className="text-textSecondary text-[13px]">We'd love to hear your challenges and build the right solution.</p>
          </div>
          <Button href="/contact" variant="accent" withArrow>
            Get in Touch
          </Button>
        </div>
      </section>

      {/* ─── All Services Grid (Below tabs) ─── */}
      <section className="py-16 lg:py-20 px-6 bg-cream/50">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-3">All Services</p>
            <p className="text-center text-textSecondary text-[14px] mb-10">Quick overview of all our service offerings</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => { e.preventDefault(); setActiveTab(i); window.scrollTo({ top: 400, behavior: 'smooth' }) }}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i}
                viewport={{ once: true }}
                className="group bg-white border border-border rounded-xl p-5 card-hover text-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-forest mx-auto mb-3 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest text-[13px] tracking-tight mb-1">{s.title}</h3>
                <ArrowRight size={13} className="mx-auto text-forest/20 group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[34px] tracking-tight mb-3">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-lg mx-auto">
              Talk to our team. We'll assess your situation and recommend the right approach.
            </p>
            <Button href="/contact" size="lg" variant="accent" withArrow>Get a Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
