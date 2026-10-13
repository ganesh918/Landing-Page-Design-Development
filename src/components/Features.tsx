import { motion, useReducedMotion } from 'framer-motion'
import { features } from '../data/content'
import { images } from '../data/images'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { MotionCard } from './ui/MotionCard'
import { OptimizedImage } from './ui/OptimizedImage'
import { Reveal } from './ui/Reveal'

export function Features() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="features" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything in the box—and the app"
          description="From chef-led recipes to allergen-safe swaps, Nourish+ is built for taste, transparency, and routines that actually stick."
        />

        <Reveal className="hover-glow-image mb-8 overflow-hidden rounded-[1.75rem] border border-white/10 transition duration-500 lg:mb-10">
          <figure className="group">
            <OptimizedImage
              src={images.features.meals.src}
              alt={images.features.meals.alt}
              focusClassName={images.features.meals.focus}
              wrapperClassName="aspect-[16/10] w-full max-h-[220px] sm:aspect-[21/9] sm:max-h-[280px] md:max-h-[320px]"
            />
            <figcaption className="sr-only">{images.features.meals.alt}</figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <MotionCard key={feature.title} delay={index * 0.05}>
                <article className="card-shine group glass h-full rounded-2xl p-6 transition-colors hover:border-brand-400/35 hover:shadow-lg hover:shadow-brand-900/20">
                  <motion.div
                    whileHover={reduceMotion ? undefined : { rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.45 }}
                    className="mb-4 inline-flex rounded-2xl bg-brand-500/15 p-3 text-brand-300 group-hover:bg-brand-500/25"
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-brand-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{feature.description}</p>
                </article>
              </MotionCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
