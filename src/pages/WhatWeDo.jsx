import React from "react";
import "./styles/whatWeDo.css";

import Slider from "react-slick";

function WhatWeDo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    autoplay: false,
    speed: 0,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slider-item">
          <div className="circle"></div>
          <div className="item">
            <div className="item-title">Допомагаємо творити добро</div>
            <div className="item-text">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="circle"></div>
          <div className="item">
            <div className="item-title">Допомагаємо творити добро</div>
            <div className="item-text">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="circle"></div>
          <div className="item">
            <div className="item-title">Допомагаємо творити добро</div>
            <div className="item-text">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="circle"></div>
          <div className="item">
            <div className="item-title">Допомагаємо творити добро</div>
            <div className="item-text">
              Пов'язуємо волонтерів із тими, хто потребує допомоги.
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default WhatWeDo;
