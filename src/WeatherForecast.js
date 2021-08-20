import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"; 
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let key = "0f6fb678af98802b16d8b308cd865407";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
    
    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="WeatherForecast">
        <div className="row">
                <div className="col">
                    <br/>
                    <div className="WeatherForecast-day">Sun</div>
                    <div className="WeatherIcon-FC">
                        <WeatherIcon code="01d" size={36} /></div>
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-max">21</span>
                        <span className="WeatherForecast-min">15</span>
                    </div>
            </div>
        </div>
    </div>
    );
}