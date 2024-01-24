import React, { Fragment, useEffect, useState } from 'react';
import './banner.css';
import axios from '../axios';
import { api_key, imageurl } from '../constants/constant';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results[0]);


    });
  }, []);




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000); // Change movie every minute

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="banner-wrap">
      {currentMovie && (
        <div key={currentMovieIndex} className="banner" style={{ backgroundImage: `url(${imageurl + currentMovie.backdrop_path})` }}>
          <div className="content">
            <div className="left">
              <h1 className="title">{currentMovie.original_title || currentMovie.original_name}</h1>
              <div className="buttons">
                <button className="button-left">Play</button>
                <button className="button-left">List</button>
              </div>
              <h1 className="desc">{currentMovie.overview}</h1>
            </div>
            <div className="right">
              <button className="button-right">Rated U 13+</button>
            </div>
          </div>
          <div className="fade"></div>
        </div>
      )}
    </div>
  );
}

export default Banner;
