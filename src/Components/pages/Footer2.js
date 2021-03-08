import React from "react";
import "./Footer2.css";
import { motion } from "framer-motion";
import Slider from "react-slick";

import img1 from "../images/image_slider/img1.jpg";
import img2 from "../images/image_slider/img2.jpg";
import img3 from "../images/image_slider/img3.png";
import img4 from "../images/image_slider/img4.jpg";
import img5 from '../images/image_slider/img5.jpg';
import img6 from '../images/image_slider/img6.jpg';
import img7 from '../images/image_slider/img7.png';
import img8 from '../images/image_slider/img8.png';
import img9 from '../images/image_slider/img9.jpg';
import img10 from '../images/image_slider/img10.jpg';

const Footer2 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="footer2">
      <div className="container">
        <h3>My Works</h3>
      </div>

      <div classNam="slider_images">
        <Slider {...settings} className="silder">
          <div>
            
            <img src={img1} alt=""/>
          </div>
          <div>
            
            <img src={img7} alt=""/>
          </div>
          <div>
           
            <img src={img3} alt=""/>
          </div>
          <div>
           
            <img src={img8} alt=""/>
          </div>
          <div>
           
            <img src={img5} alt=""/>
          </div>
          <div>
        
            <img src={img6} alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Footer2;
