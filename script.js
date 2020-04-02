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

function create_div_petit(data, i){ // faire passer la data par ici pour que tout soit a l'intérieur du div Création titre des petits articles
    let create_div_img = document.createElement('div');
    create_div_img.classList.add('one-third', 'column');
    create_div_img.setAttribute('id', i);

    // let test_recuperation_div = document.querySelector(`#${i}`);
    create_div_img.appendChild(create_little_titre(data));
    create_div_img.appendChild(create_image_petit(data));
    create_div_img.appendChild(func_create_body_petit(data));

    return create_div_img;
}

function create_little_titre(data) { // création des titre
    let create_titre_petit = document.createElement('h2');
    const titre = data['title'];
    const capitalizedTitre = titre.charAt(0).toUpperCase()  + titre.slice(1);
    create_titre_petit.textContent = capitalizedTitre;

    return create_titre_petit;
}

function create_image_petit() { // mise en place des image
    let create_img = document.createElement('img');
    create_img.src = 'img/devimage.png';
    create_img.classList.add('u-max-full-width');
    
    return create_img;
}

function func_create_body_petit(data) {
    let create_body_petit = document.createElement('p');
    create_body_petit.textContent = data['body'];

    return create_body_petit;
}


function fillTheFeed (jsondata) { 
    let feedSelector = document.querySelector('#welcome');
    let feedpetitSelector = document.querySelector('#petit_article')
    jsondata.forEach((element, i) => { // i ???????? fournit les données comme une boucle for i ? 
        if (i < 3){
        feedSelector.appendChild(create_titre(element)); 
        feedSelector.appendChild(create_article(element));
    } else if (i >= 3 && i < 6) {

        feedpetitSelector.appendChild(create_div_petit(element));
    }
    });
}

fetchAllPost();

// carousel
$(document).ready(function () {
    // Using default configuration
    // $(carousel).carouFredSel();

    //Using custom configuration
    $(carousel).carouFredSel({
        responsive	: true,
        align: "center",
        direction: 'down'
    });
  });