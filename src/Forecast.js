import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="ForecastWrap">
        <div className="row">
          <div className="col-2">
            <div className="ForecastDate">{props.date}</div>
            <div className="ForecastIcon">{props.icon}</div>
            <div className="ForecastTemp">
              <span className="ForecastTempMax">{props.tempMax}</span>
              <span className="ForecastTempMin">{props.tempMin}</span>
            </div>
          </div>
          <div className="col-2">
            <div className="ForecastDate">{props.date}</div>
            <div className="ForecastIcon">{props.icon}</div>
            <div className="ForecastTemp">
              <span className="ForecastTempMax">{props.tempMax}</span>
              <span className="ForecastTempMin">{props.tempMin}</span>
            </div>
          </div>
          <div className="col-2">
            <div className="ForecastDate">{props.date}</div>
            <div className="ForecastIcon">{props.icon}</div>
            <div className="ForecastTemp">
              <span className="ForecastTempMax">{props.tempMax}</span>
              <span className="ForecastTempMin">{props.tempMin}</span>
            </div>
          </div>
          <div className="col-2">
            <div className="ForecastDate">{props.date}</div>
            <div className="ForecastIcon">{props.icon}</div>
            <div className="ForecastTemp">
              <span className="ForecastTempMax">{props.tempMax}</span>
              <span className="ForecastTempMin">{props.tempMin}</span>
            </div>
          </div>
          <div className="col-2">
            <div className="ForecastDate">{props.date}</div>
            <div className="ForecastIcon">{props.icon}</div>
            <div className="ForecastTemp">
              <span className="ForecastTempMax">{props.tempMax}</span>
              <span className="ForecastTempMin">{props.tempMin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
