import React from 'react';
import MovieList from '../components/MovieList';
import Banner from '../components/Banner';

const Anime = () => {
  return (
    <div>
      <Banner endpoint="/trending/tv/week" />
      <MovieList endpoint="/discover/tv?with_genres=16" title="Animation" />
      <MovieList endpoint="/discover/tv?with_genres=10765" title="Sci-Fi & Fantasy" />
      <MovieList endpoint="/discover/tv?with_genres=10762" title="Kids" />
    </div>
  );
};

export default Anime;
