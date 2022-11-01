import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import '../src/assets/css/swiper.css';
import MainLayout from './pages/MainLayout';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <MainLayout/>

  </React.StrictMode>
);

