import heart from '../assets/img/heart.png';
import heartBlack  from '../assets/img/heart_black.png';
import { apiElement } from './Api.js';

import { PopupWithImage } from "./PopupWhitImage.js";
import debug from "debug";

// export const initialCards = [{
//     name: "Valle de Yosemite",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
// },
//     {
//         name: "Lago Louise",
//         link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
//     },
//     {
//         name: "Montañas Calvas",
//         link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
//     },
//     {
//         name: "Latemar",
//         link: "https://code.s3.yandex.net/web-code/latemar.jpg"
//     },
//     {
//         name: "Parque Nacional de la Vanoise",
//         link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
//     },
//     {
//         name: "Lago di Braies",
//         link: "https://code.s3.yandex.net/web-code/lago.jpg"
//     }
// ];

export class Card {

    static elementsPlace = document.querySelector(".elements");

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector
        this._likesArray = data.likes;
        this._cardID = data._id;
    }


    static setupCard(cardItem) {
        const card = new Card(cardItem, ".elements__element");
        const cardElement = card.generateCard();

        return cardElement;

    }


    static setupLikeButton(e) {
            if (e.target.className === "elements__icon") {
                if (e.target.src.includes(heartBlack)) {
                    e.target.src = heart;
                    Card.counterLikesButton(e, true);
                } else {

                    e.target.src = heartBlack;
                    Card.counterLikesButton(e);
                }
            }
        }

    _getTemplate(){
        const cardElement = document.querySelector("template").content
            .querySelector(this._cardSelector).cloneNode(true);
        return cardElement;
    }

    generateCard(api = false){
        // inserts in the DOM the card
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__place").textContent = this._name;
        this._element.querySelector(".elements__photo").src = this._link;
        this._element.querySelector(".elements__photo").alt = this._name;

        // add an id to the .elements__info attribute
        this._element.querySelector(".elements__info").id = this._cardID;

        if(api){
            apiElement.postDataCard(this._name, this._link);
            this._element.querySelector(".elements__count").textContent = 0;
        }else{
            this._element.querySelector(".elements__count").textContent = this._likesArray.length;
        }

        return this._element
    }

    static counterLikesButton(e, reduce=false) {
        let elementCounter = e.target.nextElementSibling
        let spanCounter = elementCounter.textContent
        const currentLikes = parseInt(spanCounter);
        //get the cardID from the .elements__info attribute id from e

        const cardID = e.target.parentElement.parentElement.id
        // put like con el id de la card
        // porque no funciona?
        if (reduce) {
            const res = apiElement.deleteLike(cardID)
            elementCounter.textContent =  currentLikes - 1
        }else{
            const res = apiElement.putLike(cardID)
            elementCounter.textContent =  currentLikes + 1
        }



    }


    _setEventListeners(){
        this._element.querySelector(".elements__photo").addEventListener("click", () => {
            const popupImage = new PopupWithImage(".popup-image");
            popupImage.open(this._link);
        })

        PopupWithImage.closeImage.addEventListener("click", () => {
            const closeImage = new PopupWithImage(".popup-image");
            closeImage.close();
        })

        this._element.querySelector(".elements__trash").addEventListener("click", () => {
            this._element.remove();
        })

        this._element.querySelector(".elements__icon").addEventListener("click", (e) => {

            // Card.counterLikesButton(e);
            Card.setupLikeButton(e);

        })
    }

}

