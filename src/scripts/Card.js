import heart from '../assets/img/heart.png';
import heartBlack  from '../assets/img/heart_black.png';

import { PopupWithImage } from "./PopupWhitImage.js";

export const initialCards = [{
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
},
    {
        name: "Lago Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

export class Card {

    static elementsPlace = document.querySelector(".elements");

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector
    }


    static setupCard(cardItem) {
        const card = new Card(cardItem, ".elements__element");
        const cardElement = card.generateCard();

        return cardElement;

    }
    

    static setupLikeButton(e) {
            if (e.target.className === "elements__icon") {
                if (e.target.src.includes("black")) {
                    e.target.src = heart;
                } else {
                    e.target.src = heartBlack;
                }
            }
        }


    _getTemplate(){
        const cardElement = document.querySelector("template").content
            .querySelector(this._cardSelector).cloneNode(true);
        return cardElement;
    }

    generateCard(){
        // inserts in the DOM the card
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__place").textContent = this._name;
        this._element.querySelector(".elements__photo").src = this._link;
        this._element.querySelector(".elements__photo").alt = this._name;

        return this._element
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
            Card.setupLikeButton(e);
        })

    }
}

