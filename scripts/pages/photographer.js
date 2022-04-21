/*global sendForm*/
/*global closeLightboxModal*/
/*global photographerFactory*/
/*global displayModal*/
/*eslint no-undef: "error"*/
function getPhotographers() {
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

    return {
        photographers: [...photographers],
    };
}

function getMedia() {
    const medias = [
        {
            id: 342550,
            photographerId: 82,
            title: "Fashion Yellow Beach",
            image: "Fashion_Yellow_Beach.jpg",
            likes: 62,
            date: "2011-12-08",
            price: 55,
        },
        {
            id: 8520927,
            photographerId: 82,
            title: "Fashion Urban Jungle",
            image: "Fashion_Urban_Jungle.jpg",
            likes: 11,
            date: "2011-11-06",
            price: 55,
        },
        {
            id: 9025895,
            photographerId: 82,
            title: "Fashion Pattern on a Pattern",
            image: "Fashion_Pattern_on_Pattern.jpg",
            likes: 72,
            date: "2013-08-12",
            price: 55,
        },
        {
            id: 9275938,
            photographerId: 82,
            title: "Wedding Gazebo",
            image: "Event_WeddingGazebo.jpg",
            likes: 69,
            date: "2018-02-22",
            price: 55,
        },
        {
            id: 2053494,
            photographerId: 82,
            title: "Sparkles",
            image: "Event_Sparklers.jpg",
            likes: 2,
            date: "2020-05-25",
            price: 55,
        },
        {
            id: 7324238,
            photographerId: 82,
            title: "18th Anniversary",
            image: "Event_18thAnniversary.jpg",
            likes: 33,
            date: "2019-06-12",
            price: 55,
        },
        {
            id: 8328953,
            photographerId: 82,
            title: "Wooden sculpture of a horse",
            video: "Art_Wooden_Horse_Sculpture.mp4",
            likes: 24,
            date: "2011-12-08",
            price: 100,
        },
        {
            id: 7502053,
            photographerId: 82,
            title: "Triangle Man",
            image: "Art_Triangle_Man.jpg",
            likes: 88,
            date: "2007-05-07",
            price: 55,
        },
        {
            id: 8523492,
            photographerId: 82,
            title: "Purple Tunnel",
            image: "Art_Purple_light.jpg",
            likes: 24,
            date: "2018-05-05",
            price: 55,
        },
        {
            id: 75902334,
            photographerId: 82,
            title: "Art Mine",
            image: "Art_Mine.jpg",
            likes: 75,
            date: "2019-11-25",
            price: 55,
        },

        {
            id: 73852953,
            photographerId: 925,
            title: "8 Rows",
            image: "Sport_2000_with_8.jpg",
            likes: 52,
            date: "2013-02-30",
            price: 70,
        },
        {
            id: 92758372,
            photographerId: 925,
            title: "Fashion Wings",
            image: "Fashion_Wings.jpg",
            likes: 58,
            date: "2018-07-17",
            price: 70,
        },
        {
            id: 32958383,
            photographerId: 925,
            title: "Melody Red on Stripes",
            image: "Fashion_Melody_Red_on_Stripes.jpg",
            likes: 11,
            date: "2019-08-12",
            price: 70,
        },
        {
            id: 928587383,
            photographerId: 925,
            title: "Venture Conference",
            image: "Event_VentureConference.jpg",
            likes: 2,
            date: "2019-01-02",
            price: 70,
        },
        {
            id: 725639493,
            photographerId: 925,
            title: "Product Pitch",
            image: "Event_ProductPitch.jpg",
            likes: 3,
            date: "2019-05-20",
            price: 70,
        },
        {
            id: 23394384,
            photographerId: 925,
            title: "Musical Festival Keyboard",
            image: "Event_KeyboardCheck.jpg",
            likes: 52,
            date: "2019-07-18",
            price: 70,
        },
        {
            id: 87367293,
            photographerId: 925,
            title: "Musical Festival Singer",
            image: "Event_Emcee.jpg",
            likes: 23,
            date: "2018-02-22",
            price: 70,
        },
        {
            id: 593834784,
            photographerId: 925,
            title: "Animal Majesty",
            image: "Animals_Majesty.jpg",
            likes: 52,
            date: "2017-03-13",
            price: 70,
        },
        {
            id: 83958935,
            photographerId: 925,
            title: "Cute puppy on sunset",
            video: "Animals_Puppiness.mp4",
            likes: 52,
            date: "2016-06-12",
            price: 70,
        },
        {
            id: 394583434,
            photographerId: 527,
            title: "Rocky mountains from the air",
            video: "Travel_Rock_Mountains.mp4",
            likes: 23,
            date: "2017-03-18",
            price: 45,
        },
        {
            id: 343423425,
            photographerId: 527,
            title: "Outdoor Baths",
            image: "Travel_Outdoor_Baths.jpg",
            likes: 101,
            date: "2017-04-03",
            price: 45,
        },
        {
            id: 73434243,
            photographerId: 527,
            title: "Road into the Hill",
            image: "Travel_Road_into_Hill.jpg",
            likes: 99,
            date: "2018-04-30",
            price: 45,
        },
        {
            id: 23425523,
            photographerId: 527,
            title: "Bridge into the Forest",
            image: "Travel_Bridge_into_Forest.jpg",
            likes: 34,
            date: "2016-04-05",
            price: 45,
        },
        {
            id: 23134513,
            photographerId: 527,
            title: "Boat Wonderer",
            image: "Travel_Boat_Wanderer.jpg",
            likes: 23,
            date: "2017-03-18",
            price: 45,
        },
        {
            id: 92352352,
            photographerId: 527,
            title: "Portrait Sunkiss",
            image: "Portrait_Sunkissed.jpg",
            likes: 66,
            date: "2018-05-24",
            price: 45,
        },
        {
            id: 34513453,
            photographerId: 527,
            title: "Shaw Potrait",
            image: "Portrait_Shaw.jpg",
            likes: 52,
            date: "2017-04-21",
            price: 45,
        },
        {
            id: 23523533,
            photographerId: 527,
            title: "Alexandra",
            image: "Portrait_Alexandra.jpg",
            likes: 95,
            date: "2018-11-02",
            price: 45,
        },
        {
            id: 525834234,
            photographerId: 527,
            title: "Afternoon Break",
            image: "Portrait_AfternoonBreak.jpg",
            likes: 25,
            date: "2019-01-02",
            price: 45,
        },

        {
            id: 623534343,
            photographerId: 243,
            title: "Lonesome",
            image: "Travel_Lonesome.jpg",
            likes: 88,
            date: "2019-02-03",
            price: 45,
        },
        {
            id: 625025343,
            photographerId: 243,
            title: "Hillside Color",
            image: "Travel_HillsideColor.jpg",
            likes: 85,
            date: "2019-04-03",
            price: 45,
        },
        {
            id: 2525345343,
            photographerId: 243,
            title: "Wednesday Potrait",
            image: "Portrait_Wednesday.jpg",
            likes: 34,
            date: "2019-04-07",
            price: 45,
        },
        {
            id: 2523434634,
            photographerId: 243,
            title: "Nora Portrait",
            image: "Portrait_Nora.jpg",
            likes: 63,
            date: "2019-04-07",
            price: 45,
        },
        {
            id: 398847109,
            photographerId: 243,
            title: "Raw Black Portrait",
            image: "Portrait_Background.jpg",
            likes: 55,
            date: "2019-06-20",
            price: 45,
        },
        {
            id: 2534342,
            photographerId: 243,
            title: "Seaside Wedding",
            image: "Event_SeasideWedding.jpg",
            likes: 25,
            date: "2019-06-21",
            price: 45,
        },
        {
            id: 65235234,
            photographerId: 243,
            title: "Boulder Wedding",
            image: "Event_PintoWedding.jpg",
            likes: 52,
            date: "2019-06-25",
            price: 45,
        },
        {
            id: 23523434,
            photographerId: 243,
            title: "Benevides Wedding",
            image: "Event_BenevidesWedding.jpg",
            likes: 77,
            date: "2019-06-28",
            price: 45,
        },
        {
            id: 5234343,
            photographerId: 243,
            title: "Wild horses in the mountains",
            video: "Animals_Wild_Horses_in_the_mountains.mp4",
            likes: 142,
            date: "2019-08-23",
            price: 60,
        },
        {
            id: 95234343,
            photographerId: 243,
            title: "Rainbow Bird",
            image: "Animals_Rainbow.jpg",
            likes: 59,
            date: "2019-07-02",
            price: 60,
        },
        {
            id: 52343416,
            photographerId: 195,
            title: "Japanese Tower, Kyoto",
            image: "Travel_Tower.jpg",
            likes: 25,
            date: "2019-04-03",
            price: 60,
        },
        {
            id: 2523434,
            photographerId: 195,
            title: "Senset on Canals, Venice",
            image: "Travel_SunsetonCanals.jpg",
            likes: 53,
            date: "2019-05-06",
            price: 60,
        },
        {
            id: 95293534,
            photographerId: 195,
            title: "Mountain and Lake",
            image: "Travel_OpenMountain.jpg",
            likes: 33,
            date: "2019-05-12",
            price: 60,
        },
        {
            id: 356234343,
            photographerId: 195,
            title: "City Bike and Stair, Paris",
            image: "Travel_Bike_and_Stair.jpg",
            likes: 53,
            date: "2019-06-20",
            price: 60,
        },
        {
            id: 235234343,
            photographerId: 195,
            title: "Adventure Door, India",
            image: "Sport_Next_Hold.jpg",
            likes: 63,
            date: "2019-06-26",
            price: 60,
        },
        {
            id: 6234234343,
            photographerId: 195,
            title: "Contrast, St Petersburg",
            image: "Architecture_Contrast.jpg",
            likes: 52,
            date: "2019-06-30",
            price: 60,
        },
        {
            id: 6525666253,
            photographerId: 195,
            title: "On a Hill, Tibet",
            image: "Architecture_On_a_hill.jpg",
            likes: 63,
            date: "2019-07-20",
            price: 60,
        },
        {
            id: 98252523433,
            photographerId: 195,
            title: "Leaning Tower, Pisa",
            image: "Architecture_Dome.jpg",
            likes: 88,
            date: "2020-01-05",
            price: 60,
        },
        {
            id: 9259398453,
            photographerId: 195,
            title: "Drone shot of Buenos Aires highways",
            video:
        "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
            likes: 57,
            date: "2020-01-20",
            price: 65,
        },
        {
            id: 3523523534,
            photographerId: 195,
            title: "Corner Building and Blue Sky",
            image: "Architecture_Corner_Room.jpg",
            likes: 54,
            date: "2020-05-05",
            price: 60,
        },
        {
            id: 952343423,
            photographerId: 930,
            title: "Tricks in te air",
            video: "Sport_Tricks_in_the_air.mp4",
            likes: 150,
            date: "2018-02-30",
            price: 70,
        },
        {
            id: 235234343,
            photographerId: 930,
            title: "Climber",
            image: "Sport_Next_Hold.jpg",
            likes: 101,
            date: "2018-03-05",
            price: 65,
        },
        {
            id: 235343222,
            photographerId: 930,
            title: "Surfer",
            image: "sport_water_tunnel.jpg",
            likes: 103,
            date: "2018-03-10",
            price: 70,
        },
        {
            id: 7775342343,
            photographerId: 930,
            title: "Skier",
            image: "Sport_Sky_Cross.jpg",
            likes: 77,
            date: "2018-04-16",
            price: 50,
        },
        {
            id: 9253445784,
            photographerId: 930,
            title: "Race End",
            image: "Sport_Race_End.jpg",
            likes: 88,
            date: "2018-04-22",
            price: 65,
        },
        {
            id: 22299394,
            photographerId: 930,
            title: "Jump!",
            image: "Sport_Jump.jpg",
            likes: 95,
            date: "2018-04-27",
            price: 70,
        },
        {
            id: 3452342633,
            photographerId: 930,
            title: "White Light",
            image: "Architecture_White_Light.jpg",
            likes: 52,
            date: "2018-05-03",
            price: 75,
        },
        {
            id: 939234243,
            photographerId: 930,
            title: "Water on Modern Building",
            image: "Architecture_Water_on_Modern.jpg",
            likes: 55,
            date: "2018-05-10",
            price: 72,
        },
        {
            id: 222959233,
            photographerId: 930,
            title: "Horseshoe",
            image: "Architecture_Horseshoe.jpg",
            likes: 85,
            date: "2018-05-15",
            price: 71,
        },
        {
            id: 965933434,
            photographerId: 930,
            title: "Cross Bar",
            image: "Architecture_Cross_Bar.jpg",
            likes: 66,
            date: "2018-05-20",
            price: 58,
        },
        {
            id: 777723343,
            photographerId: 930,
            title: "Connected Curves",
            image: "Architecture_Connected_Curves.jpg",
            likes: 79,
            date: "2018-05-21",
            price: 80,
        },
    ];

    return {
        medias: [...medias],
    };
}

