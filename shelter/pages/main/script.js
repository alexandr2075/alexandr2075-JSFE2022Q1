import { db } from "./db.js";


const BURGER = document.querySelector(".burger");
const HEADER = document.querySelector(".header");
const MENU = document.querySelector(".menu");
const LOGO = document.querySelector(".logo");
const BODY = document.querySelector("body");
const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const CARD_LEFT = document.querySelector("#card-left");
const CARD_RIGHT = document.querySelector("#card-right");

const CARDS = document.querySelectorAll(".card")
const MODAL = document.querySelector(".modal-window")
const MODAL_CLOSE = document.querySelector(".modal-close")
const MODAL_SHADOW = document.querySelector(".modal-window-shadow")




/*MODAL WINDOW*/

// for(let i = 0; i < CARDS.length; i++) {
//   CARDS[i].addEventListener("click", () => {
//     MODAL_SHADOW.classList.add("_visible")
//     BODY.classList.add("_active")
// })
// }



CARDS.forEach(function cardListen(card) {
  card.addEventListener('click', (event) => {

    MODAL_SHADOW.classList.add("_visible")
    BODY.classList.add("_active")

    let cardName = event.currentTarget.children[1].innerText
    
    db.forEach(function (dbCard) {
      console.log(dbCard.img)
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


BURGER.addEventListener("click", () => {
  BODY.classList.toggle("_active");
  MENU.classList.toggle("_active");
  BURGER.classList.toggle("_active");
  
});

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};
const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_RIGHT.addEventListener("click", moveRight);
BTN_LEFT.addEventListener("click", moveLeft);

let createCard = (img, name) => {
  let cardNew = document.createElement("div");
  cardNew.classList.add("card");

  let pictur = document.createElement("IMG");
  pictur.setAttribute("src", img);
  cardNew.appendChild(pictur);

  const cardName = document.createElement("div");
  cardName.classList.add("card__name");
  cardName.innerText = name;
  cardNew.appendChild(cardName);
  const btn = document.createElement("button");
  btn.classList.add("card__learnmore");
  btn.innerHTML = "Learn more";
  cardNew.appendChild(btn);
  return cardNew;
};
let card1 = createCard(db[0].img, db[0].name);
let card2 = createCard(db[1].img, db[1].name);
let card3 = createCard(db[2].img, db[2].name);
let card4 = createCard(db[3].img, db[3].name);
let card5 = createCard(db[4].img, db[4].name);
let card6 = createCard(db[5].img, db[5].name);
let card7 = createCard(db[6].img, db[6].name);
let card8 = createCard(db[7].img, db[7].name);

CAROUSEL.addEventListener("animationend", (animation) => {
  if (animation.animationName === "move-left") {
    document.querySelector("#card-center").innerHTML = CARD_LEFT.innerHTML;
    CARD_LEFT.innerHTML = " ";

    CARD_LEFT.appendChild(card1)
    CARD_LEFT.appendChild(card5)
    CARD_LEFT.appendChild(card3)

    CAROUSEL.classList.remove("transition-left");
  } else {
    document.querySelector("#card-center").innerHTML = CARD_RIGHT.innerHTML;
    CARD_RIGHT.innerHTML = " ";

    CARD_RIGHT.appendChild(card6)
    CARD_RIGHT.appendChild(card7)
    CARD_RIGHT.appendChild(card3)
    CAROUSEL.classList.remove("transition-right");
  }

  BTN_RIGHT.addEventListener("click", moveRight);
  BTN_LEFT.addEventListener("click", moveLeft);
});

// CAROUSEL.addEventListener('animationstart', (animation) => {
//     if(animation.animationName === "move-right") {
//         document.querySelector('#card-center').innerHTML = CARD_LEFT.innerHTML

// const card2 = document.createElement('div')
// card2.classList.add('card')
// card2.innerText = Math.floor(Math.random()*8)

// const card3 = document.createElement('div')
// card3.classList.add('card')
// card3.innerText = Math.floor(Math.random()*8)

// CARD_LEFT.innerHTML = " "

// for(let i = 0; i < 3; i++) {
//     CARD_LEFT.appendChild(card23(db[5].img, db[5].name))
// }

// CARD_LEFT.appendChild(card2)
// CARD_LEFT.appendChild(card3)
//     }
// })
