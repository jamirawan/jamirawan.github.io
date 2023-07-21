import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Portfolio from './components/Portfolio.js';
import Intro3 from './components/Intro3.js';
import Heading from './components/Heading.js';
import logo from './irawan.svg';

import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <Nav />
    <Heading />
    <Promo />
    <About />
    <Portfolio />
    <Intro3 />
    <Footer />

    </div>
  
    );
 }

export default App;