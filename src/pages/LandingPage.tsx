import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { About } from '../components/About'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Navbar } from '../components/Navbar'
import { Pricing } from '../components/Pricing'
import { Testimonials } from '../components/Testimonials'
import { BackToTop } from '../components/ui/BackToTop'
import { ScrollProgress } from '../components/ui/ScrollProgress'
import { useAuth } from '../context/AuthContext'

export function LandingPage() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (location.state?.welcome) {
      setToast(true)
      navigate('.', { replace: true, state: {} })
      const t = window.setTimeout(() => setToast(false), 5000)
      return () => window.clearTimeout(t)
    }
  }, [location.state, navigate])

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-surface-950">
      <ScrollProgress />
      <Navbar user={user} onLogout={handleLogout} />

      <AnimatePresence>
        {toast && user && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed left-1/2 top-20 z-[70] w-[min(100%-1.5rem,420px)] -translate-x-1/2 rounded-2xl border border-brand-400/30 bg-surface-900/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:top-24 sm:px-5 sm:py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-stone-200">
                Welcome back, <span className="font-semibold text-brand-300">{user.name}</span>!
                Your meal dashboard is ready.
              </p>
              <button
                type="button"
                onClick={() => setToast(false)}
                className="shrink-0 rounded-lg p-1 text-stone-500 hover:bg-white/10 hover:text-white"
                aria-label="Dismiss"
              >
                <X className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
