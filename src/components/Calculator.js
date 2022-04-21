/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nums: this.props.nums, ops: this.props.ops };
  }

  render() {
    return (
      <div className="calculator">
        <div id="display" className="display">
          125
        </div>

        <div className="numbers-container">
          <button className="ac double-width light-grey">AC</button>
          {this.state.nums.map((num) => (
            <button
              className={`dark-grey ${num === 0 && 'double-width'}`}
              key={num}
            >
              {num}
            </button>
          ))}
          <button className="light-grey">.</button>
        </div>
        <div className="operations-container">
          {this.state.ops.map((op) => (
            <button className="orange" key={op}>
              {op}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
