function createDataContainer(data) {
    const container = document.querySelector('.container');

    const name = document.createElement('p');
    const nameStrong = document.createElement('strong');
    nameStrong.textContent = "Nombre:";
    name.append(nameStrong, ` ${data.nombre}`);

    const surname = document.createElement('p');
    const surnameStrong = document.createElement('strong');
    surnameStrong.textContent = "Apellidos:";
    surname.append(surnameStrong, ` ${data.apellidos}`);

    const age = document.createElement('p');
    const ageStrong = document.createElement('strong');
    ageStrong.textContent = "Edad:";
    age.append(ageStrong, ` ${data.edad}`);

    const email = document.createElement('p');
    const emailStrong = document.createElement('strong');
    emailStrong.textContent = "Correo Electrónico:";
    email.append(emailStrong, ` ${data.email}`);

    const phone = document.createElement('p');
    const phoneStrong = document.createElement('strong');
    phoneStrong.textContent = "Teléfono:";
    phone.append(phoneStrong, ` ${data.telefono}`);

    container.append(name, surname, age, email, phone);
}

const fields = [
    { id: "nombre", validate: (param) => { return isValidNombre(param); }, errorMsg: "Ingrese un nombre válido (letras)" },
    { id: "apellidos", validate: (param) => { return isValidApellidos(param); }, errorMsg: "Ingrese unos apellidos válidos (letras)" },
    { id: "edad", validate: (param) => { return isValidEdad(param); }, errorMsg: "Ingrese una edad válida (número entre 0 y 100)" },
    { id: "email", validate: (param) => { return isValidEmail(param); }, errorMsg: "Ingrese un correo electrónico válido" },
    { id: "telefono", validate: (param) => { return isValidTelefono(param); }, errorMsg: "Ingrese un teléfono válido (9 dígitos)" },
];

function markField(field, isValid) {
    const errorElement = document.querySelector(`.form__error--${field.id}`);
    errorElement.textContent = isValid ? "" : field.errorMsg;
}

function isValidNombre(param) {
    const regex = /^([a-zA-ZáéíóúÁÉÍÓÚ]+(\s[a-zA-ZáéíóúÁÉÍÓÚ])*)+$/;
    return regex.test(param);
}

function isValidApellidos(param) {
    const regex = /^([a-zA-ZáéíóúÁÉÍÓÚ]+(\s[a-zA-ZáéíóúÁÉÍÓÚ])*)+$/;
    return regex.test(param);
}

function isValidEdad(param) {
    const age = parseInt(param, 10);
    return !isNaN(age) && age >= 0 && age <= 100;
}

function isValidEmail(param) {
    const regex = /^([a-z]|[A-Z]|[0-9])+@(([a-z]|[A-Z]|[0-9])+\.)+[a-z]{2,3}$/;
    return regex.test(param);
}

function isValidTelefono(param) {
    const regex = /^[0-9]{9}$/;
    return regex.test(param);
}

function validateFields() {
    let hasError = false;

    fields.forEach((field) => {
        const inputElement = document.getElementById(field.id);
        const isValid = field.validate(inputElement.value);
        if (!isValid) {
            hasError = true;
        }

        markField(field, isValid);
    });

    return !hasError;
}

const form = document.querySelector('form');
const formStatus = document.querySelector('.form__status');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateFields()) {
        return;
    }

    const formData = new FormData(form);

    fetch('https://jsonplaceholder.typicode.com/postsa', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => {
            if (!response.ok) {
                formStatus.textContent = `ERROR ${response.status}`;
                formStatus.classList.add('form__status--error');

                throw new Error(`ERROR: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            formStatus.textContent = '¡ENVIADO!';
            formStatus.classList.add('form__status--success');

            createDataContainer(data);

            form.reset();
        })
        .catch(error => {
            console.error(error);
        });
});
