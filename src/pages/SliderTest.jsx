import React from "react";
import "./styles/main.css";
import "./styles/header.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "./Header";
function SliderTest() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="testSlider">
          <Slider {...settings}>
            <div className="slider-block">
              <img className="slider-img" src="https://picsum.photos/550/350" />
            </div>
            <div className="slider-block">
              <img className="slider-img" src="https://picsum.photos/550/350" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SliderTest;
