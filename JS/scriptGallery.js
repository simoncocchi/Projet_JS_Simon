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

addSelector.addEventListener('click', function () {

   let urlrequest = window.prompt(`Entrer l'url de l'image que vous souhaitez ajouter`); // ouvertur d'un alert qui demande l'url

    if (urlrequest == null || urlrequest == '') {
        alert(`l'image n'a pas pu être ajouté`);
    } else {
        
    }

})