import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './App';
// import reportWebVitals from './reportWebVitals';

const webbrain = ReactDOM.createRoot(document.getElementById('root'));
webbrain.render(
  <React.StrictMode>
    <Student name="Dubai"/>

    {/* <Student title="Webbrain"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 