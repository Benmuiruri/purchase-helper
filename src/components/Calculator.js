/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

import './Calculator.css';

const Calculator = (props) => {
  const [calc, setCalc] = useState({
    total: '',
    next: '',
    operation: '',
  });

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
    <div className="calculator">
      <div id="display-result" className="display-result">
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
        {props.nums.map((num) => (
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
        {props.ops.map((op) => (
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
  );
};

Calculator.propTypes = {
  nums: PropTypes.array.isRequired,
  ops: PropTypes.array.isRequired,
};

export default Calculator;
