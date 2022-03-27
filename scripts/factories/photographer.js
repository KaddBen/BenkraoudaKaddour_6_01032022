function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price,id, utilisateur } = data;

    const picture = `assets/photographers/${portrait}`;
// Affiche chaque photographe dans la page d'index
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const divImg = document.createElement('div');
        divImg.setAttribute("class", "container_img");
        const linkPhotographer = document.createElement('a');
        linkPhotographer.setAttribute("href", `/photographer.html?id=${id}`);
        linkPhotographer.setAttribute("name", name);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'span' );
        location.setAttribute("class", "location");
        location.textContent = city + "," + country;
        const description = document.createElement( 'span' );
        description.setAttribute("class", "description");
        description.textContent = tagline;
        const money = document.createElement( 'span' );
        money.setAttribute("class", "price");
        money.textContent = price + "€" + "/jour";
        divImg.appendChild(img);
        linkPhotographer.appendChild(divImg);
        linkPhotographer.appendChild(h2);
        article.appendChild(linkPhotographer);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(money);
        return(article);
    }
//Affiche le résumé des informations concernant le photographe dans la page des photographes
function greyData(info) {
    const { name, portrait, city, country, tagline } = info;
    const picture1 = `assets/photographers/${portrait}`;
    const infoContainer = document.createElement('div');
    infoContainer.setAttribute("class", "info-user");
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    const location = document.createElement( 'span' );
    location.setAttribute("class", "location");
    location.textContent = city + "," + country;
    const description = document.createElement( 'span' );
    description.setAttribute("class", "price");
    description.textContent = tagline;       
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture1); 
    img.setAttribute("alt", name); 
    const divImg = document.createElement('div');
    divImg.setAttribute("class", "container_img"); 
    divImg.appendChild(img);
    infoContainer.appendChild(location);
    infoContainer.appendChild(description);
    infoContainer.appendChild(h2);
    const utilisateur = {
        info: infoContainer,
        image: divImg
    }
  return(utilisateur);
}

//Affiche les videos ou images du photographe selectionné dans la page des photographes
function displayMedia(media, user) {

    const {image, likes, title, video, id} = media;
    const { name } = user;
   
   
   
    const divImg = document.createElement('div');
    divImg.setAttribute("class", "media")
    divImg.setAttribute("tabindex", "0")
    divImg.setAttribute("onclick", "displayLightbox()")
    const divLikes = document.createElement('div');
    divLikes.setAttribute("class", "like_container")
    const spanLikes = document.createElement('span');
    spanLikes.innerText = title;
    const divHeart = document.createElement('div');
    divHeart.setAttribute("class", "heart_container")
    const spanLikes1 = document.createElement('span');
    spanLikes1.setAttribute("class", "like_number" );
    spanLikes1.innerText= likes;
    const icon = document.createElement('i');
    icon.setAttribute("class", "fa-solid fa-heart");
    if (video) {
            const video1 = `assets/images/${name}/${video}`;
            const vid = document.createElement( 'video' );
           vid.setAttribute("src", video1 );
           vid.setAttribute("id", id);
           vid.setAttribute("name", "img_photographer" );
           vid.setAttribute("class", "video_photographer");
           vid.setAttribute("title", title);
            divImg.appendChild(vid);
        }
     else {
        const picture2 = `assets/images/${name}/${image}`;
        let img = document.createElement( 'img' );
        img.setAttribute("src", picture2);
        img.setAttribute("id", id );
        img.setAttribute("name", "img_photographer" );
        img.setAttribute("href", `photographer.html?id=${id}`)
        img.setAttribute("alt", title)
        divImg.appendChild(img);
    }
    divHeart.appendChild(spanLikes1);
    divHeart.appendChild(icon);
    divLikes.appendChild(spanLikes);
    divLikes.appendChild(divHeart);
    divImg.appendChild(divLikes);
    return (divImg);
}
return { name, picture,  city, country, tagline, price, getUserCardDOM, greyData, displayMedia };
};

    
