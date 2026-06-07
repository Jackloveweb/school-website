const carouselBox = document.getElementById('carouselBox');
const items = document.querySelectorAll('.carousel-item');
const texts = document.querySelectorAll('.intro-text');
let current = 0;
let timer;

function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    texts.forEach(text => text.classList.remove('active'));
    items[index].classList.add('active');
    texts[index].classList.add('active');
    current = index;
}

function nextSlide() {
    let next = current + 1;
    if (next >= items.length) next = 0;
    showSlide(next);
}

function startLoop() {
    timer = setInterval(nextSlide, 4000);
}

function stopLoop() {
    clearInterval(timer);
}

carouselBox.addEventListener('mouseenter', stopLoop);
carouselBox.addEventListener('mouseleave', startLoop);

startLoop();