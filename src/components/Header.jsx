import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">MovieApp</Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/language">Language</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/anime">Anime</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
