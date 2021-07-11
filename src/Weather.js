import React from "react";
import "./Weather.css";

export default function Weather(props) {
    return (
        <div className="Weather">
            <h1 className="City">{props.city}</h1>
            <h2 className="Temp">
                <div className="IconToday">{props.icon}</div>
                <span className="TempNow">{props.tempmain}</span>
                <span className="Celsius">ºC</span>
            </h2>
            <br />
            <ul className="cityDetails">
                <li className="humidity">
                    humidity:
                    <span className="humidityValue">{props.humidity}</span>%
                </li>
                <li className="wind">
                    wind:
                    <span className="km">{props.wind}</span>km/h
                </li>
                <li className="sky">{props.sky}</li>
            </ul>
        </div>
    );
}