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
  const [crd, setCrd] = useState({});

console.log(process.env.REACT_APP_API_KEY, "APP");

  let appClass = "";
  let time;

  let today = new Date();
  time = Number(today.getHours());

  if (time >= 17 || time <= 6) {
    appClass = "night";
  } else {
    appClass = "day";
  }

  const componentDidMount = () => {
    if (navigator.geolocation) {
      console.log("GeoLocation is Available!");
    } else {
      console.log("No");
    }
  };

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    let crd = pos.coords;
    setCrd(crd);
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
          }
          result.onchange = () => {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  };

  // useEffect(() => {
    
  // }, []);


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
                  longitude={crd.longitude} 
                  latitude={crd.latitude}
                  getLocation={getLocation}
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
