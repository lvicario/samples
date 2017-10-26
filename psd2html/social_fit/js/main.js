jQuery(document).ready(function() {

	// Equal Height
	$(".content-profile .col-one, .content-profile .col-two").equalHeights();


	// Notification Bar Dropdown
	$(".icon-flag").click(function(){
		var notificationBar = $(".notification-bar");
		notificationBar.toggleClass("slidedown");
		notificationBar.siblings(".slidedown").removeClass("slidedown");
	});

	// Search Bar Dropdown
	$(".btn-search").click(function(){
		var searcBar = $(".search-bar");
		searcBar.toggleClass("slidedown");
		searcBar.siblings(".slidedown").removeClass("slidedown");
	});


	// Fancybox
	$(".fancybox").fancybox();


	// Pickadate
	$( '.modal-icon-calendar' ).pickadate();
	$( '.modal-icon-clock' ).pickatime();


	$('.event-item').find('.icon-clock').on({
		mouseenter: function() {
	        $(this).parent('.event-item').find('.event-date-time').addClass('slide');
	    },
	    mouseleave: function() {
	        $(this).parent('.event-item').find('.event-date-time').removeClass('slide');
	    }
	});


	// jQuery Placeholder
	$('input, textarea').placeholder();


	// Clear Default Input Text
	// clearText();
	
});


// Back to Top Function
$(function(){

   $('body').css('position','relative');
   $('body').append('<div id="toTop" class="btn-to-top hide-text" style="display: none; position: fixed; right: 20px; bottom: 20px; ">To Top</div>');
     
    $(window).scroll(function(){
        if ($(this).scrollTop()!=0) {
            $('#toTop').fadeIn();
        } else{
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 600);
    });
});


// Equal Height Function
$.fn.equalHeights = function(minHeight, maxHeight) {
	tallest = (minHeight) ? minHeight : 0;
	this.each(function() {
		if($(this).height() > tallest) {
			tallest = $(this).height();
		}
	});
	if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
	return this.each(function() {
		$(this).height(tallest).css("overflow","auto");
	});
}


// function clearText() {
// 	$('input[type=text]').not('input[readonly=readonly]').each(function() {
// 		var default_value = this.value;
// 		$(this).focus(function() {
// 			if(this.value == default_value) {
// 				this.value = '';
// 			}
// 		});
// 		$(this).blur(function() {
// 			if(this.value == '') {
// 				this.value = default_value;
// 			}
// 		});
// 	});
	
// 	$('textarea').not('textarea[readonly=readonly]').each(function() {
// 		var default_value = this.value;
// 		$(this).focus(function() {
// 			if(this.value == default_value) {
// 				this.value = '';
// 			}
// 		});
// 		$(this).blur(function() {
// 			if(this.value == '') {
// 				this.value = default_value;
// 			}
// 		});
// 	});
	
// }