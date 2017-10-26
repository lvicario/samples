/**
 * Menubile is a custom jquery plugin for dafa product mobile site.
 * @author Leo <leandro.vicario@bayviewtechnology.com>
 */

(function($) {
	'use strict';

	$.fn.menubile = function(options) {

		// Detect event using user agent for touchend & click for Ipad
			var ua = navigator.userAgent,
				eventOnClick = (ua.match(/iPad/i)) ? "touchend" : "click";

		// Options
		var opts = $.extend({
			slidePosition: ''
		}, options);

		var $this = $(this),
			menubileNav = $('.nav').clone().addClass('menubile-nav').prependTo('body'),
			menubileContent = $('.wrapper').addClass('menubile-content'),
			pageBody = $('body').addClass('menubile-bound');

		$this.on('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			menubileNav.toggleClass('menubile-nav-open');
			menubileContent.toggleClass('menubile-content-close');
		});

		// Close menubile/full menu upon click outside full menu
		$('body').on('click', '.menubile-content-close', function() {
			$('.menubile-nav-open').toggleClass('menubile-nav-open');
			$('.menubile-content-close').toggleClass('menubile-content-close');
		});

		return $this;
	}

}(jQuery));