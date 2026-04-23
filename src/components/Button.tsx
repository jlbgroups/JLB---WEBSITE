import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  withArrow?: boolean
  children: ReactNode
}

const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 group/btn'

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-light focus:ring-forest shadow-sm',
  secondary: 'border-2 border-forest text-forest hover:bg-forest hover:text-white focus:ring-forest',
  accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-sm',
  outline: 'border border-border text-textPrimary hover:border-forest hover:text-forest focus:ring-forest bg-white',
}

const sizes = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-2.5 text-[13px]',
  lg: 'px-7 py-3.5 text-[14px]',
}

export default function Button({ variant = 'primary', size = 'md', href, withArrow = false, children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </>
  )
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    if (isExternal) {
      return <a href={href} target="_blank" rel="noreferrer" className={classes}>{content}</a>
    }
    return <Link to={href} className={classes}>{content}</Link>
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
