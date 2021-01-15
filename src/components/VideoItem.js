import React from 'react';

const VideoItem = ({onVideoSelected,video}) => {
    return (
        <div>
            <div onClick={()=> onVideoSelected(video)} className={"video-item item"}>
                <img className={"ui image"} src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className={"content"}>
                    <div className={"header"}><p style={{color:"white"}}>{video.snippet.title}</p></div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
