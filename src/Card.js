import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.card = props.card;
    this.number = props.number;
    this.state = {
      clicked: false,
    };
    this.handleClick = () => {
      this.setState({
        clicked: !this.state.clicked,
      })
    }
  };

  render() {
    return (
      <img
        style={{
          border: this.state.clicked ? "2px dotted #ccc" : "2px dotted #fff",
          borderRadius: "10px",
        }}
        alt="card"
        src={`./assets/${this.number}.png`}
        onClick={this.handleClick}
      ></img>
    );
  }
}
