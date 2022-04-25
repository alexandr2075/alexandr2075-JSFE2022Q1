import { db } from "../main/db.js";


const BURGER = document.querySelector(".burger");
const HEADER = document.querySelector(".header");
const MENU = document.querySelector(".menu");
const LOGO = document.querySelector(".logo");
const BODY = document.querySelector("body");

const CARDS = document.querySelectorAll(".card")
const MODAL = document.querySelector(".modal-window")
const MODAL_CLOSE = document.querySelector(".modal-close")
const MODAL_SHADOW = document.querySelector(".modal-window-shadow")

const PETS = document.querySelector(".pets-our-pets__cards-wrapper")
const NEXT = document.querySelector(".next")


BURGER.addEventListener("click", () => {
    BODY.classList.toggle("_active");
    HEADER.classList.toggle("_active");
    BURGER.classList.toggle("_active");
    MENU.classList.toggle("_active");
    
  });

         /*MODAL WINDOW*/

CARDS.forEach(function cardListen(card) {
  card.addEventListener('click', (event) => {

    MODAL_SHADOW.classList.add("_visible")
    BODY.classList.add("_active")

    let cardName = event.currentTarget.children[1].innerText
    
    db.forEach(function (dbCard) {
      
        if(dbCard.name === cardName) {

          let image = document.querySelector('.modal-window-image__img')
          let title = document.querySelector('.modal-window-content__title')
          image.src = dbCard.img
          title.innerText = dbCard.name
        }
    })  
  })
})

MODAL_SHADOW.addEventListener("click", (e) => {
  if(!e.target.closest('.modal-window')) {
    MODAL_SHADOW.classList.remove("_visible")
      BODY.classList.remove("_active")
  }      
})

        /* PAGINATION */

let namesCards = []
for(let card of CARDS) {
   namesCards.push(card.children[1].innerText)
}
const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
}
let arrCards = []
for(let i = 1; i < 7; i++) {
  arrCards.push(shuffle([...namesCards]))
}
console.log(arrCards[1])


PETS.innerHTML = " ";

// for(let i = 0; i < 8; i++) {
//   CARDS.forEach((card) => {
    
//     if(arrCards[i].includes(card.children[1].innerText)) {
//       PETS.appendChild(card)
//     }
//   })
// }
let count = 2
if(count === 2) {
  
    CARDS.forEach((card) => {
    
      if(arrCards[1].includes(card.children[1].innerText)) {
        PETS.appendChild(card)
      }
    })
    
  }

  console.log(PETS)


// NEXT.addEventListener("click", () => {

// })


