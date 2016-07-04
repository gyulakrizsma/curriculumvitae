(function () {
	'use strict';

	var opened;

	$('.experience-circle').click(function () {

		var year = $(this).data('year');

		if (opened !== year) {
			$('.experience-circle').removeClass('active');
			$('.project2015').toggle(false);
			$('.project2013').toggle(false);
			$('.project2011').toggle(false);
		}

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}

		opened = year;

		$('.project' + year).toggle('slow');
	});

	/*WOW*/
	var wow = new WOW({ mobile: false });
	wow.init();
	/*WOW*/

	///*STELLAR*/
	//$(window).stellar({
	//	horizontalScrolling: false
	//});
	///*STELLAR*/

	/*OWL*/
	$('.references-cont').owlCarousel({
		navigation: false, // Show next and prev buttons
		slideSpeed: 800,
		paginationSpeed: 400,
		autoPlay: 60000,
		singleItem: true,
		stopOnHover: true
	});
	/*OWL*/

	/*SCROLLTO*/

	var scrollAnimationTime = 1200;
	$('.resume-circle').click(function () {
		var target = '#' + $(this).data('scrollto');

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, scrollAnimationTime);

	});

	$('.experience-circle').click(function () {
		if ($(this).hasClass('active')) {
			var target = '#' + $(this).data('scrollto');

			$('html, body').stop().animate({
				scrollTop: $(target).offset().top
			}, scrollAnimationTime);
		}
	});

	/*SCROLLTO*/
})();