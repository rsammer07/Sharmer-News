import React, {useState, useEffect} from 'react'
import './Politics.css';
import env from "react-dotenv"

function WorldNews(nyt_api_key){
    const [worldNews, setworldNews] = useState([])

    const nytApiUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=V2BhXAwqkGP6N5nlwlAGa6ycusZ5JEJh`

    useEffect(() => {
        fetch(nytApiUrl)
            .then(res => res.json())
            .then(res => {
                setworldNews(res.results)
            })
    },[])

    return (
        <div>
            <h2>Your Place for World News</h2>
            <div className='newsDisplay'>
                {worldNews.length > 0 && worldNews.map((story) => {
                    return(
                    <a href={story.url}><div className='newsPreview'>
                        <p className='title'>{story.title}</p>
                        <img src={story.multimedia[2].url} alt={story.multimedia[2].caption}></img>
                        <p className='storyPreview'>{story.abstract}</p>
                    </div></a>
                    )                    
                })}
        </div>
        </div>
    )
}

export default WorldNews