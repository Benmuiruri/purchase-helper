import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <div className="calc-content">
        <h3>
          Let us do some
          {' '}
          <span> Math Magic </span>
          !
        </h3>
        <p>
          If you notice any bug while perfoming your
          {' '}
          <span> Math Magic </span>
          ,
          please raise an issue on the project Github page at this
          {' '}
          <a href="https://github.com/Benmuiruri/math-magician/issues">
            Issue Page
          </a>
          {' '}
        </p>
      </div>
      <div className="calc">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
