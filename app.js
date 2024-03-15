let searce = document.querySelector('.searce-box');

document.querySelector('#searce-icon').onclick = () => {
    searce.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    searce.classList.remove('active');
}
// Hide menu and search box on scroll//
window.onscroll = () => {
    menu.classList.remove('active');
    searce.classList.remove('active');
}


// Header//
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});