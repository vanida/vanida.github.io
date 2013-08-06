$(document).ready(function() {
	$('#nav a').click(function(e){
		e.preventDefault();

		$("body").animate({
		
			scrollTop: $( $(this).attr("href") ).offset().top - 150
		
		}, 800)
	});

	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});



