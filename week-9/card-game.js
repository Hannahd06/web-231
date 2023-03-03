/*
============================================
; Title:  card.js
; Author: Hannah Del Real
; Date:   22 February 2023
; Description: JavaScript for delreal-card-game.html, demonstrating use of functions.
;===========================================
*/
class Card {
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
  }
}

class Dealer {
  constructor() {
    this.getDeckOfCards();
  }

  // Variable for number of cards in a standard deck.
  CARD_COUNT = 52;
  cards = [];
  //Array to create card faces.
  faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  //String for card suits.
  suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

  //Generate the deck of cards.
  getDeckOfCards() {
    for (let count = 0; count < this.CARD_COUNT; count++) {
      this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
    }
  }

  //shuffle the deck of cards.
  shuffle () {
    for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
      let secondCard = Math.floor(Math.random() * this.CARD_COUNT);
      let tempCard = this.cards[firstCard];
      this.cards[firstCard] = this.cards[secondCard];
      this.cards[secondCard] = tempCard; 
    }
  }
}

//Create a template for each card's display. 
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
  return `<div class="card player-card">
              <div class="card-title" style="text-align: left; font-size: 20px; padding-left: 10px; color: ${faceColor};">
              ${card.face}
              </div>
              <div class="card-content" style="font-size:28px; padding-bottom:25px; text-align:center;">
                <span class="${suitIcon}" style="
                color: ${suitColor};
                ">
                </span>
              </div>
            </div>`;
}

// Give each card the correct icon and color.
document.getElementById("btnDealCards").onclick= function () {
  let dealer = new Dealer();
  dealer.shuffle();
  let cardOutputWithIcon = "";
  for (let card of dealer.cards)  {
    switch (card.suit) {
      case "Hearts":
        cardOutputWithIcon += buildPlayingCard (card, "mdi mdi-cards-heart", "red", "red");
        break;
      case "Diamonds":
        cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-diamond", "red", "red");
        break;
      case "Clubs":
        cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-club", "black", "black");
        break;
      case "Spades":
        cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-spade", "black", "black");
        break;
    }
  } 
  //html results card displays shuffled cards.
  document.getElementById("player-card-container").innerHTML = cardOutputWithIcon
}