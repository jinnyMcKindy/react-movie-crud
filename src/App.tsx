import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Movies } from '@/pages/Movies';
import { Movie } from '@/pages/Movie';

const App: React.FC = () => {
  return (
    <Router>
       <div className="app-container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
