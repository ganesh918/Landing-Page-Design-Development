import { Leaf } from 'lucide-react'
import { brand } from '../../data/content'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-900/50 ring-1 ring-brand-300/30 sm:size-10 sm:rounded-2xl">
        <Leaf className="size-4 text-white sm:size-5" strokeWidth={2.25} />
      </span>
      <span className="font-display truncate text-base font-bold tracking-tight text-white sm:text-lg">
        {brand.name}
        <span className="text-accent-400">{brand.suffix}</span>
      </span>
    </span>
  )
}
