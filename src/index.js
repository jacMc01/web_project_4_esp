import css from "./styles/index.css";


import {Card} from "../src/scripts/Card.js";
import FormValidator from "../src/scripts/FormValidator.js";

// import * as utils from "./utils.js";
import {fillInitCards} from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";


function importAll(r) {
    return r.keys().map(r);
}
  
const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));


const elements = document.querySelector(".elements");

// funcion para agregar las cards.
// se usa para hacer el llenado inicial y agregar con el boton
const addCard = (url, description) => {
    const cardData = {
        name: description,
        link: url
    }

    const card = new Card(cardData, ".elements__element");
    const cardElement = card.generateCard();

    elements.appendChild(cardElement);
}

// agregar listener al boton que lanza el form para agregar cards
const add_card_button = document.querySelector('.profile__btn-image');
add_card_button.addEventListener("click", openFormImages)

// set de codigo para agregar una card individual.




function openForm() {

    const config = {
        formName: "popup__form",
        type: "profile",
        selector: ".popup",
        closeButtonSelector: ".popup__button-close"
    }

    const popupElement = new PopupWithForm(config)

    popupElement.open();

    const validationObject = new FormValidator(config);
    validationObject.enableValidation();
    popupElement.setEventListeners();
}


function openFormImages() {

    const config = {
        formName: "form__form",
        type: "card",
        selector: ".form",
        closeButtonSelector: ".form__button"
    }

    const popupElement = new PopupWithForm(config)
    popupElement.open();


    const validationObject = new FormValidator(config);
    validationObject.enableValidation();



    popupElement.setEventListeners();

}

document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.profile__btn-image').addEventListener("click", openFormImages)


fillInitCards()
