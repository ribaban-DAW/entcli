function markField(field, isValid) {
    const errorElement = document.getElementById(`error-${field.id}`);
    errorElement.textContent = isValid ? "" : field.errorMsg;
}

function getCategoryPrice() {
    const category = document.getElementById("habitacion").value;
    const formattedCategory = category.trim().toLowerCase();

    if (formattedCategory === "individual") {
        return 80;
    } else if (formattedCategory === "doble") {
        return 120;
    } else if (formattedCategory === "suite") {
        return 200;
    }

    return -1; // Aquí nunca debería llegar
}

function isWeekend(currentDate) {
    const weekDay = new Date(currentDate).getDay();

    // 6 es sábado, 0 es domingo
    return weekDay === 6 || weekDay === 0;
}

function calculatePrice() {
    const categoryPrice = getCategoryPrice();
    const nights = document.getElementById("noches").value;

    let price = categoryPrice * nights;
    if (nights > 7) {
        price -= (price * 0.1);
    }

    const currentDate = document.getElementById("fecha").value;
    if (isWeekend(currentDate)) {
        price += 30;
    }

    return price;
}

function showMessage(isValidForm) {
    const resultadoElement = document.getElementById("resultado");

    if (!isValidForm) {
        resultadoElement.textContent = "";
        return;
    }

    const name = document.getElementById("nombre").value;
    const price = calculatePrice();

    resultadoElement.textContent = `Estimado/a ${name}, el precio total de su reserva es: $${price.toFixed(2)}`;
}

function isValidNombre(param) {
    const regex = /^([a-z]|[A-Z]|(á|é|í|ó|ú)|(Á|É|Í|Ó|Ú))+(\s([a-z]|[A-Z]|(á|é|í|ó|ú|ñ)|(Á|É|Í|Ó|Ú|Ñ))+)+$/;
    return regex.test(param);
}

function isValidEmail(param) {
    const regex = /^([a-z]|[A-Z]|[0-9])+@(([a-z]|[A-Z]|[0-9])+\.)+[a-z]{2,3}$/;
    return regex.test(param);
}

function isValidPasaporte(param) {
    const regex = /^([a-z]|[A-Z])[0-9]{7}$/;
    return regex.test(param);
}

function isValidFecha(param) {
    const givenDate = new Date(param);
    const currentDate = new Date();

    return givenDate > currentDate;
}

function isValidNoches(param) {
    return param >= 1 && param <= 30;
}

function isValidHabitacion(param) {
    return param !== "";
}

const fields = [
    {id: "nombre", validate: (param) => { return isValidNombre(param); }, regex: /^([a-z]|[A-Z]|(á|é|í|ó|ú)|(Á|É|Í|Ó|Ú))+(\s([a-z]|[A-Z]|(á|é|í|ó|ú|ñ)|(Á|É|Í|Ó|Ú|Ñ))+)+$/, errorMsg: "Ingrese un nombre válido (letras y al menos dos palabras)"},
    {id: "email", validate: (param) => { return isValidEmail(param); }, regex: /^([a-z]|[A-Z]|[0-9])+@(([a-z]|[A-Z]|[0-9])+\.)+[a-z]{2,3}$/, errorMsg: "Email inválido"},
    {id: "pasaporte", validate: (param) => { return isValidPasaporte(param); }, regex: /^[a-z][A-Z][0-9]{7}$/, errorMsg: "Formado inválido. Ejemplo: X1234567"},
    {id: "fecha", validate: (param) => { return isValidFecha(param); }, regex: /^asd$/, errorMsg: "La fecha debe ser posterior a hoy."},
    {id: "noches", validate: (param) => { return isValidNoches(param); }, regex: /^([1-9])|([1-2][0-9])|(30)$/, errorMsg: "Número de noches entre 1 y 30"},
    {id: "habitacion", validate: (param) => { return isValidHabitacion(param); }, regex: /^asd$/, errorMsg: "Seleccione un tipo de habitación"},
];

function validateFields() {
    let hasError = false;

    fields.forEach((field) => {
        const inputElement = document.getElementById(field.id);
        const isValid = !field.validate(inputElement.value);
        if (!isValid) {
            hasError = true;
        }
        
        markField(field, isValid);
    });

    return !hasError;
}

document.body.addEventListener("submit", (e) => {
    if (e.target.id === "reserva-form") {
        e.preventDefault();
        const isValidForm = validateFields();
        showMessage(isValidForm);
    }
})