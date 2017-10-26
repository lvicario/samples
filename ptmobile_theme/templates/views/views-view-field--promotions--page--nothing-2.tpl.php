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
if(array_key_exists(0,$row->field_field_promotion_link)) {
	$promo_link = token_replace($row->field_field_promotion_link[0]['rendered']['#markup']);
} else {
	$promo_link = drupal_lookup_path('alias', "node/" . $row->nid);
}

if(array_key_exists(0,$row->field_field_tablet_image_thumbnail)) {
	$tablet_thumb = token_replace($row->field_field_tablet_image_thumbnail[0]['rendered']['#markup']);
} else {
	$tablet_thumb = '';
}

if(array_key_exists(0,$row->field_field_mobile_image_thumbnail)) {
	$mobile_thumb = token_replace($row->field_field_mobile_image_thumbnail[0]['rendered']['#markup']);
} else {
	$mobile_thumb = '';
}


?>
<div class="media">
    <a href="<?php print $promo_link; ?>">
        <picture>
            <source srcset="<?php print $tablet_thumb; ?>" media="(min-width: 768px)">
            <source srcset="<?php print $mobile_thumb; ?>" media="(min-width: 0px)">
            <img src="<?php print $tablet_thumb; ?>" height="80" width="150" alt="<?php print $row->node_title; ?>" class="media-object">
        </picture>
    </a>
<?php print $output; ?>
</div>