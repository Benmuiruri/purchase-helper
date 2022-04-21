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
      // @ts-ignore
      display.value = next;
    } else if (total != null) {
      // @ts-ignore
      display.value = total;
    }
  }

  handleClick = (e) => {
    if (e.target.textContent === 'AC') {
      const display = document.querySelector('.display');
      // @ts-ignore
      display.value = 0;
    }
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.textContent));
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
          <button
            type='button'
            className='light-grey'
            onClick={this.handleClick}
          >
            .
          </button>
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
