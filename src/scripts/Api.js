// import PopupWithForm from "./PopupWithForm";
import UserInfo from "./UserInfo";


export default class Api {
  constructor({baseUrl, headers}) {

    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = headers.authorization;

    this._urlProfile = this._baseUrl + "/users/me";
    this._urlCard = this._baseUrl + "/cards";

  }

  getDataProfile(){
    fetch(this._urlProfile, {
      method: "GET",
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      }
    })
    .then(res => res.json())
    .then(({name, about, avatar}) => {
      const userObj = new UserInfo(".profile__name", ".profile__about", ".profile__img");
      userObj.setUserInfo(name, about, avatar);
    })
  }

  getDataCard(){
    fetch(this._urlCard, {
      method: "GET",
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      }
    })
    .then(res => res.json())
    .then((res) => {
      return res;
    })
  }
  
  postDataProfile(name, about){
    return fetch(this._urlProfile, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => res.json())
    .then((res) => {
      return res;
    })
  }

  postDataCard(name, link){
    return fetch(this._urlCard, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => res.json())
    .then((result) => {
      return result;
    })
  }
}