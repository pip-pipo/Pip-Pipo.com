import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./data/Button";
import DropDown from "./DropDown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropDown,setDropDown] = useState(false);

  const clickHandle = () => {
    setClick(!click);
    setDropDown(!dropDown)
  };

  

  return (
    <nav className="navbar">
      <div className="navbar__first">
        <div className="navbar__logo">
          <Link to="/">Pip-Pipo</Link>
        </div>
         <div className="navbar__toggle" onClick={clickHandle}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

      {dropDown&&    <DropDown/>}

        <ul className="navbar__menu">
          {Button.map((value, index) => (
            <li key={value.path}>
              <a  href={value.path}>
                {value.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__button">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
