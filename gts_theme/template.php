<?php

/**
 * Implements template_preprocess_html().
 * get blocks extras_header content and pass it to html.tpl.php
 */
function gts_preprocess_html(&$variables)
{
    $variables['extra_header'] = block_get_blocks_by_region('extra_header');

    // Add BODY class dynamically based on page path/depth?
	$path = drupal_get_path_alias($_GET['q']);
	$aliases = explode('/', $path);

	foreach($aliases as $alias) {
		$variables['classes_array'][] = drupal_clean_css_identifier('page-' . $alias);
	}
}

/**
 * Implements template_preprocess_page().
 */
function gts_preprocess_page(&$variables)
{
    // Theme settings, @see theme-settings.php


    if (isset($variables['tabs']['#primary']) && empty($variables['tabs']['#primary'])) {
        $variables['tabs'] = array();
    }
    if (!theme_get_setting('matterhorn_tabs')) {
        $variables['tabs'] = array();
    }
    if (!theme_get_setting('matterhorn_breadcrumb')) {
        $variables['breadcrumb'] = array();
    }
    if ($variables['is_front']) {
        $variables['page']['content']['system_main'] = array();
    }
    // Add locale stylesheets
    if (module_exists('locale')) {
        global $language;
        $variables['css'] = drupal_add_css(path_to_theme() . '/css/locale/' . $language->language . '.css', array('weight' => 999));
    }

    $node = menu_get_object();
	if ($node && $node->nid) {
		$variables['theme_hook_suggestions'][] = 'page__' . $node->type;
	}
}

/**
 * Implements template_preprocess_node().
 */
function gts_preprocess_node(&$variables)
{

    if (isset($variables['node']->field_node_custom_classes[LANGUAGE_NONE])) {
        $variables['classes_array'] = array_merge($variables['classes_array'], explode(' ', $variables['node']->field_node_custom_classes[LANGUAGE_NONE][0]['safe_value']));
    }

}

/**
* Implements template_form_element_label()
*/
function gts_form_element_label($variables)
{
    $element = $variables['element'];
    // This is also used in the installer, pre-database setup.
    $t = get_t();

    // If title and required marker are both empty, output no label.
    if ((!isset($element['#title']) || $element['#title'] === '') && empty($element['#required'])) {
        return ' ';
    }

    // If the element is required, a required marker is appended to the label.
    if (!empty($element['#required'])) {
        $required = theme('form_required_marker', array('element' => $element));
    } else {
        $required = "&nbsp;";
    }

    $title = filter_xss_admin($element['#title']);

    $attributes = array();
    // Style the label as class option to display inline with the element.
    if ($element['#title_display'] == 'after') {
        $attributes['class'] = 'option';
    }
    // Show label only to screen readers to avoid disruption in visual flows.
    elseif ($element['#title_display'] == 'invisible') {
        $attributes['class'] = 'element-invisible';
    }

    if (!empty($element['#id'])) {
        $attributes['for'] = $element['#id'];
    }

    // The leading whitespace helps visually separate fields from inline labels.
    return ' <label' . drupal_attributes($attributes) . '>' . $t('!required', array('!required' => $required)) . ' ' . $t('!title', array('!title' => $title)) . "</label>\n";
}