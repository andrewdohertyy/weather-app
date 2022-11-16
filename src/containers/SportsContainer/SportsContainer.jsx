import React from "react";
import "./SportsContainer.scss";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

const SportsContainer = ({ time, REACT_APP_API_KEY, loading, setLoading }) => {
  const [sports, setSports] = useState("");
  let timeID;

  const getCurrentSports = async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.weatherapi.com/v1/sports.json?key=${REACT_APP_API_KEY}&q=London`
    );
    const sportsData = await res.json();
    setSports(sportsData);
    setLoading(false);
  };

  let footballArr = sports.football;
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
    return footballArr.map((sport, index) => {
      return (
        <div className="sports__container" key={index}>
          <p className="sports__child match"> {sport.match}</p>
          <p className="sports__child"> {sport.stadium}</p>
          <p className="sports__child"> {sport.tournament}</p>
          <p className="sports__child"> {sport.start}</p>
        </div>
      );
    });
  };

  return (
    <div className="sports">
      {loading ? (
        <FadeLoader
          color={"#FFFF00"}
          loading={loading}
          size={500}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div  className="sports__card" id={timeID}>
          <h1 className="sports__title">Football Matches ⚽️</h1>
          <div> {sportsJSX(footballArr)}</div>
        </div>
      )}
    </div>
  );
};

export default SportsContainer;
