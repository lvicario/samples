<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <script src="<?php print base_path() . path_to_theme(); ?>/js/modernizr.custom.min.js"></script>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $scripts; ?>
  <!--[if IE 6]>
  <script type="text/javascript" src="<?php print base_path() . path_to_theme(); ?>/js/dd_belatedPNG.js"></script>
  <![endif]-->
  <?php print $page_bottom; ?>  
</body>
</html>