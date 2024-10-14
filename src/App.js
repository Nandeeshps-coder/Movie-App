import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Language from './pages/Language';
import Series from './pages/Series';
import Anime from './pages/Anime';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/language" element={<Language/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/anime" element={<Anime/>} />
      </Routes>
    </Router>
  );
};

export default App;
