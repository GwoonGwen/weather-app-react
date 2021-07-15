import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

    if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="TempNow">
          {Math.round(props.celsius)}
        </span>
        <span className="Unit">
          ºC|
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
      );
    } else {
      return (
      <div>
          <span className="TempNow">
            {Math.round((props.celsius * 9 / 5) + 32)}
          </span>
          <span className="Unit">
            <a href="/" onClick={showCelsius}>ºC
            </a>
            |ºF
          </span>
        </div>
        );
    }
  }