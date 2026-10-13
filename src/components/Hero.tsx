import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { brand, heroHighlights, stats } from '../data/content'
import { images } from '../data/images'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Container } from './ui/Container'
import { LinkButton } from './ui/LinkButton'
import { OptimizedImage } from './ui/OptimizedImage'
import { Reveal } from './ui/Reveal'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isLg = useMediaQuery('(min-width: 1024px)')
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, isLg ? 48 : 0])

  return (
    <section ref={ref} className="section-shell relative overflow-hidden pt-24 sm:pt-28">
      <div className="animate-mesh pointer-events-none absolute inset-0 mesh-bg" />

      <Container className="relative">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Reveal delay={0.05}>
              <div className="mx-auto mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-brand-400/35 bg-brand-500/10 px-3 py-1.5 text-xs text-brand-200 sm:mb-6 sm:px-4 sm:text-sm lg:mx-0 lg:justify-start">
                <BadgeCheck className="size-4 shrink-0 text-brand-300" />
                <span className="text-balance">{brand.tagline} · Winter menu now shipping</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                Healthy meals,{' '}
                <span className="text-gradient">delivered chilled</span> to your door
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-stone-400 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
                Nourish+ combines chef creativity with clinical nutrition—restaurant-quality
                plates that support your goals, without the Sunday meal-prep marathon.
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <LinkButton
                href="#pricing"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[200px]"
              >
                Build my box
                <ArrowRight className="size-4" />
              </LinkButton>
              <LinkButton
                href="#how-it-works"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[200px]"
              >
                See delivery steps
              </LinkButton>
            </Reveal>

            <Reveal
              delay={0.25}
              className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 lg:justify-start"
            >
              {heroHighlights.map(({ icon: Icon, text }) => (
                <motion.span
                  key={text}
                  whileHover={reduceMotion ? undefined : { scale: 1.04, x: 4 }}
                  className="group inline-flex max-w-xs cursor-default items-center gap-2 text-left text-xs text-stone-500 sm:max-w-none sm:text-sm"
                >
                  <Icon className="icon-pop size-4 shrink-0 text-brand-400" />
                  {text}
                </motion.span>
              ))}
            </Reveal>
          </div>

          <motion.div style={{ y: imageY }} className="order-1 w-full lg:order-2">
            <Reveal y={28} className="relative mx-auto w-full max-w-md md:max-w-lg lg:max-w-none lg:mx-0">
              <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/25 to-accent-500/15 blur-2xl sm:-inset-4" />

              <figure className="hover-glow-image glow-ring group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-900 shadow-2xl transition duration-500 sm:rounded-[1.75rem]">
                <OptimizedImage
                  src={images.hero.main.src}
                  alt={images.hero.main.alt}
                  focusClassName={images.hero.main.focus}
                  priority
                  wrapperClassName="aspect-[4/5] w-full md:aspect-[5/6]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/10 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                  <figcaption className="w-full rounded-xl glass-strong px-3 py-2.5 text-left sm:max-w-[220px] sm:rounded-2xl sm:px-4 sm:py-3">
                    <p className="text-[10px] text-stone-400 sm:text-xs">Chef&apos;s pick this week</p>
                    <p className="font-display text-sm font-bold text-white sm:text-base">
                      Rainbow power bowl
                    </p>
                    <p className="text-[10px] text-brand-300 sm:text-xs">28g protein · 480 cal</p>
                  </figcaption>

                  <div className="mx-auto w-[40%] max-w-[120px] shrink-0 overflow-hidden rounded-xl border-2 border-white/20 shadow-xl sm:mx-0 sm:w-[132px] sm:rounded-2xl">
                    <OptimizedImage
                      src={images.hero.plate.src}
                      alt={images.hero.plate.alt}
                      focusClassName={images.hero.plate.focus}
                      wrapperClassName="aspect-square w-full"
                    />
                  </div>
                </div>
              </figure>
            </Reveal>
          </motion.div>
        </div>

        <Reveal className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:gap-6 sm:pt-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
              className="rounded-xl p-2 text-center transition-colors hover:bg-white/[0.03] md:text-left"
            >
              <p className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] text-stone-500 sm:mt-1 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
