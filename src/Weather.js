import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <h1 className="City">city</h1>
                <h2 className="Temp">
                    <div className="IconToday">{props.icon}</div>
                    <span className="TempNow">{Math.round(temperature)}</span>
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
    } else {
        const apiKey = "0f6fb678af98802b16d8b308cd865407";
        let city = "Amsterdam";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return (
        "Loading...");
    }
}