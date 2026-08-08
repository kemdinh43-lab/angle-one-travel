<?php
/**
 * Angel One Travel theme functions.
 */

if (! defined('ABSPATH')) {
    exit;
}

add_action('after_setup_theme', 'angel_one_theme_setup');
add_action('wp_enqueue_scripts', 'angel_one_enqueue_assets');
add_action('wp_head', 'angel_one_preconnect_fonts', 1);
add_filter('script_loader_tag', 'angel_one_script_loader_tag', 10, 3);

function angel_one_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
}

function angel_one_preconnect_fonts(): void
{
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}

function angel_one_enqueue_assets(): void
{
    $manifest_path = get_theme_file_path('build/.vite/manifest.json');

    if (! file_exists($manifest_path)) {
        return;
    }

    $manifest = json_decode((string) file_get_contents($manifest_path), true);
    $entry = $manifest['index.html'] ?? null;

    if (! is_array($entry) || empty($entry['file'])) {
        return;
    }

    $theme_version = wp_get_theme()->get('Version');
    $build_uri = get_theme_file_uri('build/');

    foreach (($entry['css'] ?? []) as $index => $css_file) {
        wp_enqueue_style(
            'angel-one-travel-app-' . $index,
            $build_uri . $css_file,
            [],
            $theme_version,
        );
    }

    wp_enqueue_script(
        'angel-one-travel-app',
        $build_uri . $entry['file'],
        [],
        $theme_version,
        true,
    );
}

function angel_one_script_loader_tag(string $tag, string $handle, string $src): string
{
    if ($handle !== 'angel-one-travel-app') {
        return $tag;
    }

    return '<script type="module" id="' . esc_attr($handle) . '-js" src="' . esc_url($src) . '"></script>' . "\n";
}
