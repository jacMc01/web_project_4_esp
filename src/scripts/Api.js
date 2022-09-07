import debug from "debug";

export default class Api {


  constructor({baseUrl, headers}) {

    this._cardsArray = null

    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = headers.authorization;

    this._urlProfile = this._baseUrl + "users/me";
    this._urlCard = this._baseUrl + "cards";


  }

  getDataProfile(){
    return fetch(this._urlProfile, {
      method: "GET",
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      }
    })
    .then(res => res.json())
  }

  getDataCard(){
    return fetch(this._urlCard, {
      method: "GET",
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      }
    })
    .then(res => res.json())
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
  }

  putLike(cardId) {
    return fetch(this._urlCard + "/likes/" + cardId, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(res => res.json())
  }

  deleteLike(cardId) {
    return fetch(this._urlCard + "/likes/" + cardId, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(res => res.json())
  }
  
  patchDataProfile(name, about){
    return fetch(this._urlProfile, {
      method: "PATCH",
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
  }

  patchDataCard(name, link){
    return fetch(this._urlCard, {
      method: "PATCH",
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
  }

  deleteCardData(id) {
    return fetch(this._urlCard + "/" + id, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(res => res.json())
  }
}

export const apiElement = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-1-es/",
  headers: {
      authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
  }
}); 
//https://around.nomoreparties.co/v1/cohort-1-es/cards/likes/62daab5cd8ece101d89746ce
