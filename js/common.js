head.ready(function() {

	$(".start__gonext").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section:nth-child(2)").offset().top
	    }, 800);
	    return false
	});

});