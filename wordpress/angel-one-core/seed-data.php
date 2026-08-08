<?php
/**
 * WP-CLI seed command for initial Angel One Travel content.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (defined('WP_CLI') && WP_CLI) {
    WP_CLI::add_command('angel-one seed', 'angel_one_seed_content_command');
}

function angel_one_seed_content_command(array $args, array $assoc_args): void
{
    if (empty($assoc_args['yes'])) {
        WP_CLI::warning('This will create or update Angel One Travel sample content.');
        WP_CLI::confirm('Continue?');
    }

    angel_one_register_content_types();
    angel_one_register_taxonomies();

    angel_one_seed_terms();

    foreach (angel_one_seed_tours() as $tour) {
        angel_one_upsert_seed_post($tour);
    }

    foreach (angel_one_seed_destinations() as $destination) {
        angel_one_upsert_seed_post($destination);
    }

    foreach (angel_one_seed_services() as $service) {
        angel_one_upsert_seed_post($service);
    }

    foreach (angel_one_seed_posts() as $post) {
        angel_one_upsert_seed_post($post);
    }

    flush_rewrite_rules();
    WP_CLI::success('Angel One Travel content seeded.');
}

function angel_one_seed_terms(): void
{
    $terms = [
        ['angel_tour_category', 'Tour trong nước', 'tour-trong-nuoc'],
        ['angel_tour_category', 'Tour quốc tế', 'tour-quoc-te'],
        ['angel_tour_style', 'Gia đình', 'gia-dinh'],
        ['angel_tour_style', 'Văn hóa', 'van-hoa'],
        ['angel_tour_style', 'Biển đảo', 'bien-dao'],
        ['angel_tour_style', 'Doanh nghiệp', 'doanh-nghiep'],
        ['angel_destination_type', 'Thành phố', 'thanh-pho'],
        ['angel_destination_type', 'Văn hóa', 'van-hoa'],
        ['angel_destination_type', 'Thiên nhiên', 'thien-nhien'],
        ['category', 'Cẩm nang du lịch', 'cam-nang-du-lich'],
    ];

    foreach ($terms as [$taxonomy, $name, $slug]) {
        if (! term_exists($slug, $taxonomy)) {
            wp_insert_term($name, $taxonomy, ['slug' => $slug]);
        }
    }
}

function angel_one_upsert_seed_post(array $record): int
{
    $existing = get_page_by_path($record['slug'], OBJECT, $record['post_type']);
    $post_data = [
        'ID' => $existing ? $existing->ID : 0,
        'post_type' => $record['post_type'],
        'post_name' => $record['slug'],
        'post_title' => $record['title'],
        'post_excerpt' => $record['excerpt'],
        'post_content' => $record['content'],
        'post_status' => 'publish',
    ];

    $post_id = $existing ? wp_update_post($post_data, true) : wp_insert_post($post_data, true);

    if (is_wp_error($post_id)) {
        WP_CLI::warning($post_id->get_error_message());
        return 0;
    }

    foreach (($record['meta'] ?? []) as $key => $value) {
        if (is_array($value)) {
            update_post_meta($post_id, $key, (string) wp_json_encode($value, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
            continue;
        }

        update_post_meta($post_id, $key, (string) $value);
    }

    foreach (($record['tax'] ?? []) as $taxonomy => $slugs) {
        wp_set_object_terms($post_id, $slugs, $taxonomy, false);
    }

    if (! empty($record['image'])) {
        angel_one_attach_seed_image($post_id, $record['image'], $record['image_alt'] ?? $record['title']);
    }

    return (int) $post_id;
}

function angel_one_attach_seed_image(int $post_id, string $relative_path, string $alt): void
{
    if (get_post_thumbnail_id($post_id)) {
        return;
    }

    $source_path = ABSPATH . ltrim($relative_path, '/');

    if (! file_exists($source_path)) {
        return;
    }

    $upload = wp_upload_bits(basename($source_path), null, (string) file_get_contents($source_path));

    if (! empty($upload['error'])) {
        return;
    }

    $filetype = wp_check_filetype($upload['file']);
    $attachment_id = wp_insert_attachment([
        'post_mime_type' => $filetype['type'],
        'post_title' => sanitize_text_field(pathinfo($upload['file'], PATHINFO_FILENAME)),
        'post_content' => '',
        'post_status' => 'inherit',
    ], $upload['file'], $post_id);

    if (is_wp_error($attachment_id)) {
        return;
    }

    require_once ABSPATH . 'wp-admin/includes/image.php';

    $metadata = wp_generate_attachment_metadata($attachment_id, $upload['file']);
    wp_update_attachment_metadata($attachment_id, $metadata);
    update_post_meta($attachment_id, '_wp_attachment_image_alt', sanitize_text_field($alt));
    set_post_thumbnail($post_id, $attachment_id);
}

function angel_one_seed_tours(): array
{
    return [
        [
            'post_type' => 'angel_tour',
            'slug' => 'da-nang-hoi-an',
            'title' => 'Đà Nẵng - Hội An 2N1Đ',
            'excerpt' => 'Tour ngắn ngày dành cho khách muốn trải nghiệm Đà Nẵng, Sơn Trà, Ngũ Hành Sơn và phố cổ Hội An.',
            'content' => 'Hành trình phù hợp cho gia đình, nhóm bạn hoặc đoàn công ty nhỏ muốn có lịch trình gọn, dễ đi và nhiều trải nghiệm văn hóa miền Trung.',
            'image' => 'destinations/hoian_bg.webp',
            'image_alt' => 'Tour Đà Nẵng Hội An cùng Angel One Travel',
            'tax' => [
                'angel_tour_category' => ['tour-trong-nuoc'],
                'angel_tour_style' => ['gia-dinh', 'van-hoa'],
            ],
            'meta' => angel_one_seed_tour_meta('AOT-DNH-2N1D', '2N1Đ', 'Đà Nẵng', 'Hội An', '1.890.000đ / khách', 1890000, true, [
                'Tham quan bán đảo Sơn Trà và Chùa Linh Ứng',
                'Dạo phố cổ Hội An về đêm',
                'Thưởng thức đặc sản miền Trung',
                'Lịch trình gọn, phù hợp cuối tuần',
            ], [
                ['day' => 'Ngày 1', 'title' => 'Đà Nẵng - Sơn Trà - Hội An', 'description' => 'Đón khách, tham quan Sơn Trà, chiều vào Hội An dạo phố cổ và thả hoa đăng.'],
                ['day' => 'Ngày 2', 'title' => 'Ngũ Hành Sơn - mua đặc sản', 'description' => 'Tham quan Ngũ Hành Sơn, mua đặc sản và tiễn khách ra sân bay hoặc khách sạn.'],
            ]),
        ],
        [
            'post_type' => 'angel_tour',
            'slug' => 'da-nang-hue',
            'title' => 'Đà Nẵng - Huế di sản 2N1Đ',
            'excerpt' => 'Hành trình khám phá cố đô Huế, Đại Nội, Chùa Thiên Mụ và các trải nghiệm văn hóa cung đình.',
            'content' => 'Tour dành cho khách yêu lịch sử, kiến trúc và ẩm thực Huế, xuất phát thuận tiện từ Đà Nẵng.',
            'image' => 'destinations/hue_bg.webp',
            'image_alt' => 'Tour Đà Nẵng Huế di sản',
            'tax' => [
                'angel_tour_category' => ['tour-trong-nuoc'],
                'angel_tour_style' => ['van-hoa'],
            ],
            'meta' => angel_one_seed_tour_meta('AOT-HUE-2N1D', '2N1Đ', 'Đà Nẵng', 'Huế', '2.150.000đ / khách', 2150000, false, [
                'Tham quan Đại Nội Huế',
                'Viếng Chùa Thiên Mụ',
                'Trải nghiệm ẩm thực cố đô',
                'Lịch trình cân bằng giữa tham quan và nghỉ ngơi',
            ], [
                ['day' => 'Ngày 1', 'title' => 'Đà Nẵng - Huế - Đại Nội', 'description' => 'Di chuyển đến Huế, tham quan Đại Nội và thưởng thức món Huế.'],
                ['day' => 'Ngày 2', 'title' => 'Chùa Thiên Mụ - Chợ Đông Ba', 'description' => 'Viếng chùa, mua đặc sản và trở về Đà Nẵng.'],
            ]),
        ],
        [
            'post_type' => 'angel_tour',
            'slug' => 'team-building-da-nang',
            'title' => 'Team building Đà Nẵng cho doanh nghiệp',
            'excerpt' => 'Gói tổ chức team building, gala dinner và dịch vụ hậu cần cho đoàn công ty tại Đà Nẵng.',
            'content' => 'Angel One Travel thiết kế chương trình riêng theo mục tiêu của từng doanh nghiệp: gắn kết đội nhóm, tri ân khách hàng hoặc du lịch khen thưởng.',
            'image' => 'destinations/danang_bg.webp',
            'image_alt' => 'Team building Đà Nẵng Angel One Travel',
            'tax' => [
                'angel_tour_category' => ['tour-trong-nuoc'],
                'angel_tour_style' => ['doanh-nghiep'],
            ],
            'meta' => angel_one_seed_tour_meta('AOT-MICE-DAD', 'Theo yêu cầu', 'Đà Nẵng', 'Đà Nẵng', 'Liên hệ báo giá', 0, true, [
                'Thiết kế kịch bản theo văn hóa doanh nghiệp',
                'Điều phối âm thanh, sân khấu, MC và gala dinner',
                'Kết hợp lưu trú, vận chuyển và tour tham quan',
                'Báo giá theo ngân sách và số lượng khách',
            ], [
                ['day' => 'Bước 1', 'title' => 'Tiếp nhận brief', 'description' => 'Xác định số lượng khách, ngân sách, mục tiêu chương trình và thời gian tổ chức.'],
                ['day' => 'Bước 2', 'title' => 'Thiết kế proposal', 'description' => 'Đề xuất concept, lịch trình, địa điểm, dịch vụ và chi phí.'],
            ]),
        ],
    ];
}

function angel_one_seed_tour_meta(string $code, string $duration, string $start, string $destination, string $price_label, int $price_from, bool $featured, array $highlights, array $itinerary): array
{
    return [
        'angel_tour_code' => $code,
        'angel_duration' => $duration,
        'angel_start_location' => $start,
        'angel_destination_location' => $destination,
        'angel_price_label' => $price_label,
        'angel_price_from' => $price_from,
        'angel_price_note' => 'Giá có thể thay đổi theo ngày khởi hành, số lượng khách và hạng dịch vụ.',
        'angel_is_featured' => $featured ? '1' : '0',
        'angel_highlights' => $highlights,
        'angel_itinerary' => $itinerary,
        'angel_inclusions' => ['Xe du lịch theo lịch trình', 'Tư vấn lịch trình', 'Hỗ trợ trước và trong chuyến đi'],
        'angel_exclusions' => ['Chi phí cá nhân', 'Dịch vụ ngoài chương trình'],
        'angel_suitable_for' => ['Gia đình', 'Nhóm bạn', 'Đoàn công ty'],
        'angel_faq' => [
            ['question' => 'Có thể thiết kế lịch trình riêng không?', 'answer' => 'Có. Angel One Travel có thể điều chỉnh lịch trình, khách sạn, bữa ăn và dịch vụ theo nhu cầu thực tế.'],
            ['question' => 'Giá tour đã cố định chưa?', 'answer' => 'Giá hiển thị là mức tham khảo. Báo giá cuối phụ thuộc ngày đi, số lượng khách và tiêu chuẩn dịch vụ.'],
        ],
        'angel_seo_title' => $destination . ' - tour du lịch cùng Angel One Travel',
        'angel_seo_description' => 'Tư vấn và đặt tour ' . $destination . ' với lịch trình rõ ràng, chi phí minh bạch và hỗ trợ chuyên nghiệp từ Angel One Travel.',
        'angel_focus_keyword' => 'tour ' . $destination,
        'angel_cta_label' => 'Nhận báo giá tour',
        'angel_cta_note' => 'Gửi nhu cầu, Angel One Travel phản hồi phương án phù hợp.',
    ];
}

function angel_one_seed_destinations(): array
{
    return [
        angel_one_seed_destination('da-nang', 'Đà Nẵng', 'Thành phố biển năng động, phù hợp cho du lịch gia đình, nghỉ dưỡng, MICE và các hành trình miền Trung.', 'destinations/danang_bg.webp', 'Thành phố', 'Tháng 2 đến tháng 8', ['Bãi biển Mỹ Khê', 'Bán đảo Sơn Trà', 'Cầu Rồng', 'Ẩm thực miền Trung']),
        angel_one_seed_destination('hoi-an', 'Hội An', 'Đô thị cổ giàu bản sắc, nổi bật với đèn lồng, kiến trúc di sản và trải nghiệm ẩm thực.', 'destinations/hoian_bg.webp', 'Văn hóa', 'Tháng 2 đến tháng 8', ['Phố cổ Hội An', 'Sông Hoài', 'Làng nghề truyền thống', 'Ẩm thực địa phương']),
        angel_one_seed_destination('hue', 'Huế', 'Cố đô Việt Nam với hệ thống cung đình, lăng tẩm, chùa cổ và nền ẩm thực tinh tế.', 'destinations/hue_bg.webp', 'Văn hóa', 'Tháng 1 đến tháng 4', ['Đại Nội', 'Chùa Thiên Mụ', 'Lăng Khải Định', 'Ẩm thực Huế']),
        angel_one_seed_destination('quang-binh', 'Quảng Bình', 'Điểm đến thiên nhiên nổi bật với hang động, sông suối và các trải nghiệm khám phá.', 'destinations/quangbinh_bg.webp', 'Thiên nhiên', 'Tháng 3 đến tháng 8', ['Phong Nha', 'Động Thiên Đường', 'Sông Son', 'Biển Nhật Lệ']),
    ];
}

function angel_one_seed_destination(string $slug, string $title, string $excerpt, string $image, string $type, string $best_time, array $highlights): array
{
    return [
        'post_type' => 'angel_destination',
        'slug' => $slug,
        'title' => $title,
        'excerpt' => $excerpt,
        'content' => $excerpt,
        'image' => $image,
        'image_alt' => 'Du lịch ' . $title . ' cùng Angel One Travel',
        'tax' => [
            'angel_destination_type' => [sanitize_title($type)],
        ],
        'meta' => [
            'angel_destination_type' => $type,
            'angel_best_time' => $best_time,
            'angel_destination_highlights' => $highlights,
            'angel_travel_tips' => ['Nên đặt dịch vụ sớm vào mùa cao điểm', 'Kết hợp tour và xe riêng nếu đi theo nhóm gia đình'],
            'angel_seo_title' => 'Du lịch ' . $title . ' cùng Angel One Travel',
            'angel_seo_description' => $excerpt,
            'angel_focus_keyword' => 'du lịch ' . $title,
            'angel_cta_label' => 'Tư vấn lịch trình',
        ],
    ];
}

function angel_one_seed_services(): array
{
    return [
        angel_one_seed_service('thue-xe-du-lich', 'Thuê xe du lịch', 'Dịch vụ xe du lịch đời mới cho sân bay, city tour, tour dài ngày và đoàn doanh nghiệp.', 'car'),
        angel_one_seed_service('booking-khach-san-resort', 'Booking khách sạn & resort', 'Tư vấn khách sạn, resort phù hợp với ngân sách, vị trí và phong cách chuyến đi.', 'hotel'),
        angel_one_seed_service('ve-tham-quan-trai-nghiem', 'Vé tham quan & trải nghiệm', 'Hỗ trợ đặt vé điểm tham quan, show, khu vui chơi và trải nghiệm địa phương.', 'ticket'),
        angel_one_seed_service('gala-dinner-mice', 'Gala dinner & MICE', 'Thiết kế chương trình doanh nghiệp, hội họp, team building và gala dinner trọn gói.', 'users'),
    ];
}

function angel_one_seed_service(string $slug, string $title, string $excerpt, string $icon): array
{
    return [
        'post_type' => 'angel_service',
        'slug' => $slug,
        'title' => $title,
        'excerpt' => $excerpt,
        'content' => $excerpt,
        'meta' => [
            'angel_service_icon' => $icon,
            'angel_short_description' => $excerpt,
            'angel_benefits' => ['Tư vấn nhanh', 'Báo giá rõ ràng', 'Dịch vụ linh hoạt theo nhu cầu'],
            'angel_process_steps' => [
                ['title' => 'Tiếp nhận nhu cầu', 'description' => 'Ghi nhận thời gian, số lượng khách, ngân sách và tiêu chuẩn mong muốn.'],
                ['title' => 'Đề xuất phương án', 'description' => 'Gửi lựa chọn phù hợp kèm báo giá để khách hàng so sánh.'],
                ['title' => 'Xác nhận dịch vụ', 'description' => 'Hoàn tất đặt dịch vụ và hỗ trợ trong quá trình sử dụng.'],
            ],
            'angel_seo_title' => $title . ' | Angel One Travel',
            'angel_seo_description' => $excerpt,
            'angel_focus_keyword' => mb_strtolower($title),
            'angel_cta_label' => 'Nhận báo giá',
        ],
    ];
}

function angel_one_seed_posts(): array
{
    return [
        [
            'post_type' => 'post',
            'slug' => 'kinh-nghiem-du-lich-da-nang-hoi-an-2-ngay-1-dem',
            'title' => 'Kinh nghiệm du lịch Đà Nẵng Hội An 2 ngày 1 đêm',
            'excerpt' => 'Gợi ý lịch trình ngắn ngày cho khách muốn đi Đà Nẵng và Hội An nhưng vẫn tối ưu thời gian.',
            'content' => 'Lịch trình 2 ngày 1 đêm nên tập trung vào Sơn Trà, Ngũ Hành Sơn, phố cổ Hội An và một vài trải nghiệm ẩm thực đặc trưng. Nếu đi gia đình, nên chọn xe riêng để chủ động thời gian.',
            'image' => 'destinations/hoian_bg.webp',
            'tax' => [
                'category' => ['cam-nang-du-lich'],
            ],
            'meta' => [
                'angel_reading_time' => 5,
                'angel_related_tours' => 'da-nang-hoi-an',
                'angel_faq' => [
                    ['question' => 'Đi Đà Nẵng Hội An 2 ngày 1 đêm có gấp không?', 'answer' => 'Không quá gấp nếu lịch trình được tối ưu và ưu tiên các điểm chính.'],
                ],
                'angel_seo_title' => 'Kinh nghiệm du lịch Đà Nẵng Hội An 2N1Đ',
                'angel_seo_description' => 'Gợi ý lịch trình, chi phí và cách đi Đà Nẵng Hội An 2 ngày 1 đêm cho gia đình, nhóm bạn và khách công ty.',
                'angel_focus_keyword' => 'du lịch Đà Nẵng Hội An 2 ngày 1 đêm',
            ],
        ],
    ];
}
