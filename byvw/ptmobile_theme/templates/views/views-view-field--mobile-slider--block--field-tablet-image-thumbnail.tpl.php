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
<li>
<?php 
print '<a href="'.$row->field_field_slider_link_url[0]['rendered']['#markup'].'">';
?>
	<picture>
      <?php
      print '<source media="(min-width: 768px)" srcset="'.$row->field_field_tablet_image_thumbnail[0]['rendered']['#markup'].'" />';
      print '<source media="(min-width: 0px)" srcset="'.$row->field_field_mobile_image_thumbnail[0]['rendered']['#markup'].'" />';
      print '<img alt="'.$row->node_title.'" height="256" src="'.$row->field_field_tablet_image_thumbnail[0]['rendered']['#markup'].'" width="768" />';
      ?> 
	</picture>
</a>
</li>