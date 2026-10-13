import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
import { PasswordInput } from '../components/auth/PasswordInput'
import { TextField } from '../components/auth/TextField'
import { useAuth } from '../context/AuthContext'

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function SignUpPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.includes('@')) {
      setError('Please enter your name and a valid email.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    login(email, password, name)
    setLoading(false)
    navigate('/', { replace: true, state: { welcome: true } }) // home after signup
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your first box in minutes. Dietitian-approved menus, flexible delivery, cancel anytime."
      footer={
        <>
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-brand-300 transition hover:text-brand-200 hover:underline hover:underline-offset-4"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
            role="alert"
          >
            {error}
          </motion.p>
        )}

        {[
          <TextField
            key="name"
            label="Full name"
            name="name"
            autoComplete="name"
            placeholder="Alex Rivera"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />,
          <TextField
            key="email"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />,
          <PasswordInput
            key="password"
            label="Password"
            name="password"
            autoComplete="new-password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />,
          <PasswordInput
            key="confirm"
            label="Confirm password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Repeat password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
          />,
        ].map((field, i) => (
          <motion.div key={i} custom={i} variants={fieldVariants} initial="hidden" animate="show">
            {field}
          </motion.div>
        ))}

        <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="show" className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="auth-submit flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-900/35 transition hover:bg-accent-400 hover:shadow-accent-600/40 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Creating account…
              </>
            ) : (
              <>
                Create account
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </motion.div>

        <p className="text-center text-xs text-stone-600">
          By signing up you agree to our{' '}
          <Link to="/#terms" className="text-stone-500 underline-offset-2 hover:text-brand-300 hover:underline">
            Terms
          </Link>{' '}
          and{' '}
          <Link to="/#privacy" className="text-stone-500 underline-offset-2 hover:text-brand-300 hover:underline">
            Privacy
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
  )
}
