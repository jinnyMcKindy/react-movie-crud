import React from 'react';
import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p className="loading__text">Loading...</p>
    </div>
  );
};

export default Loading;
