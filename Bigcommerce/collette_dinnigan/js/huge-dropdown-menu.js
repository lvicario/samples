$(function() {
		var $mainNav = $('#main-nav'),
		navWidth = $mainNav.width();
		
		$mainNav.children('.main-nav-item').hover(function(ev) {
			var $this = $(this),
			$dd = $this.find('.main-nav-dd');
			
			// get the left position of this tab
			var leftPos = $this.find('.main-nav-tab').position().left;
			
			// get the width of the dropdown
			var ddWidth = $dd.width(),
			leftMax = navWidth - ddWidth;
			
			// position the dropdown
			$dd.css('left', Math.min(leftPos, leftMax) );
			
			// show the dropdown
			$this.addClass('main-nav-item-active');
		}, function(ev) {
	
			// hide the dropdown
			$(this).removeClass('main-nav-item-active');
		});
	});