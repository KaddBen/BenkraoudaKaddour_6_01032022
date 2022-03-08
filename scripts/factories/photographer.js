function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price,image, utilisateur } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const divImg = document.createElement('div');
        divImg.setAttribute("class", "container_img");
        const linkPhotographer = document.createElement('a');
        linkPhotographer.setAttribute("href", "/photographer.html");
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
        article.appendChild(divImg);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(money);
        linkPhotographer.appendChild(article)
        return(linkPhotographer);
    }

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
function displayMedia(media) {

    const {image, likes, title, video } = media;
    const name = localStorage.getItem("name");
   
   
    const divImg = document.createElement('div');
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
            divImg.appendChild(vid);
        }
     else {
        const picture2 = `assets/images/${name}/${image}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture2);
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

    
