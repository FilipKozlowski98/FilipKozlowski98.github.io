/* DECK CREATOR */
class card {
  constructor(name, value, suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
  }
}

let deck = [];
let suitsCounter = 0;
const suits = ["club", "heart", "diamond", "spades"];

function createDeck() {
  deck = [];
  for (i = 0; i < 52; i++) {
    deck.push(new card());
    if (i < 4) {
      deck[i].name = 2;
      deck[i].value = 2;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 8) {
      deck[i].name = 3;
      deck[i].value = 3;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 12) {
      deck[i].name = 4;
      deck[i].value = 4;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 16) {
      deck[i].name = 5;
      deck[i].value = 5;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 20) {
      deck[i].name = 6;
      deck[i].value = 6;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 24) {
      deck[i].name = 7;
      deck[i].value = 7;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 28) {
      deck[i].name = 8;
      deck[i].value = 8;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 32) {
      deck[i].name = 9;
      deck[i].value = 9;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 36) {
      deck[i].name = 10;
      deck[i].value = 10;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 40) {
      deck[i].name = "jack";
      deck[i].value = 10;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 44) {
      deck[i].name = "queen";
      deck[i].value = 10;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 48) {
      deck[i].name = "king";
      deck[i].value = 10;
      deck[i].suit = suits[suitsCounter];
    } else if (i < 52) {
      deck[i].name = "ace";
      deck[i].value = 11;
      deck[i].suit = suits[suitsCounter];
    }
    suitsCounter++;
    if (suitsCounter == 4) {
      suitsCounter = 0;
    }
  }
}

createDeck();

/* BETTING PHASE*/
const betAmount = document.querySelector("#betAmount");
const startButton = document.querySelector(".start");
const currentBet = document.querySelector(".bet");
const balance = document.querySelector(".balance");
let gameStart = false;
const setup = document.querySelector(".setup");
const maxButton = document.querySelector(".max");
const halfButton = document.querySelector(".half");

function maxBet() {
  betAmount.value = balance.innerHTML;
}

function halfBet() {
  betAmount.value = parseInt(balance.innerHTML, 10) / 2;
}

function betLogic() {
  let isCorrect = true;
  if (betAmount.value == "") {
    isCorrect = false;
    window.alert("Please place your bet");
  } else if (parseInt(betAmount.value, 10) > parseInt(balance.innerHTML, 10)) {
    isCorrect = false;
    window.alert("You don't have that much money");
  }
  return isCorrect;
}

function startGame() {
  if (betLogic()) {
    balance.innerHTML =
      parseInt(balance.innerHTML, 10) - parseInt(betAmount.value, 10);
    currentBet.innerHTML = betAmount.value;
    betAmount.value = "";
    setup.style.display = "none";
    gameStart = true;
    standButton.style.cursor = "pointer";
    hitButton.style.cursor = "pointer";
    doubleDownButton.style.cursor = "pointer";
    checkDoubleDown();
    dealerDraw();
    setTimeout(dealerDrawReversed, 500);
    playerDraw();
    setTimeout(playerDraw, 500);
  }
}

function checkDoubleDown() {
  if (
    parseInt(currentBet.innerHTML, 10) >
    parseInt(balance.innerHTML, 10) * 2
  ) {
    disableDoubleDown();
  } else {
    doubleDownPossible = true;
  }
}

startButton.addEventListener("click", startGame);
maxButton.addEventListener("click", maxBet);
halfButton.addEventListener("click", halfBet);

/* PLAYING */
const playerCards = document.querySelector(".playerCards");
const dealerCards = document.querySelector(".dealerCards");
const standButton = document.querySelector(".stand");
const hitButton = document.querySelector(".hit");
const doubleDownButton = document.querySelector(".doubleDown");
const playerPoints = document.querySelector(".playerPoints");
const dealerPoints = document.querySelector(".dealerPoints");
const info = document.querySelector(".info");
const resetButton = document.querySelector(".reset");
let reverseCardValue = 0;
let playerTurn = true;
let dealerTurn = false;
let deckCounter = 51;
let playerAceCount = 0;
let dealerAceCount = 0;
let doubleDownPossible = true;
let drawPossible = true;

