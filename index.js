function openForm() {
    document.querySelector(".popup").style.display = "block";
}

function closeForm() {
    document.querySelector(".popup").style.display = "none";
}

document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.popup__button-close').addEventListener("click", closeForm)


// Busquemos el formulario en el DOM
let formElement = document.querySelector('.popup__form');
let formButton = document.querySelector('.popup__button-form');


// Lo siguiente es el manipulador (handler) de entrega de formularios
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
    let nameInput = document.querySelector('.popup__name');
    let aboutInput = document.querySelector('.popup__about');

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente
    let name = nameInput.value;
    let about = aboutInput.value;

    // Selecciona los elementos donde se introducirán los valores de los campos
    let profile__name = document.querySelector('.profile__name');
    let profile__about = document.querySelector('.profile__about');

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
    profile__name.textContent = name;
    profile__about.textContent = about;

}

document.querySelector(".popup__button-form").addEventListener("click", handleProfileFormSubmit);


// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega de formulario
// formElement.addEventListener('click', handleProfileFormSubmit);