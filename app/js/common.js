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
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 900,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		asNavFor: '.repeat-slider-nav'
	});

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

	$('.unique-location-slider').slick({
		infinite: true,
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		// autoplay: true,
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
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 900,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		asNavFor: '.specification-slider-details'
	});
	$('.specification-slider-details').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.specification-slider-media'
	});

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
		
		$('.gallery-slide.slick-active').on('click', function() {
			$('.section-gallery').toggleClass('active');
		});
	});
	
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
            }
        ]
	});
});
