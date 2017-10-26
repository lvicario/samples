<?php

print $output;
if ($row->field_field_free_to_play[0]['raw']['value'] == 1 && isset($row->field_field_show_game_info[0])) {
    if ($row->field_field_show_game_info[0]['raw']['value'] == 1) {
        print "<span class='separator'>| </span>";
    }
}
