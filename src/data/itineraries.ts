import { TourPackage } from '../types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'express',
    name: 'Express Heritage Classic',
    tagline: 'Ideal for short stays and single-day transit travelers',
    duration: '1 Full Day (8–9 Hours)',
    idealFor: 'Couples, short-stay visitors & business travelers',
    stops: [
      'Ellora Caves & Kailasa Monolith (Cave 16)',
      'Devagiri (Daulatabad) Citadel & Underground Maze',
      'Bibi Ka Maqbara (Taj of Deccan)',
      'Panchakki Medieval Water Mill'
    ],
    features: [
      'Govt. Approved Official Guided Narrative',
      'Priority timing strategy to avoid heavy queues',
      'Assistance with monument entry QR tickets',
      'Recommendations for authentic Marathwada lunch'
    ]
  },
  {
    id: 'grand-odyssey',
    name: 'Grand Deccan Odyssey',
    tagline: 'The definitive UNESCO cave & royal fortress pilgrimage',
    duration: '2 Full Days',
    badge: 'Most Popular',
    isPopular: true,
    idealFor: 'Families, culture enthusiasts & international travelers',
    stops: [
      'Day 1: Full Day Ajanta Caves & Jataka Murals Exploration',
      'Day 2: Ellora Caves (Buddhist, Hindu, Jain) & Devagiri Fort',
      'Bibi Ka Maqbara & Sunset Reflections',
      'Heritage Paithani Silk Handloom Workshop'
    ],
    features: [
      'Comprehensive in-depth iconographical analysis',
      'Dedicated photography assistance & best angles',
      'Curated dining spots & local cultural insights',
      'Flexible pacing customized to group energy'
    ]
  },
  {
    id: 'vip-custom',
    name: 'VIP & Photography Masterclass',
    tagline: 'Tailor-made pacing for historians, researchers & photographers',
    duration: 'Flexible (1 to 3+ Days)',
    idealFor: 'Photographers, academic scholars, VIP delegations',
    stops: [
      'Golden-hour cave illumination photography sessions',
      'Deep architectural & epigraphic deep-dives',
      'Off-the-beaten-track Jain & Buddhist caves',
      'Private vehicle & AC transport coordination'
    ],
    features: [
      '100% customizable schedule and start times',
      'Specialized knowledge of Sanskrit & Prakrit inscriptions',
      'VIP protocol and family-safe escort',
      'Direct coordination via personal WhatsApp'
    ]
  }
];
