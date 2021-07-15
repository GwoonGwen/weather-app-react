import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  
  function showFahrenheit(event) {
    event.preventdefault();
    setUnit("fahrenheit");
  }
  
  function showCelsius(event) {
    event.preventdefault();
    setUnit("celsius");
  }
  
  function fahrenheit() {
    return (props.celsius * 9 / 5) + 32;
  }

    if (unit === "celsius") {
    return (
        <div>
            <span className="TempNow">
                {Math.round(props.temperature)}
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
                {Math.round(fahrenheit())}
          </span>
          <span className="Unit">
            <a href="/" onClick={showCelsius}>
              ºC
            </a>
              |ºF
          </span>
        </div>
        );
    }
  }