/*global photographerFactory*/
/*eslint no-undef: "error"*/
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = [
        {
            name: "Mimi Keel",
            id: 243,
            city: "London",
            country: "UK",
            tagline: "Voir le beau dans le quotidien",
            price: 400,
            portrait: "MimiKeel.jpg",
        },
        {
            name: "Ellie-Rose Wilkens",
            id: 930,
            city: "Paris",
            country: "France",
            tagline: "Capturer des compositions complexes",
            price: 250,
            portrait: "EllieRoseWilkens.jpg",
        },
        {
            name: "Tracy Galindo",
            id: 82,
            city: "Montreal",
            country: "Canada",
            tagline: "Photographe freelance",
            price: 500,
            portrait: "TracyGalindo.jpg",
        },
        {
            name: "Nabeel Bradford",
            id: 527,
            city: "Mexico City",
            country: "Mexico",
            tagline: "Toujours aller de l'avant",
            price: 350,
            portrait: "NabeelBradford.jpg",
        },
        {
            name: "Rhode Dubois",
            id: 925,
            city: "Barcelona",
            country: "Spain",
            tagline: "Je crée des souvenirs",
            price: 275,
            portrait: "RhodeDubois.jpg",
        },
        {
            name: "Marcel Nikolic",
            id: 195,
            city: "Berlin",
            country: "Germany",
            tagline: "Toujours à la recherche de LA photo",
            price: 300,
            portrait: "MarcelNikolic.jpg",
        },
    ];
    // et bien retourner le tableau photographers seulement une fois
    return {
        photographers: [...photographers],
    };
}
const photographersSection = document.querySelector(".photographer_section");
async function displayData(photographers) {
    

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const getUserCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(getUserCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}
init();

// eslint-disable-next-line no-unused-vars
function link () {
    const Links = photographersSection.children;
    Array.from(Links);
    for (const item of Links) {
        const link = item.children[0];
        link.addEventListener("keydown", (e) => {
            if (e.keyCode === 32 || e.keyCode === 13) {
                window.location.replace(`${link.href}`);
            }
        });
    }
}
setTimeout("link()", 1);