const dialog = document.querySelector(".lightbox");
/* Recuperation de l'id dans la barre de recherche */

const queryUrlId = window.location.search;
const idSearch = new URLSearchParams(queryUrlId);
const id = idSearch.get("id");
const { photographers } = getPhotographers();
const responseId = photographers.find(
    (photographer) => photographer.id.toString() === id
);
const { medias } = getMedia();
if (responseId) {
    /* Résumé de l'utilisateur dans la pages des photographes */
    const userSection = document.querySelector(".photograph-header");
    const userCard = photographerFactory("none").greyData(responseId);
    const { image, info } = userCard;
    userSection.appendChild(image);
    userSection.appendChild(info);
    /* Affiche les differentes images et videos dans la pages des photographes */
    const userSection2 = document.querySelector(".photographer_section2");
    medias.forEach((media) => {
        if (media.photographerId == id) {
            const userMedia = photographerFactory("none").displayMedia(
                media,
                responseId
            );
            userSection2.appendChild(userMedia);
        }
    });
} else {
    window.location.replace("/error/error.html");
}

/* Affiche la lightbox avec une image ou une video en fonction du media */
const SectionAllImg = document.getElementsByName("img_photographer");
SectionAllImg.forEach((img) => {
    img.addEventListener("click", () => {
        const imgId = img.id;
        const mediaId = medias.find((media) => media.id.toString() === imgId);
        const { name } = responseId;
        const { image, id, video } = mediaId;
        const lightBox = document.querySelector(".lightbox");
        const queryLeftArrow = document.querySelector(".fa-solid.fa-angle-left");
        const queryRightArrow = document.querySelector(".fa-solid.fa-angle-right");
        const queryClose = document.querySelector(".lightbox_close");
        if (queryLeftArrow) {
            queryLeftArrow.remove();
            queryRightArrow.remove();
            queryClose.remove();
        }
        if (video) {
            const leftArrow = document.createElement("i");
            leftArrow.setAttribute("class", "fa-solid fa-angle-left");
            leftArrow.setAttribute("onclick", "prev()");
            leftArrow.setAttribute("name", "Previous Image");
            leftArrow.setAttribute("tabindex", "0");
            leftArrow.setAttribute("aria-label", "Previous Image");
            const newVid = document.createElement("video");
            newVid.setAttribute("controls", "");
            newVid.setAttribute("class", "lightbox_vid");
            newVid.setAttribute("id", id);
            newVid.setAttribute("role", "application");
            newVid.setAttribute("tabindex", "0");
            const newsrc = document.createElement("source");
            newsrc.setAttribute("src", `assets/images/${name}/${video}`);
            newsrc.setAttribute("type", "video/mp4");
            newVid.appendChild(newsrc);
            const rightArrow = document.createElement("i");
            rightArrow.setAttribute("class", "fa-solid fa-angle-right");
            rightArrow.setAttribute("onclick", "next()");
            rightArrow.setAttribute("name", "Next Image");
            rightArrow.setAttribute("tabindex", "0");
            rightArrow.setAttribute("aria-label", "Next Image");
            const close = document.createElement("img");
            close.setAttribute("src", "assets/icons/close_lightbox.svg");
            close.setAttribute("onclick", "closeLightboxModal()");
            close.setAttribute("class", "lightbox_close");
            close.setAttribute("tabindex", "0");
            close.setAttribute("aria-label", "Close dialog");
            close.setAttribute("name", "Close dialog");
            lightBox.appendChild(leftArrow);
            lightBox.appendChild(newVid);
            lightBox.appendChild(rightArrow);
            lightBox.appendChild(close);
            const lightboxAllImg = document.querySelectorAll(".lightbox_img");
            for (let o = 0; o < lightboxAllImg.length; o += 1) {
                const currentImg = lightboxAllImg[o];
                currentImg.remove();
            }
            const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
            for (let o = 0; o < lightboxAllVideo.length - 1; o += 1) {
                const lightboxVideo = lightboxAllVideo[o];
                lightboxVideo.remove();
            }

            lightBox.style.display = "block";
            dialog.focus();
            window.history.pushState("", "", `photographer.html?id=${id}`);
        } else {
            const leftArrow = document.createElement("i");
            leftArrow.setAttribute("class", "fa-solid fa-angle-left");
            leftArrow.setAttribute("onclick", "prev()");
            leftArrow.setAttribute("name", "Previous Image");
            leftArrow.setAttribute("tabindex", "0");
            leftArrow.setAttribute("aria-label", "Previous Image");
            const displayImg = document.createElement("img");
            displayImg.setAttribute("src", `assets/images/${name}/${image}`);
            displayImg.setAttribute("class", "lightbox_img");
            displayImg.setAttribute("id", id);
            displayImg.setAttribute("role", "application");
            const lightBoxMediaContainer = document.createElement("div");
            lightBoxMediaContainer.setAttribute("class", "lightboxmedia_container");
            lightBoxMediaContainer.appendChild(displayImg);
            const rightArrow = document.createElement("i");
            rightArrow.setAttribute("class", "fa-solid fa-angle-right");
            rightArrow.setAttribute("onclick", "next()");
            rightArrow.setAttribute("name", "Next image");
            rightArrow.setAttribute("tabindex", "0");
            rightArrow.setAttribute("aria-label", "Next image");
            const close = document.createElement("img");
            close.setAttribute("src", "assets/icons/close_lightbox.svg");
            close.setAttribute("onclick", "closeLightboxModal()");
            close.setAttribute("class", "lightbox_close");
            close.setAttribute("tabindex", "0");
            close.setAttribute("aria-label", "Close dialog");
            close.setAttribute("name", "Close dialog");
            lightBox.appendChild(leftArrow);
            lightBox.appendChild(lightBoxMediaContainer);
            lightBox.appendChild(rightArrow);
            lightBox.appendChild(close);
            const lightboxAllImg = document.querySelectorAll(".lightbox_img");
            for (let o = 0; o < lightboxAllImg.length - 1; o += 1) {
                const currentImg = lightboxAllImg[o];
                currentImg.remove();
            }
            const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
            for (let o = 0; o < lightboxAllVideo.length; o += 1) {
                const lightboxVideo = lightboxAllVideo[o];
                lightboxVideo.remove();
            }
            lightBox.style.display = "block";
            dialog.focus();
            window.history.pushState("", "", `photographer.html?id=${id}`);
        }
    });
});

