<?php
/**
 * Native WordPress edit fields for Angel One Travel content.
 *
 * These fields keep the site manageable without requiring paid ACF Pro repeater fields.
 */

if (! defined('ABSPATH')) {
    exit;
}

add_action('add_meta_boxes', 'angel_one_register_meta_boxes');
add_action('save_post', 'angel_one_save_meta_boxes', 10, 2);

function angel_one_register_meta_boxes(): void
{
    add_meta_box(
        'angel_one_tour_sales',
        'Thông tin bán tour',
        'angel_one_render_tour_sales_meta_box',
        'angel_tour',
        'normal',
        'high',
    );

    add_meta_box(
        'angel_one_tour_content',
        'Nội dung chi tiết tour',
        'angel_one_render_tour_content_meta_box',
        'angel_tour',
        'normal',
        'default',
    );

    add_meta_box(
        'angel_one_destination_details',
        'Thông tin điểm đến',
        'angel_one_render_destination_meta_box',
        'angel_destination',
        'normal',
        'high',
    );

    add_meta_box(
        'angel_one_service_details',
        'Thông tin dịch vụ',
        'angel_one_render_service_meta_box',
        'angel_service',
        'normal',
        'high',
    );

    add_meta_box(
        'angel_one_article_details',
        'Thông tin cẩm nang',
        'angel_one_render_article_meta_box',
        'post',
        'normal',
        'default',
    );

    foreach (['angel_tour', 'angel_destination', 'angel_service', 'post'] as $post_type) {
        add_meta_box(
            'angel_one_seo',
            'SEO & CTA',
            'angel_one_render_seo_meta_box',
            $post_type,
            'side',
            'default',
        );
    }
}

function angel_one_render_tour_sales_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_text_input($post->ID, 'angel_tour_code', 'Mã tour');
    angel_one_text_input($post->ID, 'angel_duration', 'Thời lượng', '2N1Đ, 3N2Đ...');
    angel_one_text_input($post->ID, 'angel_start_location', 'Điểm khởi hành');
    angel_one_text_input($post->ID, 'angel_destination_location', 'Điểm đến chính');
    angel_one_text_input($post->ID, 'angel_price_label', 'Giá hiển thị');
    angel_one_number_input($post->ID, 'angel_price_from', 'Giá từ');
    angel_one_textarea_input($post->ID, 'angel_price_note', 'Ghi chú giá', 3);
    angel_one_checkbox_input($post->ID, 'angel_is_featured', 'Hiển thị nổi bật trên trang chủ');
}

function angel_one_render_tour_content_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_json_textarea($post->ID, 'angel_highlights', 'Điểm nổi bật', '["Tham quan Hội An", "Thưởng thức đặc sản"]');
    angel_one_json_textarea($post->ID, 'angel_itinerary', 'Lịch trình', '[{"day":"Ngày 1","title":"Đà Nẵng - Hội An","description":"..."}]');
    angel_one_json_textarea($post->ID, 'angel_inclusions', 'Bao gồm', '["Xe du lịch", "Khách sạn", "HDV"]');
    angel_one_json_textarea($post->ID, 'angel_exclusions', 'Không bao gồm', '["Chi phí cá nhân"]');
    angel_one_json_textarea($post->ID, 'angel_suitable_for', 'Phù hợp với', '["Gia đình", "Nhóm bạn", "Công ty"]');
    angel_one_json_textarea($post->ID, 'angel_faq', 'FAQ', '[{"question":"Tour phù hợp với ai?","answer":"..."}]');
    angel_one_text_input($post->ID, 'angel_related_tours', 'Tour liên quan', 'Các slug cách nhau bằng dấu phẩy');
}

