import React from "react";
import "./Footer3.css";
import {motion} from 'framer-motion'
const Footer3 = () => {
  return (
    <div className="footer_last">
      <div className="container">
        <div className="first">
          <h2>Whay choose me?</h2>
          <div className="main">
            <div>
              <motion.img
              whileHover={{scale:1.1}}
                
                src="https://avatars.githubusercontent.com/u/69667157?s=460&u=b3c95f91be2b4fdbd1ea91cc18ec796fd64268af&v=4t"
                alt=""
              />
            </div>
            <div>
              <h3>Md Morsalin </h3>
            </div>
          </div>
          <span>
            I'm a full-stack developer in JavaScript/NodeJS technologies. I've
            3+ years of experience in MERN (MongoDB, ExpressJS, ReactJS and
            NodeJS) stack application development. If you need any work related
            to any JavaScript technology, I would be your best choice. Feel free
            to contact me and discuss your requirements.
          </span>
        </div>
        <div className="middle">

          <div>
            <ul className="social">
            <h3>My Social Media & Number</h3>
              <li>
                <a href="https://tinyurl.com/2zs2jxrr">
                  <i className="fab fa-facebook"></i>
                  https://tinyurl.com/2zs2jxrr
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/mmmmorsalin1/">
                  <i className="fab fa-whatsapp"></i>
                  01820348783
                </a>
              </li>

              <li>
                <a href="https://tinyurl.com/53wmhxjp">
                  <i className="fab fa-instagram"></i>
                  https://tinyurl.com/53wmhxjp/
                </a>
              </li>

              <li>
                <a href="https://cutt.ly/6zsWRhi">
                  <i className="fab fa-twitter"></i>
                  https://cutt.ly/6zsWRhi
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/mmmmorsalin1/">
                  <i className="far fa-envelope"></i>
                  Codemi692@gmail.com
                </a>
              </li>


                   <li>
                <a href="https://cutt.ly/YzsEa5z">
                  <i className="fab fa-linkedin"></i>
                 https://cutt.ly/YzsEa5zm
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