const sectionAllDiv = document.querySelectorAll(".media");
sectionAllDiv.forEach((div) => {
    div.addEventListener("keydown", (e) => {
        if (e.keyCode === 32) {
            const divImg = div.firstChild;
            const imgId = divImg.id;
            const mediaId = medias.find((media) => media.id.toString() === imgId);
            const { name } = responseId;
            const { image, id, video } = mediaId;
            const lightBox = document.querySelector(".lightbox");
            lightBox.style.display = "block";
            const queryLeftArrow = document.querySelector(".fa-solid.fa-angle-left");
            const queryRightArrow = document.querySelector(
                ".fa-solid.fa-angle-right"
            );
            const queryClose = document.querySelector(".lightbox_close");
            if (queryLeftArrow) {
                queryLeftArrow.remove();
                queryRightArrow.remove();
                queryClose.remove();
            }

            if (video) {
                const leftArrow = document.createElement("i");
                leftArrow.setAttribute("class", "fa-solid fa-angle-left");
                leftArrow.setAttribute("onclick", "prev()");
                leftArrow.setAttribute("name", "Previous Image");
                leftArrow.setAttribute("tabindex", "0");
                leftArrow.setAttribute("aria-label", "Previous Image");
                const newVid = document.createElement("video");
                newVid.setAttribute("controls", "");
                newVid.setAttribute("class", "lightbox_vid");
                newVid.setAttribute("id", id);
                newVid.setAttribute("tabindex", "0");
                const newsrc = document.createElement("source");
                newsrc.setAttribute("src", `assets/images/${name}/${video}`);
                newsrc.setAttribute("type", "video/mp4");
                newVid.appendChild(newsrc);
                const rightArrow = document.createElement("i");
                rightArrow.setAttribute("class", "fa-solid fa-angle-right");
                rightArrow.setAttribute("onclick", "next()");
                rightArrow.setAttribute("name", "Next Image");
                rightArrow.setAttribute("tabindex", "0");
                rightArrow.setAttribute("aria-label", "Next Image");
                const close = document.createElement("img");
                close.setAttribute("src", "assets/icons/close_lightbox.svg");
                close.setAttribute("onclick", "closeLightboxModal()");
                close.setAttribute("class", "lightbox_close");
                close.setAttribute("tabindex", "0");
                close.setAttribute("aria-label", "Close dialog");
                close.setAttribute("name", "Close dialog");
                lightBox.appendChild(leftArrow);
                lightBox.appendChild(newVid);
                lightBox.appendChild(rightArrow);
                lightBox.appendChild(close);
                if (document.activeElement === queryLeftArrow) {
                    queryLeftArrow.addEventListener("keydown", (e) => {
                        if (e.keyCode === 9) {
                            newVid.focus();
                        }
                    });
                }
                if (document.activeElement === queryClose) {
                    close.addEventListener("keydown", (e) => {
                        if (e.keyCode === 9) {
                            leftArrow.focus();
                        }
                    });
                }

                const lightboxAllImg = document.querySelectorAll(".lightbox_img");
                for (let o = 0; o < lightboxAllImg.length; o += 1) {
                    const currentImg = lightboxAllImg[o];
                    currentImg.remove();
                }
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length - 1; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }

                dialog.focus();
                window.history.pushState("", "", `photographer.html?id=${id}`);
            } else {
                const leftArrow = document.createElement("i");
                leftArrow.setAttribute("class", "fa-solid fa-angle-left");
                leftArrow.setAttribute("onclick", "prev()");
                leftArrow.setAttribute("name", "Previous Image");
                leftArrow.setAttribute("tabindex", "0");
                leftArrow.setAttribute("aria-label", "Previous Image");
                const displayImg = document.createElement("img");
                displayImg.setAttribute("src", `assets/images/${name}/${image}`);
                displayImg.setAttribute("class", "lightbox_img");
                displayImg.setAttribute("id", id);
                const lightBoxMediaContainer = document.createElement("div");
                lightBoxMediaContainer.setAttribute("class", "lightboxmedia_container");
                lightBoxMediaContainer.appendChild(displayImg);
                const rightArrow = document.createElement("i");
                rightArrow.setAttribute("class", "fa-solid fa-angle-right");
                rightArrow.setAttribute("onclick", "next()");
                rightArrow.setAttribute("name", "Next Image");
                rightArrow.setAttribute("tabindex", "0");
                rightArrow.setAttribute("aria-label", "Next Image");
                const close = document.createElement("img");
                close.setAttribute("src", "assets/icons/close_lightbox.svg");
                close.setAttribute("onclick", "closeLightboxModal()");
                close.setAttribute("class", "lightbox_close");
                close.setAttribute("tabindex", "0");
                close.setAttribute("aria-label", "Close dialog");
                close.setAttribute("name", "Close dialog");
                lightBox.appendChild(leftArrow);
                lightBox.appendChild(lightBoxMediaContainer);
                lightBox.appendChild(rightArrow);
                lightBox.appendChild(close);
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }
                lightBox.style.display = "block";
                dialog.focus();
                window.history.pushState("", "", `photographer.html?id=${id}`);
            }
        }
    });
});
let i;

