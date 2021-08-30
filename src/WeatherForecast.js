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

    function load() {
        let lon = props.coord.lon;
            let lat = props.coord.lat;
            let key = "b6ea7199b1cb9aca54197fcbaab59e85";
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    
            axios.get(apiUrl).then(handleResponse);
    }

        if (loaded) {
            return (
                <div className="WeatherForecast">
                    <div className="row">
                        {forecast.map(function (dailyForecast, index) {
                            if (index < 6) {
                                return (
                                    <div className="col-2" key={index}>
                                        <WeatherForecastDay data={dailyForecast} />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            );
        } else {
            load()
            return null;
        }
}