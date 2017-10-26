$(function() {
    var $mainNav = $('.nav'),
    navWidth = $mainNav.width();
    
    $mainNav.children('.item').hover(function(ev) {
        var $this = $(this),
        $dd = $this.find('.dropdown');
        
        // get the left position of this tab
        var leftPos = $this.find('.item-anchor').position().left;
        
        // get the width of the dropdown
        var ddWidth = $dd.width(),
        leftMax = navWidth - ddWidth;
        
        // position the dropdown
        $dd.css('left', Math.min(leftPos, leftMax) );
        
        // show the dropdown
        $this.addClass('item-active');
    }, function(ev) {

        // hide the dropdown
        $(this).removeClass('item-active');
    });
});