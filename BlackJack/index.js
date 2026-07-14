// ---------- Game state ----------

const SUITS = [
  { symbol: "♠", color: "black" },
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" },
  { symbol: "♣", color: "black" },
];
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck = [];
let dealerHand = [];
let playerHand = [];
let bankroll = 1000;
let currentBet = 0;
let round = 0;
let roundActive = false;

// ---------- DOM refs ----------

const bankrollEl = document.getElementById("bankroll");
const currentBetEl = document.getElementById("current-bet");
const roundCountEl = document.getElementById("round-count");
const dealerCardsEl = document.getElementById("dealer-cards");
const playerCardsEl = document.getElementById("player-cards");
const dealerTotalEl = document.getElementById("dealer-total");
const playerTotalEl = document.getElementById("player-total");
const messageEl = document.getElementById("message");

const dealBtn = document.getElementById("deal-btn");
const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");
const doubleBtn = document.getElementById("double-btn");
const nextBtn = document.getElementById("next-btn");
const clearBetBtn = document.getElementById("clear-bet");
const chipRack = document.getElementById("chip-rack");

const dealerSeat = document.querySelector(".dealer-seat");
const playerSeat = document.querySelector(".player-seat");

// ---------- Deck helpers ----------

function buildDeck() {
  const d = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      d.push({ rank, suit: suit.symbol, color: suit.color });
    }
  }
  return d;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function drawCard() {
  if (deck.length < 4) {
    deck = shuffle(buildDeck());
  }
  return deck.pop();
}

function cardValue(card) {
  if (card.rank === "A") return 11;
  if (["J", "Q", "K"].includes(card.rank)) return 10;
  return parseInt(card.rank, 10);
}

function handTotal(hand) {
  let total = hand.reduce((sum, c) => sum + cardValue(c), 0);
  let aces = hand.filter((c) => c.rank === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

// ---------- Rendering ----------

function renderCard(card, index, faceDown = false) {
  const div = document.createElement("div");
  div.className = "card" + (card.color === "red" ? " red" : "") + (faceDown ? " back" : "");
  div.style.setProperty("--stagger", index);
  if (!faceDown) {
    div.innerHTML = `
      <div class="corner top">${card.rank}<span>${card.suit}</span></div>
      <div class="pip">${card.suit}</div>
      <div class="corner bottom">${card.rank}<span>${card.suit}</span></div>
    `;
  }
  return div;
}

function renderHands(hideDealerHole = false) {
  dealerCardsEl.innerHTML = "";
  dealerHand.forEach((card, i) => {
    const faceDown = hideDealerHole && i === 1;
    dealerCardsEl.appendChild(renderCard(card, i, faceDown));
  });

  playerCardsEl.innerHTML = "";
  playerHand.forEach((card, i) => {
    playerCardsEl.appendChild(renderCard(card, i));
  });

  playerTotalEl.textContent = handTotal(playerHand);
  dealerTotalEl.textContent = hideDealerHole ? "?" : handTotal(dealerHand);
}

function updateStats() {
  bankrollEl.textContent = `$${bankroll}`;
  currentBetEl.textContent = `$${currentBet}`;
  roundCountEl.textContent = String(round).padStart(2, "0");
}

function setMessage(text) {
  messageEl.textContent = text;
}

function clearSeatStates() {
  dealerSeat.classList.remove("win", "lose", "push");
  playerSeat.classList.remove("win", "lose", "push");
}

// ---------- Betting phase ----------

chipRack.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip:not(.chip-clear)");
  if (!chip || roundActive) return;
  const value = parseInt(chip.dataset.value, 10);
  if (currentBet + value > bankroll) {
    setMessage("Not enough bankroll for that bet");
    return;
  }
  currentBet += value;
  updateStats();
  dealBtn.disabled = currentBet === 0;
});

clearBetBtn.addEventListener("click", () => {
  if (roundActive) return;
  currentBet = 0;
  updateStats();
  dealBtn.disabled = true;
});

// ---------- Round flow ----------

dealBtn.addEventListener("click", startRound);
hitBtn.addEventListener("click", playerHit);
standBtn.addEventListener("click", playerStand);
doubleBtn.addEventListener("click", doubleDown);
nextBtn.addEventListener("click", resetForNextRound);

function setBettingControlsEnabled(enabled) {
  chipRack.querySelectorAll(".chip").forEach((c) => (c.disabled = !enabled));
  dealBtn.disabled = !enabled || currentBet === 0;
}

