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


<?php

switch ($view->name) {
    case 'Promotions':
        $path = drupal_lookup_path('alias', "node/" . $row->nid);

        if (isset($row->field_field_banner_size)) {
            if ($row->field_field_banner_size[0]['raw']['value'] == 'full') {
                print '<div class="promo-item-body">';
                // if checkbox is false or null
                if (((isset($row->field_field_promotion_main_title_hide[0]['raw']['value'])
                && $row->field_field_promotion_main_title_hide[0]['raw']['value'] == false)
                || !isset($row->field_field_promotion_main_title_hide[0]['raw']['value']))
                && isset($row->node_title)) {
                    print '<h2 class="promo-item-heading"><a href="' . $path . '">' . $row->node_title . '</a></h2>';
                }
                else { // if checkbox is true
                    print '<h2 class="promo-item-heading"></h2>';
                }
                if (isset($row->field_field_promotion_blurb[0])) {
                    print '<p>' . $row->field_field_promotion_blurb[0]['raw']['value'] . '</p>';
                }
                print '</div>';
                print '<a href="' . $path . '" class="btn btn-medium">' . $output . '</a>';
                //print $output;
            }
            else {
                print '<div class="promo-item-body">';
                // if checkbox is false or null
                if (((isset($row->field_field_promotion_main_title_hide[0]['raw']['value'])
                && $row->field_field_promotion_main_title_hide[0]['raw']['value'] == false)
                || !isset($row->field_field_promotion_main_title_hide[0]['raw']['value']))
                && isset($row->node_title)) {
                    print '<h2 class="promo-item-heading"><a href="' . $path . '">' . $row->node_title . '</a></h2>';
                }
                if (isset($row->field_field_promotion_blurb[0])) {
                    print '<p>' . $row->field_field_promotion_blurb[0]['raw']['value'] . '<a href="' . $path . '"> ' . $output . '...</a></p>';
                }
                print '</div>';
            }
        }
        break;
}
?>