/* Affiche le nom du photographe selectionné dans le formulaire d'envoi */
const nameForm = responseId.name.toString();
const name_form = document.querySelector(".form_h2");
name_form.innerHTML = "Contactez moi" + `<br>${nameForm}`;

/*Place le focus sur le formulaire lorsque l'on appuie sur le bouton a l'aide du clavier */
const ButtonForm = document.querySelectorAll(".contact_button");
const closeButton = document.querySelector(".close_form");
const contactForm = document.querySelector(".modal");

ButtonForm[0].addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 32 || e.keyCode === 13) {
        displayModal();
        contactForm.focus();
    }
});

ButtonForm[1].addEventListener("keydown", (e) => {
    if (e.keyCode === 9) {
        closeButton.focus();
        e.preventDefault();
    }
});

/* Fais la somme de tous les likes en fonction du photographe selectionné (id) */

const numberLikes = [];
let totalSum = 0;
medias.forEach((media) => {
    if (media.photographerId == id) {
        numberLikes.push(media.likes);
    }
});
for (let i = 0; i < numberLikes.length; i += 1) {
    totalSum += numberLikes[i];
}
/* Ajoute le nombre total de likes et le prix du photographe en bas de page */

const totalLikes = document.querySelector(".total_likes");
const dailyPrice = document.querySelector(".daily_price");
totalLikes.innerHTML = `${totalSum} ` + "<i class=\"fa-solid fa-heart\"></i>";
dailyPrice.innerHTML = `${responseId.price}€ / jour`;
/* Incrémente le nombre likes au clic ainsi que son nombre total en bas de page */
const div = document.querySelectorAll(".heart_container");
div.forEach((div) => {
    const child = div.childNodes[1];
    child.addEventListener("click", () => {
        const likeNumber = div.childNodes[0];
        parseInt(likeNumber.innerText++);
        totalLikes.innerHTML =
      `${parseInt((totalSum += 1))} ` + "<i class=\"fa-solid fa-heart\"></i>";
    });
});
// Incrémente le nombre likes au clic ainsi que son nombre total en bas de page
const lightBox = document.querySelector(".lightbox");
div.forEach((div) => {
    const child = div.childNodes[1];
    child.addEventListener("keydown", (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            const likeNumber = div.childNodes[0];
            parseInt(likeNumber.textContent++);
            totalLikes.innerHTML =
        `${parseInt((totalSum += 1))} ` + "<i class=\"fa-solid fa-heart\"></i>";
            setTimeout("closeLightboxModal()", 0.00000000000000000000000001);
            div.focus();
            return e.keyCode !== 32;
        }
    });
});

