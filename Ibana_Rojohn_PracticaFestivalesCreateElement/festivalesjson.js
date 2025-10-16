var festivalesJSON = `{
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compania": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compania": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compania": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polvo y flores",
                "Detroit"
            ]
        }
    ]
}`;

const festivales = JSON.parse(festivalesJSON);

const sect = document.createElement("section");
const sectTitle = document.createElement("h1");
sectTitle.appendChild(document.createTextNode(`Festival: ${festivales.Festival}`));

const sectCity = document.createElement("p");
sectCity.appendChild(document.createTextNode(`Ciudad: ${festivales.Ciudad}`));

const sectYear = document.createElement("p");
sectYear.appendChild(document.createTextNode(`Año: ${festivales.Anno}`));

sect.appendChild(sectTitle);
sect.appendChild(sectCity);
sect.appendChild(sectYear);

const grupos = festivales.Grupos;

for (const grupo of grupos) {
    const sectArticle = document.createElement("article");
    
    const sectArticleTitle = document.createElement("h2");
    sectArticleTitle.appendChild(document.createTextNode(grupo.nombre));

    const sectArticleCompany = document.createElement("p");
    sectArticleCompany.appendChild(document.createTextNode(`Compañía: ${grupo.compania}`));
    
    const sectArticleDiscography = document.createElement("p");
    sectArticleDiscography.appendChild(document.createTextNode(`Discografía`));
    
    const sectArticleList = document.createElement("ul");
    
    const discos = grupo.discos;
    for (const disco of discos) {
        const sectArticleListRow = document.createElement("li");
        sectArticleListRow.appendChild(document.createTextNode(disco));

        sectArticleList.appendChild(sectArticleListRow);
    }

    sectArticle.appendChild(sectArticleTitle);
    sectArticle.appendChild(sectArticleCompany);
    sectArticle.appendChild(sectArticleDiscography);
    sectArticle.appendChild(sectArticleList);
    
    sect.appendChild(sectArticle);
}

const container = document.getElementById("container");
container.appendChild(sect);
