import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
}

const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants = {
  primary: 'bg-forest text-white hover:bg-forest/90 focus:ring-forest',
  secondary: 'border border-forest text-forest hover:bg-forest/5 focus:ring-forest',
  accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({ variant = 'primary', size = 'md', href, children, className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (href) {
    return <Link to={href} className={classes}>{children}</Link>
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
