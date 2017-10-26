(function ($) {

	// Declare public object (for this script). To be used for On Load behavior.
	var mobileHelpers = {};

	// Set cookie lifetime for all persistent cookies.
	mobileHelpers.cookieLifetime = (365 * 20);

	mobileHelpers.checkUserLogin = function(settings) {

		// Get newly logged-in user
		var mobile_session_cookie = getCookie('mobile_session');
		if(mobile_session_cookie !== undefined) {
			sessionStorage.setItem('mobile_session', mobile_session_cookie);
			createCookie('mobile_session','', -1);
		}

		// Check if the user is logged-in and check if the mobile_session is null.
		var mobile_session_storage = sessionStorage.getItem('mobile_session');
		if(settings.logged_in && mobile_session_storage === null) {
			window.location.href = '/matterhorn/account/logout';
		}

		// Check if mobile languages are in sync with drupal "language" cookie.
		if(getCookie('mobile_lang') !== undefined && getCookie('language') != getCookie('mobile_lang')) {
			createCookie('mobile_lang', getCookie('language'), this.cookieLifetime);
		}
	};

	Drupal.behaviors.casino = {
		attach: function (context, settings) {

			/**
			 * Helpers
			 */

			// Check user login for expired session.
			mobileHelpers.checkUserLogin(settings);


			// Check device model
			deviceIdentifier.init();


			// Global Variables for Mobiles
			var windowWidth = $(window).width(),
				windowHeight = $(window).height();


			// Check private browsing first.
			if(settings.mobile_variables.mobile_private_browsing.private_browsing_flag) {

				if(mobileHelpers.privateBrowsing()) {
					// Remove all content.
					$('body').html('').css({'background':'white'});
					setTimeout(function(){
						alert(settings.mobile_variables.mobile_private_browsing.private_browsing_message);
					}, 50);
				}
			}


			// Allow :active styles to work in CSS on a page in Mobile Safari
			document.addEventListener("touchstart", function(){}, true);


			// Detect event using user agent for touchend & click for Ipad
			var ua = navigator.userAgent,
				eventOnClick = (ua.match(/iPad/i)) ? "touchend" : "click";


			// Get the current path
			var currentPath = window.location.pathname;

			/**
			 * Slider
			 */
			var mainSlider = $('.main-slider ul');

			if(mainSlider.children().length < 2) {

				mainSlider.bxSlider({
					speed: 500,
					pager: false,
					touchEnabled: false,
					swipeThreshold: 50,
					oneToOneTouch: false,
					preventDefaultSwipeX: false,
					preventDefaultSwipeY: false,
				});

			} else {

				mainSlider.bxSlider({
					speed: 500,
					pager: false
				});

			}


			/**
			 * Fancybox
			 */
			$('.fancybox').fancybox({
				margin: 0,
				padding : 0,
				minHeight : 'none',
				wrapCSS   : '',
				closeBtn   : false,
				autoCenter: true,
			});


			/**
			 * Fix logo alignment when account balance has more character to display
			 */
			var accountWidth = $('.account').outerWidth(),
				logoContainer = $('.header .logo span');

			if (accountWidth > 90 && windowWidth <= 320) {
				logoContainer.css('margin-right', '85px');
			} else if (accountWidth > 105 && windowWidth >= 360) {
				logoContainer.css('margin-right', '50px');
			}


			/**
			 * Automatically add right position value to Settings menu for tablet.
			 */
			if (windowWidth >= 768) {
				var logoutMenuWidth = $('li.logout').outerWidth();
				$('li.setting').css('right', logoutMenuWidth);
			}


			/**
			 * Fix for Select element without arrow in Galaxy V, Native Browser only
			 */
			// if ($('html').is('.galaxy-v, .safari')) {
				$('select').wrap('<span class="select"></span>');
			// }


			/**
			 * Menubile
			 */
			$('.navobile-link').menubile();


			/**
			 * Page Content Equal Height to Nav
			 */
			// Fix for background not extending when page content height is less than Nav content height
			function pageContentHeight () {
				var navMenuElem = $('.nav'),
					wrapperElem = $('.wrapper'),
					navMenuHeight = navMenuElem.outerHeight();
					wrapperHeight = wrapperElem.outerHeight();

				if (wrapperHeight < navMenuHeight) {
					wrapperElem.css('min-height', navMenuHeight);
				}
			}

			pageContentHeight();


			/**
			 * Contact Us country lightbox
			 */
			$("#contactcountry").change(function(){

				if(number = $(this).find("option:selected").val()){
					country = $(this).find("option+:selected").text();
					$.fancybox("<div class='user-dial'>Users dialling from <br />"+country+"<br />must dial <a class='contact-number' href='tel:+"+number+"'>"+number+"</a></div><div align=\"center\"><a href='tel:+"+ number +"'><input type=\"button\" value=\"Call\" class=\"btn\"> </a></div>",
					{
			        'width'			: 266,
			        'height'		: 'auto',
			        'openEffect'	: 'none',
			        'closeEffect'	: 'none',
			        'scrolling'		: 'no',
			        'speedIn'		: 0,
			        'speedOut'		: 0,
			        'changeSpeed'	: 0,
			        'pixelRatio'	: 2,

						});
					}
				});

			// Placeholder for captcha field on 24/7 Support
			if ($('#edit-captcha-response')) {
				$('#edit-captcha-response').attr("placeholder", Drupal.t("Security Code"));
			}


			/**
			 * Contact Us form alteration
			 */
			$('.webform-contact-main')
				.insertAfter('.node')
				.find('h3').wrap('<div class="contact-container"></div>')
					.parent('div')
				.next('form')
					.find('> div').addClass('contact-container');


			/**
			 * Account Login Form
			 */
			var loginButton = $('#account-login-submit');

			if($('.login-error').length) {
				$('#remember-me').attr('checked', false);
			}

			loginButton.on('touchstart', function(e) {
				loginButton.click();
			});

			var opts = {
				lines: 13, // The number of lines to draw
				length: 20, // The length of each line
				width: 10, // The line thickness
				radius: 30, // The radius of the inner circle
				corners: 1, // Corner roundness (0..1)
				rotate: 0, // The rotation offset
				direction: 1, // 1: clockwise, -1: counterclockwise
				color: '#d7721f', // #rgb or #rrggbb or array of colors
				speed: 1, // Rounds per second
				trail: 60, // Afterglow percentage
				shadow: false, // Whether to render a shadow
				hwaccel: false, // Whether to use hardware acceleration
				className: 'spinner', // The CSS class to assign to the spinner
				zIndex: 2e9, // The z-index (defaults to 2000000000)
				top: '50%', // Top position relative to parent
				left: '50%' // Left position relative to parent
			};


			loginButton.on('click', function(e) {
				var loginForm = $('#account-login-form');

				$('#matterhorn-username, #matterhorn-password').next('span').remove();

				if($('#remember-me').prop('checked')) {
					createCookie('remember-me', 1, mobileHelpers.cookieLifetime);
				} else {
					createCookie('remember-me', 0, mobileHelpers.cookieLifetime);
				}
				if(loginForm.valid()) {
					document.activeElement.blur();
					loginForm.after('<div id="spinner-container"></div>')
					var target = document.getElementById('spinner-container');
					var spinner = new Spinner(opts).spin(target);
					$('.spinner').after('<span>'+ Drupal.t('loading...') +'</span>');

					loginForm.hide();
					e.preventDefault();

					setTimeout(function() {
						loginForm.submit();
					},1000);
				}
			});


			/**
			 * Full Menu - Accordion Script
			 */
			var accordionLink = $('.expanded > a'),
				accordionSubMenu = $('.expanded > ul');

			$('html').on(eventOnClick, function() {
			   accordionSubMenu.hide();
			   $('.nav .menu').prev('.active-menu').removeClass('active-menu');
			});

			$('.nav li').on(eventOnClick, function(e){
			     e.stopPropagation();
			});

			accordionLink.on('click', function(e) {

				e.preventDefault();

				var $this = $(this),
					subMenu = $this.next('ul');
					siblingSubMenu = $this.parent('li').siblings('li.expanded').find('ul');

				$this
					.toggleClass('active-menu')
					.removeClass('in-active-menu')
					.parent('li').siblings('li').find('.active-trail').removeClass('active-trail');

				if (!$this.hasClass('active-menu')) {
					$this.toggleClass('in-active-menu');
				}

				subMenu.slideToggle(200);
				siblingSubMenu.slideUp(200).siblings('a').removeClass('active-menu');

			});

			// If you're in promotion page, clicking promotion submenu will close the promotion submenu (Tablet only).
			if (windowWidth > 767 && $('li.promotion').hasClass('active-trail')) {
				$('.promotion ul a').on('click', function() {
					accordionSubMenu.slideUp(200);
				});

				$('.promotion > a').on('click', function() {
					$(this).addClass('active-menu').removeClass('in-active-menu');
				});
			}

			// Accordion Menu - Open default menu
			$('.navobile-link').on('click', function(e){
				setTimeout(function(){
					if (windowWidth < 767 && $('li.expanded').hasClass('open-default')) {

						var openDefaultItem = $('.open-default > a');

						openDefaultItem.attr('class', 'active-menu');
						openDefaultItem.next('ul').show();
						openDefaultItem.parent('li').siblings('li')
							.find('a').removeClass('active-menu')
							.next('ul').hide();

					}
				}, 50);
			});

			// Accordion Menu - Close Full Menu upon clicking promotion item menus (Mobile Only)
			$('.nav a').not('.expanded > a').on('click', function() {
				$('.menubile-nav-open').toggleClass('menubile-nav-open');
				$('.menubile-content-close').toggleClass('menubile-content-close');
			});


			/**
			 * Back Button
			 */
			$('.go-back').on('click', function() {
				window.history.back();
			});


			/**
			 * Category Tab / Draggable
			 */
			var catListWidth = [],
				totalCatListWidth = 0,
				categoryListElement = $('.games-category-menu ul'),
				containerElement = $('.container');

			$('.games-category-menu li').each(function(){
				catListWidth.push($(this).outerWidth());
			});

			$.each(catListWidth,function() {
				totalCatListWidth += this;
			});

			categoryListElement.css('width', totalCatListWidth + 2 + 'px');


			/**
			 * EZmark - radio and checkbox
			 */
			$('.balance-option input[type="checkbox"]').ezMark({
				checkboxCls:'ez-checkbox-iphone',
				checkedCls: 'ez-checked-iphone'
			});
			$('.login-option input[type="checkbox"]').ezMark();


			/**
			 * Sticky Header
			 */
			function stickyGameTab() {
				var headerHeight = $('.header').outerHeight(true),
					mainSliderHeight = $('.main-slider').outerHeight(true),
					headerMainSliderHeight = headerHeight + mainSliderHeight;

				if ($(this).scrollTop() > headerMainSliderHeight){
					$('.view-games .view-header').addClass("sticky");
				}
				else{
					$('.view-games .view-header').removeClass("sticky");
				}
			}

			function stickyHeader() {
				if ($(this).scrollTop() > 1){
					$('.header').addClass("sticky");
				}
				else{
					$('.header').removeClass("sticky");
				}
			}

			$(window).scroll(function() {
				var bodyElem = $( 'body' );

				if (bodyElem.hasClass('page-featured-games') || bodyElem.hasClass('page-games-list')) {
					stickyGameTab();
				} else {
					stickyHeader();
				}
			});


			/**
			 * Detect if the current path is settings page
			 */
			var checkSettingsPage = currentPath.match(/mobile-settings/);


			/**
			 * JS for settings page.
			 */
			if(checkSettingsPage !== null) {

				$('input[name=balance-visibility-settings]', context).on('click',function(e) {
					if($(this).prop('checked')) {
						createCookie('show-balance', '1', mobileHelpers.cookieLifetime);
					} else {
						createCookie('show-balance', '0', mobileHelpers.cookieLifetime);
					}
					window.location.reload();
				});
			}


			/**
			 * Get total width of previous slides in game category tab
			 */
			var previousSlideWidth = [],
				totalPreviousSlidesWidth = 0,
				activeSlide = $('.games-category-menu a.active').parent('li'),
				prevSlides = activeSlide.prevUntil($(this));

			prevSlides.each(function(){
				previousSlideWidth.push($(this).outerWidth());
			});

			$.each(previousSlideWidth,function() {
				totalPreviousSlidesWidth += this;
			});

			/**
			 * Games Category Horizontal Scrolling
			 */
			var navSlide = new Sly('.games-category-menu', {
				slidee:     $('.view-header .games-category-menu .menu'),  // Selector, DOM element, or jQuery object with DOM element representing SLIDEE.
				horizontal: true, // Switch to horizontal mode.

				// Dragging
				mouseDragging: true, // Enable navigation by dragging the SLIDEE with mouse cursor.
				touchDragging: true, // Enable navigation by dragging the SLIDEE with touch events.
				releaseSwing:  true, // Ease out on dragging swing release.

				startAt: totalPreviousSlidesWidth - 11
			});

			$(window).load(function() {
				navSlide.init();
				navSlide.activate(1); // Activates 2nd element
				navSlide.reload();    // Reload Sly
			});

			window.addEventListener("resize", function() {
				navSlide.reload();    // Reload Sly
				stickyGameTab();
				$.fancybox.update();
				pageContentHeight();
			}, false);

			$('ul.language-switcher-locale-url',context).on('click','a.language-link', function(e) {
				// Force change the cookie using JS
				console.log($(this).parent('li').attr('class').split(' ')[0]);
				createCookie('language', $(this).parent('li').attr('class').split(' ')[0], mobileHelpers.cookieLifetime);
				createCookie('mobile_lang', $(this).parent('li').attr('class').split(' ')[0], mobileHelpers.cookieLifetime);
			});

		} /* Drupal.behaviors.casino.attach */
	} /* Drupal.behaviors.casino */

	/**
	 * Private Browsing detection.
	 */
	mobileHelpers.privateBrowsing = function() {
		var testKey = 'privateBrowsingTest';
		var storage = window.sessionStorage;
		try {
			// Try and catch quota exceeded errors
			storage.setItem(testKey, '1');
			storage.removeItem(testKey);
		} catch (error) {
			if (error.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0){
				return true;
			}else{
				return false;
			}
		}
		return false;
	};

	/**
	 * Trim, remove spaces and prepare it to be DOM readable.
	 */
	mobileHelpers.cleanString = function(str) {
		str = $.trim(str);
		return str.replace(/ /g,'-').toLowerCase();
	};

	/**
     * Library for detecting device IDs for targeting specific models using the userAgent string.
     * @author A.N.F. Tomas <AldrinNikolai.Tomas@bayviewtechnology.com>
     */
    var deviceIdentifier = {

    	/**
    	 * This will log what the identifier found inside the userAgent string.
    	 */
    	testmode:false,

        /**
         * Run the library
         */
        init:function()
        {
            if(typeof navigator.userAgent !== "undefined") {
                this.identifyDevice();
            }
        },

        /**
         * Device dictionary for generalization and targetting.
         * @author A.N.F. Tomas <AldrinNikolai.Tomas@bayviewtechnology.com>
         */
        deviceDictionary: {
            'android': {
                'sm-g313hz':'galaxy-v',
                'samsung-sm-g900f':'samsung-s5',
                'gt-i9505':'samsung-s4'
            },
            'macos': {}
        },

        /**
         * Detect and add the modelname inside the HTML tag as class
         * @author A.N.F. Tomas <AldrinNikolai.Tomas@bayviewtechnology.com>
         */
        identifyDevice:function()
        {
            var str = navigator.userAgent;
            var re = /\((.*?)\)/; // Retrieve the platform and device info of the useragent string.
            var m;

            if ((m = re.exec(str)) !== null) {
                if (m.index === re.lastIndex) {
                    re.lastIndex++;
                }
            }

            var platform = m[1];
            switch(this.detectOS(platform))
            {
                case 'android':
                	if(typeof this.deviceDictionary.android !== 'undefined' && Object.keys(this.deviceDictionary.android).length > 0) {
                		this.deviceIDProcess(platform, this.deviceDictionary.android);
                	}
                    break;
                case 'macos':
                    if(typeof this.deviceDictionary.macos !== 'undefined' && Object.keys(this.deviceDictionary.macos).length > 0) {
                		this.deviceIDProcess(platform, this.deviceDictionary.macos);
                	}
                    break;
                case 'windows':
                    if(typeof this.deviceDictionary.windows !== 'undefined' && Object.keys(this.deviceDictionary.windows).length > 0) {
                		this.deviceIDProcess(platform, this.deviceDictionary.windows);
                	}
                    break;
                case 'blackberry':
                    if(typeof this.deviceDictionary.blackberry !== 'undefined' && Object.keys(this.deviceDictionary.blackberry).length > 0) {
                		this.deviceIDProcess(platform, this.deviceDictionary.blackberry);
                	}
                    break;
                default: break;
            }
        },

        /**
         * Detect the OS the device is using.
         * @author A.N.F. Tomas <AldrinNikolai.Tomas@bayviewtechnology.com>
         */
        detectOS:function(platformStr)
        {
            if(platformStr.match(/Mac|Macintosh/) !== null) {
                return 'macos';
            }
            if(platformStr.match(/Windows/) !== null) {
                return 'windows';
            }
            if(platformStr.match(/Android|Linux/) !== null) {
                return 'android';
            }
            if(platformStr.match(/Blackberry|BB10|Playbook/) !== null) {
                return 'blackberry';
            }

            return false;
        },

        /**
         * Process device ID/Model per each OS
         * @author A.N.F. Tomas <AldrinNikolai.Tomas@bayviewtechnology.com>
         */
        deviceIDProcess:function(platform, dictionary)
        {
        	platform = mobileHelpers.cleanString(platform);
            for(model in dictionary) {
            	var re = new RegExp("\\b"+model+"\\b");
            	if(platform.match(re) !== null) {
            		$('html').addClass(dictionary[model]);
            	}
            }

            if(this.testmode == true) {
            	console.log(platform);
            }
        },
    };

})(jQuery);