import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const YoutubePage = () => {
    const [user, token] = useAuth();
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
        <h1>Home Page for {user.username}!</h1>
        {videos &&
        videos.map((video) => (
          <p key={video.id}>
            {video.image} {video.title} {video.channel}
            <img src={video.snippet.thumbnails.medium.url}/>
          </p>
  
        ))}
        
      </div>
    );
  };
  
  export default YoutubePage;
  