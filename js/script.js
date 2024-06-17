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

    // $(document).ajaxComplete(function(event, jqXHR, settings) {
    //     var jsonlog = {
    //         'URL запроса:': settings.url,
    //         'Метод запроса:': settings.method,
    //         'Данные запроса:': settings.data,
    //         'Статус запроса:': jqXHR.status,
    //         'Ответ сервера': jqXHR.responseJSON,
    //     };
    //     //console.log(jsonlog);
    // });
})(jQuery);

