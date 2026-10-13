import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  to?: string
}

const variants = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-700/35 hover:bg-brand-500 hover:shadow-brand-600/50 hover:shadow-xl',
  accent:
    'bg-accent-500 text-white shadow-lg shadow-accent-600/30 hover:bg-accent-400 hover:shadow-accent-500/45 hover:shadow-xl',
  secondary:
    'bg-white/8 text-white backdrop-blur-sm hover:bg-white/15 border border-white/12 hover:border-white/25',
  outline:
    'border border-brand-400/45 text-brand-200 hover:border-brand-300 hover:bg-brand-500/15 hover:text-brand-100',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm font-semibold',
  lg: 'px-6 py-3 text-base font-semibold',
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  to,
  href,
  ...props
}: LinkButtonProps) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden
      />
      <span className="relative flex items-center gap-2">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...(props as object)}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href ?? '#'} className={classes} {...props}>
      {content}
    </a>
  )
}
