import css from "./styles/index.css";
import { apiElement } from "./scripts/Api.js";

import FormValidator from "../src/scripts/FormValidator.js";

import heartBlack from './assets/img/heart_black.png';
import Section, {fillInitCards} from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo";

// agregar listener al boton que lanza el form para agregar cards
const add_card_button = document.querySelector('.profile__btn-image');
add_card_button.addEventListener("click", openFormImages)

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


function openFormAvatar() {

        const config = {
            formName: "elements-modal__container",
            type: "avatar",
            selector: ".elements-modal",
            closeButtonSelector: ".elements-modal__close-icon"
        }

        const popupElement = new PopupWithForm(config)
        popupElement.open();

        popupElement.setEventListeners();

}


document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.profile__btn-image').addEventListener("click", openFormImages)
document.querySelector('.profile__img').addEventListener("click", openFormAvatar)

let cardsArray = []
apiElement.getDataCard().then((res) => {
    cardsArray = res
    fillInitCards(cardsArray);

    apiElement.getDataProfile().then(({name, about, avatar, _id}) => {
        const userObj = new UserInfo(".profile__name", ".profile__about", ".profile__img");
        userObj.setUserInfo(name, about, avatar);

        // funcion para agreaar los likes
        cardsArray.forEach((card) => {
            let ownner_id = card.owner._id

            let currentId = card._id;
            let likesArray = card.likes

            if (likesArray.length > 0) {

                // check if _id exists in likesArray
                console.dir(likesArray)
                likesArray.forEach((like) => {
                    if (like._id === _id) {
                        // la idea fue encontrar quienes ya tenian el like con el userID y esos que ya tuvieran el like
                        // se les agregaba el corazon.
                        document.getElementById(currentId).querySelector(".elements__button img").src = heartBlack
                    }
                })
            }

            if (_id !== ownner_id) {
                document.getElementById(currentId).parentElement.querySelector(".elements__trash").style.display = "none"
            }
        })
    })
})





