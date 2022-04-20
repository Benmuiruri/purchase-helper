/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Operations.css';

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="operations">
        {this.props.ops.map((op) => (
          <button type="button" className="orange" key={op}>
            {op}
          </button>
        ))}
      </div>
    );
  }
}

export default Operations;
