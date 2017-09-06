import React from 'react';
import App from './Components/App';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './main.css';

render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('mount'));































