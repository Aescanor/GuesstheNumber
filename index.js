// TP 1 - Guess the number : 

// 1-déclaration des variables :
const form = document.querySelector("form.guess-container");
const inputNumber = document.querySelector("input#guessNumber");
const alert = document.querySelector(".text-info");
const indication = document.querySelector(".text-indication");
const compteur = document.querySelector(".compteur");
const compteurTrue = document.querySelector(".compteur.true")
const compteurFalse = document.querySelector(".compteur.false")
const button = document.querySelector("button");

// 2 - gestion du comportement :

form.addEventListener("click", function(e) {
    e.preventDefault()

    // 3-Contrôle de l'input : 

    // regex de l'input:
    let guessUser = inputNumber.value;

    const regexNumber = /[0-9]{1,2}/g;

    if (guessUser.match(regexNumber)) {
        alert.textContent = " ";

    } else if (guessUser != (regexNumber)) {
        alert.textContent = "Veuillez saisir un nombre!"

    } else if (guessUser.match("")) {
        alert.textContent = "Veuillez saisir un nombre!"
        indication.textContent = "En attente de votre proposition!"

    } else {
        inputNumber.textContent = "En attente de votre choix!"
    }

    // 3-Function randomNumber : 

    let randomNumber = Math.floor(Math.random(1 - 10) * 10)

    console.log(randomNumber);

    // 3.a-Contrôle de la proposition utilisateur == random 

    if (guessUser == randomNumber) {
        indication.textContent = "Bravo, vous avez trouvé le bon nombre!";
        indication.style.color = "green"
    } else if (guessUser > randomNumber) {
        indication.textContent = "Non, c'est moins!";
        indication.style.color = "red";
    } else if (guessUser < randomNumber) {
        indication.textContent = "Non, c'est +"
        indication.style.color = "red";
    } else {
        indication.textContent = ""
    }

    // 4-Function guessCounter : 

    //    10 tentatives, une fois les tentatives utilisées on bloque l'input, 
    //    ou dès que la réponse est bonne, on bloque le script 

    
    // initialisation du nbr de tentatives:

//     let counter = 10;
//     let counterTrue = 0;
//     let counterFalse = 0;


//     function guessCounter(guess){
//     for(let i = 0; i < counter; i++){
//         console.log(`LA valeur de i : ${i}`);
//     }

// }



    

})


