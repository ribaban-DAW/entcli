// Escribe un programa que compruebe cada 15 segundos si existen cookies y las borre.
// Recuerda que para borrar una cookie tiene que indicar su identificador,
// por ej: document.cookie = "miCookie=; max-age=0; path=/";

function cleanCookies() {
    const cookies = getCookies();
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        deleteCookie(name);
    }
}

setCookie("a", "123", 60 * 60);
setCookie("b", "999", 60 * 60);

setInterval(cleanCookies, 15 * 1000);
setInterval(() => { setCookie("hello", "world"); }, 10 * 1000);
