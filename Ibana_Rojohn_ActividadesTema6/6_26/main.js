// Crea una lista desordenada con diez elementos. Luego pregunta al usuario
// si la quiere ordenar. Si pulsa Aceptar la lista debe ordenarse alfabéticamente.

const ulElement = document.createElement("ul");
fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then(response => response.json())
    .then(words => {
        words.forEach(word => {
            const liElement = document.createElement("li");
            liElement.textContent = word;
            ulElement.appendChild(liElement);
        })

        document.body.appendChild(ulElement);
        
        setTimeout(() => {
            if (confirm("¿Ordenar alfabéticamente?")) {
                const sortedWords = [];
                const liElements = document.getElementsByTagName("li");
                for (const liElement of liElements) {
                    sortedWords.push(liElement.textContent);
                }
                
                sortedWords.sort((a, b) => { return a.localeCompare(b) });
                ulElement.textContent = "";

                sortedWords.forEach(word => {
                    const liElement = document.createElement("li");
                    liElement.textContent = word;
                    ulElement.appendChild(liElement);
                })
            }
        }, 0);

    });


