import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Work from './Pages/Work';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <About />
      <Skills />
      <Education />
      <Work />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;