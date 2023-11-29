import React, { useState } from "react";
import './Home.css';
import LocalWeather from './LocalWeather'

function HomeDisplay(){
    const [isClicked, setIsClicked] = useState(false)

    function handleToggle(){
        setIsClicked(!isClicked)
        let localWeather = document.getElementById('weatherAside')
        let contentDiv = document.getElementById("content")
        if (isClicked === true) {
            localWeather.style.display = "none"
            contentDiv.style.gridColumn = "span 2"
         } else{ 
            localWeather.style.display = "block"
            contentDiv.style.gridColumn = "1 / 1"
         }
    }

    // useEffect(() => {
    //     fetch(gnNewsApiurl)
    //         .then(res => res.json())
    //         .then(res => {
    //             setNewsOne(res.articles)
    //         })
    // },[])

    return (
        <div className='homeDisplay'>
            <div id='content'>
                <div id="contentHeader">
                    <h2>Your home page        </h2>
                    <form>
                        <label htmlFor="showWeather">Click here for local weather</label>
                        <input type="checkbox" 
                        id="showWeather" 
                        checked={isClicked}
                        onChange={handleToggle}
                        value={isClicked}
                        ></input>
                    </form>
                </div>
                <div className='newsDisplay'>
                {/* {newsOne.length > 0 && newsOne.map((story) => {
                    return(
                    <a href={story.url}><div className='newsPreview'>
                        <p className='title'>{story.title}</p>
                        <p className='storyPreview'>{story.description}</p>
                    </div></a>
                    )                    
                })} */}
        </div>
            </div>
            <div className='aside' id="weatherAside">
                <LocalWeather />
            </div>
        </div>
    )
}

export default HomeDisplay