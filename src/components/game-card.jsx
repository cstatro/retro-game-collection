import React, { Component } from "react";

class GameCard extends Component {
  handleClick = () => {
    const { id, handleGameSelect } = this.props;
    handleGameSelect(this.props);
  };
  render() {
    const { name, genre, release_year, image } = this.props;

    return (
      <div onClick={this.handleClick} className="game-card">
        <h1>{name}</h1>
        <h2>{genre}</h2>
        <h3>{release_year}</h3>
        <img src={image} />
      </div>
    );
  }
}

export default GameCard;
