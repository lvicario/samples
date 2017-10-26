$(function() {
    var $mainNav = $('.sub-nav'),
    navWidth = $mainNav.width();
    
    $mainNav.children('.sub-nav-item').hover(function(ev) {
        var $this = $(this),
        $dd = $this.find('.sub-nav-dd');
        
        // get the left position of this tab
        // var leftPos = $this.find('.sub-nav-tab').position().left;
        
        // get the width of the dropdown
        // var ddWidth = $dd.width(),
        // leftMax = navWidth - ddWidth;
        
        // position the dropdown
        // $dd.css('left', Math.min(leftPos, leftMax) );
        
        // show the dropdown
        $this.addClass('sub-nav-item-active');
    }, function(ev) {

        // hide the dropdown
        $(this).removeClass('sub-nav-item-active');
    });
});