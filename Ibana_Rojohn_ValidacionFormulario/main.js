const fields = [
    {id: "name", regex: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/, errorMsg: "Nombre inválido" },
    {id: "surname", regex: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/, errorMsg: "Apellido inválido" },
    {id: "phone", regex: /^((\+34)?\s?)[6-9]\d{2}\s?((\d{3}\s?){2}|(\d{2}\s?){3})$/, errorMsg: "Teléfono inválido" },
    {id: "email", regex: /^[\w\.]*@\w*\.(com|es)$/, errorMsg: "Correo inválido" },
    {id: "dni", regex: /^\d{8}[a-zA-Z]$/, errorMsg: "DNI inválido" },
    {id: "iban", regex: /^([eE][sS]\d{2})\s?(\d{4}\s?){5}$/, errorMsg: "IBAN inválido" },
    {id: "dob", regex: /^((0?[1-9])|([1-2][0-9])|(3[0-1]))\/((0?[1-9])|1[0-2])\/[1-9]\d{3}$/, errorMsg: "Fecha de nacimiento inválida" },
    {id: "postal-code", regex: /^((0[1-9])|([1-4][1-9])|(5[0-2]))\d{3}$/, errorMsg: "Código Postal inválido" },
    {id: "credit-card", regex: /^(\d{4}\s?){4}$/, errorMsg: "Tarjeta de crédito inválida" },
    {id: "vehicle", regex: /^\d{4}\s?[a-zA-Z]{3}$/, errorMsg: "Vehículo inválido" },
    {id: "social-security", regex: /^\d{3}-\d{2}-\d{4}$/, errorMsg: "Seguridad Social inválido" },
    {id: "url", regex: /^(http(s)?:\/\/)?(\w{3}\.)?\w*\.(com|es)$/, errorMsg: "URL inválida" },
];

const formElement = document.getElementById("validation-form");
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    fields.forEach((field) => {
        const inputElement = document.getElementById(field.id);

        if (!field.regex.test(inputElement.value)) {
            console.log(inputElement.value);
            console.log(field.regex);
            alert(field.errorMsg);
            valid = false;
        }
    })

    if (valid) {
        alert("El formulario está bien");
    }
})
