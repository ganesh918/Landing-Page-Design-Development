import { motion, useReducedMotion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '../../data/content'
import type { ImageMeta } from '../../data/images'
import { OptimizedImage } from '../ui/OptimizedImage'

type TestimonialCardProps = {
  item: Testimonial
  avatar: ImageMeta
  compact?: boolean
}

export function TestimonialCard({ item, avatar, compact = false }: TestimonialCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : { y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 22 } }
      }
      className="card-shine flex h-full flex-col rounded-2xl border border-white/10 bg-surface-900/60 p-6 transition-colors hover:border-brand-400/30 hover:bg-surface-900/80 hover:shadow-lg hover:shadow-brand-900/15"
    >
      <div className="flex items-center gap-4">
        <div
          className={`shrink-0 overflow-hidden rounded-full ring-2 ring-brand-500/35 transition group-hover:ring-brand-400/50 ${
            compact ? 'size-14' : 'size-16'
          }`}
        >
          <OptimizedImage
            src={avatar.src}
            alt={avatar.alt}
            focusClassName={avatar.focus}
            wrapperClassName={compact ? 'size-14' : 'size-16'}
          />
        </div>
        <div>
          <div className="flex gap-0.5">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-1 font-display text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs text-stone-500">
            {item.role} · {item.company}
          </p>
        </div>
      </div>
      <Quote className="mt-4 size-7 text-brand-400/40 transition group-hover:text-brand-400/60" />
      <p
        className={`mt-2 flex-1 text-pretty leading-relaxed text-stone-300 ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}
      >
        &ldquo;{item.quote}&rdquo;
      </p>
    </motion.article>
  )
}
