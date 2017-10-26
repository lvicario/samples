<div id="body-section">

    <!-- Header -->
    <?php if ($page['header']): ?>
    <header class="header">
        <?php print render($page['header']); ?>
    </header>
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
    <main class="main">
        <div class="main-inner <?php print $grid_container_class; ?>">

            <?php if ($page['content_top']): ?>
                <?php print render($page['content_top']); ?>
            <?php endif; ?>

            <!-- Highlighted -->
            <?php if ($page['highlighted']): ?>
                <?php print render($page['highlighted']); ?>
            <?php endif; ?>

            <!-- Messages -->
            <?php if ($messages): ?>
                <div class="notification grid_<?php print $grid_columns; ?>"><?php print $messages; ?></div>
            <?php endif; ?>

            <!-- Sidebar First -->
            <?php if ($page['sidebar_first'] && $grid_left): ?>
            <div class="sidebar-firts <?php print $grid_left; ?>">
                <?php print render($page['sidebar_first']); ?>
            </div>
            <?php endif; ?>

            <!-- Main Content -->
            <?php if ($grid_main): ?>
            <div class="main-content <?php print $grid_main; ?>">
                <div class="main-content-inner">

                    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>

                    <?php if ($page['content']): ?>
                    <?php print render($page['content']); ?>
                    <?php else: ?>
                    <h2>Page not found</h2>
                    <?php endif; ?>

                    <?php if ($page['game_list']): ?>
                        <?php print render($page['game_list']); ?>
                    <?php endif; ?>

                    <?php if ($page['content_bottom']): ?>
                        <?php print render($page['content_bottom']); ?>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>

            <!-- Sidebar Second -->
            <?php if ($page['sidebar_second'] && $grid_right): ?>
            <div class="sidebar-second <?php print $grid_right; ?>">
                <?php print render($page['sidebar_second']); ?>
            </div>
            <?php endif; ?>

            <div class="clear"></div>

            <!-- Bottom -->
            <?php if ($page['bottom']): ?>
                <?php print render($page['bottom']); ?>
            <?php endif; ?>

        </div> <!-- .main-inner -->
    </main><!-- .main -->

    <!-- Footer -->
    <?php if ($page['footer']): ?>
    <footer class="footer">
        <?php print render($page['footer']); ?>
    </footer>
    <?php endif; ?>

    <!-- Extras -->
    <?php if ($page['extra_footer']): ?>
        <?php print render($page['extra_footer']); ?>
    <?php endif; ?>

    <?php if ($is_admin): ?>
    <a href="#" class="grid-toggle">Toggle Grid</a>
    <a href="#" class="version-toggle">Toggle Version</a>
    <div class="version-number">1.0</div>
    <?php endif; ?>

</div> <!-- /#body-section -->