function angel_one_render_destination_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_text_input($post->ID, 'angel_destination_type', 'Loại điểm đến', 'Biển, Văn hóa, Thiên nhiên...');
    angel_one_text_input($post->ID, 'angel_best_time', 'Thời điểm đẹp nhất');
    angel_one_json_textarea($post->ID, 'angel_destination_highlights', 'Điểm nổi bật', '["Bãi biển Mỹ Khê", "Cầu Rồng"]');
    angel_one_json_textarea($post->ID, 'angel_travel_tips', 'Kinh nghiệm du lịch', '["Nên đi buổi sáng", "Chuẩn bị kem chống nắng"]');
    angel_one_text_input($post->ID, 'angel_related_tours', 'Tour liên quan', 'Các slug cách nhau bằng dấu phẩy');
}

function angel_one_render_service_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_text_input($post->ID, 'angel_service_icon', 'Icon', 'car, hotel, ticket, users...');
    angel_one_textarea_input($post->ID, 'angel_short_description', 'Mô tả ngắn', 3);
    angel_one_json_textarea($post->ID, 'angel_benefits', 'Lợi ích', '["Báo giá nhanh", "Nhà cung cấp uy tín"]');
    angel_one_json_textarea($post->ID, 'angel_process_steps', 'Quy trình', '[{"title":"Tiếp nhận nhu cầu","description":"..."}]');
    angel_one_text_input($post->ID, 'angel_related_tours', 'Tour liên quan', 'Các slug cách nhau bằng dấu phẩy');
}

function angel_one_render_article_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_number_input($post->ID, 'angel_reading_time', 'Thời gian đọc (phút)');
    angel_one_text_input($post->ID, 'angel_related_tours', 'Tour liên quan', 'Các slug cách nhau bằng dấu phẩy');
    angel_one_json_textarea($post->ID, 'angel_faq', 'FAQ bài viết', '[{"question":"Nên đi khi nào?","answer":"..."}]');
}

function angel_one_render_seo_meta_box(WP_Post $post): void
{
    angel_one_meta_nonce();
    angel_one_text_input($post->ID, 'angel_seo_title', 'SEO title');
    angel_one_textarea_input($post->ID, 'angel_seo_description', 'Meta description', 3);
    angel_one_text_input($post->ID, 'angel_focus_keyword', 'Từ khóa chính');
    angel_one_text_input($post->ID, 'angel_cta_label', 'CTA');
    angel_one_text_input($post->ID, 'angel_cta_note', 'Ghi chú CTA');
}

function angel_one_save_meta_boxes(int $post_id, WP_Post $post): void
{
    if (! isset($_POST['angel_one_meta_nonce']) || ! wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['angel_one_meta_nonce'])), 'angel_one_save_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (! current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = angel_one_meta_fields_for_post_type($post->post_type);

    foreach ($fields as $key => $type) {
        if ($type === 'checkbox') {
            update_post_meta($post_id, $key, isset($_POST[$key]) ? '1' : '0');
            continue;
        }

        if (! isset($_POST[$key])) {
            delete_post_meta($post_id, $key);
            continue;
        }

        $raw_value = wp_unslash($_POST[$key]);

        if ($type === 'number') {
            update_post_meta($post_id, $key, (string) absint($raw_value));
            continue;
        }

        if ($type === 'json') {
            update_post_meta($post_id, $key, angel_one_sanitize_json_text((string) $raw_value));
            continue;
        }

        if ($type === 'textarea') {
            update_post_meta($post_id, $key, sanitize_textarea_field((string) $raw_value));
            continue;
        }

        update_post_meta($post_id, $key, sanitize_text_field((string) $raw_value));
    }
}

