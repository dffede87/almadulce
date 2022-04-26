import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGDYaOd6-tsAhmdWvbedOtkhY8uBRAU68",
  authDomain: "alma-dulce.firebaseapp.com",
  projectId: "alma-dulce",
  storageBucket: "alma-dulce.appspot.com",
  messagingSenderId: "128587191952",
  appId: "1:128587191952:web:bd19f6d0179b3d83fdea15"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();