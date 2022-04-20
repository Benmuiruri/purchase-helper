/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Keypad from './Keypad';
import Operations from './Operations';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <Keypad digits={this.props.nums} />
        <Operations ops={this.props.ops} />
      </div>
    );
  }
}

Calculator.propTypes = {
  nums: PropTypes.array.isRequired,
  ops: PropTypes.array.isRequired,
};

export default Calculator;
