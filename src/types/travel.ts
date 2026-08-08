export type TourCategory = "domestic" | "international";

export type WordPressPostType =
  | "angel_tour"
  | "angel_destination"
  | "angel_service"
  | "post";

export interface WordPressSeoFields {
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  canonicalPath: string;
}

export interface WordPressMediaFields {
  sourceUrl: string;
  alt: string;
  caption?: string;
}

export interface WordPressTermRef {
  taxonomy: string;
  slug: string;
  name: string;
}

export interface Tour {
  id: string;
  name: string;
  days: string;
  type: string;
  category: TourCategory;
  location: string;
  img: string;
  featured: boolean;
  price: string;
  description: string;
  itinerary: { day: string; title: string; desc: string }[];
  inclusions: string[];
  highlights: string[];
  slug?: string;
  postType?: "angel_tour";
  priceFrom?: number;
  priceNote?: string;
  startLocation?: string;
  destinationSlug?: string;
  taxonomies?: WordPressTermRef[];
  media?: WordPressMediaFields;
  seo?: WordPressSeoFields;
  faq?: { question: string; answer: string }[];
}

export interface Destination {
  id: string;
  name: string;
  tag: string;
  img: string;
  description: string;
  bestTime: string;
  highlights: string[];
  slug?: string;
  postType?: "angel_destination";
  taxonomies?: WordPressTermRef[];
  media?: WordPressMediaFields;
  seo?: WordPressSeoFields;
  relatedTourSlugs?: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  desc: string;
  details: string[];
  featured?: boolean;
  slug?: string;
  postType?: "angel_service";
  seo?: WordPressSeoFields;
  relatedTourSlugs?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  tag: string;
  time: string;
  img: string;
  snippet: string;
  content?: string;
  slug?: string;
  postType?: "post";
  seo?: WordPressSeoFields;
  relatedTourSlugs?: string[];
}

export interface WordPressTourRecord {
  postType: "angel_tour";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: WordPressMediaFields;
  status: "draft" | "publish";
  taxonomies: WordPressTermRef[];
  acf: {
    tourCode: string;
    duration: string;
    startLocation: string;
    destinationLocation: string;
    destinationSlug: string;
    priceFrom: number;
    priceLabel: string;
    priceNote: string;
    isFeatured: boolean;
    highlights: string[];
    itinerary: { dayLabel: string; title: string; description: string }[];
    inclusions: string[];
    exclusions: string[];
    suitableFor: string[];
    faq: { question: string; answer: string }[];
    relatedTours: string[];
  };
  seo: WordPressSeoFields;
}

export interface WordPressDestinationRecord {
  postType: "angel_destination";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: WordPressMediaFields;
  status: "draft" | "publish";
  taxonomies: WordPressTermRef[];
  acf: {
    destinationType: string;
    bestTime: string;
    highlights: string[];
    travelTips: string[];
    relatedTours: string[];
  };
  seo: WordPressSeoFields;
}

export interface WordPressServiceRecord {
  postType: "angel_service";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "publish";
  acf: {
    serviceIcon: string;
    shortDescription: string;
    benefits: string[];
    processSteps: string[];
    relatedTours: string[];
  };
  seo: WordPressSeoFields;
}

export interface WordPressBlogRecord {
  postType: "post";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: WordPressMediaFields;
  status: "draft" | "publish";
  taxonomies: WordPressTermRef[];
  acf: {
    readingTime: number;
    relatedTours: string[];
    faq: { question: string; answer: string }[];
  };
  seo: WordPressSeoFields;
}
