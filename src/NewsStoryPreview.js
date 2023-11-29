import React from "react";

function NewsStoryPreview(story){

    // console.log(story.newsOne.articles[0]);

    return (
        <div className="newsDisplay">
            <div className="newsPreview">{story}</div>
        </div>
    )
}

export default NewsStoryPreview