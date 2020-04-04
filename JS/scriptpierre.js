emojiSelector = document.querySelectorAll('#paper, #scissors, #rock'); // sectione par id 
userclick = null;
srcclick = null;
emojiSelector.forEach(element => {
    element.onclick = function () {
        userclick = element.id;

        srcclick = element.src;    // je chercher a copier le src de l'image cliquer

        let testpres = document.querySelector('#rowresult');

        if (testpres){
            testpres.remove();
        }

        playGame(userclick);
        function playGame(clickchoice) {
            let uChoice = getUserChoice(clickchoice);
            let computerChoice = getComputerChoice();
            console.log(uChoice);
            console.log(computerChoice);
            // ajoute de la ligne won lost or tied 
            let resultat = determineWinner(uChoice, computerChoice);

            //function de création de l'allert 
            let creationalert = function (resultat){
                if(resultat === 'won') {
                    let alterwon = document.createElement('h5');
                    alterwon.id = 'gagne';
                    alterwon.textContent ='C\'est Gagné';
                    
                    document.querySelector('#rowresult').appendChild(alterwon);
                } else if (resultat ==='lost') {
                    let alterlost = document.createElement('h5');
                    alterlost.id = 'perdu'
                    alterlost.textContent ='C\'est Perdu';
                    
                    document.querySelector('#rowresult').appendChild(alterlost);
                } else {
                    let altertied = document.createElement('h5');
                    altertied.id = 'egalite'
                    altertied.textContent ='C\'est Egalité';
                    
                    document.querySelector('#rowresult').appendChild(altertied);
                }
            }
            
            creationalert(resultat);
           
            console.log(determineWinner(uChoice, computerChoice));
        }
    }
});

// 4. Maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur;
// 5. Créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent;
// 6. Ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.

function getUserChoice(userInput) {
    let userInputToLowerCase = userInput.toLowerCase();
    if (userInputToLowerCase === "rock" || userInputToLowerCase === "paper" || userInputToLowerCase === "scissors" || userInputToLowerCase === "bomb") {
        
        let divrowCreate = document.createElement('div');
        divrowCreate.classList.add('row');
        divrowCreate.id = 'rowresult';
        document.querySelector('#mainpierre').appendChild(divrowCreate);

        let divimgCreate = document.createElement('div');
        divimgCreate.classList.add('one-third', 'column');

        divrowCreate.appendChild(divimgCreate);

        let imgchoiceCreate = document.createElement('img'); // creation du div si le choix est bon
        imgchoiceCreate.src = srcclick; // implémentation du src dans mon nouveau

        divimgCreate.appendChild(imgchoiceCreate);

        return userInputToLowerCase
    } else {
        console.log(`Veuillez entrer rock, paper, scissors ou la methode secrete`);
    }
}

function getComputerChoice() {
    let choixDuPC = Math.floor(Math.random() * 3);

    let divimgCreate = document.createElement('div');
    divimgCreate.classList.add('one-third', 'column');

    document.querySelector('#rowresult').appendChild(divimgCreate);

    let creationduVS = document.createElement('img'); // création d'un vs entre les deux. 
    creationduVS.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/squared-vs_1f19a.png';

    divimgCreate.appendChild(creationduVS);


    let srcdupc = emojiSelector[choixDuPC].src;

    let divimgchoixpcCreate = document.createElement('div');
    divimgchoixpcCreate.classList.add('one-third', 'column');

    document.querySelector('#rowresult').appendChild(divimgchoixpcCreate);

    let imgchoicePCCreate = document.createElement('img'); // creation du div si le choix est bon
        imgchoicePCCreate.src = srcdupc; // implémentation du src dans mon nouveau

        divimgchoixpcCreate.appendChild(imgchoicePCCreate);

    if (choixDuPC === 0) {
        return "paper"
    } else if (choixDuPC === 1) {
        return "scissors"
    } else if (choixDuPC === 2) {
        return "rock"
    } else {
        console.log(`bug dans le choix du pc`)
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "bomb") {
        return "won"
    } else if (userChoice === computerChoice) {
        return "tied"
    } else {
        if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                return "won"
            } else {
                return "lost";
            }
        }
        if (userChoice === "paper") {
            if (computerChoice === "rock") {
                return "won"
            } else {
                return "lost";
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "paper") {
                return "won"
            } else {
                return "lost";
            }
        }
    }
}