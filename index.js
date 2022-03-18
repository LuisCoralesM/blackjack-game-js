// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

const cards = [5, 6];

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards");
let totalEl = document.getElementById("total");

function startGame() {
    renderGame();
}

function renderGame() {
    const total = cards.reduce((partialSum, a) => partialSum + a, 0);

    cardsEl.textContent = "Cards: ";
    for (const card of cards) {
        cardsEl.textContent += card + " ";
    }
    totalEl.textContent = "Total: " + total;

    if (total <= 20)
    {
        message = "Do you want to draw a card?";
    } 
    else if (total === 21)
    {
        message = "BLACKJACK!";
        hasBlackJack = true;
    } 
    else 
    {
        message = "You lose!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function getRandomCard() {
    
}

function newCard() {
    cards.push(10)
    renderGame();
}