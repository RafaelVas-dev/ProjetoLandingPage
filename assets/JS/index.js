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

// Sliders das Fotos

let imgSlider = document.querySelectorAll('.slider-ft');
let setaProx = document.querySelector('#prox');
let setaAnte = document.querySelector('#ante');
let btnNav = document.querySelectorAll('.btn-nav');
let contadorImg = imgSlider.length; 
let imgAtiva = 0;

setaProx.addEventListener('click', () => {
    imgAtiva++;
    if(imgAtiva >= contadorImg){
        imgAtiva = 0
    }
    mostrarSlider();
});

setaAnte.addEventListener('click', () => {
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1
    }
    mostrarSlider();
});

function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-ft.ativo');
    let antigoBtnNav = document.querySelector('.btn-nav.ativo');

    antigaImg.classList.remove('ativo');
    antigoBtnNav.classList.remove('ativo');

    imgSlider[imgAtiva].classList.add('ativo');

    btnNav[imgAtiva].classList.add('ativo');
}

btnNav.forEach((btn, indice)=> {
    btn.addEventListener('click', () =>{
        imgAtiva = indice;
        mostrarSlider();
    })
});

// Auto-play automático a cada 5 segundos
setInterval(() => {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
}, 5000);