$(document).ready(function() {
	$(".logo").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    var ul = document.querySelector('.team ul');
    if(ul){
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }

	$(".start__gonext").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section:nth-of-type(2)").offset().top
	    }, 500);
	    return false
	});

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


	if($('.scr1').length>0){
		// $('.scr1 .scr__wrappics').sticky({topSpacing:120});

        toggler =  $(".scr2").offset().top;
        toggler1 =  $(".scr1").offset().top;
		toggler2 =  $(".scr2 .scr__text").offset().top;

		$(window).scroll(function(event) {
            if($(window).scrollTop()>toggler1){
                $('.scr__wrappics').addClass('is-fixed');
            }
            else{
                $('.scr__wrappics').removeClass('is-fixed');
            }
			if($(window).scrollTop()>toggler - 400){
				$('.scr__wrappics').addClass('is-showed2');
			}
			else{
				$('.scr__wrappics').removeClass('is-showed2');
			}
            if($(window).scrollTop()>toggler2){
                $('.scr2 .scr__text').addClass('is-fixed')
            }
            else{
                $('.scr2 .scr__text').removeClass('is-fixed');
            }
            
		});
	}

    $(window).scroll(function(event) {
        if($(window).scrollTop()>300){$('.header').addClass('is-active');}
        else{$('.header').removeClass('is-active');}
    });



    // if client landing
	if($('.b-client').length>0){
        // getting first
        toggler1 = $(".your__pic").offset().top;

		// toggler2 =  $(".hexa").offset().top - $(window).height()/2 + 190;
		// toggler3 =  $(".hand").offset().top - $(window).height()/2 + 191;
		$(window).scroll(function(event) {
			if($(window).scrollTop()>toggler1){$('.solutions__item').addClass('is-active');}
		});


    }
});