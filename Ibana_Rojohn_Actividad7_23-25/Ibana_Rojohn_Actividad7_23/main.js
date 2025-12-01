const containerElement = document.getElementById("container");

function moveInsideBorders(element) {
    console.log(element.getBoundingClientRect().height);
    const randomX = Math.random() * (window.innerHeight - element.getBoundingClientRect().height);
    const randomY = Math.random() * (window.innerWidth - element.getBoundingClientRect().width);
    element.style.top = `${randomX}px`;
    element.style.left = `${randomY}px`;
}

containerElement.addEventListener("mouseover", (e) => {
    moveInsideBorders(containerElement);
});
