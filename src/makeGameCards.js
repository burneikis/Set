//get all images from assets
const assets = require.context("./assets", true, /\.(png|jpe?g|svg)$/);
const files = assets.keys();
function newGame() {
    let allCards = [];
    for (let i = 0; i < files.length; i++) {
        allCards.push(files[i]);
    }
    let playCards = [];
    for (let i = 0; i < 10; i++) {
        //pick a random card
        let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
        //remove it from allCards
        allCards.splice(allCards.indexOf(randomCard), 1);
        //add it to playCards
        playCards.push(randomCard);
    }
    for (let i = 0; i < 2) {
        //pick a random card
        //test if it has an attribute similar to the first card
    }
}

export default newGame;