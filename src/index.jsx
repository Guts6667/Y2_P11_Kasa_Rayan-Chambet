import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
// import Hero from './components/Hero';
import './index.css';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
const GlobalStyle = createGlobalStyle`
body{
  @font-face {
    font-family: "Montserrat";
    src: url("fonts/Montserrat/Montserrat-VariableFont_wght.ttf")
  }
  *{
    font-family: "Montserrat", 'Sans-serif';
  }
  color : white;
  padding : 5%;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/*" element= {<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
