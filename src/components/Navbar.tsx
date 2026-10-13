import { Menu, User, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { AuthUser } from '../context/AuthContext'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { BrandLogo } from './ui/BrandLogo'
import { ConfirmDialog } from './ui/ConfirmDialog'
import { Container } from './ui/Container'
import { LinkButton } from './ui/LinkButton'

type NavbarProps = {
  user: AuthUser | null
  onLogout: () => void
}

export function Navbar({ user, onLogout }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoutConfirm, setLogoutConfirm] = useState(false)
  const active = useActiveSection()

  const requestLogout = () => setLogoutConfirm(true)

  const confirmLogout = () => {
    setLogoutConfirm(false)
    setOpen(false)
    onLogout()
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-2.5 shadow-lg shadow-black/20 sm:py-3' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Container as="nav" className="flex items-center justify-between gap-3 sm:gap-4">
        <Link to="/" aria-label="Nourish+ home" className="min-w-0 shrink transition hover:opacity-90">
          <BrandLogo />
        </Link>

        <ul className="hidden items-center gap-5 xl:flex xl:gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link relative whitespace-nowrap text-sm font-medium ${
                    active === id ? 'text-white' : 'text-stone-400'
                  }`}
                >
                  {link.label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-accent-400"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden min-w-0 items-center gap-2 xl:flex xl:gap-3">
          {user ? (
            <>
              <span className="inline-flex max-w-[140px] items-center gap-2 truncate rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-stone-300">
                <User className="size-4 shrink-0 text-brand-400" />
                <span className="truncate">{user.name}</span>
              </span>
              <button
                type="button"
                onClick={requestLogout}
                className="nav-link touch-target rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-stone-300"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="nav-link touch-target rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
              >
                Log in
              </Link>
              <LinkButton to="/signup" variant="accent" size="sm">
                Sign up
              </LinkButton>
            </>
          )}
          <LinkButton href="#pricing" variant="secondary" size="sm">
            Order box
          </LinkButton>
        </div>

        <button
          type="button"
          className="touch-target inline-flex items-center justify-center rounded-full text-stone-200 transition hover:bg-white/10 xl:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 glass-strong xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="touch-target rounded-xl px-3 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
                {user ? (
                  <>
                    <p className="px-3 text-sm text-stone-400">Signed in as {user.name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false)
                        requestLogout()
                      }}
                      className="touch-target rounded-full border border-white/10 py-3 text-sm font-semibold text-white"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="touch-target rounded-full border border-white/10 py-3 text-center text-sm font-semibold text-white"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setOpen(false)}
                      className="touch-target rounded-full bg-accent-500 py-3 text-center text-sm font-semibold text-white"
                    >
                      Sign up
                    </Link>
                  </>
                )}
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="touch-target rounded-full bg-brand-600 py-3 text-center text-sm font-semibold text-white"
                >
                  Order box
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <ConfirmDialog
        open={logoutConfirm}
        title="Log out of Nourish+?"
        description="You'll need to sign in again to access your meal dashboard and order history."
        confirmLabel="Yes, log out"
        cancelLabel="Stay signed in"
        onConfirm={confirmLogout}
        onCancel={() => setLogoutConfirm(false)}
      />
    </header>
  )
}
