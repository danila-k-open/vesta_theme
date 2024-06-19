(function ($) {
    $(document).ready(function () {

        const menu = $("#mobile-nav").mmenu({
            extensions: ["effect-menu-slide", "effect-listitems-slide"],
            navbar: {
                title: "Навигация",
            },
        });
        var API = menu.data( "mmenu" );



        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scrollToTop').fadeIn();
            } else {
                $('#scrollToTop').fadeOut();
            }
        });

        $('#scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
        });
        var slide_product_full = $("article.product-view-full .product-teaser-image"),
        slider = $('div#slider-block div#block-vesta-theme-views-block-slayder-block-1 .view.view-slayder.view-id-slayder .view-content');
        if(slide_product_full.find('.current-slide .element').length >= 2){
            slide_product_full.find('.current-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                swipe: false,
                fade: true,
                asNavFor: '.nav-slide'
            });
            slide_product_full.find('.nav-slide').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.current-slide',
                dots: true,
                infinite: true,
                arrows: true,
                focusOnSelect: true
            });
        }
        if(slider.find('.views-row').length >= 2){
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                infinite: true,
                fade: true,
            });
        }
        // $('.menu.sf-menu.sf-main li a').click(function() {
        //     $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top}, 'slow');
        // }); плавный скролл до якоря по клику на пункт меню


        // $("#mobile-nav").mmenu({
        //     extensions: ["pagedim-black"],
        //     navbar: {
        //         title: "Главное меню",
        //     },
        // });
        // $('a.mm-next').click(function() {
        //     if($('.mm-panel').hasClass('mm-opened') && $('.mm-panel > ul').hasClass('sf-hidden')){
        //         $('.mm-panel > ul').removeClass('sf-hidden');
        //     }
        // });
        // $('a.mm-btn.mm-prev').click(function() {
        //     if($('.mm-panel').hasClass('mm-opened') && !$('.mm-panel > ul').hasClass('sf-hidden')){
        //         $('.mm-panel > ul').addClass('sf-hidden');
        //         $('.mm-panel').removeClass('mm-opened');
        //     }
        // });

    });

    $(document).ajaxComplete(function(event, jqXHR, settings) {
        var jsonlog = {
            'URL запроса:': settings.url,
            'Метод запроса:': settings.method,
            'Данные запроса:': settings.data,
            'Статус запроса:': jqXHR.status,
            'Ответ сервера': jqXHR.responseJSON,
        };
        var slide_product_full = $("article.product-view-full .product-teaser-image");
        if(slide_product_full.find('.current-slide .element').length >= 2){
            slide_product_full.find('.current-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                swipe: false,
                fade: true,
                asNavFor: '.nav-slide'
            });
            slide_product_full.find('.nav-slide').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.current-slide',
                dots: true,
                infinite: true,
                arrows: true,
                focusOnSelect: true
            });
        }
        //console.log(jsonlog);
    });
})(jQuery);

