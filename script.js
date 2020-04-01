fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(json => json.forEach(element => {
        create_article(element['title'], element['body'])
    })
    );

function create_article(titre, body) {
    let createtitre = document.createElement('h1'); // creation du titre
    createtitre.textContent = titre;

    let createbody = document.createElement('p'); // création du body
    createbody.textContent = body;

    document.querySelector('#welcome').appendChild(createtitre);// on place le titre
    document.querySelector('#welcome').appendChild(createbody);// on place le text
}