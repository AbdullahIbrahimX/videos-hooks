import React ,{useState,useEffect} from 'react';
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videoList,setVideoList]=useState([])

    useEffect(()=>{
        search(defaultSearchTerm)
    },[])

    const search = async (term) =>{
        const result = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideoList(result.data.items)

    }
    return [ videoList , search];

};

export default useVideos;
