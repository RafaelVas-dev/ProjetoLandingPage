const menu = document.querySelector('.menu');
const navMenu = document.querySelector('#navMenu');

menu.addEventListener('click', function (){
    navMenu.classList.menu("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () =>{
    document.querySelector(".criando-estilos").scrollIntoView({behavior: 'smooth'});
})