function startRound() {
  if (currentBet === 0) return;
  round += 1;
  roundActive = true;
  clearSeatStates();
  setBettingControlsEnabled(false);

  deck = shuffle(buildDeck());
  dealerHand = [drawCard(), drawCard()];
  playerHand = [drawCard(), drawCard()];

  renderHands(true);
  updateStats();

  hitBtn.disabled = false;
  standBtn.disabled = false;
  doubleBtn.disabled = bankroll < currentBet * 2;
  nextBtn.style.display = "none";

  const playerBJ = handTotal(playerHand) === 21;
  const dealerBJ = handTotal(dealerHand) === 21;

  if (playerBJ || dealerBJ) {
    revealDealer();
    endRound();
    return;
  }

  setMessage("Hit or stand?");
}

function playerHit() {
  playerHand.push(drawCard());
  renderHands(true);
  doubleBtn.disabled = true;

  const total = handTotal(playerHand);
  if (total > 21) {
    revealDealer();
    endRound();
  } else if (total === 21) {
    playerStand();
  } else {
    setMessage("Hit or stand?");
  }
}

function doubleDown() {
  if (bankroll < currentBet * 2) return;
  currentBet *= 2;
  updateStats();
  playerHand.push(drawCard());
  renderHands(true);
  const total = handTotal(playerHand);
  if (total > 21) {
    revealDealer();
    endRound();
  } else {
    playerStand();
  }
}

function playerStand() {
  hitBtn.disabled = true;
  standBtn.disabled = true;
  doubleBtn.disabled = true;
  revealDealer();
  dealerPlay();
}

function revealDealer() {
  renderHands(false);
}

function dealerPlay() {
  const playerBust = handTotal(playerHand) > 21;
  if (!playerBust) {
    while (handTotal(dealerHand) < 17) {
      dealerHand.push(drawCard());
      renderHands(false);
    }
  }
  endRound();
}

function endRound() {
  hitBtn.disabled = true;
  standBtn.disabled = true;
  doubleBtn.disabled = true;
  renderHands(false);

  const playerTotal = handTotal(playerHand);
  const dealerTotal = handTotal(dealerHand);
  const playerBJ = playerTotal === 21 && playerHand.length === 2;
  const dealerBJ = dealerTotal === 21 && dealerHand.length === 2;

  let outcome;
  let payout = 0;

  if (playerTotal > 21) {
    outcome = "Bust — you lose";
    payout = -currentBet;
    playerSeat.classList.add("lose");
  } else if (dealerBJ && playerBJ) {
    outcome = "Both blackjack — push";
    payout = 0;
    playerSeat.classList.add("push");
    dealerSeat.classList.add("push");
  } else if (playerBJ) {
    outcome = "Blackjack! You win 3:2";
    payout = Math.floor(currentBet * 1.5);
    playerSeat.classList.add("win");
  } else if (dealerBJ) {
    outcome = "Dealer blackjack — you lose";
    payout = -currentBet;
    dealerSeat.classList.add("win");
  } else if (dealerTotal > 21) {
    outcome = "Dealer busts — you win";
    payout = currentBet;
    playerSeat.classList.add("win");
  } else if (playerTotal > dealerTotal) {
    outcome = "You win";
    payout = currentBet;
    playerSeat.classList.add("win");
  } else if (playerTotal < dealerTotal) {
    outcome = "Dealer wins";
    payout = -currentBet;
    dealerSeat.classList.add("win");
  } else {
    outcome = "Push — bet returned";
    payout = 0;
    playerSeat.classList.add("push");
    dealerSeat.classList.add("push");
  }

  bankroll += payout;
  setMessage(outcome);
  updateStats();
  roundActive = false;
  nextBtn.style.display = "inline-block";

  if (bankroll <= 0) {
    setMessage("You're out of chips — reload to play again");
    nextBtn.style.display = "none";
  }
}

function resetForNextRound() {
  currentBet = 0;
  updateStats();
  dealerHand = [];
  playerHand = [];
  dealerCardsEl.innerHTML = "";
  playerCardsEl.innerHTML = "";
  dealerTotalEl.textContent = "—";
  playerTotalEl.textContent = "—";
  clearSeatStates();
  setBettingControlsEnabled(true);
  nextBtn.style.display = "none";
  setMessage("Place your bet to begin");
}

// ---------- Init ----------

function init() {
  deck = shuffle(buildDeck());
  updateStats();
  setMessage("Place your bet to begin");
}

init();