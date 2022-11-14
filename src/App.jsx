import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Weather from "./containers/Weather/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoListContainer from "./containers/ToDoListContainer/ToDoListContainer";
import { React, useState } from "react";
import { useEffect } from "react";
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

function App() {
  const { REACT_APP_API_KEY } = process.env;

  let appClass = "";
  let time;

  let today = new Date();
  time = Number(today.getHours());

  if (time >= 17 || time <= 6) {
    appClass = "night";
  } else {
    appClass = "day";
  }

  return (
    <body className={appClass}>
      <Router>
        <div>
          <Nav time={time} />
          <Routes>
            <Route
              path="/"
              element={
                <Weather
                  REACT_APP_API_KEY={REACT_APP_API_KEY}
                  time={time}
                />
              }
            ></Route>
            <Route
              path="/todo"
              element={<ToDoListContainer time={time} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </body>
  );
}

export default App;
