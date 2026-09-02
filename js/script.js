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

	// Drupal.behaviors.searchInit = {
	// 	attach: function (context, settings) {
	// 		once('search-init', '.search-api-page-block-form.search-form.search-block-form', context).forEach(function (element) {
	//
	// 			// ======================
	// 			// MOBILE MENU WITH MMENU
	// 			// ======================
	//
	// 			const initSearch = () => {
	// 				var search = $(element);
	// 				search.find('.search-container form .open').click(function(){
	// 					$(this).toggleClass('btdis');
	// 					$(this).toggleClass('btenable');
	//
	// 					search.find('.search-container form .close').toggleClass('btdis');
	// 					search.find('.search-container form .close').toggleClass('btenable');
	//
	// 					search.find('.search-container form').toggleClass("enable");
	// 				});
	// 				search.find('.search-container form .close').click(function(){
	// 					$(this).toggleClass('btdis');
	// 					$(this).toggleClass('btenable');
	//
	// 					search.find('.search-container form .open').toggleClass('btdis');
	// 					search.find('.search-container form .open').toggleClass('btenable');
	//
	// 					search.find('.search-container form').toggleClass("enable");
	// 				});
	// 			};
	//
	// 			initSearch();
	//
	// 		});
	//
	// 	}
	// };

	// Drupal.behaviors.accordeonInit = {

	// 	// ======================
	// 	// Accordeon
	// 	// ======================

	// 	attach: function (context, settings) {
	// 		once('faq-accordion', '.view-faq .views-row .field.field--name-field-question-answer .field__item', context).forEach(function (item) {
	// 			const question = $(item).find('.field.field--name-node-title');
	// 			const answer = $(item).find('.group-answer');
	// 			if (question && answer) {
	// 				question.on('click', function (e) {
	// 					e.preventDefault();
	// 					$(this).toggleClass('active');
	// 					answer.toggleClass('show');
	// 				});
	// 			}
	// 		});
	// 	}
	// };
	
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
