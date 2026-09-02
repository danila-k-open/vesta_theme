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

	Drupal.behaviors.swiperInit = {

		// ======================
		// SWIPER SLIDER
		// ======================

		attach: function (context, settings) {
			initProductSlider(context, false);
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

	/**
	 * Инициализация товарного Swiper.
	 *
	 * @param {Element|Document} context
	 *   Где искать слайдер.
	 * @param {boolean} rebuild
	 *   true — пересоздать Swiper заново.
	 */
	function initProductSlider(context, rebuild) {
		var productSlider = '.field.field--name-field-image-product';

		$(productSlider, context).each(function () {
			var element = this;
			var $element = $(element);

			if (!$element.find('.swiper-wrapper').length) return;
			if ($element.find('.swiper-wrapper .field__item').length <= 1) return;

			// Если нужно пересоздать Swiper, сначала уничтожаем старый экземпляр.
			if (rebuild && element.swiper) {
				element.swiper.destroy(true, true);
				element.swiper = null;
			}

			// Если Swiper уже есть и пересборка не нужна — просто обновляем.
			if (element.swiper) {
				element.swiper.update();
				element.swiper.slideTo(0, 0, false);
				return;
			}

			var next = $element.find('.swiper-buttons .swiper-button-next').get(0);
			var prev = $element.find('.swiper-buttons .swiper-button-prev').get(0);
			var pagination = $element.find('.swiper-pagination').get(0);

			var slider = new Swiper(element, {
				slidesPerView: 1,
				slidesPerGroup: 1,
				initialSlide: 0,
				watchOverflow: true,
				observer: true,
				observeParents: true,
				updateOnWindowResize: true,

				pagination: {
					el: pagination,
					clickable: true
				},

				navigation: {
					nextEl: next,
					prevEl: prev
				},

				on: {
					init: function () {
						this.update();
						this.slideTo(0, 0, false);
					}
				}
			});

			element.swiper = slider;

			// Дополнительное обновление после того, как браузер дорисовал модалку.
			setTimeout(function () {
				if (element.swiper) {
					element.swiper.update();
					element.swiper.slideTo(0, 0, false);
				}
			}, 150);
		});
	}

	/**
	 * После AJAX-открытия Drupal-модалки пересоздаем Swiper внутри модалки.
	 */
	$(window).on('dialog:aftercreate', function () {
		setTimeout(function () {
			var modal = $('.ui-dialog.vesta-product-modal-dialog').last().get(0);

			if (modal) {
				initProductSlider(modal, true);
			}
		}, 250);
	});


	/**
	 * При закрытии модалки уничтожаем Swiper,
	 * чтобы при следующем открытии не осталось старого состояния.
	 */
	$(window).on('dialog:beforeclose', function () {
		$('.ui-dialog.vesta-product-modal-dialog .field.field--name-field-image-product').each(function () {
			if (this.swiper) {
				this.swiper.destroy(true, true);
				this.swiper = null;
			}
		});
	});
	$(document).ready(function () {
	});

	$(document).ajaxComplete(function(event, jqXHR, settings) {
	});
})(jQuery, Drupal, once);
