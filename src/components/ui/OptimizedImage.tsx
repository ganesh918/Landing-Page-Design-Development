import { ImageOff } from 'lucide-react'
import { useState } from 'react'

type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  focusClassName?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  focusClassName = 'object-center',
  priority = false,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-surface-800 ${wrapperClassName}`}>
      {!loaded && !failed && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface-700 to-surface-800"
          aria-hidden
        />
      )}
      {failed ? (
        <div className="flex h-full min-h-[120px] w-full flex-col items-center justify-center gap-2 bg-surface-800 text-stone-500">
          <ImageOff className="size-8 opacity-60" aria-hidden />
          <span className="px-4 text-center text-xs">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${focusClassName} transition duration-700 ${
            loaded ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'
          } ${className}`}
        />
      )}
    </div>
  )
}
