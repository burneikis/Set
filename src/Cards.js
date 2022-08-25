import "./Cards.css"

const assets = require.context("./assets", true, /\.(png|jpe?g|svg)$/);
const files = assets.keys();

let allCards = [];

for (let i = 0; i < files.length; i++) {
  allCards.push(files[i]);
}
let playCards = [];

for (let i = 0; i < 12; i++) {
  //pick a random card
  let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
  //remove it from allCards
  allCards.splice(allCards.indexOf(randomCard), 1);
  //add it to playCards
  playCards.push(randomCard);
}

function Cards() {
  return (
    <div className="Cards">
      {playCards.map((card, index) => {
        return <img src={assets(card)} alt={card} key={index} />;
      })}
    </div>
  );
}

export default Cards;
