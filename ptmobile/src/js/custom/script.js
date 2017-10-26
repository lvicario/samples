jQuery(document).ready(function($) {

	// Slider
	$('.main-slider ul').bxSlider({
		speed: 1000,
		pager: false
	});


	// Fancybox
	$('.fancybox').fancybox({
		margin: 0,
		padding : 0,
		minHeight : 'none',
		wrapCSS   : '',
		closeBtn   : false,
	});


	// Affix
	// function affixFunction() {
	// 	var headerHeight = $('.header').outerHeight(),
	// 		sliderHeight = $('.main-slider .bx-viewport').outerHeight();
	// 	if ($( 'body' ).hasClass( 'lobby' )) {
	// 		$('.category-tab').affix({
	// 			offset: {
	// 				top: headerHeight + sliderHeight
	// 			}
	// 		});
	// 	} else {
	// 		$('.header').affix({
	// 			offset: {
	// 				top: 50
	// 			}
	// 		});
	// 	}
	// }

	// affixFunction();

	// $( window ).resize(function() {
	// 	affixFunction();
	// });


	// Category Tab / Draggable
	var catListWidth = [],
		totalCatListWidth = 0,
		categoryListElement = $('.category-tab ul'),
		containerElement = $('.container');

	$('.category-tab li').each(function(){
	    catListWidth.push($(this).outerWidth());
	});

	$.each(catListWidth,function() {
	    totalCatListWidth += this;
	});

	categoryListElement.css('width', totalCatListWidth + 'px');
	$('.category-tab').dragScroll({});

	if (containerElement.outerWidth() > categoryListElement.outerWidth()) {
		categoryListElement.addClass('sample_class');
	}
	

	// Navobile
	$('.nav').navobile({
		content: '.wrapper',
		cta: '#navobile-link',
		changeDOM: true
	});


	// Accordion Menu
	$('.expanded ul').hide();

	var accordionLink = $('.expanded > a'),
		accordionSubMenu = $('.expanded > ul');

	accordionLink.on('click', function() {
		var $this = $(this),
			siblingSubMenu = $this.parent('li').siblings('li.expanded').find('ul');	

			// Slider
	$('.main-slider ul').bxSlider({
		speed: 1000
	});
	
			// browserWidth = $( window ).width();

		$this.toggleClass('active-menu');

		// if (browserWidth <= 767 ) {
			$this.next('ul').slideToggle(200);
			siblingSubMenu.slideUp(200).siblings('a').removeClass('active-menu');
		// }
	});


	// Style Select
	// var styleSelect = $('select').sSelect({
	// 	ddMaxHeight: '250px'
	// });


	// EZmark - radio and checkbox
    // var ezMarkRadio = $('input[type="radio"]').ezMark();
    $('.balance-option input[type="checkbox"]').ezMark({
    	checkboxCls:'ez-checkbox-iphone',
    	checkedCls: 'ez-checked-iphone'
    });
    $('.login-option input[type="checkbox"]').ezMark();

});