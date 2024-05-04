
const scroll_btn = document.querySelector('.page-top');

scroll_btn.addEventListener('click', () => {
	window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}, false);

window.addEventListener('scroll', () => {
		const scroll = window.scrollY;
		const PageHeight = document.documentElement.scrollHeight;
        if (scroll > PageHeight * 0.5) {
            scroll_btn.classList.add('top');
        } else {
            scroll_btn.classList.remove('top');
        }
    }, false);


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
    const day = document.querySelectorAll('.day');
    const hour = document.querySelectorAll('.hour');
    const min = document.querySelectorAll('.min');

    for (let i = 0; i < day.length; i++) {
      day[i].textContent = numbers[0].toString() + "d";
      hour[i].textContent = numbers[1].toString() + "h";
      min[i].textContent = numbers[2].toString() + "m";
    }
};
update();
setInterval(update, 1000)