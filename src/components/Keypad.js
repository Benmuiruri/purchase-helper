/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Keypad.css';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="keypad">
        <button type="button" className="ac double-width light-grey">
          AC
        </button>
        {this.props.digits.map((num) => (
          <button
            type="button"
            className={`dark-grey ${num === 0 && 'double-width'}`}
            key={num}
          >
            {num}
          </button>
        ))}
        <button type="button" className="light-grey">
          .
        </button>
      </div>
    );
  }
}

export default Keypad;
