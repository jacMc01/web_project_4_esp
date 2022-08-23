import Api from "./Api";

export default class UserInfo{
    constructor(nameClass, aboutClass, image){
        this._nameClass = nameClass;
        this._aboutClass = aboutClass;
        this._image = image

    }

    getUserInfo(){

        return {
            name: document.querySelector(`${this._nameClass}`).textContent,
            about: document.querySelector(`${this._aboutClass}`).textContent
        }
    }

    setUserInfo(name, about, image=null){
        
        document.querySelector(`${this._nameClass}`).textContent = name;
        document.querySelector(`${this._aboutClass}`).textContent = about;

        if(image){
            document.querySelector(`${this._image}`).src = image
        }
    }

}