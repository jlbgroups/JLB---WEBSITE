import { motion } from 'framer-motion'
import { Truck, ShoppingBag, Factory, Heart, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const industries = [
  {
    icon: <Truck size={24} strokeWidth={1.5} />,
    title: 'Logistics & Supply Chain',
    description: 'We help freight forwarders, port operators, and logistics companies modernize operations with route optimization, real-time tracking, and customs automation.',
    useCase: 'Reduced port clearance time by 40% for a GCC freight leader using AI-driven document processing.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format',
    tag: 'Logistics',
  },
  {
    icon: <ShoppingBag size={24} strokeWidth={1.5} />,
    title: 'Retail & E-Commerce',
    description: 'From inventory intelligence to omnichannel customer experiences, we enable retailers to compete in a digital-first world with robust IT and data solutions.',
    useCase: 'Implemented a unified e-commerce platform that grew online sales by 3x for a UAE retail chain.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format',
    tag: 'Retail',
  },
  {
    icon: <Factory size={24} strokeWidth={1.5} />,
    title: 'Manufacturing',
    description: 'We bring smart factory capabilities, predictive maintenance, and supply chain digitization to manufacturing operations across the GCC and Asia.',
    useCase: 'AI quality control system reduced defect rate by 60% for a Bahrain-based manufacturer.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format',
    tag: 'Manufacturing',
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: 'Healthcare',
    description: 'We support healthcare providers with digital patient management, medical supply chain optimization, and data privacy-compliant IT infrastructure.',
    useCase: 'Deployed a HIPAA-compliant cloud infrastructure for a multi-site hospital group in Oman.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format',
    tag: 'Healthcare',
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: 'Energy & Utilities',
    description: 'From oil and gas to renewables, we support energy sector clients with field operations technology, IoT integration, and regulatory compliance systems.',
    useCase: 'Developed an IoT monitoring dashboard for an Oman LNG facility, reducing downtime by 35%.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format',
    tag: 'Energy',
  },
]

export default function IndustriesPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Hero */}
      <section className="py-20 px-6 bg-white border-b border-border">
        <div className="max-w-container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <SectionHeader
              label="Industries"
              title="Deep Expertise Across Key Sectors"
              subtitle="We don't work in generic verticals — we build industry-specific solutions grounded in real operational knowledge."
            />
          </motion.div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto space-y-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial="hidden" whileInView="visible" variants={fadeUp} custom={i * 0.3}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-56 md:h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{ind.tag}</span>
                </div>
                <h2 className="font-heading font-bold text-forest text-2xl tracking-tight mb-3">{ind.title}</h2>
                <p className="text-textSecondary leading-relaxed mb-5">{ind.description}</p>

                <div className="bg-bg border border-border rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary mb-1">Use Case</p>
                  <p className="text-sm text-textPrimary leading-relaxed">{ind.useCase}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest">
        <div className="max-w-container mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl tracking-tight mb-3">
            Your Industry Not Listed?
          </h2>
          <p className="text-white/60 mb-8">We work across many more sectors. Let's discuss your specific challenges.</p>
          <Button href="/contact" size="lg" variant="accent">Talk to an Expert</Button>
        </div>
      </section>
    </main>
  )
}
