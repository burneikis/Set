import "./Cards.css";

const allCards = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [2, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [2, 1, 0, 0],
  [0, 2, 0, 0],
  [1, 2, 0, 0],
  [2, 2, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 1, 0],
  [2, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 0],
  [2, 1, 1, 0],
  [0, 2, 1, 0],
  [1, 2, 1, 0],
  [2, 2, 1, 0],
  [0, 0, 2, 0],
  [1, 0, 2, 0],
  [2, 0, 2, 0],
  [0, 1, 2, 0],
  [1, 1, 2, 0],
  [2, 1, 2, 0],
  [0, 2, 2, 0],
  [1, 2, 2, 0],
  [2, 2, 2, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [2, 0, 0, 1],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [2, 1, 0, 1],
  [0, 2, 0, 1],
  [1, 2, 0, 1],
  [2, 2, 0, 1],
  [0, 0, 1, 1],
  [1, 0, 1, 1],
  [2, 0, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [0, 2, 1, 1],
  [1, 2, 1, 1],
  [2, 2, 1, 1],
  [0, 0, 2, 1],
  [1, 0, 2, 1],
  [2, 0, 2, 1],
  [0, 1, 2, 1],
  [1, 1, 2, 1],
  [2, 1, 2, 1],
  [0, 2, 2, 1],
  [1, 2, 2, 1],
  [2, 2, 2, 1],
  [0, 0, 0, 2],
  [1, 0, 0, 2],
  [2, 0, 0, 2],
  [0, 1, 0, 2],
  [1, 1, 0, 2],
  [2, 1, 0, 2],
  [0, 2, 0, 2],
  [1, 2, 0, 2],
  [2, 2, 0, 2],
  [0, 0, 1, 2],
  [1, 0, 1, 2],
  [2, 0, 1, 2],
  [0, 1, 1, 2],
  [1, 1, 1, 2],
  [2, 1, 1, 2],
  [0, 2, 1, 2],
  [1, 2, 1, 2],
  [2, 2, 1, 2],
  [0, 0, 2, 2],
  [1, 0, 2, 2],
  [2, 0, 2, 2],
  [0, 1, 2, 2],
  [1, 1, 2, 2],
  [2, 1, 2, 2],
  [0, 2, 2, 2],
  [1, 2, 2, 2],
  [2, 2, 2, 2],
];

function getCards() {
  let availableCards = Array.from(allCards);
  let cards = [];

  let sameCount = false;
  let sameColor = false;
  let sameShape = false;
  let sameFill = false;

  //pick a random card
  let randomIndex = Math.floor(Math.random() * availableCards.length);
  cards.push(availableCards[randomIndex]);
  let firstCard = availableCards[randomIndex];
  availableCards.splice(randomIndex, 1);

  //pick a second random card
  randomIndex = Math.floor(Math.random() * availableCards.length);
  cards.push(availableCards[randomIndex]);
  let secondCard = availableCards[randomIndex];
  availableCards.splice(randomIndex, 1);

  //set the same values
  sameCount = secondCard[0] === firstCard[0];
  sameColor = secondCard[1] === firstCard[1];
  sameShape = secondCard[2] === firstCard[2];
  sameFill = secondCard[3] === firstCard[3];

  //pick a third random card
  while (cards.length < 3) {
    randomIndex = Math.floor(Math.random() * availableCards.length);
    let thirdCard = availableCards[randomIndex];

    //check if the third card is the same as the first or second card
    if ((thirdCard[0] === firstCard[0]) !== sameCount) {
      continue;
    }
    if ((thirdCard[1] === firstCard[1]) !== sameColor) {
      continue;
    }
    if ((thirdCard[2] === firstCard[2]) !== sameShape) {
      continue;
    }
    if ((thirdCard[3] === firstCard[3]) !== sameFill) {
      continue;
    }
    if ((thirdCard[0] === secondCard[0]) !== sameCount) {
      continue;
    }
    if ((thirdCard[1] === secondCard[1]) !== sameColor) {
      continue;
    }
    if ((thirdCard[2] === secondCard[2]) !== sameShape) {
      continue;
    }
    if ((thirdCard[3] === secondCard[3]) !== sameFill) {
      continue;
    }

    cards.push(thirdCard);
    availableCards.splice(randomIndex, 1);
  }

  while (cards.length < 12) {
    randomIndex = Math.floor(Math.random() * availableCards.length);
    cards.push(availableCards[randomIndex]);
    availableCards.splice(randomIndex, 1);
  }

  return cards;
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let playCards = getCards();
playCards = shuffle(playCards);

function getCardImage(card) {
  let index = allCards.indexOf(card);
  index += 1;
  return `./assets/${index}.png`;
}

function Cards() {
  const handleClick = (event) => {
    if (event.currentTarget.style.border === "1px solid black") {
      event.currentTarget.style.border = "1px solid white";
    } else {
    event.currentTarget.style.border = "1px solid black";
    }
  };

  return playCards.map((card, index) => {
    return (
      <img
      style={{
        border: "1px solid white",
      }}
        key={index}
        alt="card"
        src={getCardImage(card)}
        onClick={handleClick}
      ></img>
    );
  });
}

export default Cards;
