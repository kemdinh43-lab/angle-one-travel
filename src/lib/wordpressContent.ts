import { useEffect, useState } from "react";
import { BlogPost, Destination, ServiceItem } from "../types/travel";

type WordPressImage = {
  url?: string;
  alt?: string;
} | null;

type WordPressRecord = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage?: WordPressImage;
  destination?: {
    type?: string;
    bestTime?: string;
    highlights?: string[];
  };
  service?: {
    icon?: string;
    shortDescription?: string;
    benefits?: string[];
  };
  article?: {
    readingTime?: number;
  };
  taxonomies?: Record<string, { name: string; slug: string }[]>;
};

type WordPressContentResponse = {
  destinations?: WordPressRecord[];
  services?: WordPressRecord[];
  posts?: WordPressRecord[];
};

type WordPressContent = {
  destinations: Destination[];
  services: ServiceItem[];
  posts: BlogPost[];
  isLoaded: boolean;
};

const EMPTY_CONTENT: WordPressContent = {
  destinations: [],
  services: [],
  posts: [],
  isLoaded: false,
};

let cachedContent: WordPressContent | null = null;
let pendingRequest: Promise<WordPressContent> | null = null;

export function useWordPressContent(): WordPressContent {
  const [content, setContent] = useState<WordPressContent>(
    cachedContent ?? EMPTY_CONTENT,
  );

  useEffect(() => {
    if (cachedContent) {
      setContent(cachedContent);
      return;
    }

    pendingRequest ??= fetchWordPressContent();

    let isMounted = true;

    pendingRequest
      .then((nextContent) => {
        if (isMounted) {
          setContent(nextContent);
        }
      })
      .catch(() => {
        if (isMounted) {
          setContent(EMPTY_CONTENT);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return content;
}

async function fetchWordPressContent(): Promise<WordPressContent> {
  const response = await fetch("/wp-json/angel-one/v1/content", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load WordPress content");
  }

  const data = (await response.json()) as WordPressContentResponse;
  const mappedContent = {
    destinations: (data.destinations ?? []).map(mapDestination),
    services: (data.services ?? []).map(mapService),
    posts: (data.posts ?? []).map(mapPost),
    isLoaded: true,
  };

  cachedContent = mappedContent;
  return mappedContent;
}

function mapDestination(record: WordPressRecord): Destination {
  const type =
    record.destination?.type ??
    record.taxonomies?.angel_destination_type?.[0]?.name ??
    "Điểm đến";

  return {
    id: record.slug,
    name: record.title,
    tag: type,
    img: record.featuredImage?.url ?? "",
    description: record.excerpt,
    bestTime: record.destination?.bestTime ?? "Theo mùa",
    highlights: record.destination?.highlights ?? [],
    slug: record.slug,
    postType: "angel_destination",
  };
}

function mapService(record: WordPressRecord): ServiceItem {
  return {
    id: record.slug,
    iconName: normalizeIcon(record.service?.icon),
    title: record.title,
    desc: record.service?.shortDescription || record.excerpt,
    details: record.service?.benefits ?? [],
    slug: record.slug,
    postType: "angel_service",
  };
}

function mapPost(record: WordPressRecord): BlogPost {
  const category = record.taxonomies?.category?.[0]?.name ?? "Cẩm nang";
  const readingTime = record.article?.readingTime
    ? `${record.article.readingTime} phút đọc`
    : "5 phút đọc";

  return {
    id: String(record.id),
    title: record.title,
    tag: category,
    time: readingTime,
    img: record.featuredImage?.url ?? "",
    snippet: record.excerpt,
    content: record.content,
    slug: record.slug,
    postType: "post",
  };
}

function normalizeIcon(iconName?: string): string {
  const icons: Record<string, string> = {
    car: "Car",
    hotel: "Hotel",
    ticket: "Ticket",
    user: "UserCheck",
    users: "Building2",
    guide: "UserCheck",
    coffee: "Coffee",
    building: "Building2",
  };

  return icons[(iconName ?? "").toLowerCase()] ?? iconName ?? "Car";
}
