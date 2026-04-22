import { type ReactNode } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  children?: ReactNode
}

export default function SectionHeader({
  label, title, subtitle, align = 'center', className = '', titleClassName = ''
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${textAlign} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold text-forest tracking-tight ${titleClassName || 'text-3xl md:text-4xl'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-textSecondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
