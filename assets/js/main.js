const menu = document.querySelector('#menu');

menu.addEventListener('click', ()=>{
    const nav = document.querySelector('#menu-bar-mobile nav');
    const menuBg = document.querySelector('#menu-bg');
    menu.classList.toggle('change');
    nav.classList.toggle('change');
    menuBg.classList.toggle('change-bg');
})