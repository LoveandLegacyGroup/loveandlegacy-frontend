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
    blurb: "Film sets, studios, artist logistics. Atlanta’s production community trusts Love & Legacy.",
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
  // ---- Official Love & Legacy brand assets ----
  // Master logo (HD, 1024x1024) — used everywhere we display the crest
  crest:            '/brand/logo_master.png',
  crestShield:      '/brand/logo_master.png',
  logoMaster:       '/brand/logo_master.png',
  logo512:          '/brand/logo_512.png',
  logo256:          '/brand/logo_256.png',

  // ---- Vehicle imagery (Tahoe + Sprinter ONLY) ----
  tahoeExterior:        '/brand/tahoe_exterior.jpg',
  tahoeExteriorWide:    '/brand/tahoe_exterior_landscape.jpg',
  tahoeInterior:        '/brand/tahoe_interior.jpg',
  sprinterExterior:     '/brand/sprinter_exterior.jpg',
  sprinterInterior:     '/brand/sprinter_interior.jpg',

  // ---- Section mappings (per spec) ----
  // HERO — Tahoe exterior (executive presence)
  heroPrimary:      '/brand/tahoe_exterior_landscape.jpg',
  heroAlt:          '/brand/tahoe_exterior.jpg',
  // FLEET / large group — Sprinter exterior
  fleetMain:        '/brand/sprinter_exterior.jpg',
  fleetDetail1:     '/brand/sprinter_interior.jpg',
  fleetDetail2:     '/brand/tahoe_interior.jpg',
  // EXECUTIVE / AIRPORT / VIP / PROTECTION — Tahoe exterior
  privateJet:       '/brand/tahoe_exterior_landscape.jpg',
  privateJetCabin:  '/brand/tahoe_interior.jpg',
  // ATLANTA tiles — mix of Tahoe ext, interior, Sprinter ext, interior
  atlantaSkyline:   '/brand/tahoe_exterior_landscape.jpg',
  atlantaNight:     '/brand/sprinter_interior.jpg',
  atlantaBuckhead:  '/brand/tahoe_interior.jpg',
  atlantaMidtown:   '/brand/sprinter_exterior.jpg',
  // Chauffeur / professional — Tahoe interior (premium passenger view)
  chauffeur:        '/brand/tahoe_interior.jpg',
  chauffeurDoor:    '/brand/tahoe_exterior.jpg',
  // Service pages
  hotelValet:       '/brand/tahoe_exterior.jpg',
  protection:       '/brand/tahoe_exterior_landscape.jpg',
  production:       '/brand/sprinter_exterior.jpg',
  event:            '/brand/sprinter_interior.jpg',
  corporate:        '/brand/tahoe_exterior_landscape.jpg',
  interior:         '/brand/tahoe_interior.jpg',
  // Backwards compat aliases (used in places throughout app)
  cinematicCar:     '/brand/tahoe_exterior_landscape.jpg',
  blackCarNight:    '/brand/tahoe_exterior.jpg',
  tahoeNight:       '/brand/tahoe_exterior.jpg',
  tahoeExecutive:   '/brand/tahoe_exterior_landscape.jpg',
  tahoeInMotion:    '/brand/tahoe_exterior.jpg',
  chauffeurVip:     '/brand/tahoe_interior.jpg',
  jetPrivate:       '/brand/sprinter_exterior.jpg',
  arrivalLobby:     '/brand/tahoe_exterior.jpg',
  insideAtlanta:    '/brand/sprinter_interior.jpg',
  luxuryDuffel:     '/brand/sprinter_interior.jpg',
  luxuryLeather:    '/brand/tahoe_interior.jpg',
};
