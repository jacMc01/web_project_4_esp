// Primero, selecciona todos los elementos necesarios del formulario, y asígnalos a variables
const formElement = document.querySelector(".popup__form");
const formInput = formElement.querySelector(".popup__name");


// Escribe el código de la primera función, que muestra el elemento erróneo
const showInputError = (element) => {
    element.classList.add("popup__name-error");
    element.classList.add("popup__about-error");
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideInputError = (element) => {
    element.classList.remove("popup__name-error");
    element.classList.remove("popup__about-error");
};

// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValid = () => {
    if (!formInput.validity.valid) {
        // Si NO lo es (!), muestra el elemento erróneo
        showInputError(formInput);
    } else {
        // Si es válido, oculta el elemento erróneo
        hideInputError(formInput);
    }
};

formElement.addEventListener("submit", function(evt) {
    // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
    evt.preventDefault();
    console.log("Formulario enviado");
});

// Llama a la función isValid() para cada entrada de caracteres
formInput.addEventListener("Input se ejecuta", isValid);