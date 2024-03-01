(function($) {
    $(document).ready(function () {
        const menu = $("#mobile-nav").mmenu({
            extensions: ["effect-menu-slide", "effect-listitems-slide"],
            navbar: {
                title: "Навигация",
            },
        });
        var API = menu.data( "mmenu" );

        
        $(window).scroll(function() {
            if($(this).scrollTop() > 100) {
                $('#scrollToTop').fadeIn();
            } else {
                $('#scrollToTop').fadeOut();
            }
        });

        $('#scrollToTop').click(function() {
            $('html, body').animate({scrollTop:0}, 'slow');
        });
        // $('.menu.sf-menu.sf-main li a').click(function() {
        //     $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top}, 'slow');
        // }); плавный скролл до якоря по клику на пункт меню

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

