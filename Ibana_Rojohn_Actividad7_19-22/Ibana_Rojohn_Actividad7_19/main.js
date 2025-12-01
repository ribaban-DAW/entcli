const containerElement = document.getElementById("container");

function loadImage(imgSrc) {
    containerElement.textContent = "";

    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    containerElement.appendChild(imgElement);
}

document.body.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            loadImage(`img/img${e.key}.png`);
            break;
        default:
            break;
    }
});
