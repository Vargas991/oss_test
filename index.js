const menu =  document.querySelector('#menu');
const header_nav = document.querySelector('.header__nav')

 console.log('header_nav');




menu.addEventListener('click', () => {
    header_nav.classList.toggle('active');
});