import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Background from './components/background/background';

import './index.css';
import './variables.css';

ReactDOM.render(
    <React.StrictMode>
        <Background>
            <App />
        </Background>
  </React.StrictMode>,
  document.getElementById('root')
);
