import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../../data/content'
import { images } from '../../data/images'
import { BrandLogo } from '../ui/BrandLogo'
import { OptimizedImage } from '../ui/OptimizedImage'

type AuthLayoutProps = {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-surface-950">
      <div className="animate-mesh pointer-events-none absolute inset-0 mesh-bg" />
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-brand-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-accent-500/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <header className="relative z-10 border-b border-white/5 px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/login" className="transition hover:opacity-90">
            <BrandLogo />
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium text-stone-400 transition hover:text-brand-300 hover:underline hover:underline-offset-4"
          >
            Create account
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:gap-10 sm:py-10 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="glow-ring overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
            <OptimizedImage
              src={images.hero.main.src}
              alt={images.hero.main.alt}
              focusClassName={images.hero.main.focus}
              wrapperClassName="aspect-[4/5] w-full"
            />
            <div className="border-t border-white/10 bg-surface-900/90 p-6">
              <p className="text-sm text-stone-400">Join {brand.name}{brand.suffix}</p>
              <p className="font-display mt-1 text-2xl font-bold text-white">
                Track orders, swap meals, and save favorites
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="auth-card mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-surface-900/70 p-5 shadow-xl backdrop-blur-xl sm:rounded-[1.75rem] sm:p-8 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h1>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">{subtitle}</p>
          </motion.div>
          <div className="mt-8">{children}</div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-stone-500">
            {footer}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
