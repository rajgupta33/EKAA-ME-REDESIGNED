export interface InsightArticle {
  slug: string;
  cluster: 'Numerology' | 'Reiki & Calm' | 'Founder Clarity';
  title: string;
  excerpt: string;
  keyTakeaway: string;
  readTime: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'what-happens-in-a-vedic-numerology-session',
    cluster: 'Numerology',
    title: 'What Actually Happens in a 1:1 Vedic Numerology Session?',
    excerpt: 'Demystifying the Lo Shu Grid, core birth numbers, and how a grounded reading helps you navigate transitions.',
    keyTakeaway:
      'A Vedic Numerology session at Ekaa Radiance maps your birth date and name patterns to reveal natural strengths, timing cycles, and blind spots. Rather than predicting a fixed fate, Mehak translates numbers into practical clarity for real decisions.',
    readTime: '4 min read',
    updatedAt: '2026-11-18',
    image: '/images/numerology-journal.jpg',
    imageAlt: 'Linen journal and terracotta cup prepared for a Vedic Numerology reading',
    relatedServiceSlug: 'vedic-numerology',
    relatedServiceName: 'Vedic Numerology',
    sections: [
      {
        heading: 'Before the Call: Mapping Your Personal Blueprint',
        paragraphs: [
          'Using your full birth date and the name you go by daily, your practitioner constructs your core Vedic numbers alongside your Lo Shu Grid—a traditional nine-square energetic matrix.',
          'Each missing or repeating digit highlights themes you naturally lean on versus qualities you are invited to cultivate consciously.',
        ],
      },
      {
        heading: 'Inside the 60-Minute Conversation',
        paragraphs: [
          'Sessions begin by grounding in what prompted your curiosity—whether a career shift in Dubai, a relocation, or simply feeling ready for a fresh chapter.',
          'Mehak walks through your Personality, Destiny, and current Personal Year cycles in clear, everyday language, leaving plenty of space for your questions.',
        ],
      },
      {
        heading: 'What You Walk Away With',
        paragraphs: [
          'Clients consistently describe feeling relieved rather than overwhelmed—seeing why certain seasons felt effortless while others asked for patience.',
        ],
      },
    ],
  },
  {
    slug: 'vedic-numerology-vs-astrology',
    cluster: 'Numerology',
    title: 'Vedic Numerology vs. Astrology: How They Differ & Complement',
    excerpt: 'Not sure whether to start with numbers or a natal chart? Here is a clear, calm comparison.',
    keyTakeaway:
      'Astrology reads planetary alignments using your exact birth time and place, while Vedic Numerology analyzes the mathematical resonance of your birth date and name. Numerology offers fast, structured clarity around personal traits and annual timing even without an exact birth timestamp.',
    readTime: '4 min read',
    updatedAt: '2026-11-15',
    image: '/images/tarot-workshops.jpg',
    imageAlt: 'Minimalist studio table with stoneware bowls and natural crystals',
    relatedServiceSlug: 'vedic-numerology',
    relatedServiceName: 'Vedic Numerology',
    sections: [
      {
        heading: 'Two Distinct Lenses on Self-Understanding',
        paragraphs: [
          'Think of astrology as a panoramic sky map requiring exact minutes and coordinates, and Vedic Numerology as an intimate architectural blueprint built from your date of birth and name.',
          'Because numerology does not break if your birth certificate lacks an exact minute, many busy clients find it a welcoming first step.',
        ],
      },
      {
        heading: 'When Numerology Shines Brightest',
        paragraphs: [
          'When evaluating yearly cycles, career timing, personal strengths via the Lo Shu Grid, or name resonance, Vedic Numerology delivers clear, memorable takeaways in a single hour.',
        ],
      },
    ],
  },
  {
    slug: 'reiki-in-person-dubai-vs-distance-online',
    cluster: 'Reiki & Calm',
    title: 'In-Person Reiki in Dubai vs. Distance Online Reiki: What Changes?',
    excerpt: 'Curious how remote energy work feels from home—and which format fits your nervous system best.',
    keyTakeaway:
      'Both in-person Dubai Reiki and distance online sessions follow the same 60-minute calming ritual and intention-setting. The main difference is physical setting: a quiet studio sanctuary versus resting uninterrupted in your own bedroom or living space.',
    readTime: '3 min read',
    updatedAt: '2026-11-12',
    image: '/images/reiki-sanctuary.jpg',
    imageAlt: 'Peaceful plaster alcove with linen meditation cushion and brass incense holder',
    relatedServiceSlug: 'reiki-healing',
    relatedServiceName: 'Reiki Healing Energy',
    sections: [
      {
        heading: 'How a Distance Reiki Session Unfolds',
        paragraphs: [
          'We begin on video for a calm 10-minute check-in so you feel completely heard and relaxed. Once your intention is set, you mute notifications, lie down comfortably, and rest for 40 minutes while Mehak holds space.',
          'Because you do not have to drive through traffic afterward, many clients find online sessions allow their relaxation to linger much longer into the evening.',
        ],
      },
      {
        heading: 'Choosing What Feels Right Today',
        paragraphs: [
          'If you live in Dubai and crave stepping away from home responsibilities into a serene physical space, in-person sessions are wonderful. If you live abroad or prefer total home comfort, distance Reiki is seamless.',
        ],
      },
    ],
  },
  {
    slug: 'what-does-a-first-reiki-session-feel-like',
    cluster: 'Reiki & Calm',
    title: 'What Does a First Reiki Healing Session Actually Feel Like?',
    excerpt: 'An honest, grounded guide for beginners stepping into energy healing without dramatic expectations.',
    keyTakeaway:
      'Most first-time Reiki clients describe the experience as deep, unforced rest—marked by slower breathing, gentle warmth, tingling calm, or quiet emotional release. You remain fully aware, comfortable, and in control throughout the entire hour.',
    readTime: '4 min read',
    updatedAt: '2026-11-10',
    image: '/images/sanctuary-hero.jpg',
    imageAlt: 'Sunlit travertine bench with draped linen and rose quartz stone',
    relatedServiceSlug: 'reiki-healing',
    relatedServiceName: 'Reiki Healing Energy',
    sections: [
      {
        heading: 'Leaving Performative Expectations at the Door',
        paragraphs: [
          'There is no “right” sensation to chase. Some people drift into a peaceful half-sleep; others simply notice their shoulders finally dropping away from their ears.',
          'Reiki meets your nervous system gently wherever it is that day—never forcing an emotional breakthrough.',
        ],
      },
      {
        heading: 'Simple Care After Your Session',
        paragraphs: [
          'Drink plenty of water, take a slow walk if possible, and give yourself a quiet evening to let the calm settle naturally.',
        ],
      },
    ],
  },
  {
    slug: 'why-i-do-not-predict-futures-tarot-coaching',
    cluster: 'Founder Clarity',
    title: 'Why I Will Never Predict Your Future: My Approach to Tarot Coaching',
    excerpt: 'Mehak Marwaha explains why empowering reflection builds deeper resilience than fortune-telling.',
    keyTakeaway:
      'At Ekaa Radiance, Tarot Life Coaching is never used to hand away your agency to fixed predictions. Instead, Mehak uses tarot imagery alongside reflective coaching questions so you recognize patterns clearly and make wiser, self-authored decisions.',
    readTime: '5 min read',
    updatedAt: '2026-11-20',
    image: '/images/tarot-workshops.jpg',
    imageAlt: 'Cream tarot cards tied with linen ribbon on honed limestone',
    relatedServiceSlug: 'tarot-life-coaching',
    relatedServiceName: 'Tarot Life Coaching',
    sections: [
      {
        heading: 'The Problem With Passive Predictions',
        paragraphs: [
          'When someone tells you “this will happen in six months,” it subtly disconnects you from your own intuition and responsibility. If the prediction sounds scary, it breeds anxiety; if it sounds effortless, it invites passivity.',
        ],
      },
      {
        heading: 'Tarot as a Mirror for Clarity',
        paragraphs: [
          'Used thoughtfully, tarot cards bypass mental over-analysis and surface what you already sense beneath the noise. Combined with coaching, that awareness becomes calm, practical confidence.',
        ],
      },
    ],
  },
  {
    slug: 'why-i-founded-ekaa-in-dubai',
    cluster: 'Founder Clarity',
    title: 'Why I Founded EKAA in Dubai: From Corporate Rhythm to Oneness',
    excerpt: 'The meaning behind EKAA (“Oneness”) and how Radiance, Rise, and Rejoice grew into one human-centered ecosystem.',
    keyTakeaway:
      'Founded by Mehak Marwaha in Dubai, EKAA—meaning “Oneness”—was born to unite inner emotional clarity (Radiance), purposeful student and career direction (Rise), and joyful celebration (Rejoice) under one grounded philosophy of wholeness.',
    readTime: '5 min read',
    updatedAt: '2026-11-21',
    image: '/images/sanctuary-hero.jpg',
    imageAlt: 'Sunlit Dubai sanctuary wall with olive shadows and terracotta clay vessel',
    relatedServiceSlug: 'meditation',
    relatedServiceName: 'Meditation Practices',
    sections: [
      {
        heading: 'Seeing the Whole Person, Not Separate Compartments',
        paragraphs: [
          'Over years of working in Dubai and mentoring individuals across life stages, one truth stood out: people rarely struggle in neat silos. Career stress touches emotional calm; major family milestones call for joy as well as grounding.',
        ],
      },
      {
        heading: 'Why ekaa.me Centers on Ekaa Radiance',
        paragraphs: [
          'As Rise and Rejoice mature into their own dedicated spaces, ekaa.me becomes the serene home for Ekaa Radiance and my personal practice—keeping the doorway into inner clarity unmistakably clear.',
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}
