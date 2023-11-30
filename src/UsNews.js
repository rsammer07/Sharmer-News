import React, {useState, useEffect} from 'react'
import NewsStoryPreview from "./NewsStoryPreview"
import './Politics.css';
import env from "react-dotenv"
import { motion,AnimatePresence } from "framer-motion"
import Modal from "./modal"


function UsNews(nyt_api_key){
    const [usNews, setusNews] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [currentStory, setCurrentStory] = useState(null)

    const nytApiUrl = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=V2BhXAwqkGP6N5nlwlAGa6ycusZ5JEJh`

    useEffect(() => {
        fetch(nytApiUrl)
            .then(res => res.json())
            .then(res => {
                setusNews(res.results)
            })
    },[])

    function onClick(story){
        setShowModal((prevState => ({
            check: !prevState.check
          })));
        setCurrentStory(story);
    }

    return (
        <>
        <div>
            <h2>Your Place for US News</h2>
            <div className='newsDisplay' >
                {usNews.length > 0 && usNews.map((story) => {
                    return(
                        <>
                        <div className='newsPreview' onClick={() => {onClick(story)}}>
                            <p className='title'>{story.title}</p>
                            <img src={story.multimedia[2].url} alt={story.multimedia[2].caption}></img>
                            <p className='storyPreview'>{story.abstract}</p>
                        </div>
                        </>
                    )                    
                })}
            </div>
            {showModal && (
                        <Modal currentStory={currentStory} showModal={showModal} setShowModal={setShowModal}/>
                    )}
        </div>
        
        
        </>
    )
}

export default UsNews