<?php
/**
 * Plugin Name: Angel One Travel Core
 * Description: Registers content types and taxonomies for Angel One Travel.
 * Version: 0.1.0
 * Author: Angel One Travel
 * Text Domain: angel-one-travel
 */

if (! defined('ABSPATH')) {
    exit;
}

add_action('init', 'angel_one_register_content_types');
add_action('init', 'angel_one_register_taxonomies');

if (file_exists(__DIR__ . '/acf-fields.php')) {
    require_once __DIR__ . '/acf-fields.php';
}

foreach (['meta-boxes.php', 'rest-api.php', 'seed-data.php'] as $angel_one_include) {
    $angel_one_include_path = __DIR__ . '/' . $angel_one_include;

    if (file_exists($angel_one_include_path)) {
        require_once $angel_one_include_path;
    }
}

function angel_one_register_content_types(): void
{
    register_post_type('angel_tour', [
        'labels' => [
            'name' => 'Tours',
            'singular_name' => 'Tour',
            'add_new_item' => 'Thêm tour mới',
            'edit_item' => 'Sửa tour',
            'new_item' => 'Tour mới',
            'view_item' => 'Xem tour',
            'search_items' => 'Tìm tour',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => [
            'slug' => 'tour',
            'with_front' => false,
        ],
        'menu_icon' => 'dashicons-palmtree',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'revisions'],
    ]);

    register_post_type('angel_destination', [
        'labels' => [
            'name' => 'Điểm đến',
            'singular_name' => 'Điểm đến',
            'add_new_item' => 'Thêm điểm đến mới',
            'edit_item' => 'Sửa điểm đến',
            'new_item' => 'Điểm đến mới',
            'view_item' => 'Xem điểm đến',
            'search_items' => 'Tìm điểm đến',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => [
            'slug' => 'diem-den',
            'with_front' => false,
        ],
        'menu_icon' => 'dashicons-location-alt',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'revisions'],
    ]);

    register_post_type('angel_service', [
        'labels' => [
            'name' => 'Dịch vụ',
            'singular_name' => 'Dịch vụ',
            'add_new_item' => 'Thêm dịch vụ mới',
            'edit_item' => 'Sửa dịch vụ',
            'new_item' => 'Dịch vụ mới',
            'view_item' => 'Xem dịch vụ',
            'search_items' => 'Tìm dịch vụ',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => [
            'slug' => 'dich-vu',
            'with_front' => false,
        ],
        'menu_icon' => 'dashicons-admin-site-alt3',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'revisions'],
    ]);
}

function angel_one_register_taxonomies(): void
{
    register_taxonomy('angel_tour_category', ['angel_tour'], [
        'labels' => [
            'name' => 'Tour Categories',
            'singular_name' => 'Tour Category',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => [
            'slug' => 'loai-tour',
            'with_front' => false,
        ],
    ]);

    register_taxonomy('angel_tour_style', ['angel_tour'], [
        'labels' => [
            'name' => 'Tour Styles',
            'singular_name' => 'Tour Style',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => [
            'slug' => 'phong-cach-tour',
            'with_front' => false,
        ],
    ]);

    register_taxonomy('angel_destination_type', ['angel_destination'], [
        'labels' => [
            'name' => 'Destination Types',
            'singular_name' => 'Destination Type',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => [
            'slug' => 'kieu-diem-den',
            'with_front' => false,
        ],
    ]);

    register_taxonomy('angel_destination_tag', ['post'], [
        'labels' => [
            'name' => 'Destination Tags',
            'singular_name' => 'Destination Tag',
        ],
        'public' => true,
        'hierarchical' => false,
        'show_in_rest' => true,
        'rewrite' => [
            'slug' => 'chu-de-diem-den',
            'with_front' => false,
        ],
    ]);

    register_taxonomy('angel_travel_intent', ['post', 'angel_tour'], [
        'labels' => [
            'name' => 'Travel Intents',
            'singular_name' => 'Travel Intent',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => [
            'slug' => 'nhu-cau-du-lich',
            'with_front' => false,
        ],
    ]);
}

register_activation_hook(__FILE__, 'angel_one_rewrite_flush');
register_deactivation_hook(__FILE__, 'angel_one_rewrite_flush');

function angel_one_rewrite_flush(): void
{
    angel_one_register_content_types();
    angel_one_register_taxonomies();
    flush_rewrite_rules();
}
