import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './counter-q';
import CounterP from './counter-p';
import reportWebVitals from './reportWebVitals';

import Users from './users-q';
import Products from './products-p';

import APICall from './APICall-q';
import APICallP from './APICall-p';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <CounterP /> */}
    {/* <Users /> */}
    {/* <Products /> */}
    {/* <APICall /> */}
    <APICallP />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
