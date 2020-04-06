let mosaiqueSelector = document.querySelector('#enmosaique'); // selection du bouton mosaique
let colonneSelector = document.querySelector('#encolone'); // selection du bouton colonne 
let addSelector = document.querySelector('#addimg'); // selection du bouton Ajouter
let divimageSelector = document.querySelectorAll('#maingalery .row div'); // séléction du div contenant les imgs

colonneSelector.addEventListener('click', function () {

    divimageSelector.forEach(element => {
        
        if (element.classList.contains('one-third')) { // vérification si on est en mode mosaique
            element.classList.replace('one-third', 'twelve'); // on remplace les tiers par des larges
        }

    });
})

mosaiqueSelector.addEventListener('click', function () {

    divimageSelector.forEach(element => {

        if (element.classList.contains('twelve')) {
            element.classList.replace('twelve', 'one-third');
        }
    });
})

//pour ajouter des images
let gallerybodySelector = document.querySelector('main')

addSelector.addEventListener('click', function () {

   let urlrequest = window.prompt(`Entrer l'url de l'image que vous souhaitez ajouter`); // ouvertur d'un alert qui demande l'url

    if (is_url(urlrequest) === false) {
        alert(`L'image n'a pas pu être ajouté`);
    } else {
        
        if (gallerybodySelector.lastElementChild.childNodes.length >= 7) { // if pour vérifier si le dernier élément a déja trois image dans ça ranger
            
            let galleryrowdivCreate = document.createElement('div');
            galleryrowdivCreate.classList.add('row');

            gallerybodySelector.appendChild(galleryrowdivCreate);

            let gallerycolumndivCreate = document.createElement('div');
            gallerycolumndivCreate.classList.add('one-third', 'column')

            galleryrowdivCreate.appendChild(gallerycolumndivCreate);

            let galleryimgCreate = document.createElement('img');
            galleryimgCreate.classList.add('u-max-full-width');
            galleryimgCreate.src = urlrequest;

            gallerycolumndivCreate.appendChild(galleryimgCreate);

            alert(`Votre image a bien été enregister aller en bas de page :)`);

        } else {

            console.log(gallerybodySelector.lastElementChild);

            let gallerycolumndivCreate = document.createElement('div');
            gallerycolumndivCreate.classList.add('one-third', 'column')

            gallerybodySelector.lastElementChild.appendChild(gallerycolumndivCreate);

            let galleryimgCreate = document.createElement('img');
            galleryimgCreate.classList.add('u-max-full-width');
            galleryimgCreate.src = urlrequest;

            gallerycolumndivCreate.appendChild(galleryimgCreate);

            alert(`Votre image a bien été enregister aller en bas de page :)`);

        }
            
        };
    })

    function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}