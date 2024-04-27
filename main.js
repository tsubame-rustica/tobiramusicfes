$('.menu-btn').on('click', function() {
    scrollTop = $(window).scrollTop();
    is_open_hamburger = !is_open_hamburger;
    if (is_open_hamburger) {
        $('body').css({
        position: 'fixed',
        top: -scrollTop
        });
    } else {
        $('body').css({
            position: '',
            top: ''
        });
    }
});

$(function(){
	$(window).scroll(function (){
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
        if (scroll > windowHeight * 0.5) {
            $('.page-top').addClass('top');
            $('top').fadeIn();
            console.log("top");
        } else {
            $('.page-top').removeClass('top');
            $('top').fadeOut();
        }
	});
});

$('.page-top').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
});


// 1秒ごとに実行
const update = () => {
    // 日本時間の timezone 付きで指定
    const targetTime = new Date('2024-06-22T14:00+09:00').getTime();
    const diff = targetTime - Date.now();
    const numbers = [
      Math.floor(diff / 1000 / 60 / 60 / 24),
      Math.floor((diff / 1000 / 60 / 60) % 24),
      Math.floor((diff / 1000 / 60) % 60),
    ];
    $('.day').html(numbers[0].toString() + "d");
    $('.hour').html(numbers[1].toString() + "h");
    $('.min').html(numbers[2].toString() + "m");
};
update();
setInterval(update, 1000);