import React from 'react';
import './Error.scss';

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
};

export default Error;
