import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inshorts from './InshortsAPI/Inshorts';
import App from './App';
import Navbar from './Navbar/MainNavbar';
import SecNav from './Navbar/SecNav';
import GitaAPI from './GitaAPI/GitaAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <SecNav />
    <App />
    {/* <Inshorts /> */}
    <GitaAPI />

  </React.StrictMode>
);


