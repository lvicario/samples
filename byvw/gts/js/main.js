jQuery(document).ready(function($) {

	// prepend span tag to Promo Item for gradient text
	// $(".promo-item-heading").prepend("<span></span>");


	// Add ddbelatedPNG fix	
	if (typeof DD_belatedPNG !== 'undefined') {
		DD_belatedPNG.fix('.logo a, .sidebar .block-total-jackpot, .block-support .chat, .modal-welcome .join-img, .partner-primary li a, .partner-secondary li a, .partner-tertiary li a, .social a, .collapsible span, .icon-arrow-right, .icon-arrow-back, .icon-flag-uk, .icon-email, .icon-bubble, .icon-phone, .icon-mobile, .icon-email-boxed, .icon-phone-boxed, .slider-nav a, .fancybox-overlay, .fancybox-close');
	}


	// Fancybox modal window
	$('.fancybox').fancybox();


	$(".view").fancybox({type: 'inline'})

	// Language switcher.
	$('.lang li.active').click(function(e) {
		var $lang_list = $(this).removeClass('first last')
								.siblings('li')
								.removeClass('first last');
		$(this).parent('ul').toggleClass('selecting');
		$lang_list.not('.active').each(function(i) {
			var $l = $(this)
			,	h = $l.height()
			,	n = i + 1;
			
			$l.css('top', h * n);
			
			if ($lang_list.length == 1) {
				$l.addClass('last');
				return false;
			}
			if (i == 0) {
				$l.addClass('first');
			}
			else if ($lang_list.length == n) {
				$l.addClass('last');
			}
		}).toggle();
		
		e.preventDefault();
	});


	// Clear Default Input/Textarea text
	function clearText() {
		$('input[type=text]').not('input[readonly=readonly]').each(function() {
			var default_value = this.value;
			$(this).focus(function() {
				if(this.value == default_value) {
					this.value = '';
				}
			});
			$(this).blur(function() {
				if(this.value == '') {
					this.value = default_value;
				}
			});
		});
		
		$('textarea').not('textarea[readonly=readonly]').each(function() {
			var default_value = this.value;
			$(this).focus(function() {
				if(this.value == default_value) {
					this.value = '';
				}
			});
			$(this).blur(function() {
				if(this.value == '') {
					this.value = default_value;
				}
			});
		});
		
	}


	

	// Add extra span to total jackpot amount for styling
	/*$(".num").html(wrap($(".num")));

	function wrap(target) {
	    var newtarget = $("<div></div>");
	    nodes = target.contents().clone(); // the clone is critical!
	    nodes.each(function() {
	        if (this.nodeType == 3) { // text
	            var newhtml = "";
	            var text = this.wholeText; // maybe "textContent" is better?
	            for (var i=0; i < text.length; i++) {
	                if (text[i] == ' ') newhtml += " ";
	                else newhtml += "<span>" + text[i] + "</span>";
	            }
	            newtarget.append($(newhtml));
	        }
	        else { // recursion FTW!
	            $(this).html(wrap($(this)));
	            newtarget.append($(this));
	        }
	    });
	    return newtarget.html();
	}*/

});