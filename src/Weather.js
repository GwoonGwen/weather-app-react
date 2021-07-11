import React, { useState } from "react";
import axios from "axios";
import Today from "./Today.js";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            sky: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <Today date={weatherData.date} />
                <h1 className="City">{weatherData.city}</h1>
                <h2 className="Temp">
                    <div className="row">
                    <div className="IconToday col-4">
                        <img
                            src={weatherData.icon}
                            alt={weatherData.description}></img>
                    </div>
                        <span className="TempNow col-4">{Math.round(weatherData.temperature)}</span>
                        <span className="Celsius col-4">ºC</span>
                        </div>
                </h2>
                <br />
                <ul className="cityDetails">
                    <li className="humidity">
                        humidity:
                        <span className="humidityValue">{weatherData.humidity}</span>%
                    </li>
                    <li className="wind">
                        wind:
                        <span className="km">{weatherData.wind}</span>km/h
                    </li>
                    <li className="sky">{weatherData.sky}</li>
                </ul>
            </div>
        );
    } else {
        const apiKey = "0f6fb678af98802b16d8b308cd865407";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return (
        "Loading...");
    }
}