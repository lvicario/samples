<div class="wrapper">

	<?php if (!$is_front): ?>
		<?php if ($page['header']): ?>
			<header class="header">
				<div class="container">
					<?php print render($page['header']); ?>
				</div>
			</header>
		<?php endif; ?>


		<nav class="nav">
		<?php
			// $block = module_invoke('menu', 'block_view', 'menu-mobile-menu');
			// print render($block['content']);
			print render($mobile_nav['content']);
		?>
		</nav>
	<?php endif;?>

	<main class="main">

			<?php if ($messages): ?>
				<div class="grid_<?php print $grid_columns; ?>"><?php print $messages; ?></div>
			<?php endif; ?>

			<?php print render($title_prefix); ?>
            	<?php if ($title): ?>
            		<div class="container">
            			<h1 class="page-title mt-15"><?php print $title; ?></h1>
            		</div>
            	<?php endif; ?>
            <?php print render($title_suffix); ?>


			<?php print render($title_prefix); ?>
			<?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
			<?php print render($title_suffix); ?>
			<?php if ($is_front):   ?>
				<h1 class="logo login-logo"><span><?php print $txtLogo;?><img src="/sites/dafa888.com/themes/ptmobile/images/dafabet-logo.png" height="56" width="242" alt="<?php print $txtLogo;?>"></span></h1>
			<?php endif;?>

			<?php print render($page['content']); ?>
	</main>

</div><!-- .wrapper -->