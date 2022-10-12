let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let startEl = document.querySelector("#start-btn");


// let player = {
//     name: "John",
//     chips: 0
// }
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = "Hello " + player.name + ", you have  " + player.chips + " chips.";

function getRandomCard(){ 
    let random = Math.floor(Math.random()*13) + 1;
    if ( random === 1){
        return 11;
    }
    else if (random > 10){
        return 10;
    }
    else {
        return random;
    }
}


function startGame(){
    startEl.textContent = "START GAME"
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame(){
    cardEl.textContent= "Cards: " 
    
    for( let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum ;
    if (sum <= 20) {
        message = "Do you want to draw a new card?" 
    }
    else if(sum === 21) {
        message = "You got black jack" 
        hasBlackJack = true
    }
    else{
        message = "You have lost"
        isAlive = false;
        startEl.textContent = "NEW GAME"

    }
    messageEl.innerText = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        renderGame();
    }
}

//cashout!
console.log(hasBlackJack);
console.log(isAlive);
