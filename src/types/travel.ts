export interface Tour {
  id: string;
  name: string;
  days: string;
  type: string;
  category: "domestic" | "international";
  location: string;
  img: string;
  featured: boolean;
  price: string;
  description: string;
  itinerary: { day: string; title: string; desc: string }[];
  inclusions: string[];
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  tag: string;
  img: string;
  description: string;
  bestTime: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  desc: string;
  details: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  tag: string;
  time: string;
  img: string;
  snippet: string;
  content?: string;
}
