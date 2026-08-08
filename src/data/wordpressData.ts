import { BLOG_POSTS, DESTINATIONS, SERVICES, TOURS } from "./travelData";
import {
  BlogPost,
  Destination,
  ServiceItem,
  Tour,
  WordPressBlogRecord,
  WordPressDestinationRecord,
  WordPressSeoFields,
  WordPressServiceRecord,
  WordPressTermRef,
  WordPressTourRecord,
} from "../types/travel";

export const WORDPRESS_POST_TYPES = {
  tour: "angel_tour",
  destination: "angel_destination",
  service: "angel_service",
  blog: "post",
} as const;

export const WORDPRESS_TAXONOMIES = {
  tourCategory: "angel_tour_category",
  tourStyle: "angel_tour_style",
  destinationType: "angel_destination_type",
  destinationTag: "angel_destination_tag",
  travelIntent: "angel_travel_intent",
} as const;

export const TOUR_CATEGORY_TERMS: Record<Tour["category"], WordPressTermRef> = {
  domestic: {
    taxonomy: WORDPRESS_TAXONOMIES.tourCategory,
    slug: "tour-trong-nuoc",
    name: "Tour trong nước",
  },
  international: {
    taxonomy: WORDPRESS_TAXONOMIES.tourCategory,
    slug: "tour-quoc-te",
    name: "Tour quốc tế",
  },
};

const TOUR_STYLE_TERMS: Record<string, WordPressTermRef> = {
  "Tour gia đình": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "gia-dinh",
    name: "Gia đình",
  },
  "Tour văn hóa": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "van-hoa",
    name: "Văn hóa",
  },
  "Tour thiên nhiên": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "thien-nhien",
    name: "Thiên nhiên",
  },
  "Tour biển": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "bien-dao",
    name: "Biển đảo",
  },
  "Tour núi rừng": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "nui-rung",
    name: "Núi rừng",
  },
  "Tour cao cấp": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "cao-cap",
    name: "Cao cấp",
  },
  "Tour liên tuyến": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "lien-tuyen",
    name: "Liên tuyến",
  },
  "Tour quốc tế": {
    taxonomy: WORDPRESS_TAXONOMIES.tourStyle,
    slug: "quoc-te",
    name: "Quốc tế",
  },
};

const DESTINATION_TYPE_TERMS: Record<string, WordPressTermRef> = {
  "Thành phố": {
    taxonomy: WORDPRESS_TAXONOMIES.destinationType,
    slug: "thanh-pho",
    name: "Thành phố",
  },
  "Văn hóa": {
    taxonomy: WORDPRESS_TAXONOMIES.destinationType,
    slug: "van-hoa",
    name: "Văn hóa",
  },
  "Thiên nhiên": {
    taxonomy: WORDPRESS_TAXONOMIES.destinationType,
    slug: "thien-nhien",
    name: "Thiên nhiên",
  },
  "Biển": {
    taxonomy: WORDPRESS_TAXONOMIES.destinationType,
    slug: "bien",
    name: "Biển",
  },
};

const SERVICE_SLUGS: Record<string, string> = {
  transport: "thue-xe-du-lich",
  hotel: "booking-khach-san-resort",
  ticket: "ve-tham-quan-trai-nghiem",
  guide: "huong-dan-vien-du-lich",
  teambuilding: "team-building-bai-bien",
  mice: "gala-dinner-mice",
};

const BLOG_SLUGS: Record<string, string> = {
  "post-1": "kinh-nghiem-du-lich-da-nang-hoi-an-2-ngay-1-dem",
  "post-2": "dia-diem-check-in-co-do-hue",
  "post-3": "thue-xe-du-lich-rieng-hay-dat-tour-tron-goi-da-nang",
  "post-4": "chi-phi-du-lich-mien-trung-2026",
};

const DESTINATION_SLUG_BY_NAME: Record<string, string> = {
  "Đà Nẵng": "da-nang",
  "Hội An": "hoi-an",
  "Thừa Thiên Huế": "hue",
  "Huế": "hue",
  "Quảng Bình": "quang-binh",
  "Quy Nhơn": "quy-nhon",
  "Phú Quốc": "phu-quoc",
  Sapa: "sapa",
  "Thái Lan": "thai-lan",
  "Hàn Quốc": "han-quoc",
  "Nhật Bản": "nhat-ban",
  Singapore: "singapore",
  "Châu Âu": "chau-au",
};

const stripTourPrefix = (id: string) => id.replace(/^tour-/, "");

const priceToNumber = (price: string) => {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
};

const readingTimeToNumber = (time: string) => {
  const match = time.match(/\d+/);
  return match ? Number(match[0]) : 0;
};

const media = (sourceUrl: string, alt: string) => ({
  sourceUrl,
  alt,
});

const seo = (
  title: string,
  description: string,
  focusKeyword: string,
  canonicalPath: string,
): WordPressSeoFields => ({
  seoTitle: title,
  seoDescription: description,
  focusKeyword,
  canonicalPath,
});

const relatedToursForDestination = (destinationSlug: string) =>
  TOURS.filter(
    (tour) => DESTINATION_SLUG_BY_NAME[tour.location] === destinationSlug,
  ).map((tour) => stripTourPrefix(tour.id));

