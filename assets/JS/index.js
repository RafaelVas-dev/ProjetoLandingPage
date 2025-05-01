// ===== Menu Dinamico =====
let navbar = document.querySelector('#header');

document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navbar.classList.add('rolar')
    } else{
        navbar.classList.remove('rolar')
    }

});


// ===== Menu Mobile =====

let btnMenu  = document.querySelector ('#btn-menu-mob');
let menuMobile = document.querySelector('#menu-mobile');
let links = document.querySelector('.nav-list-mob');
let body = document.querySelector('body');
let icon = document.querySelector('.bx.bx-menu');
let iconx = document.querySelector('.bx.bx-x');


icon.addEventListener('click', () => {
    
    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')

    if (menuMobile.classList.contains('abrir')) {
        icon.style.display = 'none';    // Esconde o ícone de menu
        iconx.style.display = 'block';   // Mostra o ícone de X
    }
});

iconx.addEventListener ('click', () => {

    icon.style.display = 'block';
    iconx.style.display = 'none';
    menuMobile.classList.remove('abrir')
    body.classList.remove('no-overflow')
    
});

links.addEventListener('click', () => {

    iconx.style.display = 'none';
    icon.style.display = 'block';
    menuMobile.classList.remove('abrir')
    body.classList.remove('no-overflow')
});