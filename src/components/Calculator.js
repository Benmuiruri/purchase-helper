import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operations = ['÷', 'x', '-', '+', '='];

  useEffect(() => {
    const { total, next } = calc;
    const display = document.querySelector('.display');
    if (next != null) {
      // @ts-ignore
      display.value = next;
    } else if (total != null) {
      // @ts-ignore
      display.value = total;
    }
  });

  const handleClick = (e) => {
    if (e.target.textContent === 'AC') {
      const display = document.querySelector('.display');
      // @ts-ignore
      display.value = 0;
    }
    const result = calculate(calc, e.target.textContent);
    setCalc({ ...calc, ...result });
  };

  return (
    <>
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
      <div className="calculator">
        <div data-testid="display-result" className="display-result">
          <input className="display" placeholder="0" />
        </div>

        <div className="numbers-container">
          <button
            type="button"
            className="ac double-width light-grey"
            onClick={handleClick}
          >
            AC
          </button>
          {numbers.map((num) => (
            <button
              type="button"
              className={`dark-grey ${num === 0 && 'double-width'}`}
              key={num}
              onClick={handleClick}
            >
              {num}
            </button>
          ))}
          <button type="button" className="light-grey" onClick={handleClick}>
            .
          </button>
        </div>
        <div className="operations-container">
          {operations.map((op) => (
            <button
              type="button"
              className="orange"
              key={op}
              onClick={handleClick}
            >
              {op}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
