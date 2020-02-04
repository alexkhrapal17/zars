$(function () {


	$(document).click(function() {
		$('.menu-slide').removeClass('active');
		$('.menu-btn-toggle').removeClass('active');
	});

	$('.menu-btn').on('click', function (event) {
		$('.menu-btn-toggle').toggleClass('active');
		$('.menu-slide').toggleClass('active');
		event.stopPropagation();
	});

	
	$('.unique-location-infographic').on('click', 'div:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.unique-location-holder').find('.unique-location-tab-wrapper').removeClass('active').eq($(this).index()).addClass('active');
    });

	$('.repeat-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 900,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		responsive: [
            {
                breakpoint: 780,
                settings: {
                    asNavFor: '.repeat-slider-nav'
                }
            }
        ]
	});

	if ($(window).width() < 1200) {
		$('.repeat-slider-nav').slick({
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '100px',
			asNavFor: '.repeat-slider'
		});

		$('.unique-location-tab-wrapper').removeClass('active');

		$('.link1').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location1').addClass('active');
		})

		$('.link2').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location2').addClass('active');
		})

		$('.link3').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location3').addClass('active');
		})

		$('.link4').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location4').addClass('active');
		})

		$('.link5').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location5').addClass('active');
		})

		$('.link6').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location6').addClass('active');
		})

		$('.link7').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location7').addClass('active');
		})

		$('.link8').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location8').addClass('active');
		})

		$('.link9').on('click', function() {
			$('.unique-location-wrapper').addClass('show');
			$('.location9').addClass('active');
		})

		$('.mobile-close-modal').on('click', function() {
			$('.unique-location-wrapper').removeClass('show');
			$('.unique-location-tab-wrapper').removeClass('active');
		});
	}

	$('.unique-location-slider').slick({
		infinite: true,
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 900
	});

	// Specifications sliders
	$('.specification-slider-media').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 900,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		asNavFor: '.specification-slider-details',
		responsive: [
            {
                breakpoint: 780,
                settings: {
					autoplay: false,
                    asNavFor: '.repeat-slider-nav'
                }
            }
        ]
	});
	$('.specification-slider-details').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		responsive: [
            {
                breakpoint: 780,
                settings: {
					asNavFor: '.specification-slider-media',
                }
            }
        ]
	});
	if ($(window).width() < 780) {
		$('.repeat-slider-nav2').slick({
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '100px',
			asNavFor: '.repeat-slider'
		});
	}

	// Play/Pause video btn
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
		} else {
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});

	// Below functionality for play video on hover
	// $('.video').on('mouseenter', function() {
	// 	$(this).get(0).play();
	// });

	// $('.video').on('mouseleave', function() {
	// 	$(this).get(0).pause();
	// });


	// Select
	$('.dropdown-select').on('click', function() {
		$(this).toggleClass('active');
	});
	$('.dropdown-list .dropdown-item').on('click', function() {
		let v = $(this).find('.mark').text();

		$(this).addClass('active');
		$(this)
			.closest('.dropdown-select')
			.find('.dropdown-list .dropdown-item')
			.not($(this))
			.removeClass('active');
		$(this)
			.closest('.dropdown-select')
			.find('.dropdown-item.selected .mark')
			.text(v);
	})


	// Gallery slider
	var $status = $('.paging-info');
	var $slickElement = $('.gallery-slider');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});
	
	if ($(window).width() > 780) {
		$slickElement.on('click', '.slick-current', function() {
			if($('.section-gallery').hasClass('active')) {
					$('.section-gallery').removeClass('active');
			} else {
				$('.section-gallery').addClass('active');
			}
		});
	}
	
	$slickElement.slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.gallery-slide',
        centerPadding: '475px',
        arrows: true,
        centerMode: true,
		focusOnSelect: true,
		speed: 900,
        dots: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '275px'
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    centerPadding: '175px'
                }
			},
            {
                breakpoint: 780,
                settings: {
                    centerPadding: '0'
                }
            }
        ]
	});
});
