$(function() {

	$('.menu-btn').on('click', function() {
		$('.menu-btn-toggle').toggleClass('active');
		$('.menu-slide').toggleClass('active');
	});

	$('.repeat-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		fade: true,
		speed: 900,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100
	});
});
