import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup {
    static popupImage = document.querySelector(".popup-image__img");
    static closeImage = document.querySelector(".popup-image__imagen");

    constructor(selector) {
        super(selector);
        this._image = PopupWithImage.popupImage
    }

    open(image) {
        this._image.src = image;
        super.open();
    }

    close() {
        this._image.src = "";
        super.close();
    } 
}