import { Link } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';

const App = () => (
  <div>
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/calculator">calculator</Link>
      {' '}
      |
      {' '}
      <Link to="/quotes">Quotes</Link>
    </nav>
    <Calculator />
  </div>
);

export default App;