function angel_one_meta_fields_for_post_type(string $post_type): array
{
    $shared = [
        'angel_related_tours' => 'text',
        'angel_seo_title' => 'text',
        'angel_seo_description' => 'textarea',
        'angel_focus_keyword' => 'text',
        'angel_cta_label' => 'text',
        'angel_cta_note' => 'text',
    ];

    $fields = [
        'angel_tour' => [
            'angel_tour_code' => 'text',
            'angel_duration' => 'text',
            'angel_start_location' => 'text',
            'angel_destination_location' => 'text',
            'angel_price_label' => 'text',
            'angel_price_from' => 'number',
            'angel_price_note' => 'textarea',
            'angel_is_featured' => 'checkbox',
            'angel_highlights' => 'json',
            'angel_itinerary' => 'json',
            'angel_inclusions' => 'json',
            'angel_exclusions' => 'json',
            'angel_suitable_for' => 'json',
            'angel_faq' => 'json',
        ],
        'angel_destination' => [
            'angel_destination_type' => 'text',
            'angel_best_time' => 'text',
            'angel_destination_highlights' => 'json',
            'angel_travel_tips' => 'json',
        ],
        'angel_service' => [
            'angel_service_icon' => 'text',
            'angel_short_description' => 'textarea',
            'angel_benefits' => 'json',
            'angel_process_steps' => 'json',
        ],
        'post' => [
            'angel_reading_time' => 'number',
            'angel_faq' => 'json',
        ],
    ];

    return array_merge($fields[$post_type] ?? [], $shared);
}

function angel_one_meta_nonce(): void
{
    wp_nonce_field('angel_one_save_meta', 'angel_one_meta_nonce');
}

function angel_one_text_input(int $post_id, string $key, string $label, string $placeholder = ''): void
{
    $value = (string) get_post_meta($post_id, $key, true);
    angel_one_field_wrap($label, sprintf(
        '<input type="text" name="%1$s" value="%2$s" placeholder="%3$s" class="widefat">',
        esc_attr($key),
        esc_attr($value),
        esc_attr($placeholder),
    ));
}

function angel_one_number_input(int $post_id, string $key, string $label): void
{
    $value = (string) get_post_meta($post_id, $key, true);
    angel_one_field_wrap($label, sprintf(
        '<input type="number" min="0" step="1" name="%1$s" value="%2$s" class="widefat">',
        esc_attr($key),
        esc_attr($value),
    ));
}

function angel_one_checkbox_input(int $post_id, string $key, string $label): void
{
    $checked = get_post_meta($post_id, $key, true) === '1' ? 'checked' : '';
    angel_one_field_wrap('', sprintf(
        '<label><input type="checkbox" name="%1$s" value="1" %2$s> %3$s</label>',
        esc_attr($key),
        $checked,
        esc_html($label),
    ));
}

function angel_one_textarea_input(int $post_id, string $key, string $label, int $rows = 4): void
{
    $value = (string) get_post_meta($post_id, $key, true);
    angel_one_field_wrap($label, sprintf(
        '<textarea name="%1$s" rows="%2$d" class="widefat">%3$s</textarea>',
        esc_attr($key),
        $rows,
        esc_textarea($value),
    ));
}

function angel_one_json_textarea(int $post_id, string $key, string $label, string $placeholder): void
{
    $value = (string) get_post_meta($post_id, $key, true);
    angel_one_field_wrap($label, sprintf(
        '<textarea name="%1$s" rows="6" class="widefat code" placeholder="%2$s">%3$s</textarea><p class="description">Nhập JSON hợp lệ để giữ dữ liệu có cấu trúc và dễ đưa ra frontend.</p>',
        esc_attr($key),
        esc_attr($placeholder),
        esc_textarea($value),
    ));
}

function angel_one_field_wrap(string $label, string $field_html): void
{
    echo '<p style="margin: 0 0 14px;">';

    if ($label !== '') {
        echo '<label style="display:block;font-weight:600;margin-bottom:6px;">' . esc_html($label) . '</label>';
    }

    echo $field_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    echo '</p>';
}

function angel_one_sanitize_json_text(string $json): string
{
    $json = trim($json);

    if ($json === '') {
        return '';
    }

    $decoded = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        return sanitize_textarea_field($json);
    }

    return (string) wp_json_encode($decoded, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}
