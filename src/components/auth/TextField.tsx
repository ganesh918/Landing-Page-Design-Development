import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function TextField({ label, error, id, className = '', ...props }: TextFieldProps) {
  const inputId = id ?? props.name ?? 'field'

  return (
    <div className="group/field space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium text-stone-300">
        {label}
      </label>
      <input
        id={inputId}
        className={`auth-input w-full rounded-xl border border-white/10 bg-surface-900/80 px-4 py-3 text-white outline-none transition placeholder:text-stone-600 ${className}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-rose-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
