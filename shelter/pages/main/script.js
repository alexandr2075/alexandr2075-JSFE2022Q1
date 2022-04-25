import { db } from "./db.js";


const BURGER = document.querySelector(".burger");
const HEADER = document.querySelector(".header");
const MENU = document.querySelector(".menu");
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

const CARD_CENTER = document.querySelector("#card-center");



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

           /* BURGER */

BURGER.addEventListener("click", () => {
  BODY.classList.toggle("_active");
  HEADER.classList.toggle("_active");
  BURGER.classList.toggle("_active");
  MENU.classList.toggle("_active");
  
});


          /* CAROUSEL */

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



CAROUSEL.addEventListener("animationend", (animation) => {
  if (animation.animationName === "move-left") {
    document.querySelector("#card-center").innerHTML = CARD_LEFT.innerHTML;


    let nameCardsCenter = []
    let cardsCenter =  CARD_CENTER.querySelectorAll(".card__name")
    
    for(let name of cardsCenter) {
      nameCardsCenter.push(name.innerText)
    }

    let newCards = []
    console.log(db)
    db.forEach((pet) => {
      if(!nameCardsCenter.includes(pet.name)) {
        newCards.push(createCard(pet.img, pet.name))
      }
    })
    nameCardsCenter = []


    CARD_LEFT.innerHTML = " ";

    CARD_LEFT.appendChild(newCards[0])
    CARD_LEFT.appendChild(newCards[1])
    CARD_LEFT.appendChild(newCards[2])

    CAROUSEL.classList.remove("transition-left");
  } else {
    document.querySelector("#card-center").innerHTML = CARD_RIGHT.innerHTML;


    let nameCardsCenter = []
    let cardsCenter =  CARD_CENTER.querySelectorAll(".card__name")
    
    for(let name of cardsCenter) {
      nameCardsCenter.push(name.innerText)
    }

    console.log(nameCardsCenter)
    let newCards = []
    console.log(db)
    db.forEach((pet) => {
      if(!nameCardsCenter.includes(pet.name)) {
        newCards.push(createCard(pet.img, pet.name))
      }
    })
    nameCardsCenter = []


    CARD_RIGHT.innerHTML = " ";
    CARD_RIGHT.appendChild(newCards[0])
    CARD_RIGHT.appendChild(newCards[1])
    CARD_RIGHT.appendChild(newCards[2])
    CAROUSEL.classList.remove("transition-right");
  }

  BTN_RIGHT.addEventListener("click", moveRight);
  BTN_LEFT.addEventListener("click", moveLeft);
});


