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
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300">
      <div className="w-11 h-11 rounded-lg bg-bg flex items-center justify-center text-sage mb-4 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-forest text-lg mb-2 tracking-tight">{title}</h3>
      <p className="text-textSecondary text-sm leading-relaxed mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all duration-200"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  )
}
