export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  detail: string;
}

export interface RadianceService {
  slug: string;
  name: string;
  shortName: string;
  tier: 'flagship' | 'specialty';
  intent: 'clarity' | 'calm' | 'connection';
  intentLabel: string;
  theme: 'terracotta' | 'sage' | 'sand';
  duration: string;
  format: string;
  investmentLabel: string;
  image: string;
  imageAlt: string;
  tagline: string;
  answerFirstLead: string;
  seoTitle: string;
  seoDescription: string;
  whoItIsFor: string[];
  whatHappensSteps: ServiceStep[];
  preparationNotes: string[];
  whatsappPrefill: string;
  faqs: ServiceFAQ[];
}

export const RADIANCE_SERVICES: RadianceService[] = [
  {
    slug: 'vedic-numerology',
    name: 'Vedic Numerology',
    shortName: 'Vedic Numerology',
    tier: 'flagship',
    intent: 'clarity',
    intentLabel: 'Seeking Clarity',
    theme: 'terracotta',
    duration: '60 Minutes · 1:1',
    format: 'Online Video & Dubai In-Person',
    investmentLabel: 'Transparent session fee shared upon slot selection',
    image: '/images/numerology-journal.jpg',
    imageAlt: 'Open linen journal with gold fountain pen and terracotta tea cup for Vedic Numerology consultation',
    tagline: 'Decode your life cycles, Lo Shu Grid patterns & personal timing.',
    answerFirstLead:
      'Vedic Numerology at Ekaa Radiance is a structured 60-minute 1:1 consultation with Mehak Marwaha that maps your birth numbers, Lo Shu Grid balance, and personal year cycles to illuminate strengths, decision timing, and life patterns—available in Dubai and online worldwide.',
    seoTitle: 'Vedic Numerology Sessions in Dubai & Online | Ekaa Radiance',
    seoDescription:
      'Decode life cycles and Lo Shu Grid patterns in a 1:1 Vedic Numerology reading with Mehak Marwaha in Dubai or online. Clear process, FAQs & easy booking.',
    whoItIsFor: [
      'Navigating a career shift, business launch, or major life crossroads',
      'Seeking deeper self-awareness around recurring relationship or personal patterns',
      'Curious about name alignment, favorable timing cycles, and Lo Shu Grid dynamics',
    ],
    whatHappensSteps: [
      {
        title: 'Birth & Name Chart Mapping',
        detail: 'Before we meet, Mehak prepares your Vedic numerology profile and Lo Shu Grid using your full birth date and name.',
      },
      {
        title: '60-Minute Guided Dialogue',
        detail: 'Together, you explore core personality numbers, current year energy, blind spots, and practical options—never fatalistic predictions.',
      },
      {
        title: 'Grounded Integration Notes',
        detail: 'Leave with clear reflective focus areas and simple, practical alignment habits tailored to your current chapter.',
      },
    ],
    preparationNotes: [
      'Share your exact date of birth and full birth name when booking.',
      'Bring 2–3 focused questions around career, relationships, or personal direction.',
    ],
    whatsappPrefill: 'Hi Mehak, I would like to ask about booking a 1:1 Vedic Numerology session.',
    faqs: [
      {
        question: 'What happens during a Vedic Numerology session with Mehak Marwaha?',
        answer:
          'Your 60-minute 1:1 session examines your core birth numbers, Lo Shu Grid balance, and current personal year cycle. Mehak translates those patterns into clear, practical language so you can make grounded decisions rather than receiving rigid predictions.',
      },
      {
        question: 'How is Vedic Numerology different from astrology?',
        answer:
          'While astrology interprets planetary positions using your exact birth time and location, Vedic Numerology works primarily with the mathematical and energetic relationships of your birth date and name—making it accessible even if your exact birth time is uncertain.',
      },
      {
        question: 'Can I book a Vedic Numerology session online outside Dubai?',
        answer:
          'Yes. Online video sessions are identical in depth to in-person Dubai consultations, with automatic timezone confirmation for clients across the UAE, India, Europe, and North America.',
      },
      {
        question: 'What details do I need to share beforehand?',
        answer:
          'Only your full date of birth, the full name you use daily (plus birth name if different), and any key life questions you would like to explore.',
      },
    ],
  },
  {
    slug: 'reiki-healing',
    name: 'Reiki Healing Energy',
    shortName: 'Reiki Healing',
    tier: 'flagship',
    intent: 'calm',
    intentLabel: 'Seeking Calm',
    theme: 'sage',
    duration: '60 Minutes · 1:1',
    format: 'Dubai In-Person & Distance Online',
    investmentLabel: 'Single session & 3-session calm series available',
    image: '/images/reiki-sanctuary.jpg',
    imageAlt: 'Sunlit plaster alcove with cream linen meditation cushion, river stones and brass incense holder for Reiki healing',
    tagline: 'A quiet restorative space to release tension and restore inner balance.',
    answerFirstLead:
      'Reiki Healing Energy at Ekaa Radiance is a gentle, calming 60-minute session guided by Mehak Marwaha to release accumulated stress, settle emotional overwhelm, and restore nervous-system stillness—offered both in-person in Dubai and via distance video sessions.',
    seoTitle: 'Reiki Healing Sessions in Dubai & Distance Online | Ekaa Radiance',
    seoDescription:
      'Experience gentle, restorative Reiki healing with Mehak Marwaha in Dubai or online. Discover what happens in a session, preparation tips, and direct booking.',
    whoItIsFor: [
      'Carrying mental fatigue, burnout, or emotional heaviness after busy seasons',
      'Wanting a peaceful, non-judgmental sanctuary to slow down and reset',
      'Supporting emotional balance alongside everyday wellness routines',
    ],
    whatHappensSteps: [
      {
        title: 'Calm Check-In (10 min)',
        detail: 'A brief, unhurried conversation to notice where you feel tense or drained and set a gentle intention for rest.',
      },
      {
        title: 'Guided Reiki Rest (40 min)',
        detail: 'Settle comfortably while Mehak facilitates restorative Reiki energy—either in the quiet Dubai studio or remotely while you rest at home.',
      },
      {
        title: 'Grounding & Gentle Debrief (10 min)',
        detail: 'Slowly return with herbal tea or water, sharing impressions and simple grounding cues for the days ahead.',
      },
    ],
    preparationNotes: [
      'Wear comfortable, breathable clothing and avoid heavy caffeine right before your session.',
      'For online distance Reiki, choose a quiet room where you can lie down undisturbed for 45 minutes.',
    ],
    whatsappPrefill: 'Hi Mehak, I would like to enquire about a Reiki Healing Energy session.',
    faqs: [
      {
        question: 'Is distance online Reiki as effective as an in-person Dubai session?',
        answer:
          'Yes. Distance Reiki follows the exact same calm structure over a quiet video check-in, then allows you to rest comfortably in your own home environment without commuting afterward.',
      },
      {
        question: 'What does a Reiki session actually feel like?',
        answer:
          'Most clients experience deep physical relaxation, warmth, quiet mental stillness, or a gentle release of tension—similar to a deeply restorative meditation. Every body responds softly and uniquely.',
      },
      {
        question: 'Is Reiki a medical treatment?',
        answer:
          'No. Reiki at Ekaa Radiance is a holistic relaxation and spiritual wellness practice meant to complement—never replace—licensed medical or psychological care.',
      },
      {
        question: 'How many sessions are recommended?',
        answer:
          'Even a single session brings noticeable calm. Many clients choose a gentle rhythm of three sessions spaced 1–2 weeks apart during high-stress transitions.',
      },
    ],
  },
  {
    slug: 'tarot-life-coaching',
    name: 'Tarot Life Coaching',
    shortName: 'Tarot Coaching',
    tier: 'flagship',
    intent: 'clarity',
    intentLabel: 'Seeking Clarity',
    theme: 'sand',
    duration: '60 Minutes · 1:1',
    format: 'Online Video & Dubai In-Person',
    investmentLabel: 'Transparent rate confirmed at booking',
    image: '/images/tarot-workshops.jpg',
    imageAlt: 'Linen-wrapped cream tarot deck with pale rose quartz and ceramic bowls in sunlit Dubai studio',
    tagline: 'Thoughtful, non-predictive tarot conversations for real-life decisions.',
    answerFirstLead:
      'Tarot Life Coaching at Ekaa Radiance blends symbolic tarot reflection with structured life coaching led by Mehak Marwaha—helping you untangle difficult choices, spot hidden assumptions, and step forward with grounded self-trust rather than fortune-telling.',
    seoTitle: 'Tarot Life Coaching in Dubai & Online | Ekaa Radiance',
    seoDescription:
      'A thoughtful, non-predictive tarot-led coaching conversation for clarity and life choices with Mehak Marwaha in Dubai and online. View process & FAQs.',
    whoItIsFor: [
      'Weighing two meaningful paths in career, relocation, or personal life',
      'Feeling mentally foggy and wanting an intuitive yet practical sounding board',
      'Preferring empowering reflection over deterministic predictions',
    ],
    whatHappensSteps: [
      {
        title: 'Framing Open Questions',
        detail: 'We reframe anxious “what will happen?” worries into empowering “what matters most and what is my next step?” inquiries.',
      },
      {
        title: 'Symbolic Spread & Coaching Dialogue',
        detail: 'Cards act as visual mirrors for subconscious patterns, values, and unseen dynamics while Mehak coaches you toward clear agency.',
      },
      {
        title: 'Actionable Next-Step Clarity',
        detail: 'Close with 2–3 concrete personal takeaways you can apply immediately in daily life.',
      },
    ],
    preparationNotes: [
      'Jot down 1–3 open-ended situations where you want clearer perspective.',
      'Come curious and open—no prior tarot familiarity needed.',
    ],
    whatsappPrefill: 'Hi Mehak, I would love to ask about a Tarot Life Coaching session.',
    faqs: [
      {
        question: 'Do you predict the future in Tarot Life Coaching?',
        answer:
          'No. Mehak’s signature philosophy is “I will not predict your future. I will guide you back to your own clarity.” Cards serve as reflective prompts to help you recognize patterns, blind spots, and wiser choices.',
      },
      {
        question: 'How is Tarot Life Coaching different from a standard tarot reading?',
        answer:
          'Instead of passive forecasts, it pairs intuitive card imagery with trained life-coaching inquiry so you leave with emotional relief and practical momentum.',
      },
      {
        question: 'Can I ask about career, business, or relationships in one session?',
        answer:
          'Yes. Sixty minutes gives comfortable space to explore one primary crossroads deeply or two connected life themes without rushing.',
      },
    ],
  },
  {
    slug: 'akashic-records',
    name: 'Akashic Record Reading',
    shortName: 'Akashic Records',
    tier: 'specialty',
    intent: 'clarity',
    intentLabel: 'Seeking Clarity',
    theme: 'terracotta',
    duration: '60–75 Minutes · 1:1',
    format: 'Online Video & Dubai In-Person',
    investmentLabel: 'Private 1:1 consultation',
    image: '/images/sanctuary-hero.jpg',
    imageAlt: 'Sunlit travertine bench with draped linen, matte terracotta vessel and rose quartz for Akashic reflection',
    tagline: 'Deep soul-level inquiry into recurring life themes, purpose & release.',
    answerFirstLead:
      'An Akashic Record Reading with Mehak Marwaha is a private, reflective 60–75 minute session exploring the deeper emotional roots behind repeating life patterns, soul themes, and personal purpose in a calm, grounded setting.',
    seoTitle: 'Akashic Record Reading in Dubai & Online | Ekaa Radiance',
    seoDescription:
      'Explore soul-level patterns, emotional blocks, and personal clarity in a guided Akashic Record reading with Mehak Marwaha in Dubai or online.',
    whoItIsFor: [
      'Noticing the same emotional or relational cycle repeating across years',
      'Seeking deeper spiritual context during profound personal evolution',
      'Wanting compassionate insight free from fear-based narratives',
    ],
    whatHappensSteps: [
      {
        title: 'Intention & Grounding',
        detail: 'Quietly center together and clarify the soulful questions you wish to bring into the session.',
      },
      {
        title: 'Guided Record Inquiry',
        detail: 'With your explicit permission, Mehak opens a gentle contemplative space to explore underlying patterns and supportive perspectives.',
      },
      {
        title: 'Reflective Closure',
        detail: 'Bring insights down to earth with gentle integration practices for everyday peace.',
      },
    ],
    preparationNotes: [
      'Prepare 3–4 thoughtful “Why” or “How can I understand/shift…” questions.',
      'Ensure quiet privacy for the full 75 minutes if joining online.',
    ],
    whatsappPrefill: 'Hi Mehak, I would like to enquire about an Akashic Record Reading.',
    faqs: [
      {
        question: 'Do I need any prior spiritual experience for an Akashic Record Reading?',
        answer:
          'Not at all. Mehak guides the entire session gently and explains everything in clear, everyday language so you always feel safe and grounded.',
      },
      {
        question: 'Is my explicit consent required before opening the records?',
        answer:
          'Always. Ethically, an Akashic consultation is only conducted for you personally and only with your explicit spoken consent at the start of our session.',
      },
    ],
  },
  {
    slug: 'pendulum-dowsing',
    name: 'Pendulum Dowsing',
    shortName: 'Pendulum Dowsing',
    tier: 'specialty',
    intent: 'calm',
    intentLabel: 'Seeking Calm',
    theme: 'sage',
    duration: '45 Minutes · 1:1',
    format: 'Online Video & Dubai In-Person',
    investmentLabel: 'Standalone or paired with Reiki',
    image: '/images/reiki-sanctuary.jpg',
    imageAlt: 'Calm sunlit studio shelf with smooth river stones and linen cushion for Pendulum Dowsing',
    tagline: 'Focused intuitive inquiry and energetic alignment check-ins.',
    answerFirstLead:
      'Pendulum Dowsing at Ekaa Radiance is a focused 45-minute session with Mehak Marwaha using intuitive pendulum calibration to explore energetic imbalances, clarify specific yes/no inquiries, and support calm emotional alignment.',
    seoTitle: 'Pendulum Dowsing & Energy Alignment in Dubai & Online | Ekaa',
    seoDescription:
      'Focused Pendulum Dowsing sessions with Mehak Marwaha in Dubai and online for intuitive clarity and gentle energetic alignment.',
    whoItIsFor: [
      'Seeking a crisp, focused energetic check-in on specific life decisions',
      'Clearing subtle mental clutter alongside Reiki or meditation',
      'Exploring subtle intuitive tools in a calm, structured way',
    ],
    whatHappensSteps: [
      {
        title: 'Question Distillation',
        detail: 'Refine your topics into clear, neutral questions suitable for dowsing inquiry.',
      },
      {
        title: 'Calibration & Energetic Check',
        detail: 'Mehak guides the pendulum reading while explaining subtle energy patterns transparently.',
      },
      {
        title: 'Alignment & Next Steps',
        detail: 'Pair insights with practical grounding steps or follow-up Reiki rest.',
      },
    ],
    preparationNotes: [
      'Bring a short list of 4–6 clear, specific topics.',
      'Approach with relaxed curiosity rather than urgency.',
    ],
    whatsappPrefill: 'Hi Mehak, I would like to ask about a Pendulum Dowsing session.',
    faqs: [
      {
        question: 'Can Pendulum Dowsing be combined with Reiki Healing?',
        answer:
          'Yes—many clients begin with a brief pendulum check-in to identify areas of tension before settling into restorative Reiki.',
      },
    ],
  },
  {
    slug: 'meditation',
    name: 'Meditation Practices',
    shortName: 'Meditation',
    tier: 'specialty',
    intent: 'calm',
    intentLabel: 'Seeking Calm',
    theme: 'sage',
    duration: '45 Minutes · 1:1 or Small Group',
    format: 'Online Video & Dubai In-Person',
    investmentLabel: 'Custom personal practice plan included',
    image: '/images/reiki-sanctuary.jpg',
    imageAlt: 'Minimalist linen floor cushion in warm daylight for guided meditation practice',
    tagline: 'Tailored breathwork and mindfulness practices for calm daily focus.',
    answerFirstLead:
      'Guided Meditation Practices at Ekaa Radiance help busy professionals and beginners build a sustainable 10-minute daily mindfulness ritual—tailored by Mehak Marwaha to quiet overthinking, steady breath, and deepen inner poise.',
    seoTitle: 'Guided Meditation Coaching in Dubai & Online | Ekaa Radiance',
    seoDescription:
      'Build a sustainable mindfulness and breathwork routine with Mehak Marwaha through 1:1 or small-group Meditation Practices in Dubai and online.',
    whoItIsFor: [
      'Beginners who feel “my mind is too busy to meditate”',
      'Dubai professionals seeking calm focus amidst demanding schedules',
      'Anyone wanting practical breath and mindfulness tools they can keep for life',
    ],
    whatHappensSteps: [
      {
        title: 'Lifestyle & Stress Mapping',
        detail: 'Identify when overwhelm peaks during your day and which anchor (breath, sound, body scan, visualization) suits you best.',
      },
      {
        title: 'Guided Practice Session',
        detail: 'Experience a calm 25-minute guided practice tailored to your nervous system—zero rigid posture pressure.',
      },
      {
        title: 'Your 10-Minute Daily Ritual',
        detail: 'Walk away with a realistic morning or evening practice designed around your real schedule.',
      },
    ],
    preparationNotes: [
      'Sit anywhere your spine feels comfortably supported—chair or cushion.',
      'Keep water nearby and silence notifications for 45 minutes.',
    ],
    whatsappPrefill: 'Hi Mehak, I am interested in Guided Meditation coaching.',
    faqs: [
      {
        question: 'What if I cannot stop my thoughts during meditation?',
        answer:
          'That is completely normal. Mehak teaches gentle, non-forcing awareness techniques designed specifically for busy minds rather than expecting an empty head.',
      },
    ],
  },
  {
    slug: 'workshops',
    name: 'Transformative & Crystal Workshops',
    shortName: 'Workshops',
    tier: 'specialty',
    intent: 'connection',
    intentLabel: 'Seeking Connection',
    theme: 'sand',
    duration: '2–3 Hours · Curated Small Group',
    format: 'Dubai Studio & Live Online Circles',
    investmentLabel: 'Upcoming dates & private group bookings on request',
    image: '/images/tarot-workshops.jpg',
    imageAlt: 'Sunlit limestone table with rose quartz crystals, ceramics and olive branch for Ekaa Radiance workshops',
    tagline: 'Experiential circles in Reiki, crystals, mindfulness & soulful self-discovery.',
    answerFirstLead:
      'Ekaa Radiance Transformative & Crystal Workshops are intimate 2–3 hour experiential circles led by Mehak Marwaha in Dubai and online—combining hands-on crystal awareness, guided meditation, stress release, and warm community conversation.',
    seoTitle: 'Transformative & Crystal Workshops in Dubai & Online | Ekaa Radiance',
    seoDescription:
      'Join Mehak Marwaha’s intimate Transformative & Crystal Workshops in Dubai and online. Hands-on mindfulness, Reiki awareness, and community connection.',
    whoItIsFor: [
      'Curious learners wanting hands-on experience with crystals, energy & mindfulness',
      'Friends, women’s circles, or boutique wellness teams seeking a restorative gathering',
      'Past 1:1 clients wishing to deepen personal practice in supportive company',
    ],
    whatHappensSteps: [
      {
        title: 'Warm Welcome & Intention Circle',
        detail: 'Arrive to calm herbal tea, tactile natural materials, and an unhurried opening reflection.',
      },
      {
        title: 'Hands-On Experiential Practice',
        detail: 'Explore guided practices—from working mindfully with crystals and breathwork to practical energy hygiene.',
      },
      {
        title: 'Take-Home Ritual & Community Connection',
        detail: 'Leave grounded, connected, and equipped with simple practices for everyday life.',
      },
    ],
    preparationNotes: [
      'All materials for Dubai in-person workshops are curated and provided on-site.',
      'Private group and corporate wellness circles can be customized on request.',
    ],
    whatsappPrefill: 'Hi Mehak, I would love details on upcoming Transformative & Crystal Workshops.',
    faqs: [
      {
        question: 'Can I book a private workshop for a group or wellness gathering in Dubai?',
        answer:
          'Yes! Mehak curates private Transformative & Crystal Workshops for small groups, retreats, and mindful corporate wellness circles across Dubai—reach out via WhatsApp or the booking page to customize.',
      },
      {
        question: 'Are Crystal Workshops included under Transformative Workshops?',
        answer:
          'Yes—both experiential crystal learning (“Learn & Feel”) and mindfulness/energy workshops live together here so our curriculum is clear and unified.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): RadianceService | undefined {
  return RADIANCE_SERVICES.find((s) => s.slug === slug);
}
