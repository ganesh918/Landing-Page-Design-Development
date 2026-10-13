import type { LucideIcon } from 'lucide-react'
import {
  Apple,
  CalendarDays,
  ChefHat,
  ClipboardList,
  HeartPulse,
  Leaf,
  Refrigerator,
  Scale,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'

export const brand = {
  name: 'Nourish',
  suffix: '+',
  tagline: 'Eat well. Live fully.',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
] as const

export type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: FeatureItem[] = [
  {
    icon: ChefHat,
    title: 'Chef-crafted menus',
    description:
      'Rotating seasonal menus designed by registered dietitians and executive chefs—never boring, always balanced.',
  },
  {
    icon: HeartPulse,
    title: 'Macro-smart portions',
    description:
      'Every meal is labeled with calories, protein, carbs, and fiber so you hit goals without counting every bite.',
  },
  {
    icon: Leaf,
    title: 'Clean ingredients',
    description:
      'No artificial preservatives. Responsibly sourced produce and antibiotic-free proteins you can trust.',
  },
  {
    icon: ClipboardList,
    title: 'Dietary flexibility',
    description:
      'Vegan, keto, gluten-free, and high-protein paths—with swaps for allergens in two taps.',
  },
  {
    icon: Refrigerator,
    title: 'Fridge-ready packaging',
    description:
      'Vacuum-sealed trays stay fresh up to 5 days. Heat in 3 minutes—no prep, no cleanup stress.',
  },
  {
    icon: Scale,
    title: 'Progress dashboard',
    description:
      'Track hydration, weekly macros, and streaks in the Nourish+ app with gentle coaching nudges.',
  },
]

export type StepItem = {
  step: number
  icon: LucideIcon
  title: string
  description: string
}

export const steps: StepItem[] = [
  {
    step: 1,
    icon: UtensilsCrossed,
    title: 'Pick your plan',
    description:
      'Choose meals per week, portion size, and dietary style. Pause or skip deliveries anytime.',
  },
  {
    step: 2,
    icon: Sparkles,
    title: 'Personalize each box',
    description:
      'Swap dishes, adjust spice level, and exclude ingredients—your box adapts to your taste.',
  },
  {
    step: 3,
    icon: Truck,
    title: 'Delivered chilled',
    description:
      'Eco-insulated boxes arrive on your schedule. Scan the QR code for reheating tips and nutrition facts.',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I finally stopped ordering takeout every night. Nourish+ tastes like a restaurant but fits my macro targets—I've lost 12 lbs without feeling deprived.",
    name: 'Sarah Okonkwo',
    role: 'Product Designer',
    company: 'Remote · Austin',
    rating: 5,
  },
  {
    quote:
      'As a parent of three, I needed fast and healthy. The kids love the teriyaki bowls, and I love that dinner is ready in three minutes.',
    name: 'James Whitfield',
    role: 'Operations Manager',
    company: 'Denver, CO',
    rating: 5,
  },
  {
    quote:
      'The dietitian chat in the app helped me navigate FODMAP restrictions. Every meal feels thoughtful—not like "diet food."',
    name: 'Mia Laurent',
    role: 'Physical Therapist',
    company: 'Portland, OR',
    rating: 5,
  },
]

export type PricingPlan = {
  name: string
  monthlyPrice: string
  yearlyPrice: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Lite',
    monthlyPrice: '$9.99',
    yearlyPrice: '$7.99',
    period: '/meal avg.',
    description: '6 meals/week for solo eaters testing the service.',
    features: [
      '6 chef meals weekly',
      'Free delivery on first box',
      'Basic macro tracking',
      'Skip weeks anytime',
    ],
    cta: 'Try Lite',
    ctaHref: '#pricing',
  },
  {
    name: 'Balance',
    monthlyPrice: '$8.49',
    yearlyPrice: '$6.79',
    period: '/meal avg.',
    description: 'Our most popular plan for busy professionals and couples.',
    features: [
      '10–14 meals weekly',
      'Free premium swaps',
      'Dietitian Q&A chat',
      'App coaching + streak rewards',
      'Priority delivery windows',
    ],
    cta: 'Start Balance',
    ctaHref: '#pricing',
    highlighted: true,
  },
  {
    name: 'Family',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    period: '',
    description: 'Large households, athletes, or office lunch programs.',
    features: [
      '20+ meals / shared portions',
      'Dedicated nutrition coach',
      'Invoice & team billing',
      'Custom allergen protocols',
      'Same-day support line',
    ],
    cta: 'Contact sales',
    ctaHref: '#footer-contact',
  },
]

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Sample menu', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gift cards', href: '#pricing' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Careers', href: '#footer-contact' },
  ],
  resources: [
    { label: 'Nutrition blog', href: '#about' },
    { label: 'Allergen guide', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#footer-contact' },
  ],
} as const

export const footerFaq = [
  {
    q: 'Can I skip a week or pause my subscription?',
    a: 'Yes. Skip or pause anytime before Sunday 11:59 PM local in the app or by email—no penalty on Balance and Family plans.',
  },
  {
    q: 'How are meals kept fresh in transit?',
    a: 'Boxes ship in insulated liners with ice packs and are designed to stay chilled until midnight on delivery day.',
  },
  {
    q: 'Do you accommodate allergies?',
    a: 'You can exclude top allergens per meal. Family plans include custom protocols with our nutrition team.',
  },
] as const

export const stats = [
  { value: '2.4M', label: 'Meals delivered' },
  { value: '4.8★', label: 'Average app rating' },
  { value: '48', label: 'Metro areas served' },
  { value: '3 min', label: 'Avg. heat & eat time' },
] as const

export const heroHighlights = [
  { icon: Apple, text: 'Dietitian-approved recipes' },
  { icon: CalendarDays, text: 'Flexible weekly schedule' },
  { icon: Truck, text: 'Carbon-neutral delivery' },
] as const
