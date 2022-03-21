// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let cards = [];

let hasBlackJack = false;
let isAlive = false;

let message = "";
let winlose = [0, 0];

let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards");
let totalEl = document.getElementById("total");
let winloseEl = document.getElementById("winlose");

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [getRandomCard(), getRandomCard()];
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
        winlose[0]++;
        message = "BLACKJACK!";
        hasBlackJack = true;
    } 
    else 
    {
        winlose[1]++;
        message = "You lose!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    winloseEl.textContent = winlose[0] + "/" + winlose[1];
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10)
    {
        return 10;
    } 
    else if (randomNum === 1)
    {
        return 11;
    }
    else
    {
        return randomNum;
    }
}

function newCard() {
    if(isAlive === true && hasBlackJack === false)
    {
        cards.push(getRandomCard())
        renderGame();
    }
}