standButton.style.cursor = "not-allowed";
hitButton.style.cursor = "not-allowed";
doubleDownButton.style.cursor = "not-allowed";

function cordX() {
  if (playerTurn) {
    return 1040 - playerCards.childElementCount * 180;
  } else if (dealerTurn) {
    return 1040 - dealerCards.childElementCount * 180;
  }
}

function tie() {
  info.innerHTML = "DRAW !";
  dealerTurn = false;
  clearInterval(interval);
  resetButton.style.display = "initial";
  balance.innerHTML =
    parseInt(balance.innerHTML, 10) + parseInt(currentBet.innerHTML, 10);
}

function youLost() {
  info.innerHTML = "YOU LOST !";
  standButton.style.cursor = "not-allowed";
  hitButton.style.cursor = "not-allowed";
  doubleDownButton.style.cursor = "not-allowed";
  playerTurn = false;
  resetButton.style.display = "initial";
  if (parseInt(balance.innerHTML, 10) == 0) {
    info.innerHTML = "YOU ARE BROKE !";
    resetButton.innerHTML = "NEW GAME";
    info.style.left = "300px";
    resetButton.removeEventListener("click", resetGame);
    resetButton.addEventListener("click", function resetGame() {
      window.location.reload();
    });
  }
}

function gameLogic() {
  if (playerTurn) {
    if (parseInt(playerPoints.innerHTML) > 21) {
      if (playerAceCount > 0) {
        playerPoints.innerHTML = parseInt(playerPoints.innerHTML, 10) - 10;
        playerAceCount--;
      } else {
        youLost();
      }
    }
  } else if (dealerTurn) {
    if (parseInt(dealerPoints.innerHTML) > 21) {
      if (dealerAceCount > 0) {
        dealerPoints.innerHTML = parseInt(dealerPoints.innerHTML, 10) - 10;
        dealerAceCount--;
      } else {
        info.innerHTML = "YOU WON !";
        dealerTurn = false;
        clearInterval(interval);
        resetButton.style.display = "initial";
        balance.innerHTML =
          parseInt(balance.innerHTML, 10) +
          parseInt(currentBet.innerHTML, 10) * 2;
      }
    } else if (
      parseInt(dealerPoints.innerHTML, 10) >
        parseInt(playerPoints.innerHTML, 10) &&
      parseInt(dealerPoints.innerHTML) <= 21
    ) {
      youLost();
      dealerTurn = false;
      clearInterval(interval);
    }
  }
}

