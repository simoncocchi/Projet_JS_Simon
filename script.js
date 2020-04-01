function fetchAllPost() { // fonction qui récupérer tout les données 
fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(json => {
        fillTheFeed(json);
    });
}


function create_titre(data) {
    let createtitre = document.createElement('h1'); // creation du titre

    const titre = data['title'];
    const capitalizedTitre = titre.charAt(0).toUpperCase()  + titre.slice(1);
    createtitre.textContent = capitalizedTitre;

    return createtitre;
}

function create_article(data) {
    let createbody = document.createElement('p'); // création du body
    createbody.textContent = data['body'];

    return createbody;
}

function fillTheFeed (jsondata) { 
    let feedSelector = document.querySelector('#welcome');
    jsondata.forEach((element, i) => { // i ???????? fournit les données comme une boucle for i ? 
        feedSelector.appendChild(create_titre(element)); 
        feedSelector.appendChild(create_article(element));
    });
}

fetchAllPost();

