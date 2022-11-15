import React from "react";
import "./SportsContainer.scss";
import { useState, useEffect } from "react";

const SportsContainer = ({ time, REACT_APP_API_KEY }) => {
  const [sports, setSports] = useState("");
  let timeID;
  let footballArr = sports.football;

  const getCurrentSports = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/sports.json?key=${REACT_APP_API_KEY}&q=London`
    );
    const sportsData = await res.json();
    setSports(sportsData);
  };

  console.log(sports.football);

  useEffect(() => {
    getCurrentSports();
  }, []);

  if (time >= 17 || time <= 6) {
    timeID = "night";
  } else {
    timeID = "day";
  }

  const sportsJSX = (footballArr) => {
    return footballArr.map((item, index) => {
      return (
        <div className="forecast__card" key={index}>
          <p className="forecast__child"> {item.match}</p>
          <p className="forecast__child"> {item.stadium}</p>
          <p className="forecast__child"> {item.start}</p>
        </div>
      );
    });
  };

  return (
    <div className="sports__container" id={timeID}>
      {/* <div> {sportsJSX(footballArr)}</div> */}
    </div>
  );
};

export default SportsContainer;
