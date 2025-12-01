const textElement = document.querySelector("p");
const letters = "aeiou".split('');

letters.forEach((letter) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = letter;
    document.body.appendChild(buttonElement);
});

function removeLetter(letter) {
    textElement.textContent = textElement.textContent.replaceAll(letter, "");
    textElement.textContent = textElement.textContent.replaceAll(letter.toUpperCase(), "");
}

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        removeLetter(e.target.textContent);
    }
})
