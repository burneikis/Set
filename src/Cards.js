import "./Cards.css";
import Card from "./Card.js";
import React from "react";
import { allCards, getCards, shuffle } from "./cardFunctions.js";

let playCards = shuffle(getCards());

function getCardNumber(card) {
  return allCards.indexOf(card) + 1;
}

function Cards() {
  return playCards.map((card, index) => {
    return <Card key={index} card={card} number={getCardNumber(card)} />;
  });
}

export default Cards;
