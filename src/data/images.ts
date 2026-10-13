export type ImageMeta = {
  src: string
  alt: string
  /** Tailwind object-position utility */
  focus?: string
}

export const images = {
  hero: {
    main: {
      src: '/images/hero-main.jpg',
      alt: 'Top-down view of a colorful healthy bowl with vegetables, grains, and fresh greens',
      focus: 'object-center',
    },
    plate: {
      src: '/images/hero-plate.jpg',
      alt: 'Close-up of a balanced dinner plate with grilled protein and roasted vegetables',
      focus: 'object-center',
    },
  },
  about: {
    main: {
      src: '/images/about-kitchen.jpg',
      alt: 'Chefs preparing fresh meals together in a professional kitchen',
      focus: 'object-center',
    },
  },
  features: {
    meals: {
      src: '/images/features-meals.jpg',
      alt: 'Prepared healthy meals packed in containers ready for weekly delivery',
      focus: 'object-center',
    },
  },
  steps: [
    {
      src: '/images/step-pick.jpg',
      alt: 'Customer selecting meals on a smartphone for their weekly Nourish+ plan',
      focus: 'object-[center_35%]',
    },
    {
      src: '/images/step-customize.jpg',
      alt: 'Home cook customizing ingredients while preparing a healthy meal',
      focus: 'object-center',
    },
    {
      src: '/images/step-deliver.jpg',
      alt: 'Courier handing an insulated meal delivery box to a customer',
      focus: 'object-[center_40%]',
    },
  ] satisfies ImageMeta[],
  testimonials: [
    {
      src: '/images/avatar-sarah.jpg',
      alt: 'Portrait of Sarah Okonkwo, Nourish+ customer',
      focus: 'object-[center_20%]',
    },
    {
      src: '/images/avatar-james.jpg',
      alt: 'Portrait of James Whitfield, Nourish+ customer',
      focus: 'object-[center_15%]',
    },
    {
      src: '/images/avatar-mia.jpg',
      alt: 'Portrait of Mia Laurent, Nourish+ customer',
      focus: 'object-[center_20%]',
    },
  ] satisfies ImageMeta[],
  pricing: {
    banner: {
      src: '/images/pricing-banner.jpg?v=2',
      alt: 'Colorful fresh fruits and vegetables laid out for healthy meal planning',
      focus: 'object-[center_40%]',
    },
  },
} as const
