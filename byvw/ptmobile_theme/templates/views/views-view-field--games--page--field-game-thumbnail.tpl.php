<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php if(array_key_exists(0,$row->field_field_tablet_image_thumbnail)) {
	$img = token_replace($row->field_field_tablet_image_thumbnail[0]['rendered']['#markup']);
} else {
	$img = '';
}
?>
<?php print '<img src="'.$img.'" height="82" width="167" alt="'.$row->node_title.'">' ?>
<?php print '<span>'.$row->node_title.'</span>';?>