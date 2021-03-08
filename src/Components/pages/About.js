import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import imgAbout from "../images/img_about.svg";
import { motion } from "framer-motion";
import Typical from "react-typical";

const About = () => {
  const [me, setMe] = useState([]);

  return (
    <div className="about" id="aboutme">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about__container">
        <motion.div className="about__img">
          <motion.img
            animate={{
              x: -90,
              y: 0,
              scale: 1,
              rotate: 5,
            }}
            src={imgAbout}
            alt="img_About"
          />
        </motion.div>

        <div className="about__text">
          <Typical
            className="about__text__typical"
            steps={[
              "Hi i am pip-pipo . I am a full | stack web developer ▶ ",
              3000,
              "Hi i am pip-pipo  I am a full | stack web developer ▶ . & Programmer also A Freelancer .. specializiing in mostly JS, but also write Python, c++ and some other stuff.",
              4000,
            ]}
            loop={Infinity}
            wrapper="p"
            />
           
        </div>
      </div>
    </div>
  );
};

export default About;
