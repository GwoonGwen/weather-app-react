import React from "react";
import Today from "./Today";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="Weather">
            <Today date={props.data.date} />
            <h1 className="City">{props.data.city}</h1>
            <h2 className="Temp">
                <div className="row">
                    <div className="IconToday col-6">
                    <WeatherIcon code={props.data.icon} size={65} />
                    </div>
                    <div className="col-6">
                    <WeatherTemp celsius={props.data.temperature} />
                    </div>
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