jQuery(function($) {
	//селектор всех карт на сайте
	let map = $('iframe[src*="yandex.ru/map-widget"], script[src*="api-maps.yandex.ru/services/constructor"]');
	//обёртка к карте
	let mapWrap = map.wrap(function(){
		let wrapper = $('<div>').addClass('mapContainer');
		
		wrapper.css('width',$(this).prop('width')).css('height',$(this).prop('height'));
		$(this).removeAttr('width').removeAttr('height');
		
		return wrapper;
	}).parent();
	
	//добавляем подсказку в обёртку
	mapWrap.append('<div class="mapHelp">Для активации карты нажмите по ней</div>');
	mapWrap.on("click", function() {
		//включаем возможность манипулирования картой
		$(this).addClass('active');
	})
	mapWrap.on("mousemove", function(event) {
		let mapHelp = $(this).find('.mapHelp');
		//двигаем подсказку по области карты вместе с мышкой пользователя
		let topMax = this.offsetHeight - mapHelp.outerHeight();
		let leftMax = this.offsetWidth - mapHelp.outerWidth();
		
		if(event.offsetY < topMax - 20) mapHelp.css('top', event.offsetY + 20 + 'px')
		else mapHelp.css('top', topMax + 'px');
		
		if(event.offsetX < leftMax - 20) mapHelp.css('left', event.offsetX + 20 + 'px')
		else mapHelp.css('left', leftMax + 'px');
	})
	mapWrap.on("mouseenter", function() {
		//показываем подсказку
		$(this).addClass('mouseIn');
	})
	mapWrap.on("mouseleave", function() {
		//отключаем возможность манипулирования картой
		$(this).removeClass('active');
		//скрываем подсказку
		$(this).removeClass('mouseIn');
	})
	
})