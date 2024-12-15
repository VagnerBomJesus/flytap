// JavaScript básico para funcionalidade de navegação no menu (exemplo)

const menuButton = document.querySelector('.menu-sandwich');
const navBar = document.querySelector('.nav-bar');

menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
