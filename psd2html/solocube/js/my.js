$(document).ready(function(){
	$('input[type=text]').each(function() {
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
	$('input[type=password]').each(function() {
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
	$("textarea:not([readonly='readonly'])").each(function() {
		if($(this).attr('id') != 'reply') {
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
		}
	});
	
	// navigation
	$('.MobileMenu').html($('.header-top ul.right').html());
	$(".header-top ul.right li:first-child").addClass('first');
	$(".header-top ul.right li:last-child").addClass('last');
	$('.fbPhotoList li:nth-child(5)').addClass('fifth');

	$('.naviToggle').click(function() {
		$('.MobileMenu').toggleClass('show');
		$(this).toggleClass('active');
		return false;
	});
});