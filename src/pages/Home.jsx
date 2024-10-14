import React from 'react';
import MovieList from '../components/MovieList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Banner endpoint="/trending/movie/week" />
      <MovieList endpoint="/discover/movie?with_genres=28" title="Action Movies" />
      <MovieList endpoint="/discover/movie?with_genres=35" title="Comedy Movies" />
      <MovieList endpoint="/discover/movie?with_genres=18" title="Drama Movies" />
      <MovieList endpoint="/discover/movie?with_genres=27" title="Horror Movies" />
      <MovieList endpoint="/discover/movie?with_genres=10749" title="Romance Movies" />
    </div>
  );
};

export default Home;
