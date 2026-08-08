# Angel One Travel WordPress Data Model

This project keeps the current React/Vite interface, but content is now modeled so it can be migrated to WordPress admin cleanly.

## Brand Name

Use **Angel One Travel** consistently across code, SEO, WordPress labels, and content.

## Current Source Files

- UI seed data: `src/data/travelData.ts`
- WordPress-ready mapping: `src/data/wordpressData.ts`
- Shared TypeScript types: `src/types/travel.ts`

The UI can continue using `travelData.ts`. WordPress migration/import work should use `wordpressData.ts`.

## WordPress Post Types

| Content | Post type | Purpose |
| --- | --- | --- |
| Tours | `angel_tour` | Package tours, domestic tours, international tours, private tours |
| Destinations | `angel_destination` | Destination pages such as Da Nang, Hoi An, Hue |
| Services | `angel_service` | Transport, hotel booking, tickets, guide, MICE |
| Blog | `post` | Travel guide and advisory articles |

## WordPress Taxonomies

| Taxonomy | Slug | Applies to |
| --- | --- | --- |
| Tour category | `angel_tour_category` | `angel_tour` |
| Tour style | `angel_tour_style` | `angel_tour` |
| Destination type | `angel_destination_type` | `angel_destination` |
| Destination tag | `angel_destination_tag` | `post` |
| Travel intent | `angel_travel_intent` | `post`, optional |

## Recommended URL Structure

| Page type | URL |
| --- | --- |
| Tour archive | `/tour/` |
| Domestic tour archive | `/tour-trong-nuoc/` |
| International tour archive | `/tour-quoc-te/` |
| Tour detail | `/tour/da-nang-hoi-an/` |
| Destination archive | `/diem-den/` |
| Destination detail | `/diem-den/da-nang/` |
| Service archive | `/dich-vu/` |
| Service detail | `/dich-vu/thue-xe-du-lich/` |
| Blog archive | `/cam-nang-du-lich/` |

## Tour ACF Fields

| Field | Type | Required |
| --- | --- | --- |
| `tour_code` | Text | No |
| `duration` | Text | Yes |
| `start_location` | Text | Yes |
| `destination_location` | Text | Yes |
| `destination_slug` | Text/Relationship | Yes |
| `price_from` | Number | Yes |
| `price_label` | Text | Yes |
| `price_note` | Textarea | No |
| `is_featured` | True/False | No |
| `highlights` | Repeater | Yes |
| `itinerary` | Repeater | Yes |
| `inclusions` | Repeater | Yes |
| `exclusions` | Repeater | No |
| `suitable_for` | Repeater | No |
| `faq` | Repeater | No |
| `related_tours` | Relationship | No |

## Destination ACF Fields

| Field | Type | Required |
| --- | --- | --- |
| `destination_type` | Taxonomy | Yes |
| `best_time` | Text | Yes |
| `highlights` | Repeater | Yes |
| `travel_tips` | Repeater | No |
| `related_tours` | Relationship | Yes |

## Service ACF Fields

| Field | Type | Required |
| --- | --- | --- |
| `service_icon` | Select | Yes |
| `short_description` | Textarea | Yes |
| `benefits` | Repeater | Yes |
| `process_steps` | Repeater | No |
| `related_tours` | Relationship | No |

## Blog ACF Fields

| Field | Type | Required |
| --- | --- | --- |
| `reading_time` | Number | No |
| `related_tours` | Relationship | No |
| `faq` | Repeater | No |

## Migration Notes

- Do not import price as display text only. Keep `price_from` as a number and `price_label` for UI display.
- Do not keep `domestic` / `international` as a plain field in WordPress. Use `angel_tour_category`.
- Do not keep itinerary as one HTML block. Use a repeater per day.
- Do not use external Unsplash URLs as final production media. Upload owned images to WordPress Media Library and set alt text.
- Keep React components focused on presentation. WordPress should own content, URLs, SEO metadata, schema, and sitemap.
