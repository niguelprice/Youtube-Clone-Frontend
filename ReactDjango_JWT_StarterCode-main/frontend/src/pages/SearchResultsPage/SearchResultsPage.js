import { Link } from "react-router-dom";
import "./SearchResultsPage.css"
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";



const SearchResultsPage = () => {const [videos, setVideos] = useState([]);

    const defaultValues = {};
    const [formData, handleInputChange, handleSubmit] = useCustomForm([defaultValues]);
  
    useEffect(() => {
      const fetchYoutubeVideos = async () => {
        try {
          const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=", {
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
    }, []);



    return ( <div>
        <h1>Searched Results
        </h1>
        <h2><Link to="/register">Click to register!</Link></h2>
        <div className="container">
        <h3>
        <form className="form" onSubmit={handleSubmit}>
        <label>
          Search for Videos:{" "}
          <input
            type="text"
            value={formData.defaultValues}
            onChange={handleInputChange}
          />
        </label>
        <button>Search</button>
        </form>
        </h3>
        <h4>{videos &&
        videos.map((video) => (
          <p>{video.snippet.title}
            <img src={video.snippet.thumbnails.medium.url}/>
          </p>
        ))}
        </h4>
        
      </div>
    
    </div>
    
    
    
    );
}
 
export default SearchResultsPage;