/* Custom Select */
document.querySelectorAll(".select_container").forEach(setupSelector);

function setupSelector(selector) {
    selector.addEventListener("mousedown", (e) => {
        if (window.innerWidth >= 420) {
            // override look for non mobile
            e.preventDefault();

            const select = selector.children[1];
            const dropDown = document.createElement("ul");
            const arrowUp = document.createElement("i");
            arrowUp.setAttribute("class", "fa-solid fa-angle-up");
            dropDown.className = "selector-options";
            [...select.children].forEach((option) => {
                const dropDownOption = document.createElement("li");
                dropDownOption.setAttribute("class", "border_white_bottom");
                dropDownOption.textContent = option.textContent;
                dropDownOption.addEventListener("mousedown", (e) => {
                    e.stopPropagation();
                    select.value = option.value;
                    selector.value = option.value;
                    select.dispatchEvent(new Event("change"));
                    selector.dispatchEvent(new Event("change"));
                    dropDown.remove();
                });

                dropDown.appendChild(dropDownOption);
                dropDown.appendChild(arrowUp);
            });

            selector.appendChild(dropDown);
            const allOption = document.querySelectorAll("option");
            const allList = document.querySelectorAll(".border_white_bottom");
            const lastOption = allList.item(allOption.length - 1);
            lastOption.setAttribute("class", "last_option");
            // handle click out
            document.addEventListener("click", (e) => {
                if (!selector.contains(e.target)) {
                    dropDown.remove();
                }
            });
        }
    });
}
/* Recupère le nombre de like de chaque image et les place dans un tableau */
const arPopular = [];
const secondPhotagrapherSection = document.querySelector(
    ".photographer_section2"
);
const arrayMedia = Array.from(secondPhotagrapherSection.children);
for (const item of arrayMedia) {
    const likeChildren = item.children[1].children[1].children[0].textContent;
    const likeChildrenNumber = Number(likeChildren);
    arPopular.push(likeChildrenNumber);
}
const select = document.querySelector("select");
select.onchange = sortingValue;
function sortingValue() {
    /* Tri les valeurs du tableau contenant le nombre de like dans l'ordre décroissant */
    const sortArPopular = arPopular.sort((a, b) => a - b);
    const sortedArPopular = [];
    sortArPopular.forEach((number) => {
        for (let z = 0; z < arrayMedia.length; z++) {
            const item = arrayMedia[z];
            const likeChildren = item.children[1].children[1].children[0].textContent;
            const likeChildrenNumber = Number(likeChildren);
            if (number === likeChildrenNumber) {
                sortedArPopular.push(item);
            }
        }
    });
    if (select.value === "1") {
        for (let i = 0; i < sectionAllDiv.length; i++) {
            sectionAllDiv[i].remove();
        }
        sortedArPopular.reverse().forEach((article) => {
            secondPhotagrapherSection.appendChild(article);
        });
    }

    /* Tri les valeurs du tableau par date dans l'ordre décroissant */
    if (select.value === "2") {
        const arDate = [];
        const arArticle = [];
        medias.forEach((media) => {
            for (let i = 0; i < SectionAllImg.length; i++) {
                const idDate = SectionAllImg[i].id;

                if (media.id === Number(idDate)) {
                    arDate.push(media.date);
                }
            }
        });
        const sortDate = arDate.sort((a, b) => new Date(a) - new Date(b));
        const reverseSortDate = sortDate.reverse();
        for (let i = 0; i < reverseSortDate.length; i++) {
            medias.forEach((media) => {
                const item = reverseSortDate[i];
                const dateMedia = media.date;
                if (dateMedia === item) {
                    for (let i = 0; i < SectionAllImg.length; i++) {
                        const bId = SectionAllImg[i].id;
                        const mediaId = media.id;

                        const parentImg = SectionAllImg[i].parentNode;
                        if (mediaId === parseInt(bId)) {
                            arArticle.push(parentImg);
                        }
                    }
                }
            });
        }

        for (let i = 0; i < sectionAllDiv.length; i++) {
            sectionAllDiv[i].remove();
        }
        arArticle.forEach((article) => {
            secondPhotagrapherSection.appendChild(article);
        });
    }
    /* Recupere les titres de chaque image et les places dans un tableau */
    const arTitle = [];

    for (const item of arrayMedia) {
        const likeChildren = item.children[1].children[0].textContent;
        arTitle.push(likeChildren);
    }
    /* Tri les valeurs du tableau contenant les titres par ordre alphabetique */
    const sorTitle = arTitle.sort();
    const titleArticle = [];
    sorTitle.forEach((title) => {
        for (let i = 0; i < arrayMedia.length; i++) {
            const elementAr = arrayMedia[i].children[1].children[0].textContent;

            if (title === elementAr) {
                titleArticle.push(arrayMedia[i]);
            }
        }
    });

    if (select.value === "3") {
        secondPhotagrapherSection.append(...titleArticle);
    }
}

