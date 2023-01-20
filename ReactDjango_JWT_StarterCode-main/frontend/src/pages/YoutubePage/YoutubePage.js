import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const YoutubePage = () => {
    const [user, token] = useAuth();
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=videos", {
            params: {
              part: 'snippet',
              type: 'videos', 
              maxResults: 5,
              key: 'AIzaSyARHEEap69qkZO-KPHN5GWpx2D8BobAO0s'
            }
          });
          setItems(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchItems();
    }, [token]);
    return (
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        
      </div>
    );
  };
  
  export default YoutubePage;
  