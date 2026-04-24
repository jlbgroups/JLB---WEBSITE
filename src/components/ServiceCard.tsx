import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function ServiceCard({ icon, title, description, link = '/services' }: ServiceCardProps) {
  return (
    <div className="h-full group bg-white border border-border rounded-2xl p-7 card-premium relative overflow-hidden">
      {/* Background flare on hover */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-forest mb-6 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(0,106,255,0.3)] transition-all duration-500 transform group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="font-heading font-bold text-forest text-[18px] mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-textSecondary text-[14px] leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-accent group-hover:gap-3 transition-all duration-300 mt-auto"
        >
          Explore Solutions
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
