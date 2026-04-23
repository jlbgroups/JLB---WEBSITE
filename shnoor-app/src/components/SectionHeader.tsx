import { type ReactNode } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  dark?: boolean
  children?: ReactNode
}

export default function SectionHeader({
  label, title, subtitle, align = 'center', className = '', titleClassName = '', dark = false
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${textAlign} ${className}`}>
      {label && (
        <span className={`inline-block text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 ${
          dark ? 'text-accent' : 'text-accent'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold tracking-tight leading-[1.15] ${
        dark ? 'text-white' : 'text-forest'
      } ${titleClassName || 'text-3xl md:text-[40px]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] md:text-base leading-relaxed max-w-2xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${dark ? 'text-white/60' : 'text-textSecondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
