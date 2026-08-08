<?php
/**
 * Public REST API for frontend consumption.
 */

if (! defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', 'angel_one_register_rest_routes');

function angel_one_register_rest_routes(): void
{
    register_rest_route('angel-one/v1', '/content', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'angel_one_rest_content',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('angel-one/v1', '/tours', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'angel_one_rest_tours',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('angel-one/v1', '/destinations', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'angel_one_rest_destinations',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('angel-one/v1', '/services', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'angel_one_rest_services',
        'permission_callback' => '__return_true',
    ]);
}

function angel_one_rest_content(): WP_REST_Response
{
    return rest_ensure_response([
        'brand' => [
            'name' => 'Angel One Travel',
            'phone' => '0768 643 446',
            'primaryCta' => 'Nhận báo giá',
        ],
        'tours' => angel_one_get_records('angel_tour'),
        'destinations' => angel_one_get_records('angel_destination'),
        'services' => angel_one_get_records('angel_service'),
        'posts' => angel_one_get_blog_records(8),
    ]);
}

function angel_one_rest_tours(): WP_REST_Response
{
    return rest_ensure_response(angel_one_get_records('angel_tour'));
}

function angel_one_rest_destinations(): WP_REST_Response
{
    return rest_ensure_response(angel_one_get_records('angel_destination'));
}

function angel_one_rest_services(): WP_REST_Response
{
    return rest_ensure_response(angel_one_get_records('angel_service'));
}

function angel_one_get_records(string $post_type, int $limit = 50): array
{
    $posts = get_posts([
        'post_type' => $post_type,
        'post_status' => 'publish',
        'numberposts' => $limit,
        'orderby' => [
            'menu_order' => 'ASC',
            'date' => 'DESC',
        ],
    ]);

    return array_map('angel_one_format_record', $posts);
}

function angel_one_get_blog_records(int $limit = 8): array
{
    $posts = get_posts([
        'post_type' => 'post',
        'post_status' => 'publish',
        'numberposts' => $limit,
        'category_name' => 'cam-nang-du-lich',
        'orderby' => [
            'menu_order' => 'ASC',
            'date' => 'DESC',
        ],
    ]);

    return array_map('angel_one_format_record', $posts);
}

function angel_one_format_record(WP_Post $post): array
{
    $post_type = $post->post_type;

    $record = [
        'id' => $post->ID,
        'postType' => $post_type,
        'title' => get_the_title($post),
        'slug' => $post->post_name,
        'url' => get_permalink($post),
        'excerpt' => get_the_excerpt($post),
        'content' => apply_filters('the_content', $post->post_content),
        'featuredImage' => angel_one_featured_image($post->ID),
        'taxonomies' => angel_one_record_terms($post),
        'seo' => [
            'title' => angel_one_meta($post->ID, 'angel_seo_title') ?: get_the_title($post),
            'description' => angel_one_meta($post->ID, 'angel_seo_description') ?: get_the_excerpt($post),
            'focusKeyword' => angel_one_meta($post->ID, 'angel_focus_keyword'),
        ],
        'cta' => [
            'label' => angel_one_meta($post->ID, 'angel_cta_label') ?: 'Nhận tư vấn',
            'note' => angel_one_meta($post->ID, 'angel_cta_note'),
        ],
    ];

    if ($post_type === 'angel_tour') {
        $record['tour'] = [
            'code' => angel_one_meta($post->ID, 'angel_tour_code'),
            'duration' => angel_one_meta($post->ID, 'angel_duration'),
            'startLocation' => angel_one_meta($post->ID, 'angel_start_location'),
            'destinationLocation' => angel_one_meta($post->ID, 'angel_destination_location'),
            'priceFrom' => (int) angel_one_meta($post->ID, 'angel_price_from'),
            'priceLabel' => angel_one_meta($post->ID, 'angel_price_label'),
            'priceNote' => angel_one_meta($post->ID, 'angel_price_note'),
            'isFeatured' => angel_one_meta($post->ID, 'angel_is_featured') === '1',
            'highlights' => angel_one_json_meta($post->ID, 'angel_highlights'),
            'itinerary' => angel_one_json_meta($post->ID, 'angel_itinerary'),
            'inclusions' => angel_one_json_meta($post->ID, 'angel_inclusions'),
            'exclusions' => angel_one_json_meta($post->ID, 'angel_exclusions'),
            'suitableFor' => angel_one_json_meta($post->ID, 'angel_suitable_for'),
            'faq' => angel_one_json_meta($post->ID, 'angel_faq'),
            'relatedTours' => angel_one_csv_meta($post->ID, 'angel_related_tours'),
        ];
    }

    if ($post_type === 'angel_destination') {
        $record['destination'] = [
            'type' => angel_one_meta($post->ID, 'angel_destination_type'),
            'bestTime' => angel_one_meta($post->ID, 'angel_best_time'),
            'highlights' => angel_one_json_meta($post->ID, 'angel_destination_highlights'),
            'travelTips' => angel_one_json_meta($post->ID, 'angel_travel_tips'),
            'relatedTours' => angel_one_csv_meta($post->ID, 'angel_related_tours'),
        ];
    }

    if ($post_type === 'angel_service') {
        $record['service'] = [
            'icon' => angel_one_meta($post->ID, 'angel_service_icon'),
            'shortDescription' => angel_one_meta($post->ID, 'angel_short_description'),
            'benefits' => angel_one_json_meta($post->ID, 'angel_benefits'),
            'processSteps' => angel_one_json_meta($post->ID, 'angel_process_steps'),
            'relatedTours' => angel_one_csv_meta($post->ID, 'angel_related_tours'),
        ];
    }

    if ($post_type === 'post') {
        $record['article'] = [
            'readingTime' => (int) angel_one_meta($post->ID, 'angel_reading_time'),
            'faq' => angel_one_json_meta($post->ID, 'angel_faq'),
            'relatedTours' => angel_one_csv_meta($post->ID, 'angel_related_tours'),
        ];
    }

    return $record;
}

function angel_one_featured_image(int $post_id): ?array
{
    $image_id = get_post_thumbnail_id($post_id);

    if (! $image_id) {
        return null;
    }

    return [
        'id' => $image_id,
        'url' => wp_get_attachment_image_url($image_id, 'full'),
        'alt' => get_post_meta($image_id, '_wp_attachment_image_alt', true),
    ];
}

function angel_one_record_terms(WP_Post $post): array
{
    $taxonomies = get_object_taxonomies($post->post_type);
    $output = [];

    foreach ($taxonomies as $taxonomy) {
        $terms = get_the_terms($post, $taxonomy);

        if (empty($terms) || is_wp_error($terms)) {
            continue;
        }

        $output[$taxonomy] = array_map(static function (WP_Term $term): array {
            return [
                'id' => $term->term_id,
                'name' => $term->name,
                'slug' => $term->slug,
            ];
        }, $terms);
    }

    return $output;
}

function angel_one_meta(int $post_id, string $key): string
{
    return (string) get_post_meta($post_id, $key, true);
}

function angel_one_json_meta(int $post_id, string $key): array
{
    $value = angel_one_meta($post_id, $key);

    if ($value === '') {
        return [];
    }

    $decoded = json_decode($value, true);

    return is_array($decoded) ? $decoded : [];
}

function angel_one_csv_meta(int $post_id, string $key): array
{
    $value = angel_one_meta($post_id, $key);

    if ($value === '') {
        return [];
    }

    return array_values(array_filter(array_map('trim', explode(',', $value))));
}
