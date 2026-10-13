import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
import { PasswordInput } from '../components/auth/PasswordInput'
import { TextField } from '../components/auth/TextField'
import { useAuth } from '../context/AuthContext'

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | undefined)?.from
  const redirectTo =
    from && from !== '/login' && from !== '/signup' ? from : '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email.includes('@') || password.length < 6) {
      setError('Enter a valid email and password (6+ characters).')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    login(email, password)
    setLoading(false)
    navigate(redirectTo, { replace: true, state: { welcome: true } })
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to manage deliveries, swap meals, and view your nutrition dashboard."
      footer={
        <>
          New to Nourish+?{' '}
          <Link
            to="/signup"
            className="font-semibold text-brand-300 transition hover:text-brand-200 hover:underline hover:underline-offset-4"
          >
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
            role="alert"
          >
            {error}
          </motion.p>
        )}

        <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="show">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.div>

        <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="show">
          <PasswordInput
            label="Password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </motion.div>

        <motion.div
          custom={2}
          variants={fieldVariants}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between gap-4 text-sm"
        >
          <label className="group flex cursor-pointer items-center gap-2 text-stone-400 transition hover:text-stone-200">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 rounded border-white/20 bg-surface-800 text-brand-600 focus:ring-brand-500"
            />
            Remember me
          </label>
          <a
            href="#reset"
            className="text-brand-300 transition hover:text-brand-200 hover:underline hover:underline-offset-4"
            onClick={(e) => e.preventDefault()}
          >
            Forgot password?
          </a>
        </motion.div>

        <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="show">
          <button
            type="submit"
            disabled={loading}
            className="auth-submit flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:bg-brand-500 hover:shadow-brand-600/50 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Signing in…
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.div>
      </form>
    </AuthLayout>
  )
}
