import { Popup } from "./Popup.js";
import {Card} from "./Card.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

export default class PopupWithForm extends Popup{
  constructor(config) {
    super(config);
  }

  _getInputValues(evt){

    if (this._config.type === "profile") {
      return {
        "field1": evt.target.form.elements.popup__name.value,
        "field2": evt.target.form.elements.popup__about.value
      }
    }

    if (this._config.type === "card") {
        return {
            "field1": evt.target.form.elements.form__name.value,
            "field2": evt.target.form.elements.form__about.value
        }
    }

  }

  close(evt, modal) {
    super.close();

    if (modal._config.type === "profile") {
      evt.target.form.elements.popup__name.value = "";
      evt.target.form.elements.popup__about.value = "";
    }
    if(modal._config.type === "card"){
      evt.target.form.elements.form__name.value = "";
      evt.target.form.elements.form__about.value = "";
    }
  }

  //PROFILE
  static handleProfileFormSubmit(evt, modal) {
    evt.preventDefault();

    const formValues = modal._getInputValues(evt);

    const userObj = new UserInfo(".profile__name", ".profile__about");
    userObj.setUserInfo(formValues.field1,formValues.field2);

    setTimeout(modal.close(evt, modal), 175)

  }

  //CARDS
  static event_add_card(e, modal) {
    e.preventDefault();
    const formValues = modal._getInputValues(e);

    const cardItem = {
    "name": formValues.field1, "link": formValues.field2
    }

    const card = new Card(cardItem, ".elements__element")
    const cardElement = card.generateCard(true);

    Card.elementsPlace.append(cardElement);

    setTimeout(modal.close(e, modal), 175)
  }

    setEventListeners(){
        super.setEventListeners();
        const modal = new PopupWithForm(this._config);
        if (this._config.type === "profile") {
          // set de codigo para editar el perfil
          document.querySelector(".popup__button-form").addEventListener("click", (e) => {

            PopupWithForm.handleProfileFormSubmit(e, modal)
          })
        }
        if (this._config.type === "card"){
          document.querySelector('.form__button-form').addEventListener("click", (e) => {
            PopupWithForm.event_add_card(e, modal)
          })
        }
    }

}