import React, { Component } from "react";
import GameCard from "./game-card";
import GameForm from "./game-form";
import FlyOut from "./fly-out";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class MainPage extends Component {
  state = {
    games: [],
    flyOutMode: false,
    focusedGame: null
  };

  componentDidMount() {
    const GAMES = "http://localhost:3000/games";
    fetch(GAMES)
      .then(res => res.json())
      .then(games => {
        this.setState({ games });
      });
  }

  validateUniqueName = name => {
    const { games } = this.state;

    console.log(name);
    if (games.find(g => g.name.toLowerCase() === name.toLowerCase())) {
      toast("Duplicate Name Detected!", { type: "error", autoClose: false });
      return true;
    } else {
      return false;
    }
  };

  setGames(newObj) {
    const { games } = this.state;
    const newArr = [...games, newObj];
    this.setState({ games: newArr });
  }
  addNewScreenShot(obj) {
    const { games } = this.state;
    const game = games.find(game => game.id === parseInt(obj.game_id));
    const newGame = { ...game };
    newGame.screenShots.push(obj.url);

    const newGames = games.map(g => (g.id === newGame.id ? newGame : g));
    this.setState({ games: newGames });
  }

  handleGameSelect(...props) {
    const flyOutMode = !this.state.flyOutMode;
    this.setState({ flyOutMode, focusedGame: props[0] });
  }

  render() {
    const { focusedGame } = this.state;

    if (this.state.flyOutMode === false) {
      return (
        <div className="main-area">
          <div className="game-div">
            {this.state.games.map(game => (
              <GameCard
                handleGameSelect={this.handleGameSelect.bind(this)}
                {...game}
              />
            ))}
          </div>
          <div className="form-area">
            <GameForm
              games={this.state.games}
              setGames={this.setGames.bind(this)}
              validateUniqueName={this.validateUniqueName}
            />
          </div>
          <ToastContainer />
        </div>
      );
    } else if (this.state.flyOutMode === true) {
      return (
        <div className="main-area">
          <FlyOut
            handleGameSelect={this.handleGameSelect.bind(this)}
            {...focusedGame}
            addNewScreenShot={this.addNewScreenShot.bind(this)}
          />
          <div className="game-div">
            {this.state.games.map(game => (
              <GameCard {...game} />
            ))}
          </div>
          <div className="form-area">
            <GameForm
              games={this.state.games}
              setGames={this.setGames.bind(this)}
            />
          </div>
          <ToastContainer />
        </div>
      );
    }
  }
}

export default MainPage;
