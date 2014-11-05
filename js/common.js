$(document).ready(function() {
	

	$(".start__gonext").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section:nth-of-type(2)").offset().top
	    }, 800);
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
		$('.scr1 .scr__wrappics').sticky({topSpacing:80});

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



	
    

	



	$('.first').scroolly([
        {
            alias: 'before',
            from: '',
            to: 'con-top  = top',
            css: {
                position: 'static'
            }
        },
        {
            alias: 'fixing',
            from: 'con-top = top',
            to: 'con-top +500 = top',
            css: {
                position: 'fixed',
                top: '0',
                bottom: ''
            }
//                    onScroll: function($el, offset, length)
        },
        {
            alias: 'unfixing',
            from: 'con-top +500 = top',
            to: 'doc-bottom',
            css: {
                position: 'absolute',
                top: '500px',
                bottom: '0'
                        
            }
        }
    ], $('.staging'));

	$('.second').scroolly([
        {
            alias: 'before',
            from: '',
            to: 'con-top + 1400  = top',
            css: {
                position: 'absolute',
                top: "1400px"
            }
        },
        {
            alias: 'fixing',
            from: 'con-top + 1400 = top',
            to: 'con-top +1900 = top',
            css: {
                position: 'fixed',
                top: '0',
                bottom: ''
            }
//                    onScroll: function($el, offset, length)
        },
        {
            alias: 'unfixing',
            from: 'con-top +1900 = top',
            to: 'doc-bottom',
            css: {
                position: 'absolute',
                top: '1900px',
                bottom: '0'
                        
            }
        }
    ], $('.staging'));

    $('.third').scroolly([
        {
            alias: 'before',
            from: '',
            to: 'con-top + 2900  = top',
            css: {
                position: 'absolute',
                top: "2900px"
            }
        },
        {
            alias: 'fixing',
            from: 'con-top + 2900 = top',
            to: 'con-top +3400 = top',
            css: {
                position: 'fixed',
                top: '0',
                bottom: ''
            }
//                    onScroll: function($el, offset, length)
        },
        {
            alias: 'unfixing',
            from: 'con-top +3400 = top',
            to: 'doc-bottom',
            css: {
                position: 'absolute',
                top: '3400px',
                bottom: '0'
                        
            }
        }
    ], $('.staging'));

	$('.cube').scroolly([
        {
            alias: 'before',
            from: '',
            to: 'con-top + 2900  = top',
            css: {
                position: 'fixed',
                top: "50%"
            }
        },
        {
            alias: 'fixing',
            from: 'con-top + 3400 = top',
            to: 'con-top +6400 = top',
            css: {
                position: 'absolute',
                top: '3300px',
                bottom: ''
            },
                   onScroll: function($el, offset, length){
                    console.log(offset);
                   }
        }
    ], $('.staging'));

    }
});