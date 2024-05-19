
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


// addeventlister
const popup = document.getElementById('popup');
const pop_name = document.getElementById('popup-name');
const pop_txt = document.getElementById('popup-text');
const pop_img = document.getElementById('popup-img');
const pop_link = document.getElementById('popup-sns-link');

const name_arr = ["ぺんと", "Hiroki", "海舟", "巫てんり"];
const text_arr = ["ゲームはプロ初心者。しかし音楽は実力派なやさしいミュージシャン。\n白樺のような爽やかな歌声で心の初期スポーンに連れ戻せるか？", 
                  "人気ゲーム公式の歌ってみたコンテスト最優秀受賞者。\n自身初のメタバースライブで超ハイトーンのトビラを開けるか？", 
                  "唄って創れるギタリスト。日本のライブハウスを圧巻する超実力派。", 
                  "VTuberとしては異例の大型スクリーン路上ライブで現実とバーチャルを沸かせた。\nシン・トーキョーから世界へ人類全員なぎっこに変えられるか？"];

const artist1 = document.getElementById('artist1');
const artist2 = document.getElementById('artist2');
const artist3 = document.getElementById('artist3');
const artist4 = document.getElementById('artist4');

artist1.addEventListener('click', () => {
    popup.classList.add('active');
    pop_name.innerHTML = name_arr[0];
    pop_txt.innerHTML = text_arr[0];
    pop_img.src = "img/artist1.jpg";
    pop_txt.innerHTML = text_arr[0]
}, false);

artist1.addEventListener('click', () => {
    popup.classList.add('active');
    pop_txt.innerHTML = text_arr[1]
}, false);

artist1.addEventListener('click', () => {
    popup.classList.add('active');
    pop_txt.innerHTML = text_arr[2]
}, false);

artist1.addEventListener('click', () => {
    popup.classList.add('active');
    pop_txt.innerHTML = text_arr[3]
}, false);