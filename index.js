const menu =  document.querySelector('.header__content-hamburguer');
const nav = document.querySelector('.header__content-menu')




menu.addEventListener('click', () => {
    nav.classList.toggle('active');
})