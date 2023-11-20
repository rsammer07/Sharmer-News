import React, { useState, useEffect } from "react";
import './LocalWeather.css'

function LocalWeather(){

    const [zip, setZip] = useState("00000")
    const [weather, setWeather] = useState()
    let weatherUrl = `http://api.weatherapi.com/v1/current.json?key=c33ae8b0474f40d2bc4175447232011&q=${zip.zipcode}&aqi=no`
    

    const handleChange = (e) => {
        setZip({[e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setZip(zip)
        // console.log("three", weatherUrl);
        getWeather(weatherUrl)
    }

    useEffect((weatherUrl) => {
        console.log("useEffect", weatherUrl);
    }, [zip])

    const getWeather = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWeather(data)
            })
    }

    return (
        <>
            <h4>Local Weather</h4>
            <form id="local" onSubmit={handleSubmit}>
                <label htmlFor="zipcode">Enter your zipcode</label>
                <input type="text" placeholder="Zip code" id="zipcode" maxLength={5} size={5} onChange={handleChange}></input>
            </form>
            <button></button>
        </>
    )
}

export default LocalWeather