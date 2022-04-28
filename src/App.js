import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Quotes from './routes/Quotes';
import Home from './routes/Home';
import './App.css';

function App() {
  return (
    <div className="site-wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
