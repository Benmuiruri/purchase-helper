import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
