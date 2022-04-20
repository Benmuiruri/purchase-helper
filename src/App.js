/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operations = ['/', 'x', '-', '+', '='];
    return (
      <div>
        <Calculator nums={numbers} ops={operations} />
      </div>
    );
  }
}

export default App;
