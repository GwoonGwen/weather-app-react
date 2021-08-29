import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css" ;

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
    <div>
        <div className="WeatherForecast-day">{day()}</div>
            <div className="WeatherIcon-FC">
                <WeatherIcon code={props.data.weather[0].icon} size={55} /></div>
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-max">{maxTemp()}º</span>
                <span className="WeatherForecast-min">{minTemp()}º</span>
            </div>
        </div>
    );
}