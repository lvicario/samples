<?php print render($title_prefix); ?>
<?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
<?php print render($title_suffix); ?>
<?php print render($page['content']); ?>