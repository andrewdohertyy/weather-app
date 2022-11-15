import React from "react";
import "./Nav.scss";


const Nav = ({time}) => {

  let title;
  let timeID;

  if (time >= 17 || time <= 6) {
    timeID = 'night'
  } else {
    timeID = 'day'
  }

  if (time >= 5 && time <= 12) {
    title = 'Good Morning  🌞'
  } else if (time > 12 && time <= 16) {
    title = 'Good Afternoon  🌎'
  } else {
    title = 'Good Night  🌝'
  }

  return (
    <div className="nav" id={timeID}>
      <div className="nav__container">
      <h1 className="nav__title">{title}</h1>
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
