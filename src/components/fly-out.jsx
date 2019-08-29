import React, { Component } from "react";
import ScreenShots from "./screenshots";
import ScreenShotForm from "./screen-shot-form";

class FlyOut extends Component {
  state = {};

  handleClick = () => {
    this.props.handleGameSelect();
  };
  render() {
    const { name, addNewScreenShot } = this.props;

    return (
      <React.Fragment>
        <div onClick={this.handleClick} className="grey-out"></div>
        <div className="fly-out">
          <div className="info-area"></div>
          <div className="displaying-area">
            <h2>{name}</h2>
            <ScreenShots {...this.props} />
            <ScreenShotForm
              id={this.props.id}
              addNewScreenShot={addNewScreenShot}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlyOut;
