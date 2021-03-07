import React from "react";
import "./Home.css";
import svgHome from "../images/svg_home.png";
import { motion } from "framer-motion";
import Services from "./Services";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>

    
    <div className="home" id="home">
      <div className="home__container">
        <div className="home__text">
          <h4>
            Let's <span className="home__text__contribute">Build</span> Your
            Dream Project's{" "}
          </h4>
          <button className="home__text__button">
            <a href="https://www.fiverr.com/mr_morsalin?up_rollout=true">Hire Me</a>
          </button>
        </div>
        <div className="home__img">
          <motion.img
            animate={{
              x: -29,
              y: -2,
              scale: 1,
              rotate: 5,
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            src={svgHome}
            alt="home_img"
          />
        </div>
      </div>
    </div>
    <Services/>
    <Blog/>
    <About/>
    <Contact/>
    </div>
  );
};

export default Home;
