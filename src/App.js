// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/joinForm';
import MainBox from './components/MainBox';

function App() {
  return (
    <div className="App">
      <div className="header-spacer"></div>
      <Header />
      <MainBox />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
