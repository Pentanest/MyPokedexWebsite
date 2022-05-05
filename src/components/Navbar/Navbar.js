import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { NAV_MENU } from "../../constants";
import { Logo } from "../../assets";

import "./navbar-styles.css";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light primary-navbar">
      <span className="navbar-brand">
        <img className="brand-logo" src={Logo} alt="Logo"></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </span>
      <span className="navbar-links">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {NAV_MENU.map((menuItem) => {
              return (
                <li key={menuItem[0]} className="nav-item">
                  <NavLink
                    onClick={clickHandler}
                    to={menuItem[1]}
                    className="links"
                  >
                    {menuItem[2]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </span>
    </nav>
  );
}