const makeTourFaq = (tour: Tour) => [
  {
    question: `Tour ${tour.name} phù hợp với nhóm khách nào?`,
    answer: `Tour phù hợp với khách quan tâm ${tour.type.toLowerCase()} và muốn có lịch trình ${tour.days} được Angel One Travel sắp xếp trọn gói.`,
  },
  {
    question: `Giá tour ${tour.name} đã bao gồm những gì?`,
    answer: `Giá hiển thị là ${tour.price}. Các hạng mục chính gồm ${tour.inclusions.slice(0, 3).join(", ")}.`,
  },
];

export const WORDPRESS_TOUR_RECORDS: WordPressTourRecord[] = TOURS.map(
  (tour) => {
    const slug = stripTourPrefix(tour.id);
    const destinationSlug = DESTINATION_SLUG_BY_NAME[tour.location] ?? slug;
    const styleTerm = TOUR_STYLE_TERMS[tour.type];
    const taxonomies = [
      TOUR_CATEGORY_TERMS[tour.category],
      ...(styleTerm ? [styleTerm] : []),
    ];

    return {
      postType: WORDPRESS_POST_TYPES.tour,
      title: tour.name,
      slug,
      excerpt: tour.description,
      content: tour.description,
      featuredImage: media(tour.img, `Tour ${tour.name} - Angel One Travel`),
      status: "draft",
      taxonomies,
      acf: {
        tourCode: `AOT-${slug.toUpperCase().replace(/-/g, "-")}`,
        duration: tour.days,
        startLocation: "Đà Nẵng",
        destinationLocation: tour.location,
        destinationSlug,
        priceFrom: priceToNumber(tour.price),
        priceLabel: tour.price,
        priceNote: "Giá có thể thay đổi theo ngày khởi hành, số lượng khách và hạng dịch vụ.",
        isFeatured: tour.featured,
        highlights: tour.highlights,
        itinerary: tour.itinerary.map((item) => ({
          dayLabel: item.day,
          title: item.title,
          description: item.desc,
        })),
        inclusions: tour.inclusions,
        exclusions: [],
        suitableFor: [tour.type],
        faq: makeTourFaq(tour),
        relatedTours: [],
      },
      seo: seo(
        `${tour.name} | Angel One Travel`,
        tour.description,
        tour.name,
        `/tour/${slug}/`,
      ),
    };
  },
);

export const WORDPRESS_DESTINATION_RECORDS: WordPressDestinationRecord[] =
  DESTINATIONS.map((destination: Destination) => {
    const slug = destination.id;
    const typeTerm = DESTINATION_TYPE_TERMS[destination.tag];

    return {
      postType: WORDPRESS_POST_TYPES.destination,
      title: destination.name,
      slug,
      excerpt: destination.description,
      content: destination.description,
      featuredImage: media(
        destination.img,
        `${destination.name} - điểm đến của Angel One Travel`,
      ),
      status: "draft",
      taxonomies: typeTerm ? [typeTerm] : [],
      acf: {
        destinationType: destination.tag,
        bestTime: destination.bestTime,
        highlights: destination.highlights,
        travelTips: [],
        relatedTours: relatedToursForDestination(slug),
      },
      seo: seo(
        `Du lịch ${destination.name} | Angel One Travel`,
        destination.description,
        `du lịch ${destination.name}`,
        `/diem-den/${slug}/`,
      ),
    };
  });

export const WORDPRESS_SERVICE_RECORDS: WordPressServiceRecord[] = SERVICES.map(
  (service: ServiceItem) => {
    const slug = SERVICE_SLUGS[service.id] ?? service.id;

    return {
      postType: WORDPRESS_POST_TYPES.service,
      title: service.title,
      slug,
      excerpt: service.desc,
      content: service.desc,
      status: "draft",
      acf: {
        serviceIcon: service.iconName,
        shortDescription: service.desc,
        benefits: service.details,
        processSteps: [],
        relatedTours: [],
      },
      seo: seo(
        `${service.title} | Angel One Travel`,
        service.desc,
        service.title.toLowerCase(),
        `/dich-vu/${slug}/`,
      ),
    };
  },
);

export const WORDPRESS_BLOG_RECORDS: WordPressBlogRecord[] = BLOG_POSTS.map(
  (post: BlogPost) => {
    const slug = BLOG_SLUGS[post.id] ?? post.id;

    return {
      postType: WORDPRESS_POST_TYPES.blog,
      title: post.title,
      slug,
      excerpt: post.snippet,
      content: post.content ?? post.snippet,
      featuredImage: media(post.img, `${post.title} - Angel One Travel`),
      status: "draft",
      taxonomies: [
        {
          taxonomy: "category",
          slug: post.tag.toLowerCase().replace(/\s+/g, "-"),
          name: post.tag,
        },
      ],
      acf: {
        readingTime: readingTimeToNumber(post.time),
        relatedTours: [],
        faq: [],
      },
      seo: seo(
        `${post.title} | Angel One Travel`,
        post.snippet,
        post.title,
        `/cam-nang-du-lich/${slug}/`,
      ),
    };
  },
);

export const WORDPRESS_IMPORT_DATA = {
  postTypes: WORDPRESS_POST_TYPES,
  taxonomies: WORDPRESS_TAXONOMIES,
  records: {
    tours: WORDPRESS_TOUR_RECORDS,
    destinations: WORDPRESS_DESTINATION_RECORDS,
    services: WORDPRESS_SERVICE_RECORDS,
    posts: WORDPRESS_BLOG_RECORDS,
  },
};
