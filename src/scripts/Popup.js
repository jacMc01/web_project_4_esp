export class Popup{
    constructor(config){
        this._config = config;
        this._popup = document.querySelector(config.selector);
        this._selector = config.selector;
        this._buttonCloseSelector = config.closeButtonSelector;
    }

    open(){
        this._popup.style.display = "block";
    }

    close(){
        this._popup.style.display = "none";
    }

    static _handleEscClose(e, modal, classFormSelector) {
        if (e.key === "Escape") {
            if (classFormSelector === ".elements-popup") {
                modal.remove()
                return
            }
            modal.close();
        }

        if (classFormSelector === ".form") {
            if (!e.target.closest(classFormSelector) && !(e.target.classList.contains("profile__btn-image") || e.target.classList.contains("profile__btn"))) {
                modal.close();
            }
        }
        if (classFormSelector === ".popup") {
            if (!e.target.closest(classFormSelector) && !(e.target.classList.contains("profile__button-person") || e.target.classList.contains("profile__icon"))) {
                modal.close();
            }
        }



    }

    setEventListeners(){
        const modal = new Popup(this._config);
        const classFormSelector = this._selector
        document.addEventListener("keydown", (e) => {

            Popup._handleEscClose(e, modal, classFormSelector);
        });
        document.querySelector(this._buttonCloseSelector).addEventListener("click", () => {
            modal.close();
        });
        document.addEventListener("click", (e) => {
            Popup._handleEscClose(e, modal, classFormSelector);
        });
    }
}


