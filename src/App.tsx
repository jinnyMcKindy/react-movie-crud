import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MovieList  from './features/movieList';
import MovieDetails from './features/movieDetails';

const App: React.FC = () => {
  return (
    <Router>
       <div className="app-container">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
