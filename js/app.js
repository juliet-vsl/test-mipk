// Шапка

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    let header = document.querySelector('.header__nav');

    if(scrollPos > 0) {
        header.classList.add('fixed');
    } else
        header.classList.remove('fixed');
}


// Слайдер

new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});