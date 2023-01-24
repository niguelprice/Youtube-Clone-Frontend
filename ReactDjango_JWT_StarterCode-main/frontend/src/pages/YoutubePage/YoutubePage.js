import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const YoutubePage = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      const fetchYoutubeVideos = async () => {
        try {
          const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=reactmongoose", {
            params: {
              part: 'snippet',
              type: 'videos', 
              maxResults: 5,
              key: 'AIzaSyARHEEap69qkZO-KPHN5GWpx2D8BobAO0s'
            }
          });
          setVideos(response.data.items);
          console.log('Youtube Data', response.data.items)
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchYoutubeVideos();
    });
    return (
      <div className="container">
        <h1>Search for videos</h1>
        {videos &&
        videos.map((video) => (
          <p>{video.snippet.title}
            <img src={video.snippet.thumbnails.medium.url}/>
          </p>
        ))}
        
      </div>
    );
  };
  
  export default YoutubePage;
  