<div id="body-section">

	<!-- Header -->
	<?php if ($page['header']): ?>
	<div class="header">
		<?php print render($page['header']); ?>
	</div>
	<?php endif; ?>
	
	<!-- Navigation -->
	<?php if ($page['product_navigation']): ?>
	<div class="product-navigation">
		<?php print render($page['product_navigation']); ?>
	</div>
	<?php endif; ?>
	
	<!-- Banner -->
	<?php if ($page['banner']): ?>
	<div class="banner">
		<?php print render($page['banner']); ?>
	</div>
	<?php endif; ?>
	
	<!-- Main -->
	<div class="main">
		<div class="main-inner container_18 clearfix">

			<!-- Messages -->
			<?php if ($messages): ?>
				<div class="notification grid_<?php print $grid_columns; ?>"><?php print $messages; ?></div>
			<?php endif; ?>

			<?php if ($page['content']): ?>
			<?php print render($page['content']); ?>
			<?php else: ?>
			<h2>Page not found</h2>
			<?php endif; ?>

		</div> <!-- .main-inner -->
	</div><!-- .main -->

	<!-- Footer -->
	<?php if ($page['footer']): ?>
	<div class="footer">
		<?php print render($page['footer']); ?>
	</div>
	<?php endif; ?>

	<!-- Extras -->
	<?php if ($page['extra_footer']): ?>
		<?php print render($page['extra_footer']); ?>
	<?php endif; ?>
	
	<!-- < ?php if ($is_admin): ?> -->
	<a href="#" class="grid-toggle">Toggle Grid</a>
	<a href="#" class="version-toggle">Toggle Version</a>
	<div class="version-number">1.0</div>
	<!-- < ?php endif; ?> -->
	
</div> <!-- /#body-section -->