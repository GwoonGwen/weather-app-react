import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"; 

export default function WeatherForecast() {
    return (
    <div className="WeatherForecast">
        <div className="row">
                <div className="col">
                    <br/>
                    <div className="WeatherForecast-day">Sun</div>
                    <div className="WeatherIcon-FC"><WeatherIcon code="01d" size={36} /></div>
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-max">21</span>
                        <span className="WeatherForecast-min">15</span>
                    </div>
            </div>
        </div>
    </div>
    );
}