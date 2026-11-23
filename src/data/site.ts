export interface VerticalConfig {
  id: 'radiance' | 'rise' | 'rejoice';
  name: string;
  logoPath: string;
  tagline: string;
  summary: string;
  live: boolean;
  externalUrl: string | null;
  internalPath: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl?: string;
  statusLabel: string;
}

export const EKAA_SITE = {
  brandName: 'EKAA',
  flagshipName: 'Ekaa Radiance',
  meaning: 'Oneness',
  tagline: 'One Purpose, Many Paths',
  siteUrl: 'https://ekaa.me',
  location: 'Dubai, United Arab Emirates',
  serviceArea: 'Dubai In-Person & Online Worldwide',
  email: 'info@ekaa.me',
  phoneUAE: '+971 56 2046 096',
  phoneUAEHref: 'tel:+971562046096',
  whatsappDigits: '971562046096',
  phoneIndia: '+91 98764 21907',
  phoneIndiaHref: 'tel:+919876421907',
  founder: {
    name: 'Mehak Marwaha',
    role: 'Founder & Holistic Clarity Coach',
    shortBio:
      'Dubai-based Holistic Clarity Coach, UCLA-certified Career Counselor, Vedic Numerologist, Reiki practitioner, Tarot Life Coach, and Akashic Record guide.',
    quote: 'I will not predict your future. I will guide you back to your own clarity.',
    podcastFeature: {
      title: 'Attitude of Gratitude Podcast',
      date: '25 October 2026',
      note: 'Featured guest conversation on holistic clarity, spiritual grounding, and the story behind EKAA.',
    },
    hasPortraitPhoto: true,
    portraitPath: '/images/mehak-portrait.webp',
  },
  verticals: {
    radiance: {
      id: 'radiance',
      name: 'Ekaa Radiance',
      logoPath: '/brand/ekaa-radiance.png',
      tagline: 'Holistic Healing, Numerology & Clarity',
      summary:
        'Personalized 1:1 sessions in Vedic Numerology, Reiki Healing Energy, Tarot Life Coaching, Akashic Record Reading, Meditation, Pendulum Dowsing, and Transformative Workshops.',
      live: true,
      externalUrl: null,
      internalPath: '/radiance/',
      instagramHandle: '@ekaa_radiance',
      instagramUrl: 'https://www.instagram.com/ekaa_radiance',
      facebookUrl: 'https://www.facebook.com/share/18Cw5RXfR5/',
      statusLabel: 'Flagship Experience · Live on ekaa.me',
    } as VerticalConfig,
    rise: {
      id: 'rise',
      name: 'Ekaa Rise',
      logoPath: '/brand/ekaa-rise.png',
      tagline: 'Foreign Admissions & Career Counseling',
      summary:
        'Structured career guidance, psychometric profiling, IB/CBSE/UK/US subject selection, and international university admissions mentorship for students and families.',
      live: false, // <-- Flip to true and add externalUrl once Ekaa Rise launches
      externalUrl: null, // e.g. 'https://ekaarise.com'
      internalPath: '/ekaa-family/#rise',
      instagramHandle: '@ekaa_rise',
      instagramUrl: 'https://www.instagram.com/ekaa_rise',
      facebookUrl: 'https://www.facebook.com/share/1HNMGXN3S2/',
      statusLabel: 'Dedicated Portal Launching Soon',
    } as VerticalConfig,
    rejoice: {
      id: 'rejoice',
      name: 'Ekaa Rejoice',
      logoPath: '/brand/ekaa-rejoice.png',
      tagline: 'Curated Celebrations & Creative Experiences',
      summary:
        'Thoughtfully designed milestone celebrations, intimate birthday gatherings, corporate team-building experiences, and hands-on art and terrarium workshops.',
      live: false, // <-- Flip to true and add externalUrl once Ekaa Rejoice launches
      externalUrl: null, // e.g. 'https://ekaarejoice.com'
      internalPath: '/ekaa-family/#rejoice',
      instagramHandle: '@ekaa_rejoice',
      instagramUrl: 'https://www.instagram.com/ekaa_rejoice',
      statusLabel: 'Dedicated Portal Launching Soon',
    } as VerticalConfig,
  },
  nav: [
    { label: 'Radiance', href: '/radiance/' },
    { label: 'Meet Mehak', href: '/mehak-marwaha/' },
    { label: 'Workshops', href: '/radiance/workshops/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Ekaa Family', href: '/ekaa-family/' },
  ],
  booking: {
    /**
     * Optional: Add your live Cal.com or Calendly booking URL here
     * e.g. 'https://cal.com/mehak-marwaha/radiance-session'
     */
    calendarEmbedUrl: '',
  },
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${EKAA_SITE.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export function getVerticalHref(v: VerticalConfig): { href: string; external: boolean } {
  if (v.live && v.externalUrl) {
    return { href: v.externalUrl, external: true };
  }
  return { href: v.internalPath, external: false };
}
