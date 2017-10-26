jQuery(document).ready(function() {

	// Add <span> to the last word of main nav
	$("nav li a").html(function(){
		var text= $(this).text().split(" ");
		var last = text.pop();
		return text.join(" ")+ (text.length > 0 ? " <span>"+ last + "</span>" : last);
	});


	// Panels
	$('.panel li > img').hide();
	$('.panel a').on('mouseenter', function() {
		$(this).closest('li').find('> img').fadeToggle(300);
	})
	.on('mouseout', function() {
		$(this).closest('li').find('> img').fadeToggle(300);
	});


	// Experts Hover
	// $('.expert-list li').on('mouseenter', function() {
	// 	var $this = $(this),
	// 		currentDetails = $this.find('.expert-list-detail').clone(),
	// 		currentImage = $this.find('> a').clone(),
	// 		newListItem = $('<li></li>', {
	// 							class: 'new-list',
	// 						}).prependTo($('.expert-list'));

	// 	currentDetails.prependTo(newListItem);
	// 	currentImage.prependTo(newListItem);
	// })
	// .on('mouseout', function() {
	// 	$('.expert-list-detail').fadeToggle(200);
	// })


	// $('.expert-list li').on('mouseenter', function() {
	// 	$(this).find('.expert-list-detail').fadeToggle(200);
	// })
	// .on('mouseout', function() {
	// 	$('.expert-list-detail').fadeToggle(200);
	// })
	
});