import React from "react";
import "./Footer.css";

import hammas1 from "../images/Humaaans - 3 Characters.png";
import hammas2 from "../images/Humaaans - 3 Characters(1).png";
import hammas3 from "../images/Humaaans - 3 Characters(2).png";
import hammas4 from "../images/Humaaans - 3 Characters(3).png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

import {mygole} from '../data/Footer'
import {motion} from 'framer-motion'

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__first">
          <h2>pip-pipo</h2>
          <motion.a
          
          whileHover={{scale:0.9}}
          whileTap={{scale:0.5,transition: {duration:1.5}}}
          href="https://www.fiverr.com/mr_morsalin?up_rollout=true">Hire Me</motion.a>
        </div>
        <div className="footer__middle">
          <Slider {...settings} className="slider">
            <div>
              <img src={hammas1} alt="" />
            </div>
            <div>
              <img src={hammas2} alt="" />
            </div>
            <div>
              <img src={hammas3} alt="" />
            </div>
            <div>
              <img src={hammas4} alt="" />
            </div>
            <div>
              <img src={hammas3} alt="" />
            </div>
            <div>
              <img src={hammas2} alt="" />
            </div>
          </Slider>
        </div>
        <div className="footer__last">
          <h3>What is My gole for {mygole[0].whatismygolein2021}</h3>
        <div>
    🌱 I’m currently learning everything 🤣
    👯 I’m looking to collaborate with other content creators
    🥅 2021 Goals: Contribute more to Open Source projects
    ⚡ Fun fact: I love to Travel and play online Games/Programming
    📍 Location: Dhaka/Bangladesh 🇧🇩
</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
