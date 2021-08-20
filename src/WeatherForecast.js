import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"; 
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                        return (
                            <div className="col-2" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let lon = props.coord.lon;
        let lat = props.coord.lat;
        let key = "0f6fb678af98802b16d8b308cd865407";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}