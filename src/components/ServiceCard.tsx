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
    <div className="h-full group bg-white border border-border rounded-xl p-6 hover:border-accent/30 card-hover relative overflow-hidden">
      {/* Subtle dot pattern on hover */}
      <div className="absolute inset-0 dot-grid-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-forest mb-5 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-forest text-[17px] mb-2.5 tracking-tight">
          {title}
        </h3>
        <p className="text-textSecondary text-[14px] leading-relaxed mb-5 flex-grow">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest hover:text-accent hover:gap-2.5 transition-all duration-200 mt-auto"
        >
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
