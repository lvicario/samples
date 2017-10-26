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
$promo_id = '';
if(isset($row->field_field_promotion_category[0]['raw']['taxonomy_term']->field_element_id['und'][0]['value'])) {
    $promo_id = $row->field_field_promotion_category[0]['raw']['taxonomy_term']->field_element_id['und'][0]['value'];
}
?>
<span id='<?php echo $promo_id; ?>' class="promo-category-target"></span>
<h2 class="page-title-alt no-padding mb-15" id="<?php echo $promo_id; ?>" name="<?php echo $promo_id; ?>"><?php print $output; ?></h2>