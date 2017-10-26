<?php

define('THEME__NAME', 'ptmobile');
define('THEME__PATH', drupal_get_path('theme', THEME__NAME));
/**
 * Implements template_preprocess_html().
 * get blocks extras_header content and pass it to html.tpl.php
 */
function ptmobile_preprocess_html(&$variables) {
	global $account;
	if(drupal_is_front_page()) {
		$variables['head_title']= token_replace(variable_get('casino_mobile_m_title'));
		if(variable_get('casino_mobile_m_others')) {
		 	$metaTagsArray = explode("\n",variable_get('casino_mobile_m_others'));
		 	foreach ($metaTagsArray as $metaTags ) {
		 		$metaTag = explode('|', $metaTags);

		 		$pageMetaTag = array(
				    '#type' => 'html_tag',
				    '#tag' => 'meta',
				    '#attributes' => array(
				      'name' => $metaTag[0],
				      'content' => token_replace($metaTag[1]),
				    ));
	  			drupal_add_html_head($pageMetaTag, $metaTag[0]);
		 	}
		}

	}

    $variables['extra_header'] = block_get_blocks_by_region('extra_header');

	$node = menu_get_object();
	if (isset($node) && $node->nid) {
		$variables['theme_hook_suggestions'][] = 'html__' . $node->type;
	}
	// Check if user is logged in
	if($account->is_logged_in){
		  $variables['classes_array'][] = 'casino-logged-in';
	}

	$elements = drupal_add_html_head();

  	if (!empty($elements['metatags_quick_meta_page_title']['#attributes']['content'])) {
    	$variables['head_title'] = $elements['metatags_quick_meta_page_title']['#attributes']['content'];
  	}
}
/**
 * Implements template_preprocess_page().
 */
function ptmobile_preprocess_page(&$variables) {
	// Theme settings, @see theme-settings.php
	global $header_defaults, $language;
	$header = i18n_variable_get('matterhorn_header_variables', $language->prefix);
	$txtLogo = isVariableBlank($header['mheader_logo_text'], $header_defaults['mheader_logo_text']);
	$variables['txtLogo'] =  isVariableBlank(variable_get('casino_mobile_m_logo_text'), $txtLogo);

	$variables['mobile_nav'] = module_invoke('menu', 'block_view', 'menu-mobile-menu');

	if(in_array(variable_get('show_as_default_mild'), $variables['mobile_nav']['content'])) {
		$variables['mobile_nav']['content'][variable_get('show_as_default_mild')]['#attributes']['class'][] = 'open-default';
	}
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

	$node = menu_get_object();
	if ($node && $node->nid) {
		$variables['theme_hook_suggestions'][] = 'page__' . $node->type;
	}
	// Add New Template
	if (isset($variables['node']))
	{
		$variables['theme_hook_suggestions']['system_main'] = 'page__'. str_replace('_', '_', $variables['node']->type);
	}

	//node content for body field blank template
	if (($node && $node->nid) && $node->type == 'blank_template') {
		 //node content for body field blank template
		if (($node && $node->nid) && $node->type == 'blank_template') {
			$variables['node_content'] = token_replace($node->body['und'][0]['value']);
		}
	}
}

/**
 * Implements template_preprocess_node().
 */
function ptmobile_preprocess_node(&$variables) {
	if (isset($variables['node']->field_node_custom_classes[LANGUAGE_NONE])) {
		$variables['classes_array'] = array_merge($variables['classes_array'], explode(' ', $variables['node']->field_node_custom_classes[LANGUAGE_NONE][0]['safe_value']));
	}

	//hide title in blank template content type
	$node = menu_get_object();
	if ($node->type == 'blank_template') {
		$variables['title'] = FALSE;
	}
}

/**
 * Implements hook_contextual_links_view_alter().
 */
function ptmobile_contextual_links_view_alter(&$element, $items) {
    // remove edit and delete links if it page is a blank template
    $node = menu_get_object();
	if (isset($node) && $node->nid) {
	    if ($node->type == 'blank_template') {
	    	unset($element['#links']['node-delete']);
	        unset($element['#links']['node-edit']);
	    }
	}
}

