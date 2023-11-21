import React, { useState, useEffect } from "react";
import './LocalWeather.css'
import WeatherDisplay from "./WeatherDisplay";

function LocalWeather(){

    const [zip, setZip] = useState("00000")
    const [weather, setWeather] = useState("none")
    let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=c33ae8b0474f40d2bc4175447232011&q=${zip.zipcode}&aqi=no`
    

    const handleChange = (e) => {
        setZip({[e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setZip(zip)
        if (zip.zipcode !== ""){
            getWeather(weatherUrl)
        } else {
            setWeather("none")
        }
    }

    // useEffect((weatherUrl) => {
    //     // console.log("useEffect", weatherUrl);
    // }, [zip])

    const getWeather = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setWeather(data)
            })
    }

    return (
        <div id="localWeather">
            <h4>Local Weather</h4>
            <form id="local" onSubmit={handleSubmit}>
                <label htmlFor="zipcode">Enter your zipcode</label>
                <input type="text" placeholder="Zip code" id="zipcode" maxLength={5} size={5} onChange={handleChange}></input>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <WeatherDisplay weather={weather} />
        </div>
    )
}

export default LocalWeather