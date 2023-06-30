import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/showcase.css'


export default class Showcase extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div id="showcase">
        <Slider {...settings}>
          <div className="box">
            <h3>1</h3>
          </div>
          <div className="box">
            <h3>2</h3>
          </div>
          <div className="box">
            <h3>3</h3>
          </div>
          <div className="box">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}