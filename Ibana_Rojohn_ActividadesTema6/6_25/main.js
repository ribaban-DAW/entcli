// Crea una página HTML con mucho contenido de prueba, y un programa que tras
// la carga de la página espere 10 segundos y haga scroll hasta el final de la misma.

window.addEventListener("load", () => {
    window.scrollTo(0, document.body.scrollHeight);
})