/* Conserve le focus seulement dans la lightbox lors de la navigation au clavier  et permet d'aller a l'image precedente ou suivante
 en appuyant sur la touche espace,entrée ou en utilisant les fleches directionelles */
dialog.addEventListener("keydown", (e) => {
    const firstFocusableElement = document.querySelector(".lightbox_close");
    const lastFocusableElement = document.querySelector(
        ".fa-solid.fa-angle-right"
    );
    const arrowleft = document.querySelector(".fa-solid.fa-angle-left");
    const vid = document.querySelector("lightbox_vid");

    firstFocusableElement.addEventListener("keydown", (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            closeLightboxModal();
        }
    });
    arrowleft.addEventListener("keydown", (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            prev();
            e.stopImmediatePropagation();
        }
    });
    lastFocusableElement.addEventListener("keydown", (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            next();
            e.stopImmediatePropagation();
        }
    });

    if (document.activeElement === firstFocusableElement) {
        if (e.keyCode === 9) {
            arrowleft.focus();
            e.preventDefault();
        }
    }
    if (document.activeElement === sectionAllDiv[sectionAllDiv.length - 1]) {
        lightBox.focus();
    }

    if (vid) {
        if (document.activeElement === firstFocusableElement) {
            if (e.keyCode === 9) {
                arrowleft.focus();
            }
        }

        if (document.activeElement === arrowleft) {
            if (e.keyCode === 9) {
                vid.focus();
                e.preventDefault();
            }
        }
    }

    if (e.keyCode == 37) {
        prev();
        dialog.focus();
    } else if (e.keyCode == 39) {
        next();
        dialog.focus();
    }
});

