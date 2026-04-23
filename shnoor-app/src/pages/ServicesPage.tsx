import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cloud, Building2, Brain, Users, ShieldCheck, Network, HeartPulse, Package, Globe2, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp, slideInLeft, slideInRight } from '../utils/animations'

// Map hash → tab index (must match the services array order below)
const HASH_TO_INDEX: Record<string, number> = {
  cloud: 0, enterprise: 1, ai: 2, consulting: 3,
  bgv: 4, network: 5, healthcare: 6, logistics: 7, export: 8,
}

const services = [
  {
    id: 'cloud',
    icon: <Cloud size={22} strokeWidth={1.5} />,
    title: 'Cloud Management',
    description: 'In today\'s digital era, the cloud is no longer an option—it\'s a necessity. At SHNOOR International LLC, we help businesses harness the full potential of cloud technology to optimize operations, improve collaboration, and reduce infrastructure costs.',
    capabilities: ['AWS Cloud Solutions', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Cloud Migration & Lift-and-Shift', 'Multi-Cloud Architecture Design', 'Cloud Security & Compliance'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format',
    imageAlt: 'Cloud infrastructure',
  },
  {
    id: 'enterprise',
    icon: <Building2 size={22} strokeWidth={1.5} />,
    title: 'Enterprise Management',
    description: 'Our Enterprise Management solutions help businesses operate smarter, faster, and more efficiently. We provide strategies, tools, and technologies to manage resources, processes, and information across your organization — ensuring every part works in sync.',
    capabilities: ['ERP Implementation & Support', 'SAP Outsourcing (ABAP, MM & more)', 'Business Process Automation (BPA)', 'Data Management & Analytics', 'Performance Monitoring & Optimization', 'IT Infrastructure & Management'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    imageAlt: 'Enterprise management systems',
  },
  {
    id: 'ai',
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'Data & Artificial Intelligence',
    description: 'We combine the power of data with the intelligence of AI to help businesses innovate, automate, and grow. Our solutions leverage machine learning, predictive analytics, and NLP to transform raw data into actionable insights and intelligent decision-making.',
    capabilities: ['Machine Learning Model Development', 'AI-Driven Predictive Analysis', 'Intelligent Automation with AI & RPA', 'Data Strategy & Engineering', 'NLP & Cognitive Technologies', 'Business Intelligence Dashboards'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format',
    imageAlt: 'AI and data analytics',
  },
  {
    id: 'consulting',
    icon: <Users size={22} strokeWidth={1.5} />,
    title: 'Consulting & Staffing',
    description: 'We provide expert IT consulting and specialized staffing solutions to help businesses achieve their goals faster. Our team connects you with top-tier talent and industry expertise — ensuring the right skills for the right roles. Smart people. Smarter solutions.',
    capabilities: ['IT & Technology Consulting', 'Temporary & Permanent Staffing', 'Talent Acquisition & Workforce Management', 'Project-Based Staffing', 'CTO/CIO Advisory Services', 'Vendor Selection & Management'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format',
    imageAlt: 'Professional consulting team',
  },
  {
    id: 'bgv',
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: 'Background Verification',
    description: 'Ensure safe hiring with our comprehensive background verification services. Our AI-powered 3-step verification process is fast, compliant, and delivers clear actionable reports — often within 24–48 hours. Compliance-first. Future-ready.',
    capabilities: ['Criminal Record Checks', 'Employment History Verification', 'Education Verification', 'AI-Powered Verification System', 'Compliance with Local & Federal Regulations', 'Encrypted Portal & Secure Data Handling'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format',
    imageAlt: 'Background verification process',
  },
  {
    id: 'network',
    icon: <Network size={22} strokeWidth={1.5} />,
    title: 'Network Management',
    description: 'Keeping your business connected, secure, and running smoothly. Our professional network management services optimize performance, strengthen security, reduce downtime, and ensure a reliable IT infrastructure for your business.',
    capabilities: ['Network Monitoring & Health Tracking', 'Security Management & Threat Response', 'Configuration & Performance Management', 'Fault Management & Rapid Resolution', 'Cost-Efficient Resource Management', '24/7 Expert Support'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format',
    imageAlt: 'Network infrastructure',
  },
  {
    id: 'healthcare',
    icon: <HeartPulse size={22} strokeWidth={1.5} />,
    title: 'Healthcare IT',
    description: 'We leverage advanced healthcare software combined with data intelligence and AI to help healthcare providers streamline operations, enhance patient care, and improve clinical outcomes. Secure, compliant, and built for the future of healthcare.',
    capabilities: ['Healthcare Management Systems', 'Secure Data & Compliance Solutions', 'Analytics & Decision Support Tools', 'Clinical Intelligence & Insights', 'Patient Records & Scheduling Platforms', 'HIPAA-Compliant Cloud Infrastructure'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format',
    imageAlt: 'Healthcare technology',
  },
  {
    id: 'logistics',
    icon: <Package size={22} strokeWidth={1.5} />,
    title: 'Logistics Management',
    description: 'We simplify global trade with reliable logistics management solutions. With strong operational bases at Mumbai Port and Mundra Port, Gujarat, we offer unmatched connectivity for businesses expanding their global reach.',
    capabilities: ['Dry Container Supply from Mumbai & Mundra Ports', 'Cargo Handling, Packing & Securing', 'Customs Clearance & Regulatory Documentation', 'Multi-Modal Transport (Sea, Rail & Road)', 'Real-Time Tracking & Monitoring', 'End-to-End Supply Chain Support'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format',
    imageAlt: 'Port logistics and shipping containers',
  },
  {
    id: 'export',
    icon: <Globe2 size={22} strokeWidth={1.5} />,
    title: 'Export Management',
    description: 'We bridge markets by delivering high-quality products from India to global destinations including UAE, Bahrain, Qatar, Oman, and Malaysia. Our services are built on trust, transparency, and timely delivery — ensuring seamless cross-border trade.',
    capabilities: ['Product Sourcing & Procurement', 'International Shipping & Logistics', 'Quality Control & Compliance', 'Market Expansion Support', 'Customized Export Strategies', 'Trade Finance Advisory'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format',
    imageAlt: 'Export management and global trade',
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const active = services[activeTab]
  const location = useLocation()

  // When the URL hash changes (e.g. /services#cloud), switch to that tab
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && HASH_TO_INDEX[hash] !== undefined) {
      setActiveTab(HASH_TO_INDEX[hash])
      // Scroll the tab panel into view smoothly
      setTimeout(() => {
        const el = document.getElementById('service-tabs')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  return (
    <main className="bg-bg pt-[68px]">
      {/* Page Header */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Services</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight max-w-2xl mb-4">
              Integrated Solutions for Technology & Global Trade
            </h1>
            <p className="text-textSecondary text-[15px] max-w-xl leading-relaxed">
              From cloud infrastructure and AI to logistics and export management — everything your business needs to grow, under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Services */}
      <section id="service-tabs" className="py-16 lg:py-24 px-6 scroll-mt-[68px]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* Tab Nav */}
            <motion.div initial="hidden" whileInView="visible" variants={slideInLeft} viewport={{ once: true }} className="w-full lg:w-[280px] shrink-0">
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {services.map((s, i) => (
                  <button key={s.id} onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-[14px] font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${activeTab === i ? 'bg-forest text-white shadow-sm' : 'bg-white text-textPrimary border border-border hover:border-accent/30 hover:bg-cream'}`}>
                    <span className={`shrink-0 ${activeTab === i ? 'text-accent' : 'text-forest/40'}`}>{s.icon}</span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Service Content */}
            <motion.div key={active.id} initial="hidden" animate="visible" variants={slideInRight} className="flex-1">
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="relative h-[260px] md:h-[320px] overflow-hidden">
                  <img src={active.image} alt={active.imageAlt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">{active.icon}</div>
                    <h2 className="font-heading font-bold text-white text-xl tracking-tight">{active.title}</h2>
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-textSecondary text-[15px] leading-relaxed mb-7">{active.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {active.capabilities.map(cap => (
                      <div key={cap} className="flex items-start gap-2.5 text-[14px] text-textPrimary">
                        <CheckCircle size={15} className="text-accent mt-0.5 shrink-0" />{cap}
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" variant="primary" withArrow>Get Started</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Quick Grid */}
      <section className="py-16 px-6 bg-cream/50 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-10">All Services at a Glance</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {services.map((s, i) => (
              <motion.button key={s.id} onClick={() => { setActiveTab(i); window.scrollTo({ top: 350, behavior: 'smooth' }) }}
                initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="group bg-white border border-border rounded-xl p-4 card-hover text-center cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-cream flex items-center justify-center text-forest mx-auto mb-2.5 group-hover:bg-accent/10 group-hover:text-accent transition-all">{s.icon}</div>
                <h3 className="font-heading font-semibold text-forest text-[11px] tracking-tight leading-tight">{s.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[34px] tracking-tight mb-3">Not Sure Which Service You Need?</h2>
            <p className="text-white/50 text-[15px] mb-8 max-w-lg mx-auto">Talk to our team. We'll assess your situation and recommend the right approach. Email us at <a href="mailto:info@shnoor.com" className="text-accent underline">info@shnoor.com</a></p>
            <Button href="/contact" size="lg" variant="accent" withArrow>Get a Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
