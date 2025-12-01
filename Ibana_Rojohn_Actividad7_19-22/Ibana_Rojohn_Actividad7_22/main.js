const containerElement = document.getElementById("container");

function interpretKey(key) {
    if (key === "Backspace") {
        containerElement.textContent = containerElement.textContent.slice(0, containerElement.textContent.length - 1);
    } else if(key.match(/^[a-zA-Z0-9\sñáéíóúÑÁÉÍÓÚ]$/)) {
        containerElement.textContent += e.key;
    }
}

function emptyContent() {
    containerElement.replaceChildren();
}

document.body.addEventListener("keydown", (e) => {
    interpretKey(e.key);
})

document.body.addEventListener("click", (e) => {
    if (e.target.id === "resetBtn") {
        emptyContent();
    }
})