window.addEventListener("click", (e) => {
    if (e.target != dialog) {
        dialog.focus();
    }
});

/* Fonction qui affiche l'image suivante dans la lightbox */

function next() {
    for (i = 0; i < SectionAllImg.length + 1; i += 1) {
        const queryUrlId = window.location.search;
        const idSearch = new URLSearchParams(queryUrlId);
        const id = idSearch.get("id");
        const lightBox = document.querySelector(".lightbox");

        if (SectionAllImg[i].id === id) {
            if (i === SectionAllImg.length - 1) {
                i = -1;
            }
            if (SectionAllImg[i + 1].className === "video_photographer") {
                const queryLeftArrow = document.querySelector(
                    ".fa-solid.fa-angle-left"
                );
                const queryRightArrow = document.querySelector(
                    ".fa-solid.fa-angle-right"
                );
                const queryClose = document.querySelector(".lightbox_close");
                queryLeftArrow.remove();
                queryRightArrow.remove();
                queryClose.remove();
                const nextVid = SectionAllImg[i + 1];
                const newVid = document.createElement("video");
                const leftArrow = document.createElement("i");
                leftArrow.setAttribute("class", "fa-solid fa-angle-left");
                leftArrow.setAttribute("onclick", "prev()");
                leftArrow.setAttribute("name", "Previous Image");
                leftArrow.setAttribute("tabindex", "0");
                leftArrow.setAttribute("aria-label", "Previous Image");
                newVid.setAttribute("controls", "");
                newVid.setAttribute("class", "lightbox_vid");
                newVid.setAttribute("id", nextVid.id);
                newVid.setAttribute("tabindex", "0");
                const newsrc = document.createElement("source");
                newsrc.setAttribute("src", nextVid.src);
                newsrc.setAttribute("type", "video/mp4");
                newVid.appendChild(newsrc);
                const rightArrow = document.createElement("i");
                rightArrow.setAttribute("class", "fa-solid fa-angle-right");
                rightArrow.setAttribute("onclick", "next()");
                rightArrow.setAttribute("name", "Next Image");
                rightArrow.setAttribute("tabindex", "0");
                rightArrow.setAttribute("aria-label", "Next Image");
                const close = document.createElement("img");
                close.setAttribute("src", "assets/icons/close_lightbox.svg");
                close.setAttribute("onclick", "closeLightboxModal()");
                close.setAttribute("class", "lightbox_close");
                close.setAttribute("tabindex", "0");
                close.setAttribute("aria-label", "Close dialog");
                close.setAttribute("name", "Close dialog");
                lightBox.appendChild(leftArrow);
                lightBox.appendChild(newVid);
                lightBox.appendChild(rightArrow);
                lightBox.appendChild(close);
                const lightboxAllImg = document.querySelectorAll(".lightbox_img");
                for (let o = 0; o < lightboxAllImg.length; o += 1) {
                    const currentImg = lightboxAllImg[o];
                    currentImg.remove();
                }
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length - 1; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }
                window.history.pushState("", "", `photographer.html?id=${nextVid.id}`);
                break;
            } else {
                const nextImg = SectionAllImg[i + 1];
                const newImg = document.createElement("img");
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }
                newImg.setAttribute("src", nextImg.src);
                newImg.setAttribute("class", "lightbox_img");
                newImg.setAttribute("id", nextImg.id);
                const lightBoxMediaContainer = document.createElement("div");
                lightBoxMediaContainer.setAttribute("class", "lightboxmedia_container");
                lightBoxMediaContainer.appendChild(newImg);
                lightBox.appendChild(lightBoxMediaContainer);
                window.history.pushState("", "", `photographer.html?id=${nextImg.id}`);
                break;
            }
        }
    }
}

/* Fonction qui affiche l'image précédente dans la lightbox */

function prev() {
    for (i = 0; i < SectionAllImg.length + 1; i += 1) {
        const queryUrlId = window.location.search;
        const idSearch = new URLSearchParams(queryUrlId);
        const id = idSearch.get("id");
        const lightBox = document.querySelector(".lightbox");
        if (SectionAllImg[i].id === id) {
            if (i === 0) {
                i = SectionAllImg.length;
            }
            if (SectionAllImg[i - 1].className === "video_photographer") {
                const queryLeftArrow = document.querySelector(
                    ".fa-solid.fa-angle-left"
                );
                const queryRightArrow = document.querySelector(
                    ".fa-solid.fa-angle-right"
                );
                const queryClose = document.querySelector(".lightbox_close");
                queryLeftArrow.remove();
                queryRightArrow.remove();
                queryClose.remove();
                const prevVid = SectionAllImg[i - 1];
                const newVid = document.createElement("video");
                const leftArrow = document.createElement("i");
                leftArrow.setAttribute("class", "fa-solid fa-angle-left");
                leftArrow.setAttribute("onclick", "prev()");
                leftArrow.setAttribute("name", "Previous Image");
                leftArrow.setAttribute("tabindex", "0");
                leftArrow.setAttribute("aria-label", "Previous Image");
                newVid.setAttribute("controls", "");
                newVid.setAttribute("class", "lightbox_vid");
                newVid.setAttribute("id", prevVid.id);
                newVid.setAttribute("tabindex", "0");
                const newsrc = document.createElement("source");
                newsrc.setAttribute("src", prevVid.src);
                newsrc.setAttribute("type", "video/mp4");
                newVid.appendChild(newsrc);
                const rightArrow = document.createElement("i");
                rightArrow.setAttribute("class", "fa-solid fa-angle-right");
                rightArrow.setAttribute("onclick", "next()");
                rightArrow.setAttribute("name", "Next Image");
                rightArrow.setAttribute("tabindex", "0");
                rightArrow.setAttribute("aria-label", "Next Image");
                const close = document.createElement("img");
                close.setAttribute("src", "assets/icons/close_lightbox.svg");
                close.setAttribute("onclick", "closeLightboxModal()");
                close.setAttribute("class", "lightbox_close");
                close.setAttribute("tabindex", "0");
                close.setAttribute("aria-label", "Close dialog");
                close.setAttribute("name", "Close dialog");
                lightBox.appendChild(leftArrow);
                lightBox.appendChild(newVid);
                lightBox.appendChild(rightArrow);
                lightBox.appendChild(close);
                const lightboxAllImg = document.querySelectorAll(".lightbox_img");
                for (let o = 0; o < lightboxAllImg.length; o += 1) {
                    const currentImg = lightboxAllImg[o];
                    currentImg.remove();
                }
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length - 1; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }
                window.history.pushState("", "", `photographer.html?id=${prevVid.id}`);
                break;
            } else {
                const prevImg = SectionAllImg[i - 1];
                const newImg = document.createElement("img");
                const lightboxAllVideo = document.querySelectorAll(".lightbox_vid");
                for (let o = 0; o < lightboxAllVideo.length; o += 1) {
                    const lightboxVideo = lightboxAllVideo[o];
                    lightboxVideo.remove();
                }
                newImg.setAttribute("src", prevImg.src);
                newImg.setAttribute("class", "lightbox_img");
                newImg.setAttribute("id", prevImg.id);
                const lightBoxMediaContainer = document.createElement("div");
                lightBoxMediaContainer.setAttribute("class", "lightboxmedia_container");
                lightBoxMediaContainer.appendChild(newImg);
                lightBox.appendChild(lightBoxMediaContainer);
                window.history.pushState("", "", `photographer.html?id=${prevImg.id}`);
                break;
            }
        }
    }
}

