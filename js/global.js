/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.archipelago_subtheme = {
    attach: function (context, settings) {
        $(window).on('resize', function() {
          // de-collapses if collapsed and media query restores large viewport.
          var MOBILE_WIDTH = 992;
            if ($(window).width() >= MOBILE_WIDTH) {
              $('.navbar-collapse.collapse.show').removeClass('show');
            }
        });
    }
  }

})(jQuery, Drupal);
