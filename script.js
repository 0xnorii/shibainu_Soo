// スライドショーの管理
let currentSlideIndex = 0;

// スライドを変更する関数
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // 現在のスライドを非表示
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // 新しいインデックスを計算
    currentSlideIndex += direction;
    
    // ループ処理
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // 新しいスライドを表示
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// 特定のスライドに移動
function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = index;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// 自動スライドショー（オプション）
function autoSlide() {
    changeSlide(1);
}

// 5秒ごとに自動でスライド（コメントアウトを外すと有効）
// setInterval(autoSlide, 5000);

// ランダム写真表示
const photos = [
    { src: 'images/soo1.jpg', caption: 'お昼寝タイム' },
    { src: 'images/soo2.jpg', caption: 'ふぁあ' },
    { src: 'images/soo3.jpg', caption: '散歩中' },
    { src: 'images/soo4.jpg', caption: '肉球' },
    { src: 'images/soo5.jpg', caption: 'リラックスタイム' },
    { src: 'images/soo6.jpg', caption: 'いい夢見てる？' }
];

function randomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photo = photos[randomIndex];
    const display = document.getElementById('random-display');
    
    display.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption}">
        <p style="margin-top: 1rem; font-size: 1.2rem; color: #5d4037;">${photo.caption}</p>
    `;
}

// ページ読み込み時の初期化
window.addEventListener('load', () => {
    console.log('Soo\'s Film Gallery へようこそ！');
});