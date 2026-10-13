import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`mb-10 max-w-2xl px-1 sm:mb-12 md:mb-16 ${alignClass}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-400 transition hover:tracking-[0.2em] sm:mb-3 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-display text-pretty text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-stone-400 sm:mt-4 sm:text-base md:text-lg">
        {description}
      </p>
    </Reveal>
  )
}