/* Active la fonction sendform() et affiche un message de validation lors du submit */
const allVideo = document.querySelectorAll("video");
allVideo.forEach((video) => {
    video.setAttribute("tabindex", "-1");
});

const SubmitBtn = document.getElementsByName("Send");
const Sent = document.querySelector(".sent");
const MessageForm = document.querySelector("textarea");
const allLabel = document.querySelectorAll("label");
const firstName = document.getElementById("First_name");
const lastName = document.getElementById("Last_name");
const mail = document.getElementById("Mail");
SubmitBtn[0].addEventListener("click", (e) => {
    e.preventDefault();
    validate();
});
function setSucess(element) {
    const inputControl = element.parentElement;
    inputControl.setAttribute("data-error-visible", "false");
}

//Affiche un message d'erreur

function setError(element, number) {
    const inputControl = element.parentElement;
    if (inputControl) inputControl.setAttribute("data-error-visible", "true");

    switch (number) {
    case 0:
        inputControl.setAttribute("data-error", "Le champ ne peut pas etre vide");

        break;

    case 1:
        inputControl.setAttribute(
            "data-error",
            "Veuillez entrer au moins deux caracteres"
        );

        break;

    case 2:
        inputControl.setAttribute("data-error", "Une adresse email est requise");
        break;

    case 3:
        inputControl.setAttribute(
            "data-error",
            "Veuillez entrer une adresse email valide"
        );
        break;

    case 4:
        inputControl.setAttribute(
            "data-error",
            "Veuillez completer votre date de naissance"
        );
        break;

    case 5:
        inputControl.setAttribute(
            "data-error",
            "Une valeur numerique est requise pour ce champ"
        );
        break;

    case 6:
        inputControl.setAttribute(
            "data-error",
            "Vous devez selectionner un emplacement"
        );
        break;

    case 7:
        inputControl.setAttribute(
            "data-error",
            "Vous devez accepter les conditions d'utilisation"
        );
        break;
    }
}
//Regex pour le format mail
function isValidEmail(email) {
    const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Vérifie la validation du formulaire
function validate() {
    const nickname = document.querySelector("#First_name");
    const email = document.querySelector("#Mail");
    const name1 = document.querySelector("#Last_name");
    const areaLabel = document.querySelector(".message_label");
    const areaLabelValue = areaLabel.value.trim();
    const nicknameValue = nickname.value.trim();
    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();

    if (!nicknameValue) {
        setError(nickname, 0);
    } else if (nicknameValue.length < 2) {
        setError(nickname, 1);
    } else {
        setSucess(nickname);
    }

    if (!nameValue) {
        setError(name1, 0);
    } else if (nameValue.length < 2) {
        setError(name1, 1);
    } else {
        setSucess(name1);
    }

    if (!emailValue) {
        setError(email, 2);
    } else if (!isValidEmail(emailValue)) {
        setError(email, 3);
    } else {
        setSucess(email);
    }
    if (!areaLabelValue) {
        setError(areaLabel, 0);
    } else if (areaLabelValue.length < 2) {
        setError(areaLabel, 1);
    } else {
        setSucess(areaLabel);
    }

    confirmation();
}
//Affiche un message de confirmation si le formulaire est valide
function confirmation() {
    const formData = document.querySelectorAll(".formData");
    const allDataErrorVisible = document.querySelectorAll(
        "div[data-error-visible='false']"
    );
    if (allDataErrorVisible.length === formData.length) {
        sendForm();
        Sent.style.visibility = "visible";
        name_form.style.visibility = "hidden";
        allLabel.forEach((label) => {
            label.style.visibility = "hidden";
        });
        lastName.style.visibility = "hidden";
        firstName.style.visibility = "hidden";
        mail.style.visibility = "hidden";
        MessageForm.style.visibility = "hidden";
    }
}
