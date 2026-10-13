import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { testimonials } from '../data/content'
import { images } from '../data/images'
import { TestimonialCard } from './testimonials/TestimonialCard'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { OptimizedImage } from './ui/OptimizedImage'
import { Reveal } from './ui/Reveal'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    if (!mq.matches) return
    const timer = window.setInterval(next, 7000)
    return () => window.clearInterval(timer)
  }, [next])

  const active = testimonials[index]
  const avatar = images.testimonials[index]

  return (
    <section id="testimonials" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by home cooks who are tired of cooking every night"
          description="Customer feedback from people using Nourish+ for busy workweeks, family dinners, and health goals."
        />

        <Reveal className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.name} item={item} avatar={images.testimonials[i]} />
          ))}
        </Reveal>

        <Reveal className="mt-0 md:hidden">
          <div className="relative mx-auto max-w-lg">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-900/70 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35 }}
                  className="p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-20 overflow-hidden rounded-full ring-2 ring-brand-500/35">
                      <OptimizedImage
                        src={avatar.src}
                        alt={avatar.alt}
                        focusClassName={avatar.focus}
                        wrapperClassName="size-20"
                      />
                    </div>
                    <div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: active.rating }).map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="mt-1 font-semibold text-white">{active.name}</p>
                      <p className="text-xs text-stone-500">
                        {active.role} · {active.company}
                      </p>
                    </div>
                  </div>
                  <Quote className="mt-4 size-8 text-brand-400/45" />
                  <p className="mt-2 text-base leading-relaxed text-stone-200">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                </motion.article>
              </AnimatePresence>
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show review from ${t.name}`}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? 'w-7 bg-accent-400' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous review"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next review"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
