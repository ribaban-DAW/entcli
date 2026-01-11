function createCard(film) {
    const card = document.createElement('article');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.title;
    img.classList.add('card__image');

    const content = document.createElement('div');
    content.classList.add('card__content');

    const title = document.createElement('h2');
    title.classList.add('card__title');
    title.textContent = `${film.title} (${film.release_date})`;

    const subtitle = document.createElement('span');
    subtitle.classList.add('card__subtitle');
    subtitle.textContent = `${film.original_title} (${film.original_title_romanised})`;

    const director = document.createElement('p');
    director.classList.add('card__director');
    const directorStrong = document.createElement('strong');
    directorStrong.textContent = 'Director: ';
    director.append(directorStrong, ` ${film.director}`);

    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = film.description;

    content.append(title, subtitle, director, description);
    card.append(img, content);

    return card;
}

function showCards(films) {
    const container = document.querySelector('.cards');
    container.replaceChildren();

    films.forEach(film => {
        const card = createCard(film);
        container.append(card);
    });
}

const apiUrl = "https://ghibliapi.vercel.app/films";
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showCards(data))
    .catch(e => console.error(e));
