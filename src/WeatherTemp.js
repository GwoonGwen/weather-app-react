import React from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
    return (
        <div className="TempNow">
            <span>{Math.round(props.celsius)} </span>
            <span className="Unit">ºC</span>
        </div>
    );
}