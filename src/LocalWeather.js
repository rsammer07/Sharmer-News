import React, { useState} from "react";
import './LocalWeather.css'

function LocalWeather(){

    const [zip, setZip] = useState()

    const handleChange = (e) => {
        setZip({[e.target.id]: e.target.value})
    }

    return (
        <>
            <h4>Local Weather</h4>
            <form id="local">
                <label htmlFor="zipcode">Enter your zipcode</label>
                <input type="text" placeholder="Zip code" id="zipcode" maxLength={5} size={5} onChange={handleChange}></input>
            </form>
        </>
    )
}

export default LocalWeather