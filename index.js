const initialCards = [{
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

const cardTemplate = document.querySelector("#elements").textContent;
const cardsContainer = document.querySelector(".elements__element");

const addElement = function() {
    initialCards.forEach(function(item) {
        const cardElement = cardTemplate.querySelector(".elements__element").cloneNode(true);

        cardElement.querySelector(".elements__place").textContent = item.name;
        cardElement.querySelector(".elements__photo").src = item.link;
        cardElement.querySelector(".elements__photo").alt = item.name;
    });
};


let formElement = document.querySelector('.popup__form');
let formButton = document.querySelector('.popup__button-form');
let profileButton = document.querySelector('.profile__btn');


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


function openFormImages() {
    document.querySelector(".form").style.display = "block";
}

function closeFormImages() {
    document.querySelector(".form").style.display = "none";
}

document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.popup__button-close').addEventListener("click", closeForm)
document.querySelector(".popup__button-form").addEventListener("click", handleProfileFormSubmit)
document.querySelector('.profile__btn').addEventListener("click", openFormImages)
document.querySelector('.form__button').addEventListener("click", closeFormImages)