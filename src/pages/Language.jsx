import React from 'react';
import MovieList from '../components/MovieList';
import Banner from '../components/Banner';

const Language = () => {
  return (
    <div>
         <Banner endpoint="/trending/movie/week" />
      <MovieList endpoint="/discover/movie?with_original_language=en" title="Hollywood Movies" />
      <MovieList endpoint="/discover/movie?with_original_language=hi" title="Hindi Movies" />
      <MovieList endpoint="/discover/movie?with_original_language=ta" title="Tamil Movies" />
      <MovieList endpoint="/discover/movie?with_original_language=te" title="Telugu Movies" />
      <MovieList endpoint="/discover/movie?with_original_language=ml" title="Malayalam Movies" />
    </div>
  );
};

export default Language;
