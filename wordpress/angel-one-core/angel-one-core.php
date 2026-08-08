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

function angel_one_register_content_types(): void
{
    register_post_type('angel_tour', [
        'labels' => [
            'name' => 'Tours',
            'singular_name' => 'Tour',
            'add_new_item' => 'Add New Tour',
            'edit_item' => 'Edit Tour',
            'new_item' => 'New Tour',
            'view_item' => 'View Tour',
            'search_items' => 'Search Tours',
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
            'name' => 'Destinations',
            'singular_name' => 'Destination',
            'add_new_item' => 'Add New Destination',
            'edit_item' => 'Edit Destination',
            'new_item' => 'New Destination',
            'view_item' => 'View Destination',
            'search_items' => 'Search Destinations',
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
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new_item' => 'Add New Service',
            'edit_item' => 'Edit Service',
            'new_item' => 'New Service',
            'view_item' => 'View Service',
            'search_items' => 'Search Services',
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
