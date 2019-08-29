import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ScreenShots extends Component {
  render() {
    const { screenShots } = this.props;

    //const printDivs = screenShots.map(s => <div></div>);
    if (screenShots.length === 0) {
      return (
        <div className="carousel-wrap">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
          >
            <div>
              <img src="http://unbxd.com/blog/wp-content/uploads/2014/02/No-results-found.jpg" />
            </div>
          </Carousel>
        </div>
      );
    } else {
      return (
        <div className="carousel-wrap">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
          >
            {screenShots.map(s => (
              <div>
                <img src={s} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      );
    }
  }
}

export default ScreenShots;
