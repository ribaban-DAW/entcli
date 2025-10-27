const formElement = document.getElementsByTagName("form")[0];
formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const divElement = [...document.getElementsByTagName("div")].at(-1);
    divElement.setAttribute("data-width", document.getElementById("div-data-width").value)
    divElement.setAttribute("data-height", document.getElementById("div-data-height").value)
    divElement.setAttribute("data-bordercolor", document.getElementById("div-data-bordercolor").value)

    divElement.style.width = `${divElement.getAttribute("data-width")}px`;
    divElement.style.height = `${divElement.getAttribute("data-height")}px`;
    divElement.style.border = `2px solid ${divElement.getAttribute("data-bordercolor")}`;
})
