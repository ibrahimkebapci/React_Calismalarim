import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client import edin
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // createRoot kullanarak root oluşturun

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
