import { Check } from 'lucide-react'
import { useState } from 'react'
import { pricingPlans } from '../data/content'
import { images } from '../data/images'
import { LinkButton } from './ui/LinkButton'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { OptimizedImage } from './ui/OptimizedImage'
import { MotionCard } from './ui/MotionCard'
import { Reveal } from './ui/Reveal'

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="section-shell">
      <Container>
        <Reveal className="mb-12 overflow-hidden rounded-[1.75rem] border border-white/10">
          <figure className="relative">
            <OptimizedImage
              src={images.pricing.banner.src}
              alt={images.pricing.banner.alt}
              focusClassName={images.pricing.banner.focus}
              wrapperClassName="aspect-[16/9] w-full max-h-[180px] bg-surface-800 sm:aspect-[21/8] sm:max-h-[220px] md:max-h-[260px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-950/85 via-surface-950/50 to-surface-950/30" />
            <figcaption className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8">
              <p className="responsive-banner-text max-w-lg font-display font-bold text-white">
                Fresh ingredients. Honest pricing.{' '}
                <span className="text-brand-300">No hidden fees.</span>
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <SectionHeading
          eyebrow="Pricing"
          title="Plans for solo eaters, couples, and families"
          description="Transparent per-meal pricing with free delivery on your first two boxes. Switch plans before each weekly cutoff—Sunday at 11:59 PM local."
        />

        <Reveal className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className={`text-sm ${!yearly ? 'text-white' : 'text-stone-500'}`}>Weekly billing</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle monthly prepay savings"
            onClick={() => setYearly((v) => !v)}
            className={`relative h-8 w-14 rounded-full transition-colors ${
              yearly ? 'bg-brand-600' : 'bg-surface-700'
            }`}
          >
            <span
              className={`absolute top-1 size-6 rounded-full bg-white shadow transition-transform ${
                yearly ? 'left-7' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm ${yearly ? 'text-white' : 'text-stone-500'}`}>
            Prepay monthly <span className="text-brand-300">(save ~20%)</span>
          </span>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => {
            const price =
              plan.monthlyPrice === 'Custom'
                ? 'Custom'
                : yearly
                  ? plan.yearlyPrice
                  : plan.monthlyPrice

            return (
              <MotionCard key={plan.name} delay={index * 0.08} className="h-full">
                <article
                  className={`card-shine flex h-full flex-col rounded-2xl border p-6 transition sm:rounded-[1.75rem] sm:p-8 ${
                    plan.highlighted
                      ? 'relative border-accent-400/45 bg-gradient-to-b from-accent-500/12 to-surface-900/95 shadow-xl hover:shadow-accent-900/25 md:col-span-2 lg:col-span-1 lg:scale-[1.03]'
                      : 'glass-strong hover:border-brand-400/25 hover:shadow-lg hover:shadow-brand-900/15'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-0.5 text-xs font-semibold text-white">
                      Best value
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-stone-400">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-white">{price}</span>
                    {plan.period && price !== 'Custom' && (
                      <span className="text-sm text-stone-500">{plan.period}</span>
                    )}
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-stone-300">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    href={plan.ctaHref}
                    variant={plan.highlighted ? 'accent' : 'secondary'}
                    className="mt-8 w-full text-center"
                  >
                    {plan.cta}
                  </LinkButton>
                </article>
              </MotionCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
