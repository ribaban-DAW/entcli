const verdeElement = document.getElementById("verde");
const rojoElement = document.getElementById("rojo");
let finish = false;

function increaseSize(element) {
    if (finish) {
        return;
    }

    const newWidth = element.getBoundingClientRect().width + 5;
    element.style.width = `${newWidth}px`;
    if (newWidth === 500) {
        alert(`GANA ${element.id.toUpperCase()}`);
        finish = true;
    }
}

document.body.addEventListener("keyup", (e) => {
    if (e.key === "a") {
        increaseSize(verdeElement);
    } else if (e.key === "ñ") {
        increaseSize(rojoElement);
    }
})