function dealerDraw() {
  let x = Math.round(Math.random() * deckCounter - 0);
  deckCounter--;
  let currentCard = deck[x];
  if (currentCard.name == "ace") {
    dealerAceCount++;
  }
  let cardDisplay = document.createElement("div");
  cardDisplay.classList.add("card");
  cardDisplay.style.backgroundImage = `url(images/cards/${currentCard.name}-${currentCard.suit}.png)`;
  dealerCards.appendChild(cardDisplay);
  cardDisplay.animate(
    [
      {
        transform: `translate(${cordX()}px,-300px)`,
        opacity: 0,
      },
      {
        transform: "translate(0,0)",
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      easing: "ease-out",
    }
  );
  setTimeout(function () {
    dealerPoints.innerHTML =
      parseInt(dealerPoints.innerHTML, 10) + parseInt(currentCard.value, 10);
  }, 1000);

  deck.splice(x, 1);
}

function dealerDrawReversed() {
  let x = Math.round(Math.random() * deckCounter - 0);
  deckCounter--;
  let currentCard = deck[x];
  if (currentCard.name == "ace") {
    dealerAceCount++;
  }
  let cardDisplay = document.createElement("div");
  cardDisplay.classList.add("card");
  cardDisplay.classList.add("card--back");
  cardDisplay.style.backgroundImage = `url(images/cards/${currentCard.name}-${currentCard.suit}.png)`;
  dealerCards.appendChild(cardDisplay);
  cardDisplay.animate(
    [
      {
        transform: `translate(${cordX()}px,-300px)`,
        opacity: 0,
      },
      {
        transform: "translate(0,0)",
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      easing: "ease-out",
    }
  );
  reverseCardValue = parseInt(currentCard.value, 10);
  deck.splice(x, 1);
}

function playerDraw() {
  if (gameStart && playerTurn && drawPossible) {
    let x = Math.round(Math.random() * deckCounter - 0);
    deckCounter--;
    let currentCard = deck[x];
    if (currentCard.name == "ace") {
      playerAceCount++;
    }
    let cardDisplay = document.createElement("div");
    cardDisplay.classList.add("card");
    cardDisplay.style.backgroundImage = `url(images/cards/${currentCard.name}-${currentCard.suit}.png)`;
    playerCards.appendChild(cardDisplay);
    cardDisplay.animate(
      [
        {
          transform: `translate(${cordX()}px,-900px)`,
          opacity: 0,
        },
        {
          transform: "translate(0,0)",
          opacity: 1,
        },
      ],
      {
        duration: 1000,
        easing: "ease-out",
      }
    );
    setTimeout(function () {
      playerPoints.innerHTML =
        parseInt(playerPoints.innerHTML, 10) + parseInt(currentCard.value, 10);
    }, 1000);
    deck.splice(x, 1);
    setTimeout(function () {
      gameLogic();
    }, 1100);
  }
}

function disableDoubleDown() {
  doubleDownPossible = false;
  doubleDownButton.style.cursor = "not-allowed";
}

function playerStand() {
  if (gameStart && playerTurn) {
    playerTurn = false;
    dealerTurn = true;
    disableDoubleDown();
    standButton.style.cursor = "not-allowed";
    hitButton.style.cursor = "not-allowed";
    launchDealer();
  }
}

function playerDoubleDown() {
  if (gameStart && playerTurn && doubleDownPossible) {
    playerDraw();
    drawPossible = false;
    setTimeout(function () {
      playerStand();
    }, 1200);
    disableDoubleDown();
    balance.innerHTML =
      parseInt(balance.innerHTML, 10) - parseInt(currentBet.innerHTML, 10);
    currentBet.innerHTML = parseInt(currentBet.innerHTML, 10) * 2;
  }
}

function resetGame() {
  gameStart = false;
  dealerTurn = false;
  playerTurn = true;
  drawPossible = true;
  setup.style.display = "flex";
  info.innerHTML = "";
  resetButton.style.display = "";
  playerPoints.innerHTML = "0";
  dealerPoints.innerHTML = "0";
  currentBet.innerHTML = "0";
  dealerCards.innerHTML = "";
  playerCards.innerHTML = "";
  playerAceCount = 0;
  dealerAceCount = 0;
  deckCounter = 51;
  createDeck();
}

hitButton.addEventListener("click", playerDraw);
hitButton.addEventListener("click", disableDoubleDown);
standButton.addEventListener("click", playerStand);
doubleDownButton.addEventListener("click", playerDoubleDown);
resetButton.addEventListener("click", resetGame);

/* AI */
function revertCard() {
  let reverseCard = document.querySelector(".card--back");
  reverseCard.animate(
    [
      {
        transform: "scaleX(1)",
      },
      {
        transform: "scaleX(0)",
      },
      {
        transform: "scaleX(1)",
      },
    ],
    {
      duration: 750,
    }
  );
  setTimeout(function () {
    dealerPoints.innerHTML =
      parseInt(dealerPoints.innerHTML, 10) + reverseCardValue;
  }, 750);
  setTimeout(function () {
    reverseCard.classList.remove("card--back");
  }, 375);
  setTimeout(function () {
    gameLogic();
  }, 850);
}

let interval;

function dealerLogic() {
  if (gameStart && dealerTurn) {
    if (
      parseInt(dealerPoints.innerHTML, 10) ==
        parseInt(playerPoints.innerHTML, 10) &&
      21 - parseInt(dealerPoints.innerHTML, 10) < 4
    ) {
      tie();
    } else if (
      parseInt(dealerPoints.innerHTML, 10) <=
      parseInt(playerPoints.innerHTML, 10)
    ) {
      dealerDraw();
      setTimeout(function () {
        gameLogic();
      }, 1200);
    } else {
      clearInterval(interval);
    }
  }
}

function launchDealer() {
  revertCard();
  interval = setInterval(dealerLogic, 1500);
}
