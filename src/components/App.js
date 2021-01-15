import React,{useState} from 'react';
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import {useEffect} from "react";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo,setSelectedVideo] = useState(null)
    const [videoList, search]=useVideos("هزيم الرعد")

    useEffect(()=>{
        setSelectedVideo(videoList[0])
    },[videoList])

    return (
        <div className={"ui container"} style={{marginTop: "10px"}}>
           <SearchBar onSubmit={search}/>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetails video={selectedVideo}/>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList
                            videos={videoList}
                            onVideoSelected={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
