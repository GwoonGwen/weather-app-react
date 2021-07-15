import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventdefault();
    setUnit("fahrenheit");
  }
  
    if (unit === "celsius") {
    return (
        <div>
            <span className="TempNow">
                {Math.round(props.temperature)}
            </span>
            <span className="Unit">
            ºC
          <a href="/" onClick={convertFahrenheit}>
            ºF
          </a>
            </span>
        </div>
    );
    } else {
        return "f";
    }
  }