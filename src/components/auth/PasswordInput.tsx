import { Eye, EyeOff } from 'lucide-react'
import { useState, type InputHTMLAttributes } from 'react'

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  error?: string
}

export function PasswordInput({
  label,
  error,
  id,
  className = '',
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false)
  const inputId = id ?? props.name ?? 'password'

  return (
    <div className="group/field space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium text-stone-300">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          autoComplete={props.autoComplete ?? 'current-password'}
          className={`auth-input w-full rounded-xl border border-white/10 bg-surface-900/80 py-3 pl-4 pr-12 text-white outline-none transition placeholder:text-stone-600 ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-stone-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
        >
          {visible ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
        </button>
      </div>
      {error && (
        <p className="text-xs text-rose-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
