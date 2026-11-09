import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixIndex } from './netflix/netflix-index';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Login } from './components/login/login';
import { DataBinding } from './components/data-binding/data-binding-nestediteration';
import { NasaComponent } from './components/nasa-api/nasa.component';
import { NasaCardComponent } from './components/nasa-api/nasacard.component';
import { FakestoreComponent } from './components/fakestore-api/fakestore.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakestoreComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
