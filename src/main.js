import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import './main.css';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount'),
  );
});