import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../ api';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ endpoint, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchMovies(endpoint);
      setMovies(response.data.results);
    };
    getMovies();
  }, [endpoint]);

  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
