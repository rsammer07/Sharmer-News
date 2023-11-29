import React, {useState, useEffect} from 'react'
import NewsStoryPreview from "./NewsStoryPreview"
import './Politics.css';
import env from "react-dotenv"



function UsNews(nyt_api_key){
    const [usNews, setusNews] = useState([])

    const nytApiUrl = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=V2BhXAwqkGP6N5nlwlAGa6ycusZ5JEJh`

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     getNews(nytApiUrl)
    //     console.log(usNews);
    // }

    // const getNews = (url) => {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setusNews(data.results)
    //         })
    // }

    useEffect(() => {
        fetch(nytApiUrl)
            .then(res => res.json())
            .then(res => {
                setusNews(res.results)
            })
    },[])

    return (
        <div>
            <h2>Your Place for US News</h2>
            <div className='newsDisplay'>
                {usNews.length > 0 && usNews.map((story) => {
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

export default UsNews