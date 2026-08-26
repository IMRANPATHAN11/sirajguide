export interface Attraction {
  id: string;
  name: string;
  marathiName?: string;
  category: 'unesco' | 'fort' | 'hydraulic';
  tagline: string;
  distance: string;
  timing: string;
  closedDay: string;
  image: string;
  imageAlt?: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  photographyTip?: string;
  historicalEra: string;
  architectureType: string;
}

export interface TourPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  badge?: string;
  isPopular?: boolean;
  idealFor: string;
  stops: string[];
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  country: string;
  location: string;
  avatarText: string;
  rating: number;
  date: string;
  text: string;
  tourTaken: string;
}

export interface FaqItem {
  id: string;
  category: 'timing' | 'booking' | 'logistics' | 'general';
  question: string;
  answer: string;
}
