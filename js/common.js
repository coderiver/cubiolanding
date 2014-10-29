$(document).ready(function() {
	

	$(".start__gonext").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section:nth-child(2)").offset().top
	    }, 800);
	    return false
	});


	$('.scr1 .scr__wrappics').sticky({topSpacing:50});

	toggler =  $(".scr2").offset().top;

	$(window).scroll(function(event) {
		if($(window).scrollTop()>toggler - 400){
			$('.scr__wrappics').addClass('is-showed2');
		}
		else{
			$('.scr__wrappics').removeClass('is-showed2');
		}
	});


});