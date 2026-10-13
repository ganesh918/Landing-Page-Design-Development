import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-700/35 hover:bg-brand-500',
  accent: 'bg-accent-500 text-white hover:bg-accent-400',
  secondary:
    'bg-white/8 text-white backdrop-blur-sm hover:bg-white/12 border border-white/12',
  ghost: 'text-stone-300 hover:bg-white/5 hover:text-white',
  outline:
    'border border-brand-400/45 text-brand-200 hover:border-brand-300 hover:bg-brand-500/10',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm rounded-full',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-full',
  lg: 'px-6 py-3 text-base font-semibold rounded-full',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
