import { motion } from 'framer-motion'
import { Truck, ShoppingBag, Factory, Heart, Zap, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { fadeUp } from '../utils/animations'

const industries = [
  {
    icon: <Truck size={22} strokeWidth={1.5} />,
    title: 'Logistics & Supply Chain',
    description: 'Modernize operations with route optimization, real-time tracking, and customs automation.',
    useCase: 'Reduced port clearance time by 40% for a GCC freight leader.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format',
    tag: 'Logistics',
  },
  {
    icon: <ShoppingBag size={22} strokeWidth={1.5} />,
    title: 'Retail & E-Commerce',
    description: 'Enable retailers to compete with robust IT and data solutions.',
    useCase: 'Grew online sales by 3x for a UAE retail chain.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format',
    tag: 'Retail',
  },
  {
    icon: <Factory size={22} strokeWidth={1.5} />,
    title: 'Manufacturing',
    description: 'Smart factory capabilities, predictive maintenance, and supply chain digitization.',
    useCase: 'AI quality control reduced defect rate by 60%.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format',
    tag: 'Manufacturing',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: 'Healthcare',
    description: 'Digital patient management and data privacy-compliant IT infrastructure.',
    useCase: 'HIPAA-compliant cloud for a multi-site hospital group in Oman.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format',
    tag: 'Healthcare',
  },
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: 'Energy & Utilities',
    description: 'Field operations technology, IoT integration, and regulatory compliance.',
    useCase: 'IoT monitoring reduced downtime by 35% for Oman LNG.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format',
    tag: 'Energy',
  },
]

export default function IndustriesPage() {
  return (
    <main className="bg-bg pt-[68px]">
      <section className="py-16 lg:py-20 px-6 border-b border-border">
        <div className="max-w-container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-4">Industries</span>
            <h1 className="font-heading font-bold text-forest text-[32px] md:text-[42px] tracking-tight leading-tight max-w-lg mb-4">Deep Expertise Across Key Sectors</h1>
            <p className="text-textSecondary text-[15px] max-w-xl leading-relaxed">We build industry-specific solutions grounded in real operational knowledge.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-container mx-auto space-y-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial="hidden" whileInView="visible" variants={fadeUp} custom={i * 0.3} viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white border border-border rounded-2xl overflow-hidden card-hover`}>
              <div className="w-full md:w-2/5">
                <img src={ind.image} alt={ind.title} className="w-full h-56 md:h-full object-cover" loading="lazy" />
              </div>
              <div className="w-full md:w-3/5 p-7 md:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-forest">{ind.icon}</div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{ind.tag}</span>
                </div>
                <h2 className="font-heading font-bold text-forest text-[22px] tracking-tight mb-3">{ind.title}</h2>
                <p className="text-textSecondary text-[14px] leading-relaxed mb-5">{ind.description}</p>
                <div className="bg-cream/60 border border-border-light rounded-xl p-4 mb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-textSecondary mb-1.5">Use Case</p>
                  <p className="text-[13px] text-textPrimary leading-relaxed">{ind.useCase}</p>
                </div>
                <button className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest hover:text-accent transition-colors">
                  Learn more <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-12">
        <div className="max-w-container mx-auto bg-white border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-forest text-[16px]">Don't see your industry?</p>
            <p className="text-textSecondary text-[13px]">Let's discuss your specific challenges.</p>
          </div>
          <Button href="/contact" variant="primary" withArrow>Talk to an Expert</Button>
        </div>
      </section>
    </main>
  )
}
