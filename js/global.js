/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.esie_subtheme = {
    attach: function (context, settings) {
        $(window).on('resize', function() {
          // de-collapses if collapsed and media query restores large viewport.
          var MOBILE_WIDTH = 992;
            if ($(window).width() >= MOBILE_WIDTH) {
              $('.navbar-collapse.collapse.show').removeClass('show');
            }
        });
        
      // Triggers admin toolbar offset on page load    
      if (context === document) {
        $(context).on("drupalViewportOffsetChange.toolbar", function (event, offsets) {
            let $body = $("body");
            if ($body.length > 0 && offsets.top > 0 && $body.css('padding-top') !== offsets.top) {
              $body.css("padding-top", offsets.top);
            }
        });
      }
    }
  }

})(jQuery, Drupal);
