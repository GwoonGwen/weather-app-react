import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
    <div className="WeatherForecast">
        <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Sun</div>
                    <WeatherIcon code="01d" size={20} />
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForececast-max">21</span>
                        <span className="WeatherForecast-min">15</span>
                    </div>
            </div>
        </div>
    </div>
    );
}