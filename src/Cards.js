import "./Cards.css";
import Card from "./Card.js";
import React from "react";
import { allCards, getCards, shuffle } from "./cardFunctions.js";

let playCards = shuffle(getCards());

function getCardNumber(card) {
  return allCards.indexOf(card) + 1;
}

function checkWin(cards) {
  let firstCard = cards[0]
  let secondCard = cards[1]
  let thirdCard = cards[2]

  console.log(firstCard, secondCard, thirdCard)

  let sameCount = firstCard[0] === secondCard[0]
  let sameColor = firstCard[1] === secondCard[1]
  let sameShape = firstCard[2] === secondCard[2]
  let sameFill = firstCard[3] === secondCard[3]

  if ((thirdCard[0] === firstCard[0]) !== sameCount) {
    return;
  }
  if ((thirdCard[1] === firstCard[1]) !== sameColor) {
    return;
  }
  if ((thirdCard[2] === firstCard[2]) !== sameShape) {
    return;
  }
  if ((thirdCard[3] === firstCard[3]) !== sameFill) {
    return;
  }
  if ((thirdCard[0] === secondCard[0]) !== sameCount) {
    return;
  }
  if ((thirdCard[1] === secondCard[1]) !== sameColor) {
    return;
  }
  if ((thirdCard[2] === secondCard[2]) !== sameShape) {
    return;
  }
  if ((thirdCard[3] === secondCard[3]) !== sameFill) {
    return;
  }

  alert("You win!");
  //refresh the page
  window.location.reload();
}

function Cards() {
  let selectedCards = [];

  function handleSelectedCards(card) {
    if (selectedCards.includes(card)) {
      selectedCards.splice(selectedCards.indexOf(card), 1);
      return
    }
    if (selectedCards.length > 2) {
      return
    }
    selectedCards.push(card);
    if (selectedCards.length > 2) {
      checkWin(selectedCards);
    }
  }

  return playCards.map((card, index) => {
    return <Card selectedCards={selectedCards} function={handleSelectedCards} key={index} card={card} number={getCardNumber(card)} />;
  });
}

export default Cards;
