import "./Cards.css";
import Card from "./Card.js";
import React from "react";
import { allCards, getCards, shuffle } from "./cardFunctions.js";

let playCards = shuffle(getCards());

function getCardNumber(card) {
  return allCards.indexOf(card) + 1;
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
  }

  return playCards.map((card, index) => {
    return <Card selectedCards={selectedCards} function={handleSelectedCards} key={index} card={card} number={getCardNumber(card)} />;
  });
}

export default Cards;
