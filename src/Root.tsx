import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import App from '@/App';

const Root = () => {
  return (
    <Router>
      <Normalize />
      <App />
    </Router>
  );
};

export default Root;
