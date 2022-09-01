import React from "react";

function Card(props) {
  const [selected, setSelected] = React.useState(false);

  let handleSelectedCards = props.function
  let selectedCards = props.selectedCards
  let card = props.card;
  let number = props.number;

  function handleClick() {
    setSelected(false)
    handleSelectedCards(card)
    if (selectedCards.includes(card)) {
      setSelected(true)
    }
  }

  return (
    <img
      style={{
        border: selected ? "2px dotted #ccc" : "2px dotted #fff",
        borderRadius: "10px",
      }}
      alt="card"
      src={`./assets/${number}.png`}
      onClick={handleClick}
    ></img>
  );
}

export default Card;
