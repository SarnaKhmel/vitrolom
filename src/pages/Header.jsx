import "./styles/main.css";
import "./styles/home.css";
import "./styles/header.css";

import { Link } from "react-router-dom";

import logo from "./img/vitrolom_logo.svg";
import facebook from "./img/icons/facebook.svg";
import instagram from "./img/icons/instagram.svg";
import telegram from "./img/icons/telegram.svg";
import paypal from "./img/icons/paypal.svg";
import linkedin from "./img/icons/linkedin.svg";
import youtube from "./img/icons/youtube.svg";
// import twitter from "./img/icons/twitter.svg";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="header">
        <div className="logo-box">
          <div className="logo-block">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="social">
            <Link>
              <img
                className="social-logo facebook"
                src={facebook}
                alt="facebook"
              />
            </Link>
            <Link to="#">
              <img
                className="social-logo instagram"
                src={instagram}
                alt="instagram"
              />
            </Link>
            <Link to="#">
              <img
                className="social-logo telegram"
                src={telegram}
                alt="telegram"
              />
            </Link>
          </div>
        </div>
        <div className="menu-box">
          <Link to="/projects" className="link-btn">
            Наші проєкти
          </Link>
          <Link to="/reports" className="link-btn">
            Звітність
          </Link>
          <Link to="/contacts" className="link-btn">
            Контакти
          </Link>
          <Link to="" className="link-btn support-btn">
            Підтримати
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
