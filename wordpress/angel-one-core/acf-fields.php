<?php

if (! defined('ABSPATH')) {
    exit;
}

add_action('acf/init', 'angel_one_register_acf_fields');

function angel_one_register_acf_fields(): void
{
    if (! function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key' => 'group_angel_tour_details',
        'title' => 'Angel Tour Details',
        'fields' => [
            angel_one_text_field('field_angel_tour_code', 'Tour Code', 'tour_code'),
            angel_one_text_field('field_angel_duration', 'Duration', 'duration', true),
            angel_one_text_field('field_angel_start_location', 'Start Location', 'start_location', true),
            angel_one_text_field('field_angel_destination_location', 'Destination Location', 'destination_location', true),
            angel_one_text_field('field_angel_destination_slug', 'Destination Slug', 'destination_slug', true),
            angel_one_number_field('field_angel_price_from', 'Price From', 'price_from', true),
            angel_one_text_field('field_angel_price_label', 'Price Label', 'price_label', true),
            angel_one_textarea_field('field_angel_price_note', 'Price Note', 'price_note'),
            [
                'key' => 'field_angel_is_featured',
                'label' => 'Featured Tour',
                'name' => 'is_featured',
                'type' => 'true_false',
                'ui' => 1,
            ],
            angel_one_repeater_field('field_angel_highlights', 'Highlights', 'highlights', [
                angel_one_text_field('field_angel_highlight_text', 'Highlight', 'text', true),
            ]),
            angel_one_repeater_field('field_angel_itinerary', 'Itinerary', 'itinerary', [
                angel_one_text_field('field_angel_day_label', 'Day Label', 'day_label', true),
                angel_one_text_field('field_angel_day_title', 'Title', 'title', true),
                angel_one_textarea_field('field_angel_day_description', 'Description', 'description', true),
            ]),
            angel_one_repeater_field('field_angel_inclusions', 'Inclusions', 'inclusions', [
                angel_one_text_field('field_angel_inclusion_text', 'Inclusion', 'text', true),
            ]),
            angel_one_repeater_field('field_angel_exclusions', 'Exclusions', 'exclusions', [
                angel_one_text_field('field_angel_exclusion_text', 'Exclusion', 'text'),
            ]),
            angel_one_repeater_field('field_angel_faq', 'FAQ', 'faq', [
                angel_one_text_field('field_angel_faq_question', 'Question', 'question'),
                angel_one_textarea_field('field_angel_faq_answer', 'Answer', 'answer'),
            ]),
        ],
        'location' => [[[
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'angel_tour',
        ]]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_angel_destination_details',
        'title' => 'Angel Destination Details',
        'fields' => [
            angel_one_text_field('field_angel_best_time', 'Best Time', 'best_time', true),
            angel_one_repeater_field('field_angel_destination_highlights', 'Highlights', 'highlights', [
                angel_one_text_field('field_angel_destination_highlight_text', 'Highlight', 'text', true),
            ]),
            angel_one_repeater_field('field_angel_travel_tips', 'Travel Tips', 'travel_tips', [
                angel_one_text_field('field_angel_travel_tip_text', 'Tip', 'text'),
            ]),
        ],
        'location' => [[[
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'angel_destination',
        ]]],
    ]);

    acf_add_local_field_group([
        'key' => 'group_angel_service_details',
        'title' => 'Angel Service Details',
        'fields' => [
            angel_one_text_field('field_angel_service_icon', 'Service Icon', 'service_icon', true),
            angel_one_textarea_field('field_angel_short_description', 'Short Description', 'short_description', true),
            angel_one_repeater_field('field_angel_benefits', 'Benefits', 'benefits', [
                angel_one_text_field('field_angel_benefit_text', 'Benefit', 'text', true),
            ]),
            angel_one_repeater_field('field_angel_process_steps', 'Process Steps', 'process_steps', [
                angel_one_text_field('field_angel_process_step_title', 'Title', 'title'),
                angel_one_textarea_field('field_angel_process_step_description', 'Description', 'description'),
            ]),
        ],
        'location' => [[[
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'angel_service',
        ]]],
    ]);
}

function angel_one_text_field(string $key, string $label, string $name, bool $required = false): array
{
    return [
        'key' => $key,
        'label' => $label,
        'name' => $name,
        'type' => 'text',
        'required' => $required ? 1 : 0,
    ];
}

function angel_one_number_field(string $key, string $label, string $name, bool $required = false): array
{
    return [
        'key' => $key,
        'label' => $label,
        'name' => $name,
        'type' => 'number',
        'required' => $required ? 1 : 0,
    ];
}

function angel_one_textarea_field(string $key, string $label, string $name, bool $required = false): array
{
    return [
        'key' => $key,
        'label' => $label,
        'name' => $name,
        'type' => 'textarea',
        'required' => $required ? 1 : 0,
        'rows' => 3,
    ];
}

function angel_one_repeater_field(string $key, string $label, string $name, array $subFields): array
{
    return [
        'key' => $key,
        'label' => $label,
        'name' => $name,
        'type' => 'repeater',
        'layout' => 'block',
        'button_label' => 'Add item',
        'sub_fields' => $subFields,
    ];
}
