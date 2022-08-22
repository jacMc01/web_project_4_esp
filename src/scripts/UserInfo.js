import Api from "./Api";

export default class UserInfo{
    constructor(nameClass, aboutClass){
        this._nameClass = nameClass;
        this._aboutClass = aboutClass;

    }

    getUserInfo(){

        return {
            name: document.querySelector(`${this._nameClass}`).textContent,
            about: document.querySelector(`${this._aboutClass}`).textContent
        }
    }

    setUserInfo(name, about){
        
        document.querySelector(`${this._nameClass}`).textContent = name;
        document.querySelector(`${this._aboutClass}`).textContent = about;
    }

}