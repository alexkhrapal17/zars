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
		touchThreshold: 100
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
});
