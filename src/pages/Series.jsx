import React from 'react';
import MovieList from '../components/MovieList';
import Banner from '../components/Banner';

const Series = () => {
  return (
    <div>
       <Banner endpoint="/trending/tv/week" />
      <MovieList endpoint="/discover/tv?with_genres=18" title="Drama Series" />
      <MovieList endpoint="/discover/tv?with_genres=35" title="Comedy Series" />
      <MovieList endpoint="/discover/tv?with_genres=10759" title="Action & Adventure Series" />
      <MovieList endpoint="/discover/tv?with_genres=16" title="Animation Series" />
    </div>
  );
};

export default Series;
