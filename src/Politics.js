import React, {useState, useEffect} from 'react'
import NewsStoryPreview from "./NewsStoryPreview"
import './Politics.css';


function PoliticsStories(){
    const [newsOne, setNewsOne] = useState([])
    let gnNewsApiurl = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=1bb972b054ae325408e8323dffb1fde0"

    const handleClick = (e) => {
        e.preventDefault()
        getNews(gnNewsApiurl)
        console.log(newsOne);
    }

    const getNews = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNewsOne(data.articles)
            })
    }

    // useEffect(() => {
    //     fetch(gnNewsApiurl)
    //         .then(res => res.json())
    //         .then(res => {
    //             setNewsOne(res.articles)
    //         })
    // },[])

    return (
        <div>
            <h2>Your politics page</h2>
            <button onClick={handleClick}>Get stories</button>
            <div className='newsDisplay'>
                {newsOne.length > 0 && newsOne.map((story) => {
                    return(
                    <a href={story.url}><div className='newsPreview'>
                        <p className='title'>{story.title}</p>
                        <p className='storyPreview'>{story.description}</p>
                    </div></a>
                    )                    
                })}
        </div>
        </div>
    )
}

export default PoliticsStories