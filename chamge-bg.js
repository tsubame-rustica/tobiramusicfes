$(function(){
	$(window).scroll(function (){
		$('.space').each(function(){
			var pos_top = $(this).offset().top;
            var pos_bottom = pos_top + $(this).height() + $('.introduction').height();
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
            var window_bottom = scroll + windowHeight
            if (window_bottom > pos_top) {
                var scroll_par = (window_bottom - pos_top) / (pos_bottom - pos_top) * 10;
                var color = 255 * ((scroll_par ** 2) / 100);
                $('body').css('background-color', 'rgb(' + color + ',' + color + ',' + color + ')');
                mirror = 255 - color;
                $('.introduction h2').css('color', 'rgb(' + mirror + ',' + mirror + ',' + mirror + ')');
                $('.introduction p').css('color', 'rgb(' + mirror + ',' + mirror + ',' + mirror + ')');
            }
		});
	});
});