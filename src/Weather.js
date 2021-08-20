import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            sky: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        });
    }
    
    function Search() {
        const apiKey = "0f6fb678af98802b16d8b308cd865407";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        Search()
    }

    function handleCity(event) {
        setCity (event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Search">
                <form
                    onSubmit={handleSubmit}
                    className="SearchForm">
                        <input
                            type="search"
                            className="SearchEngine"
                            placeholder="Find a city.."
                            autofocus="on"
                            autocomplete="off"
                            onChange={handleCity}
                        />
                        <button
                            type="submit"
                            className="btn btn-transparant SearchButton p-1"
                        >👁
                        </button>
                </form >
                <WeatherInfo data={weatherData} />
                <WeatherForecast />
                </div>
            );
    } else {
        Search()
        return (
        "Loading...");
    }
}