import { steps } from '../data/content'
import { images } from '../data/images'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { MotionCard } from './ui/MotionCard'
import { OptimizedImage } from './ui/OptimizedImage'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From menu to doorstep in three simple steps"
          description="Pick your plan online, personalize each delivery, and enjoy fridge-ready meals—all without sacrificing flavor or nutrition."
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const image = images.steps[index]
            return (
              <MotionCard key={step.step} delay={index * 0.1}>
                <article className="card-shine flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-900/60 transition hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-900/15">
                  <figure className="relative overflow-hidden">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      focusClassName={image.focus}
                      wrapperClassName="aspect-[4/3] w-full min-h-[200px] bg-surface-800 transition duration-500 group-hover:scale-105"
                      className="transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-md ring-2 ring-surface-950">
                      {step.step}
                    </span>
                  </figure>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 inline-flex w-fit rounded-xl bg-brand-500/15 p-2.5 text-brand-300">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              </MotionCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
