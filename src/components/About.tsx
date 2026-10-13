import { CheckCircle2 } from 'lucide-react'
import { brand } from '../data/content'
import { images } from '../data/images'
import { LinkButton } from './ui/LinkButton'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { OptimizedImage } from './ui/OptimizedImage'
import { Reveal } from './ui/Reveal'

const bullets = [
  'Menus reviewed weekly by registered dietitians—not generic calorie cuts',
  'Ingredients traceable to partner farms within 300 miles when in season',
  'Packaging designed to cut food waste with perfect single-serving portions',
]

export function About() {
  return (
    <section id="about" className="section-shell">
      <Container>
        <div className="grid items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal y={24} className="flex flex-col justify-center">
            <figure className="hover-glow-image glow-ring overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-900 transition duration-500">
              <OptimizedImage
                src={images.about.main.src}
                alt={images.about.main.alt}
                focusClassName={images.about.main.focus}
                wrapperClassName="aspect-[5/4] w-full lg:aspect-[4/3]"
              />
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-surface-900/95 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                    Our kitchen
                  </p>
                  <p className="font-display text-lg font-bold text-white">RD-approved every week</p>
                </div>
                <p className="text-right text-xs leading-snug text-stone-500">
                  Chicago HQ ·
                  <br />
                  USDA-certified facility
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow={`About ${brand.name}${brand.suffix}`}
              title="Real food for real schedules"
              description="We started Nourish+ because “healthy” shouldn’t mean sad salads or endless tracking. Our kitchen team builds meals you crave—while our nutrition team makes sure every plate earns its place in your week."
            />
            <ul className="space-y-4">
              {bullets.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <li className="flex gap-3 text-stone-300">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#features" variant="accent">
                View menu features
              </LinkButton>
              <LinkButton href="#testimonials" variant="secondary">
                Read customer stories
              </LinkButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
