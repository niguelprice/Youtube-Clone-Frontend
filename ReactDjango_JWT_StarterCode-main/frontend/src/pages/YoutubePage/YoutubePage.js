import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import "./YoutubePage.css"

const YoutubePage = () => {
    const [videos, setVideos] = useState([]);

    const [handleInputChange, handleSubmit] = useCustomForm([]);
  
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
        <form className="form" onSubmit={handleSubmit}>
        <label>
          Search for Videos:{" "}
          <input
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <Link to="/SearchResultsPage"><button>Search</button></Link>
        </form>
        <h3>{videos &&
        videos.map((video) => (
          <p>{video.snippet.title}
            <img src={video.snippet.thumbnails.medium.url}/>
          </p>
        ))}
        </h3>
        
      </div>
    );
  };
  
  export default YoutubePage;
  