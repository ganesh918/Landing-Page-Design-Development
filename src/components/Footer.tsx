import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footerFaq, footerLinks } from '../data/content'
import { IconGitHub, IconLinkedIn, IconX } from './icons/SocialIcons'
import { BrandLogo } from './ui/BrandLogo'
import { LinkButton } from './ui/LinkButton'
import { Container } from './ui/Container'

const social = [
  { icon: IconX, label: 'X (Twitter)', href: 'https://x.com' },
  { icon: IconLinkedIn, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: IconGitHub, label: 'GitHub', href: 'https://github.com' },
] as const

export function Footer() {
  return (
    <footer id="footer-contact" className="scroll-mt-24 border-t border-white/10 bg-surface-900/95 py-12 sm:py-16">
      <Container>
        <div className="mb-10 rounded-2xl border border-brand-400/25 bg-gradient-to-r from-brand-600/20 via-surface-900 to-accent-500/15 p-6 sm:mb-12 sm:flex sm:items-center sm:justify-between sm:rounded-[1.75rem] sm:p-8 md:p-10">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Your first box ships for <span className="text-accent-400">50% off</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              Use code FRESHSTART at checkout. Cancel or pause before your next delivery—no
              commitments.
            </p>
          </div>
          <LinkButton href="#pricing" variant="accent" size="lg" className="mt-6 shrink-0 sm:mt-0">
            Claim offer
          </LinkButton>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-500">
              Chef-crafted, dietitian-approved meal delivery for people who want to eat well
              without living in the kitchen. {brand.tagline}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-brand-400" />
                <a href="mailto:hello@nourishplus.com" className="hover:text-white">
                  hello@nourishplus.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-brand-400" />
                <a href="tel:+18886674847" className="hover:text-white">
                  1-888-NOURISH (667-4847)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-brand-400" />
                <span>2200 Market St, Chicago, IL</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                >
                  <Icon className="size-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {(
            [
              ['Product', footerLinks.product],
              ['Company', footerLinks.company],
              ['Resources', footerLinks.resources],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link text-sm text-stone-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id="faq"
          className="scroll-mt-28 mt-14 space-y-3 rounded-2xl border border-white/10 bg-surface-950/50 p-6 sm:p-8"
        >
          <h4 className="font-display text-lg font-semibold text-white">Frequently asked questions</h4>
          {footerFaq.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-stone-200 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div
            id="privacy"
            className="scroll-mt-28 rounded-2xl border border-white/10 p-5 text-sm text-stone-500"
          >
            <h4 className="mb-2 font-semibold text-white">Privacy</h4>
            <p>
              We use your data only to fulfill orders, improve menus, and send delivery updates.
              We never sell personal information. Full policy available on request at{' '}
              <a href="mailto:privacy@nourishplus.com" className="text-brand-300 hover:underline">
                privacy@nourishplus.com
              </a>
              .
            </p>
          </div>
          <div
            id="terms"
            className="scroll-mt-28 rounded-2xl border border-white/10 p-5 text-sm text-stone-500"
          >
            <h4 className="mb-2 font-semibold text-white">Terms</h4>
            <p>
              Subscriptions renew weekly unless paused. Promotional credits apply to first box
              only. Delivery windows vary by metro. Questions:{' '}
              <a href="mailto:legal@nourishplus.com" className="text-brand-300 hover:underline">
                legal@nourishplus.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-stone-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}
            {brand.suffix} Foods, Inc.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" className="hover:text-stone-400">
              Privacy
            </a>
            <a href="#terms" className="hover:text-stone-400">
              Terms
            </a>
            <a href="#faq" className="hover:text-stone-400">
              FAQ
            </a>
            <a href="#footer-contact" className="hover:text-stone-400">
              Support
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
