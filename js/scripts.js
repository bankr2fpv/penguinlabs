(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({
				'scrollTop': '0px'
			}, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// banner-slider

		$('.products-slider').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 2000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				960: {
					items: 1
				},
				1200: {
					items: 1
				},
				1920: {
					items: 1
				}
			}
		});




		// road-map-slider

		$('.roadmap').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: false,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				960: {
					items: 2
				},
				1200: {
					items: 2
				},
				1920: {
					items: 2
				}
			}
		});


		// code for slider-btn
		var owl = $('.owl-carousel');
		owl.owlCarousel();
		// Go to the next item
		$('.next img').click(function () {
			owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.previous img').click(function () {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
		})


		// code for accodrian
		$(document).ready(function() {
			$('.ziehharmonika').ziehharmonika({
				collapsible: true,
				prefix: ''
			});
		});


		// code for sm-menu

		$("#sm-menu").click(function(){
			$(".main-menu").slideToggle();
		  });

		  $("#sm-menu").click(function(){
			$(".header-right-area").slideToggle();
		  });









	});
})(jQuery);