const command_key_list = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
command_key_step = 0;

window.addEventListener("keydown", (e)=>{
    $(".logo-outer").removeClass("command_key");
    const code  = e.code;
    if (command_key_list[command_key_step] === code) {
        command_key_step += 1;
        console.log(command_key_step)
        if (command_key_step == 10) {
            $(".logo-outer").addClass("command_key");
            console.log("addclass");
            command_key_step = 0;
        }
    } else {
        console.log(code, command_key_list[command_key_step], command_key_step);
        command_key_step = 0;
    }
    console.log(code);
});

is_open_hamburger = false;

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