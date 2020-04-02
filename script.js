function fetchAllPost() { // fonction qui récupérer tout les données 
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
        .then(json => {
            fillTheFeed(json);
        });
}


function create_titre(data) {
    console.log("functioncreate_titre -> data", data)
    let createtitre = document.createElement('h1'); // creation du titre
    let titre = null;

    if (typeof data === 'object') {
        titre = data['title'];
    } else {
        titre = data;
    }

    const capitalizedTitre = titre.charAt(0).toUpperCase() + titre.slice(1);
    createtitre.textContent = capitalizedTitre;

    return createtitre;
}

function create_article(data) {
    let createbody = document.createElement('p'); // création du body

    if (typeof data === 'object') {
        createbody.textContent = data['body'];
    } else {
        createbody.textContent = data;
    }

    return createbody;
}

function create_div_petit(data, i) { // faire passer la data par ici pour que tout soit a l'intérieur du div Création titre des petits articles
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
    const capitalizedTitre = titre.charAt(0).toUpperCase() + titre.slice(1);
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

let feedSelector = document.querySelector('#welcome');
let feedpetitSelector = document.querySelector('#petit_article');
function fillTheFeed(jsondata) {

    jsondata.forEach((element, i) => { // i ???????? fournit les données comme une boucle for i ? 
        if (i < 3) {
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
        responsive: true,
        align: "center",
        direction: 'left'
    });
});


// Dropdown Article 

let declencheur = document.querySelector('#declencheur');
let dropdown = document.querySelector('.dropdown');

declencheur.addEventListener('click', (e) => {
    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed');
    } else {
        dropdown.classList.add('closed');
    }
})

// Récupération de donnée champs 

let titreSelector = document.querySelector('#titreadd');
let texteSelector = document.querySelector('#textadd');
let enregisterSelector = document.querySelector('#articlesave')

enregisterSelector.addEventListener('click', function () {
    if (titreSelector.value !== null && texteSelector.value !== null) {
        feedSelector.appendChild(create_titre(titreSelector.value));
        feedSelector.appendChild(create_article(texteSelector.value));
        titreSelector.value = '';
        texteSelector.value = '';
    }
})

titreSelector.oninput = () => {
    var titre = titreSelector.value;
    if (titre) {
        console.log(`Le texte tapé est '${titre}'`);
        let h1Selector = document.querySelector('#articleexemple h1');
        h1Selector.textContent = titre;
    }
}


texteSelector.oninput = () => {
    var texte = texteSelector.value;

    if (texte) {
        console.log(`Le texte tapé est '${texte}'`);
        let pSelector = document.querySelector('#articleexemple p');
        pSelector.textContent = texte;
    }
}
