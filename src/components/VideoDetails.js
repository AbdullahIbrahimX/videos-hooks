import React from 'react';

const VideoDetails = ({video}) => {
    const nullCheck = ()=>{
        if (video != null){
            return (
                <div>
                    <div className={"ui embed"}>
                        <iframe title={"video"} src={"https://www.youtube.com/embed/"+video.id.videoId}/>
                    </div>
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            )
        }else{
            return (
                <div>
                    <h4>Please choose a video</h4>
                </div>
            )
        }
    }

    return (
        <div className={"ui inverted segment"}>
            {nullCheck()}
        </div>
    );
};

export default VideoDetails;
