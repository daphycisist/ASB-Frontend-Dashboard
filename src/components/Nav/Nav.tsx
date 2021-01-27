import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__logo">
          <img src="images/logo.svg" alt="" />
          <p>FE Engineer Test 1</p>
        </div>
        <div className="header__left__nav">
          <Link to="" className="header__left__nav__elem">
            <img src="images/home.svg" alt="" />
            <p>Home</p>
          </Link>
          <Link to="" className="header__left__nav__elem">
            <img src="images/entries.svg" alt="" />
            <p>Entries</p>
          </Link>
          <Link to="" className="header__left__nav__elem">
            <img src="images/divisions.svg" alt="" />
            <p>Divisions</p>
          </Link>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__search">
          <img src="images/search.svg" alt="" />
          <input type="text" id="" />
        </div>
        <img src="images/notification.svg" alt="" />

        <div className="header__right__user">
          <img src="images/user.svg" alt="" />
          <img src="images/caret-down.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
