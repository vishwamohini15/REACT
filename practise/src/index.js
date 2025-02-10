import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovid from './contex/Authprovid';

// localStorage.clear()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authprovid >
    <App />

    </Authprovid>
  </React.StrictMode>
);


reportWebVitals();
