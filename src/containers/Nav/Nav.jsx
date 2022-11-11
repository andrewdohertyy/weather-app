import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";


const Nav = ({time}) => {

  let timeID;

  if (time >= 17 || time <= 6) {
    timeID = 'night'
  } else {
    timeID = 'day'
  }


  return (
    <div className="nav" id={timeID}>

      <div className="nav__container">
      <h1 className="nav__title">Day-to-Day</h1>

      <ul className="nav__list">
        <a className="nav__item" href="/">Weather</a>
        <a className="nav__item" href="/todo">To-do-list</a>
        <a className="nav__item" href="/">Maps</a>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
