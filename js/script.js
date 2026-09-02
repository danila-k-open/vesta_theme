(function ($, Drupal, once) {
	
	Drupal.behaviors.mmenuInit = {

		// ======================
		// MMenu
		// ======================

		attach: function (context, settings) {
			once('mmenu-init', '#mobile-nav', context).forEach(function (element) {

				// ======================
				// MOBILE MENU WITH MMENU
				// ======================

				const initMobileMenu = () => {
					const $menu = $(element)
					const $toggle = $("a.open-mobile-menu");

					// Initialize mmenu
					const menu = $menu.mmenu({
						extensions: ["effect-menu-slide", "effect-listitems-slide"],
						navbar: { title: "Навигация" },
						slidingSubmenus: true
					});
					const api = menu.data("mmenu");

					$menu.on('click', 'ul.menu li a', function (e) {
						setTimeout(function() {
							$('body').toggleClass('mm-opened mm-blocking mm-background mm-effect-menu-slide mm-effect-listitems-slide mm-opening');
							$menu.toggleClass('mm-current mm-opened');
							api.close();
						}, 0);
					});

				};

				initMobileMenu();

			});
		}
	};

	Drupal.behaviors.scrollInit = {
		attach: function (context, settings) {

			// ======================
			// HEADER & SCROLL
			// ======================

			once('scrolltop-init', '#scrollToTop', context).forEach(function (button) {

				const initScrollToTop = () => {
					const $scrollBtn = $(button);

					$(window).on('scroll', function() {
						$scrollBtn.toggleClass('visible', $(this).scrollTop() > 300);
					});

					$scrollBtn.on('click', () => $('html, body').animate({ scrollTop: 0 }, 600));
				};

				initScrollToTop();

			});


			// ======================
			// SMOOTH SCROLLING
			// ======================

			once('scrolltop-init', 'a[href^="#"]', context).forEach(function (link_scroll) {

				const initSmoothScroll = () => {
					$(link_scroll).on('click', function(e) {
						e.preventDefault();
						const target = $(this).attr('href');
						if (target === '#mobile-nav' || target === '#' || !$(target).length) return;

						$('html, body').animate({
							scrollTop: $(target).offset().top - 80
						}, 600, 'swing');
					});
				};

				initSmoothScroll();

			});
		}
	};


	$(document).ready(function () {
	});

	$(document).ajaxComplete(function(event, jqXHR, settings) {
	});
})(jQuery, Drupal, once);
