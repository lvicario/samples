<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>">

<head>
	<?php print $head; ?>
	<title><?php print $head_title; ?></title>
	<?php print $styles; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
	<div id="body-section" class="<?php print $grid_container_class; ?>">

		<!-- Header -->
		<?php if ($page['header']): ?>
		<div id="page-header-wrapper" class="clearfix">
			<?php print render($page['header']); ?>
		</div>
		<?php endif; ?>
		
		<!-- Navigation -->
		<?php if ($page['navigation']): ?>
		<div id="page-navigation-wrapper" class="clearfix"> 
			<div id="main-navigation" class="clearfix">
				<?php print render($page['navigation']); ?>
			</div>
		</div>
		<?php endif; ?>

		<!-- Header -->
		<?php if ($page['header_bar']): ?>
		<div class="header-bar"> 
			<?php print render($page['header_bar']); ?>
		</div>
		<?php endif; ?>
		
		<!-- Main Page -->
		<div id="main-page-wrapper" class="clearfix">
			<div id="main-page">
				<div id="main-section" class="<?php print $grid_container_class; ?>">

					<!-- Messages -->
					<?php if ($messages): ?>
						<div class="grid_<?php print $grid_columns; ?>"><?php print $messages; ?></div>
					<?php endif; ?>

					<!-- Highlighted -->
					<?php if ($page['highlighted']): ?>
					<div id="page-highlighted-wrapper">
						<?php print render($page['highlighted']); ?>
					</div>
					<?php endif; ?>
					
					<!-- Page Content -->
					<div id="page-content-wrapper"> 
						<div id="page-content" class="clearfix">
							
							<!-- Sidebar First -->
							<?php if ($page['sidebar_first'] && $grid_left): ?>
							<div id="sidebar-first" class="<?php print $grid_left; ?>">
								<?php print render($page['sidebar_first']); ?>
							</div>
							<?php endif; ?>

							<!-- Main Content -->
							<?php if ($grid_main): ?>
							<div id="main" class="<?php print $grid_main; ?>">
								<?php if (!empty($breadcrumb)): ?><div id="breadcrumb"><?php print $breadcrumb; ?></div><?php endif; ?>
								<div id="content-section">
									<?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
									<div id="content-content" class="clearfix">
										<?php if ($page['content_top']): ?>
											<div class="content-top clearfix"><?php print render($page['content_top']); ?></div>
										<?php endif; ?>

										<?php print render($page['content']); ?>
										
										<?php if ($page['content_bottom']): ?>
											<div class="content-bottom clearfix"><?php print render($page['content_bottom']); ?></div>
										<?php endif; ?>
									</div>
								</div>
							</div>
							<?php endif; ?>
							
							<!-- Sidebar Second -->
							<?php if ($page['sidebar_second'] && $grid_right): ?>
							<div id="sidebar-second" class="<?php print $grid_right; ?>">
								<?php print render($page['sidebar_second']); ?>
							</div>
							<?php endif; ?>

						</div>
					</div>

				</div> <!-- /#main-section -->
			</div> <!-- /#main-page -->
		</div> <!-- /#main-page-wrapper -->
		
		<!-- Bottom -->
		<?php if ($page['bottom']): ?>
		<div id="page-bottom-wrapper" class="clearfix">
			<?php print render($page['bottom']); ?>
		</div>
		<?php endif; ?>

		<!-- Footer -->
		<?php if ($page['footer']): ?>
		<div id="page-footer-wrapper" class="clearfix">
			<?php print render($page['footer']); ?>
		</div>
		<?php endif; ?>
		
		<!-- Extras -->
		<?php if ($page['extras']): ?>
		<div id="page-extras-wrapper" class="clearfix">
			<?php print render($page['extras']); ?>
		</div>
		<?php endif; ?>
		
		<?php if (!empty($grid_guide)): ?>
		<a href="#" class="grid-toggle"></a>
		<a href="#" class="version-toggle"></a>
		<?php endif; ?>
		
	</div> <!-- /#body-section -->

	<?php print $scripts; ?>
	<!--[if IE 6]>
	<script type="text/javascript" src="<?php print base_path() . path_to_theme(); ?>/js/dd_belatedPNG.js"></script>
	<![endif]-->
</body>
</html>
