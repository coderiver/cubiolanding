$(document).ready(function() {
	

	$(".start__gonext").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section:nth-child(2)").offset().top
	    }, 800);
	    return false
	});


	if($('.scr1').length>0){
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
	}

	if($('.hand').length>0){
		toggler1 =  $(".plane__icon").offset().top - $(window).height()/2 + 100;
		toggler2 =  $(".hexa").offset().top - $(window).height()/2 + 190;
		toggler3 =  $(".hand").offset().top - $(window).height()/2 + 191;
		$(window).scroll(function(event) {
			if($(window).scrollTop()>toggler1){$('.plane').addClass('is-active');}
			if($(window).scrollTop()>toggler2){$('.hexa').addClass('is-active');}
			if($(window).scrollTop()>toggler3){
				$('.hand').addClass('is-active');
				$('body').addClass('is-cubefinal');
			}
			else{
				$('body').removeClass('is-cubefinal')
			}
		});
	}



	//popups
	$('.js-popup').click(function(event) {
		$('.popup').removeClass('is-shown');
		pop = $(this).data('popup');
		$('#'+pop).addClass('is-shown')
		$('.overlay').fadeIn();
		return false;
	});

	$('.popup__close,.overlay').click(function(event) {
		$('.popup').removeClass('is-shown')
		$('.overlay').fadeOut();
	});


});