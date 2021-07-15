import React from "react";
import Today from "./Today";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="Weather">
            <Today date={props.data.date} />
            <h1 className="City">{props.data.city}</h1>
            <h2 className="Temp">
                <div className="row">
                    <div className="IconToday col-4">
                        <WeatherIcon code={props.data.icon} />
                    </div>
                    <span className="TempNow col-4">{Math.round(props.data.temperature)}</span>
                    <span className="Celsius col-4">ºC</span>
                </div>
            </h2>
            <br />
            <ul className="cityDetails">
                <li className="humidity">
                    humidity:
                    <span className="humidityValue"> {props.data.humidity}</span>%
                </li>
                <li className="wind">
                    wind:
                    <span className="km"> {props.data.wind}</span>km/h
                </li>
                <li className="sky"> {props.data.sky}</li>
            </ul>
        </div>
    );
}