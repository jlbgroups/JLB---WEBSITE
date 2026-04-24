import { motion } from 'framer-motion'
import { Cloud, Building2, Users, HeartPulse, Package, Globe2 } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const industries = [
  {
    icon: <Package size={22} strokeWidth={1.5} />,
    title: 'Retail & E-commerce',
    tag: 'Digital Solutions',
    description: 'We empower retailers and e-commerce businesses with robust digital platforms and seamless customer experiences. From custom storefronts to integrated inventory management — we help you win in the digital marketplace.',
    highlights: ['Custom E-commerce Platforms', 'Inventory & OMS Integration', 'Digital Payment Solutions', 'Omnichannel Experience Design'],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80&auto=format',
  },
  {
    icon: <Globe2 size={22} strokeWidth={1.5} />,
    title: 'FinTech & Banking',
    tag: 'Financial Software',
    description: 'We deliver secure, scalable, and compliant financial technology solutions. Whether it\'s building digital wallets, payment gateways, or clinical analytics for finance — our expertise ensures your platform is future-ready and safe.',
    highlights: ['Digital Banking Solutions', 'Secure Payment Gateways', 'Financial Data Analytics', 'Regulatory Compliance IT'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format',
  },
  {
    icon: <Building2 size={22} strokeWidth={1.5} />,
    title: 'Enterprise & Manufacturing',
    tag: 'Enterprise Management',
    description: 'Our Enterprise Management solutions help businesses across manufacturing, finance, and services operate smarter. From ERP implementation and SAP outsourcing to business process automation — we deliver end-to-end services that align with your goals and enhance productivity.',
    highlights: ['ERP Implementation & SAP Outsourcing', 'Business Process Automation (BPA)', 'Data Management & Analytics', 'IT Infrastructure Management'],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format',
  },
  {
    icon: <Cloud size={22} strokeWidth={1.5} />,
    title: 'Technology & SaaS',
    tag: 'Cloud Management',
    description: 'In today\'s digital era, cloud is a necessity. We help technology companies harness the full potential of AWS, Google Cloud, and Microsoft Azure to optimize operations, improve collaboration, and reduce infrastructure costs at every stage of their growth.',
    highlights: ['AWS, Google Cloud & Azure Solutions', 'Cloud Migration & Architecture', 'DevOps & CI/CD Pipelines', 'Cloud Security & Compliance'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format',
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: 'Professional Services',
    tag: 'Consulting & Staffing',
    description: 'We provide expert IT consulting and specialized staffing solutions to help professional services businesses achieve their goals faster. Our team connects you with top-tier talent and industry expertise — ensuring the right skills for the right roles. Smart people. Smarter solutions.',
    highlights: ['IT & Technology Consulting', 'Temporary & Permanent Staffing', 'Talent Acquisition & Workforce Management', 'Project-Based Staffing Solutions'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format',
  },
  {
    icon: <HeartPulse size={22} strokeWidth={1.5} />,
    title: 'Sales',
    tag: 'Revenue Growth',
    description: 'We provide strategic sales solutions and high-performing talent to help businesses scale their revenue and market share. From lead generation to closing complex B2B deals — our sales experts drive results in the USA market.',
    highlights: ['B2B Sales & Lead Generation', 'Sales Team Augmentation', 'Revenue Strategy Consulting', 'CRM & Pipeline Optimization'],
    image: 'https://images.unsplash.com/photo-1556740734-7f132e01df7b?w=800&q=80&auto=format',
  },
]

export default function IndustriesPage() {
  return (
    <main className="bg-bg pt-[68px]">
      {/* Hero */}
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Industries</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight max-w-xl mb-4">
              Industries We Serve
            </h1>
            <p className="text-textSecondary text-[15px] max-w-xl leading-relaxed">
              From sales and retail to fintech and manufacturing — JLB Groups delivers tailored IT solutions across the sectors that matter most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-container mx-auto space-y-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial="hidden" whileInView="visible" variants={fadeUp} custom={i * 0.2}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:min-h-[380px] bg-white border border-border rounded-2xl overflow-hidden card-hover`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 shrink-0 h-56 md:h-auto">
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Content */}
              <div className="w-full md:w-3/5 p-7 md:p-9 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-forest">{ind.icon}</div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{ind.tag}</span>
                </div>
                <h2 className="font-heading font-bold text-forest text-[22px] tracking-tight mb-3">{ind.title}</h2>
                <p className="text-textSecondary text-[14px] leading-relaxed mb-5">{ind.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ind.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-[13px] text-textPrimary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Markets Banner */}
      <section className="py-16 px-6 bg-forest">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading font-bold text-white text-[26px] md:text-[32px] tracking-tight mb-3">Markets We Operate In</h2>
            <p className="text-white/50 text-[15px] max-w-md mx-auto">Connecting businesses across the USA.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: '🇺🇸', name: 'USA', note: 'Headquarters' },
            ].map((m, i) => (
              <motion.div key={m.name} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} viewport={{ once: true }}
                className="bg-white/8 border border-white/10 rounded-2xl px-6 py-5 text-center min-w-[130px]">
                <span className="text-3xl block mb-2">{m.flag}</span>
                <p className="font-heading font-bold text-white text-[15px]">{m.name}</p>
                <p className="text-white/40 text-[11px] mt-0.5">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 my-12">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[16px]">Don't see your industry?</p>
            <p className="text-textSecondary text-[13px]">We work across many more sectors — let's discuss your specific challenges.</p>
          </div>
          <Button href="/contact" variant="primary" withArrow>Talk to an Expert</Button>
        </div>
      </section>
    </main>
  )
}
