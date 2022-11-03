import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import '../src/assets/css/swiper.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

     <AppRoutes/>

  </BrowserRouter>
);

