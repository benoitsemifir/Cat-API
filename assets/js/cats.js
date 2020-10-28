const button = document.querySelector('button');
const url = "https://api.thecatapi.com/v1/images/search";

const afficherChat = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(json => {
            let cat = json[0];
            const img = document.querySelector("img");
            if (img) {
                img.src = cat.url;
            } else {
                addImg(cat.url);
            }
            // tableau pour stocker les races
            let breeds = [];
            // on parcours le table de breeds
            cat.breeds.forEach(breed => {
                // si l'élement du tableau breeds a la propriété 'name'
                if (breed.hasOwnProperty('name')) {
                    // j'ajoute le nom de la race au tableau
                    breeds.push(breed.name);
                }
            });
            // Si j'ai au moins une race dans le tableau, je stocke la concaténation du tableau dans title
            // sinon je stocke "The Cat API"
            let title = breeds.length > 0 ? breeds.join(' ') : "The Cat API";
            changeTitle(title); // changement du titre
        })
}

// commentaire inline

/*
    commentaire multiligne
*/

/**
 * addImg: Créé un noeud DOM <img> avec ses attributs en paramètre
 * @param {*} src 
 * @param {*} alt 
 */
const addImg = (src, alt = "Une photo de chat") => {
    const imgDiv = document.querySelector('#imgDiv');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    imgDiv.appendChild(img)
}

/**
 * Change le texte du titre
 * @param {*} title 
 */
const changeTitle = (title = "The Cat API") => {
    const h1 = document.querySelector("h1");
    h1.innerText = title;
}

document.addEventListener('DOMContentLoaded', afficherChat);
button.addEventListener('click', afficherChat);