import React,{useState} from 'react';
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

const App = () => {
    const [videoList,setVideoList]=useState([])
    const [selectedVideo,setSelectedVideo] = useState(null)

    const onSearchSubmit = async (term) =>{
        const result = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideoList(result.data.items)
        setSelectedVideo(result.data.items[0])

    }
    const onVideoSelected = (video) =>{
        setSelectedVideo(video)
    }

    return (
        <div className={"ui container"} style={{marginTop: "10px"}}>
           <SearchBar onSubmit={onSearchSubmit}/>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetails video={selectedVideo}/>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList videos={videoList} onVideoSelected={onVideoSelected}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
