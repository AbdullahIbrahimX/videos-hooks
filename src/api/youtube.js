import axios from "axios";

const KEY = "AIzaSyDmBFRuFLZEdcd3qeuffILiHmSgRLamZ_w";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        type:"video",
        maxResults:12,
        key: KEY
    }

})
