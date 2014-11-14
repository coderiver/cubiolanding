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
            // console.log(toggler+'===='+$(window).scrollTop());
            // if($(window).scrollTop()>toggler){
            //     $('.scr__wrappics').addClass('notfixed');
            // }
            // else{
            //     $('.scr__wrappics').removeClass('notfixed');
            // }
            
		});
	}

    $(window).scroll(function(event) {
        if($(window).scrollTop()>300){$('.header').addClass('is-active');}
        else{$('.header').removeClass('is-active');}
    });



    // if client landing
	if($('.hand').length>0){
        // getting first
        toggler1 = '10000';
        toggler2 = '10000';
        toggler3 = '10000';
        setTimeout(function(){
            toggler1 =  $(".first").offset().top;
            toggler2 =  $(".second").offset().top;
            toggler3 =  $(".third").offset().top;
        }, 300);

		// toggler2 =  $(".hexa").offset().top - $(window).height()/2 + 190;
		// toggler3 =  $(".hand").offset().top - $(window).height()/2 + 191;
		$(window).scroll(function(event) {
			if($(window).scrollTop()>toggler1){$('.plane').addClass('is-active');}
			if($(window).scrollTop()>toggler2){$('.hexa').addClass('is-active');}
			if($(window).scrollTop()>toggler3){
				$('.hand').addClass('is-active');
				// $('body').addClass('is-cubefinal');
			}
			else{
				// $('body').removeClass('is-cubefinal')
			}
		});


    }
});