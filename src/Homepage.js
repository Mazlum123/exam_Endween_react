import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function HomePage() {
  return (
    <div>
    <Header />
      <button>
        <Link to="/category/Details">Vers Détails</Link>
      </button>
    </div>
  );
}

export default HomePage;
