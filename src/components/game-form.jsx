import React, { Component } from "react";
import { postConfig } from "../helpers/configs";
import { getPlatforms } from "../helpers/getPlatforms";
import { postGame } from "../helpers/postGame";
import { toast } from "react-toastify";
const serialize = require("form-serialize");

class GameForm extends Component {
  state = { validForm: true };

  constructor(props) {
    super(props);
    this.state = { platforms: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    getPlatforms(this.setPlatforms.bind(this));
  }
  setPlatforms(newArr) {
    this.setState({ platforms: newArr });
  }

  //console.log(e.target.value);
  handleBlurForName = e => {
    const nameField = e.target.value;
    const { validateUniqueName } = this.props;
    const isUnique = validateUniqueName(nameField);
    if (isUnique) {
      this.setState({ validForm: false });
    } else {
      this.setState({ validForm: false });
      toast.dismiss();
    }
  };

  handleChange = e => {
    const formData = serialize(e.target.parentNode, { hash: true });
    this.setState({ ...formData });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { setGames } = this.props;
    const obj = serialize(e.target, { hash: true });
    setGames({ ...obj, screenShots: [] });
    const config = postConfig(obj);
    postGame(config);
    e.target.reset();
  }

  render() {
    return (
      <div className="game-form-div">
        <form onSubmit={this.handleSubmit} class="game-form" action="">
          <input
            onChange={this.handleChange}
            onBlur={this.handleBlurForName}
            label="Name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            onChange={this.handleChange}
            type="number"
            name="release_year"
            placeholder="Release Year"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            placeholder="Picture Link"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="genre"
            placeholder="Genre"
          />

          <select name="platform_id">
            {this.state.platforms.map(platform => (
              <option value={platform.id}>{platform.name}</option>
            ))}
          </select>
          <input label="submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default GameForm;
