import React, { useState} from "react";

function WeatherDisplay({weather}){
    
    if (weather === "none" || weather === ""){
        return(
            <p> </p>
        )
    } else {
        return (
            <>
                <ul>
                    <li>Current weather in {weather.location.name}:</li>
                    <li>{weather.current.condition.text}</li>
                    <img src={weather.current.condition.icon}></img>
                    <li>Feels like {weather.current.feelslike_f}</li>
                </ul>
            </>
    )
    }
}

export default WeatherDisplay