// Busquemos el formulario en el DOM
let formElement = document.querySelector('.popup__form');
let formButton = document.querySelector('.popup__button-form');

function handleProfileFormSubmit(evt) {

    evt.preventDefault();

    const profile__name = document.querySelector('.profile__name');
    const profile__about = document.querySelector('.profile__about');

    profile__name.textContent = evt.target.form.elements.popup__name.value;
    profile__about.textContent = evt.target.form.elements.popup__about.value;


    setTimeout(closeForm, 175)

}

function openForm() {
    document.querySelector(".popup").style.display = "block";
}

function closeForm() {
    document.querySelector(".popup").style.display = "none";
}

document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.popup__button-close').addEventListener("click", closeForm)
document.querySelector(".popup__button-form").addEventListener("click", handleProfileFormSubmit)