/**
 * Implements theme_clientside_error().
 * Clientside validation
 */
function ptmobile_clientside_error(&$variables) {
    if (!is_array($variables)) {
      $args = func_get_args();
      $variables['message'] = isset($args[0]) ? $args[0] : '';
      $variables['placeholders'] = isset($args[1]) ? $args[1] : array();
      $variables['error_type'] = isset($args[2]) ? $args[2] : '';
      $variables['element_name'] = isset($args[3]) ? $args[3] : '';
    }

    if (!array_key_exists('message', $variables)) {
      $variables['message'] = '';
    }
    if (!array_key_exists('placeholders', $variables)) {
      $variables['placeholders'] = array();
    }
    if (!array_key_exists('error_type', $variables)) {
      $variables['error_type'] = '';
    }
    if (!array_key_exists('element_name', $variables)) {
      $variables['element_name'] = '';
    }

    $found_required = stripos($variables['message'], 'field is required.');
    if($found_required !== false) {

		switch ($variables['element_name']) {
			case 'game_search':
				//specific message for game search text
				$variables['message'] = 'Game search text is required';
				break;
			case 'username':
				//change message to !title is required for username
				$variables['message'] = 'Username is required.';
				break;
			case 'password':
				//change message to !title is required for password
				$variables['message'] = 'Password is required.';
				break;
			case 'captcha_response':
				$variables['message'] = 'Captcha field is required.';
				break;
			default:
				//change default message to !title is required
				$variables['message'] = '!title field is required.';
				break;
		}
	}

	$found_wrong = stripos($variables['message'], 'Wrong answer for');
    if($found_wrong !== false) {

		switch ($variables['element_name']) {
			case 'captcha_response':
				//specific message for game search text
				$variables['message'] = 'Please make sure you enter the correct Security code as shown.';
				break;
			default:
				//change default message to !title is required
				$variables['message'] = 'Wrong answer for !title.';
				break;
		}
	}

    return t($variables['message'], $variables['placeholders']);
}

/*
 * Implements hook_html_head_alter
 */
function ptmobile_html_head_alter(&$head_elements) {
  // Force the latest IE rendering engine and Google Chrome Frame.

	// $head_elements['#attributes']['href'] = preg_replace('/^http:/', 'https:', $head_elements['#attributes']['href']);
	// $favicon = $head_elements['drupal_add_html_head_link:shortcut icon:http://m.dafa888.com/sites/dafa888.com/themes/ptmobile/favicon.ico']['#attributes']['href'];
	// $head_elements['drupal_add_html_head_link:shortcut icon:'.$GLOBALS['base_url'].'/sites/dafa888.com/themes/ptmobile/favicon.ico']['#attributes']['href'] = preg_replace('/^http:/', 'https:', $favicon);
	// dpm($head_elements);
	foreach ($head_elements as $key => $headElement) {
		if(isset($headElement['#attributes']['rel']) && $headElement['#attributes']['rel'] == 'shortcut icon') {
			if(isset($head_elements[$key]['#attributes']['href'])) {
				$head_elements[$key]['#attributes']['href'] = preg_replace('/^http:/', 'https:', $headElement['#attributes']['href']);
			}
		}
	}

	if(drupal_is_front_page()) {
		$head_elements['metatag_description_0']['#value'] = token_replace(variable_get('casino_mobile_m_desc'));
		$head_elements['metatag_abstract_0']['#value'] = token_replace(variable_get('casino_mobile_m_abs'));
		$head_elements['metatag_keywords_0']['#value'] = token_replace(variable_get('casino_mobile_m_keywords'));
	}

	  // $head_elements['chrome_frame'] = array(
	  //   '#type' => 'html_tag',
	  //   '#tag' => 'meta',
	  //   '#attributes' => array('http-equiv' => 'X-UA-Compatible', 'content' => 'IE=edge,chrome=1'),
	  // );
}