// Crea una cookie que almacene dos datos solicitados al usuario: su nombre y su edad.
// La cookie debe caducar en 30 minutos.

const maxAgeDuration = 60 * 30;
setCookie("nombre", "Yo", maxAgeDuration);
setCookie("edad", "22", maxAgeDuration);

console.log(getCookie("nombre"));
console.log(getCookie("edad"));
