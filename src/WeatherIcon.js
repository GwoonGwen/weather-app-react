import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function weatherIcon(props){
    return (
  <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="black"
    size={64}
    animate={true}
    />
    );
}