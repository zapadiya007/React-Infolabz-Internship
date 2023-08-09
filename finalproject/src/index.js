import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inshorts from './Inshorts';
import App from './App';
import Navbar from './FanalNavbar';
import SecNav from './SecNav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <SecNav />
    <App />
    <Inshorts />

  </React.StrictMode>
);


