import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchMovies } from '../ api';
import './Banner.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchMovies(endpoint);
      setMovies(response.data.results);
    };
    getMovies();
  }, [endpoint]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className="banner-slide">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <div className="banner-info">
              <h2>{movie.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
