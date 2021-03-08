import React from "react";
import "./Home.css";
import svgHome from "../images/svg_home.png";
import { motion } from "framer-motion";
import Services from "./Services";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Footer3 from "./footer3";
import Footer4 from './Footer4'
const Home = () => {
  const Fadeleft = {
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0}
  }
  return (
    <div>

    
    <div className="home" id="home">
      <div className="home__container">
        <div className="home__text">
          <motion.h4
          
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:1}}
          variants={{Fadeleft}}
          
          >
            Let's <span className="home__text__contribute">Build</span> Your
            Dream Project's{" "}
          </motion.h4>
          <button className="home__text__button">
            <a href="https://www.fiverr.com/mr_morsalin?up_rollout=true">Hire Me</a>
          </button>
        </div>
        <div className="home__img">
          <motion.img
          whileHover={{
            scale:[1,1.3,1.1],
            transition:{
              duration:.2,
            }
          }}
          initial={{
            x:150,
            opacity: 1
            ,
            rotate:40,
          }}
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
    <Footer/>
    <Footer2/>
    <Footer3/>
    <Footer4/>
    </div>
  );
};

export default Home;
