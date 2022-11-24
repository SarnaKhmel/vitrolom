import "./styles/main.css";
import "./styles/home.css";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import WhatWeDo from "./WhatWeDo";
import testImg1 from "./img/testImage1.jpg";
import testImg2 from "./img/testImage2.jpg";

import Header from "./Header";

function Home() {
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
        <div className="big-block welcome">
          <div className="info">
            <div className="info-title">
              <h2>Omnium malorum origo otium</h2>
              <h2>Бездіяльність – початок усіх бід</h2>
              <p>
                Місія нашого фонду - консолідація української молоді у різних
                сферах благодійної діяльности, сприяння освіченості та розвитку
                громадянської свідомості, підвищення обороноздатності та
                мобілізаційної готовності країни, захист населення у
                надзвичайних ситуаціях мирного та воєнного стану.
              </p>
            </div>
            <div className="info-links">
              <Link className="link-btn btn1">Стати волонтером</Link>
              <Link className="link-btn btn2">Отримати допомогу</Link>
            </div>
          </div>
          <div className="slider-box">
            <Slider {...settings}>
              <div>
                <img className="slider-img" src={testImg1} alt="test" />
              </div>
              <div lassName="slider-item">
                <img className="slider-img" src={testImg2} alt="test 2" />
              </div>
            </Slider>
          </div>
        </div>
        <WhatWeDo />
      </div>
    </>
  );
}

export default Home;
