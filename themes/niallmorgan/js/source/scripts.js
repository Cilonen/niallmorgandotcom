//Drupal.settings.getAllFeature;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.icebergTheme = {
  attach: function (context, settings) {

    // a simple window preloader.
    // wait until the entire site has been loaded.
    $(window).load(function() {
      // Load functions
    });

    $(document).scroll(function() {

    });

    // All other functions upon load.
    $(document).ready(function(){

      $('#logo').click(function() {
        $('body').toggleClass('menu-open');
        return false;
      });

    });

  } // close "attach".
} // close "behaviors".


})(jQuery, Drupal, this, this.document);