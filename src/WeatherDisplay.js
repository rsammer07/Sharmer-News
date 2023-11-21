import React, { useState} from "react";

function WeatherDisplay({weather}){
    
    if (weather === "none" || weather === ""){
        return(
            <p> </p>
        )
    } else {
        return (
            <>
                <p>Current weather in {weather.location.name}:</p>
                <p>{weather.current.condition.text}</p>
                <img src={weather.current.condition.icon}></img>
                <p>Feels like {weather.current.feelslike_f}</p>
            </>
    )
    }
}

export default WeatherDisplay