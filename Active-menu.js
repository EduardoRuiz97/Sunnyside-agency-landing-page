let menuButton = document.querySelector(".menu__icon");
let menuMobile = document.querySelector(".header__menu__mobile");

menuButton.addEventListener("click", ()=>{
  menuMobile.classList.toggle("menu__mobile__show");
})