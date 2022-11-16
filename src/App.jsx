import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Weather from "./containers/Weather/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoListContainer from "./containers/ToDoListContainer/ToDoListContainer";
import { React } from "react";
import { useState } from "react";
import SportsContainer from "./containers/SportsContainer/SportsContainer";

function App() {
  const { REACT_APP_API_KEY } = process.env;
  const [loading, setLoading] = useState(true);

  let appClass = "";
  let time;

  let today = new Date();
  time = Number(today.getHours());
  time = 18

  if (time >= 17 || time <= 6) {
    appClass = "night";
  } else {
    appClass = "day";
  }

  return (
    <body className={appClass}>
      <div>
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
                    setLoading={setLoading}
                    loading={loading}
                  />
                }
              ></Route>
              <Route
                path="/todo"
                element={<ToDoListContainer time={time} />}
              ></Route>
              <Route
                path="/sports"
                element={<SportsContainer REACT_APP_API_KEY={REACT_APP_API_KEY} time={time} loading={loading} setLoading={setLoading} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </body>
  );
}

export default App;
