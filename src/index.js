import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from 'reportWebVitals';
import { ReactQueryConfigProvider } from 'react-query';

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: 1,
  },
  mutations: {
    throwOnError: false,
  },
};


ReactDOM.render(
  <React.StrictMode>
  <ReactQueryConfigProvider config={queryConfig}>
    <App />
   </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
