import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../ api';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchMovies(`/movie/${id}`);
      setMovie(response.data);
    };

    const getTrailer = async () => {
      const response = await fetchMovies(`/movie/${id}/videos`);
      const trailerData = response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      setTrailer(trailerData);
    };

    getMovie();
    getTrailer();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      {trailer && (
        <div className="movie-trailer">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="movie-info-container">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
