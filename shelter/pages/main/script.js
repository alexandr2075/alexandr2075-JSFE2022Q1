//import { db } from "./db.js";

const BURGER = document.querySelector(".burger");
const HEADER = document.querySelector(".header");
const MENU = document.querySelector(".menu");
const LOGO = document.querySelector(".logo");
const BODY = document.querySelector("body");
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const CARD_LEFT = document.querySelector("#card-left");

BURGER.addEventListener("click", () => {
  BODY.classList.toggle("_active");
  MENU.classList.toggle("_active");
  BURGER.classList.toggle("_active");
});

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_RIGHT.removeEventListener('click', moveRight)
    BTN_LEFT.removeEventListener('click', moveLeft)
}
const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener('click', moveLeft)
    BTN_RIGHT.removeEventListener('click', moveRight)
}

BTN_RIGHT.addEventListener("click", moveRight);
BTN_LEFT.addEventListener("click", moveLeft);

CAROUSEL.addEventListener('animationend', (animation) => {

    if(animation.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left')

       

    } else {
        CAROUSEL.classList.remove('transition-right')

        
    }
  
  
  BTN_RIGHT.addEventListener("click", moveRight);
  BTN_LEFT.addEventListener("click", moveLeft);
})  

CAROUSEL.addEventListener('animationstart', (animation) => {
    if(animation.animationName === "move-right") {
        document.querySelector('#card-center').innerHTML = CARD_LEFT.innerHTML

        const card1 = document.createElement('div')
        card1.classList.add('card')
        card1.innerText = Math.floor(Math.random()*8)
        const card2 = document.createElement('div')
        card2.classList.add('card')
        card2.innerText = Math.floor(Math.random()*8)
        const card3 = document.createElement('div')
        card3.classList.add('card')
        card3.innerText = Math.floor(Math.random()*8)

        CARD_LEFT.innerHTML = " "
        CARD_LEFT.appendChild(card1)
        CARD_LEFT.appendChild(card2)
        CARD_LEFT.appendChild(card3)
    }
})