/* eslint-disable */
import React from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const display = document.querySelector('.display');
    if (next != null) {
      display.value = next;
    } else if (total != null) {
      display.value = total;
    }
  }

  handleClick = (e) => {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.textContent));
    console.log(calculate({ total, next, operation }, e.target.textContent));
  };

  render() {
    return (
      <div className='calculator'>
        <div id='display-result' className='display-result'>
          <input className='display' placeholder='0' />
        </div>

        <div className='numbers-container'>
          <button
            type='button'
            className='ac double-width light-grey'
            onClick={this.handleClick}
          >
            AC
          </button>
          {this.props.nums.map((num) => (
            <button
              type='button'
              className={`dark-grey ${num === 0 && 'double-width'}`}
              key={num}
              onClick={this.handleClick}
            >
              {num}
            </button>
          ))}
          <button className='light-grey'>.</button>
        </div>
        <div className='operations-container'>
          {this.props.ops.map((op) => (
            <button
              type='button'
              className='orange'
              key={op}
              onClick={this.handleClick}
            >
              {op}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
