import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import './index.css';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Apartment from './pages/Apartment';
import Footer from './components/Footer';
const GlobalStyle = createGlobalStyle`
body{
  @font-face {
    font-family: "Montserrat";
    src: url("fonts/Montserrat/Montserrat-VariableFont_wght.ttf")
  }
  *{
    font-family: "Montserrat", 'Sans-serif';
  }
  header{
    padding: 5%;
  }
  
  color : white;
}
footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 100px;
  margin: 0 !important;
  text-align: center;
  font-size: 12px;
  grid-row-gap: 10px;
  img{
    width: 50px;
    height: auto;
  }
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
        <Route path='/apartment/:id' element= {<Apartment />} />
        <Route path="/*" element= {<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
