import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({onVideoSelected,videos}) => {

    const renderVideoItems = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelected={onVideoSelected}
            />
        )
    })

    return (
        <div className={"ui inverted segment"}>
            <div className={"ui relaxed divided list"}>
                {renderVideoItems}
            </div>
        </div>
    );
};

export default VideoList;
