const dirs = [
    {"name": "ArrowUp", "value": -1},
    {"name": "ArrowDown", "value": 1},
    {"name": "ArrowLeft", "value": -1},
    {"name": "ArrowRight", "value": 1},
];

function getCoords(element) {
    const rect = element.getBoundingClientRect();
    return {
        "x": rect.top,
        "y": rect.left,
    };
}

function moveElement(element, dir) {
    const speed = 10;
    const coords = getCoords(element);
    switch (dir.name) {
        case "ArrowUp":
        case "ArrowDown":
            element.style.top = `${coords.x + (speed * dir.value)}px`;
            break;
        case "ArrowLeft":
        case "ArrowRight":
            element.style.left = `${coords.y + speed * dir.value}px`;
            break;
        default:
            break;
    }
}

const containerElement = document.getElementById("container")
document.body.addEventListener("keydown", (e) => {
    for (const dir of dirs) {
        if (dir.name === e.key) {
            moveElement(containerElement, dir);
            break;
        }
    }
})
