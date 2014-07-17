<?php

/**
 * @file
 * Display Suite 1 column template.
 */
?>
<<?php print $ds_content_wrapper; print $layout_attributes; ?> class="ds-1col <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php print render($content['field_tile_image']); ?>

  <div id="overlay">

    <div class="overlay-left">
      <?php print render($content['field_client']); ?>
      <?php print render($content['body'])?>
      <?php print render($content['field_company']); ?>
      <?php print render($content['field_website']); ?>
    </div>

    <div class="overlay-right">
      <?php print render($content['field_screenshots']); ?>
    </div>

  </div>

</<?php print $ds_content_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
