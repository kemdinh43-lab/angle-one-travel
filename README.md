# Angel One Travel

Frontend React/Vite for **Angel One Travel**, prepared with a WordPress-ready data model for tours, destinations, services, and travel guide content.

The current app can still run as a Vite frontend, while the data layer is structured so it can be migrated into WordPress Custom Post Types, taxonomies, and ACF fields.

## Project Status

- Brand name standardized as **Angel One Travel**.
- UI seed content remains in `src/data/travelData.ts`.
- WordPress-ready records are generated in `src/data/wordpressData.ts`.
- WordPress data model documentation is available in `docs/wordpress-data-model.md`.
- Vite build emits a manifest file so the WordPress theme can enqueue hashed assets reliably.
- WordPress bridge theme source is available in `wordpress/angel-one-theme`.
- WordPress core plugin source is available in `wordpress/angel-one-core`.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

For a WordPress asset build:

```bash
npm run build:wordpress
```

The build output includes `dist/.vite/manifest.json`, which should be used by a WordPress theme to enqueue the generated CSS and JavaScript files.

## WordPress Deployment Assets

This repository includes two WordPress packages:

- `wordpress/angel-one-core`: registers travel Custom Post Types, taxonomies, and ACF field groups.
- `wordpress/angel-one-theme`: bridge theme that mounts the current Vite/React frontend inside WordPress and loads built assets from `build/.vite/manifest.json`.

Before packaging the theme for WordPress, run:

```bash
npm run build
```

Then copy the generated `dist` folder into the theme as `wordpress/angel-one-theme/build`.

## WordPress Migration Direction

Recommended structure:

- Plugin/core layer: register Custom Post Types, taxonomies, and ACF field groups.
- Theme layer: render templates and enqueue Vite assets using the build manifest.
- WordPress admin: manage tour, destination, service, and blog content.
- React/Vite: handle interactive UI and visual presentation only.

Recommended Custom Post Types:

| Content | Post type |
| --- | --- |
| Tours | `angel_tour` |
| Destinations | `angel_destination` |
| Services | `angel_service` |
| Blog | `post` |

Recommended URLs:

| Content | URL |
| --- | --- |
| Tour archive | `/tour/` |
| Tour detail | `/tour/da-nang-hoi-an/` |
| Destination archive | `/diem-den/` |
| Destination detail | `/diem-den/da-nang/` |
| Service archive | `/dich-vu/` |
| Blog archive | `/cam-nang-du-lich/` |

## Important Notes

- Do not keep production tour data hardcoded in React long term.
- Do not use Unsplash URLs as final production media. Upload owned images to WordPress Media Library.
- Keep prices as both a numeric field and a display label.
- Keep itinerary, highlights, inclusions, FAQs, and related tours as structured fields.
- Use WordPress/Rank Math/Yoast for page-level SEO metadata, sitemap, breadcrumbs, and schema.
