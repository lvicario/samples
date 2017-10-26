<?php

/**
 * @file
 * Theme setting callbacks for the garland theme.
 */

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 *   The form.
 * @param $form_state
 *   The form state.
 */
function casino_form_system_theme_settings_alter(&$form, &$form_state) {
	$form['settings'] = array(
		'#type' => 'fieldset',
		'#title' => t('Matterhorn settings'),
	);
	$form['settings']['matterhorn_tabs'] = array(
		'#type' => 'checkbox',
		'#title' => t('Enable tabs'),
		'#default_value' => theme_get_setting('sports_tabs'),
		'#description' => t('Specify whether the tabs will be enabled of not.'),     
	);
	$form['settings']['matterhorn_breadcrumb'] = array(
		'#type' => 'checkbox',
		'#title' => t('Enable breadcrumbs'),
		'#default_value' => theme_get_setting('matterhorn_breadcrumb'),
		'#description' => t('Specify whether the breadcrumb will be enabled of not.'),     
	);
}
