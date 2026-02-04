const fields = [
    { id: "nombre", validate: (param) => { return isValidNombre(param); }, errorMsg: "Ingrese un nombre válido (letras)" },
    { id: "email", validate: (param) => { return isValidEmail(param); }, errorMsg: "Ingrese un correo electrónico válido" },
    { id: "password", validate: (param) => { return isValidPassword(param); }, errorMsg: "Ingrese una contraseña válida (mínimo 16 caracteres)" },
];

function markField(field, isValid) {
    const errorElement = document.querySelector(`.form__error--${field.id}`);
    errorElement.textContent = isValid ? "" : field.errorMsg;
}

function isValidNombre(param) {
    const regex = /^([a-zA-ZáéíóúÁÉÍÓÚ]+(\s[a-zA-ZáéíóúÁÉÍÓÚ])*)+$/;
    return regex.test(param);
}

function isValidEmail(param) {
    const regex = /^([a-z]|[A-Z]|[0-9])+@(([a-z]|[A-Z]|[0-9])+\.)+[a-z]{2,3}$/;
    return regex.test(param);
}

function isValidPassword(param) {
    return param.length >= 16;
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

    fetch('registro.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                formStatus.textContent = `ERROR ${response.status}`;
                formStatus.classList.add('form__status--error');

                throw new Error(`ERROR: ${response.status}`);
            }

            return response.text();
        })
        .then(data => {
            formStatus.textContent = data;
            formStatus.classList.add('form__status--success');

            form.reset();
        })
        .catch(error => {
            console.error(error);
        });
});
