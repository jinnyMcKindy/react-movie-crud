import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

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
