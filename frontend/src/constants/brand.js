// Love & Legacy brand constants
export const BRAND = {
  name: 'Love & Legacy',
  fullName: 'Love & Legacy Executive Transportation',
  location: 'Atlanta, Georgia',
  tagline: 'Discretion. Reliability. Presence.',
  phone: '(470) 789-8700',
  phoneTel: '+14707898700',
  email: 'Dontay.bates@loveandlegacy.group',
  instagram: '@loveandlegacy.transport',
  instagramUrl: 'https://instagram.com/loveandlegacy.transport',
  tiktokUrl: 'https://tiktok.com/@loveandlegacy.transport',
};

export const SERVICES = [
  {
    slug: 'airport-transfers',
    name: 'Airport Transfers',
    short: 'Never Wait. Never Worry.',
    blurb: 'Flight tracking. Curbside presence. Seamless departure and arrival — every time.',
  },
  {
    slug: 'executive-transportation',
    name: 'Executive Transportation',
    short: 'The Executive Standard.',
    blurb: 'For the meeting that matters. For the client who requires discretion and excellence.',
  },
  {
    slug: 'vip-event-transportation',
    name: 'VIP & Event',
    short: 'Arrive as You Should.',
    blurb: 'Galas, concerts, private events. Your arrival sets the tone before you walk through the door.',
  },
  {
    slug: 'executive-protection',
    name: 'Executive Protection',
    short: 'Secure. Discreet. Present.',
    blurb: 'Transportation designed for those who require an additional layer of professional protection.',
  },
  {
    slug: 'production-transportation',
    name: 'Production Transportation',
    short: 'The Industry Standard.',
    blurb: "Film sets, studios, artist logistics. Atlanta's production community trusts Love & Legacy.",
  },
  {
    slug: 'corporate-accounts',
    name: 'Corporate Accounts',
    short: 'Your Business, Elevated.',
    blurb: 'Monthly accounts for companies that refuse to compromise on how their team travels.',
  },
];

export const REVIEWS = [
  {
    stars: 5,
    quote: 'Their driver was waiting before I cleared baggage — in a black suit, ready, no scramble, no chatter. The cabin smelled clean, water was already cold. Exactly the kind of arrival you stop noticing because nothing is out of place.',
    name: 'Marcus T.',
    role: 'Corporate Client',
  },
  {
    stars: 5,
    quote: "I move quietly for a reason. Love & Legacy understood that the moment we got in the vehicle. No questions, no photos, no small talk — just professionals doing the work. That's why I keep them on call.",
    name: 'A. Wells',
    role: 'VIP Entertainment',
  },
  {
    stars: 5,
    quote: 'I had a 5:40 AM out of Hartsfield. They were at my door at 3:55, vehicle running, luggage handled, route already mapped. I slept the entire way. Most reliable transportation I have used in Atlanta, full stop.',
    name: 'Janelle B.',
    role: 'Airport Transfer',
  },
  {
    stars: 5,
    quote: 'We needed a protection-trained driver for a principal in town for a private engagement. Love & Legacy was discreet, well-briefed, and present without being visible. Exactly what executive protection should look like.',
    name: 'D. Ramos',
    role: 'Executive Protection',
  },
  {
    stars: 5,
    quote: 'I have flown private into PDK for years and used a dozen ground services. Dontay’s team is the only one I now call. The standard is consistent — vehicle condition, presentation, timing, communication. Quietly excellent.',
    name: 'Stephen H.',
    role: 'Luxury Traveler',
  },
  {
    stars: 5,
    quote: 'Booked for our gala arrival in Buckhead. They handled the entire family — four cars across the night — timed perfectly. Our guests still ask who that transportation team was. That is the answer you want.',
    name: 'C. Whitfield',
    role: 'VIP Event',
  },
];

export const ATLANTA_AREAS = [
  'Hartsfield-Jackson',
  'Buckhead',
  'Midtown',
  'Corporate Atlanta',
];

export const IMAGES = {
  // ---- Brand-faithful local logo (extracted cleanly from ecosystem) ----
  crest: '/brand/crest_logo.png',
  crestShield: '/brand/crest_logo_only.png',

  // ---- Verified dark luxury stock imagery (heavy CSS dark filters applied) ----
  // PLACEHOLDER until client uploads actual Tahoe/Escalade photography.
  // All selected for: black/dark vehicles, cinematic mood, executive presentation.

  // Hero — dark vehicle at night
  heroPrimary: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=2200&q=85',
  heroAlt: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2200&q=85',

  // Fleet — black luxury SUV
  fleetMain: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1800&q=85',
  fleetDetail1: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85',
  fleetDetail2: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=85',

  // Private aviation
  privateJet: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1800&q=85',
  privateJetCabin: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=85',

  // Atlanta skyline
  atlantaSkyline: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1800&q=85',
  atlantaNight: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1800&q=85',
  atlantaBuckhead: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=85',
  atlantaMidtown: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1600&q=85',

  // Chauffeur / professional
  chauffeur: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85',
  chauffeurDoor: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85',

  // Service-specific
  hotelValet: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=85',
  protection: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85',
  production: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85',
  event: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=85',
  corporate: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85',
  interior: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=85',

  // Backwards compat aliases
  cinematicCar: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=2000&q=85',
  blackCarNight: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=85',

  // Convenience aliases used in Instagram strip / atlanta tiles
  tahoeNight: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85',
  tahoeExecutive: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85',
  tahoeInMotion: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85',
  chauffeurVip: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85',
  jetPrivate: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1400&q=85',
  arrivalLobby: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85',
  insideAtlanta: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85',

  // Premium black leather duffel for Instagram strip (Pexels)
  luxuryDuffel: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1400&q=85',
  luxuryLeather: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85',
};
