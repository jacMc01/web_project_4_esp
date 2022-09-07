import heart from '../assets/img/heart.png';
import heartBlack  from '../assets/img/heart_black.png';
import { apiElement } from './Api.js';

import { PopupWithImage } from "./PopupWhitImage.js";

export class Card {
    static elementsPlace = document.querySelector(".elements");

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector
        this._likesArray = data.likes;
        this._cardID = data._id;
        // this._trashButton = data.trashButton;
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
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__place").textContent = this._name;
        this._element.querySelector(".elements__photo").src = this._link;
        this._element.querySelector(".elements__photo").alt = this._name;


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

        const cardID = e.target.parentElement.parentElement.id
        if (reduce) {
            const res = apiElement.deleteLike(cardID)
            elementCounter.textContent =  currentLikes - 1
        }else{
            const res = apiElement.putLike(cardID)
            elementCounter.textContent =  currentLikes + 1
        }
    }

    _setEventListeners(){

        const link = this._link

        let config = {
            "selector": ".popup-image",
            "closeButtonSelector": ".popup-image__img",
        }

        this._element.querySelector(".elements__photo").addEventListener("click", () => {

            const popupImage = new PopupWithImage(config);
            popupImage.open(link);
        })

        PopupWithImage.closeImage.addEventListener("click", () => {
            const closeImage = new PopupWithImage(config);
            closeImage.close();
        })

        this._element.querySelector(".elements__trash").addEventListener("click", () => {

            // show popup from template with class elements-popup
            let popupTemplate = document.querySelector("template").content.querySelector(".elements-popup")
            let popupElement = popupTemplate.cloneNode(true);

            // add event listener to popupElement button
            popupElement.querySelector(".elements-popup__button").addEventListener("click", () => {
                let cardID = this._element.querySelector(".elements__info").id
                apiElement.deleteCardData(cardID)
                this._element.remove();

                //cerrar el popup
                document.querySelector(".elements-popup").remove();

            })

            document.querySelector(".page").append(popupElement);
            document.querySelector(".elements-popup").classList.add("elements-popup_active");
        })

        this._element.querySelector(".elements__icon").addEventListener("click", (e) => {
            // Card.counterLikesButton(e);
            Card.setupLikeButton(e);
        })
    }
}



