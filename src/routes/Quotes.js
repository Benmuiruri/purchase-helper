/* eslint-disable react/state-in-constructor */
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import './Quotes.css';

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class Quotes extends React.Component {
  state = {
    quotes: [
      {
        quote:
          'Life isn’t about getting and having, it’s about giving and being.',
        author: 'Kevin Kruse',
      },
    ],
    index: 0,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            quotes: res.quotes,
          },
          this.getRandomIndex,
        );
      });
  }

  getRandomIndex = () => {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index,
      });
    }
  };

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];

    return (
      <>
        <Navigation />
        <h3>Click the New Quote button to generate random quotes</h3>
        <div className="quote-box">
          {quote && (
            <div className="inner-content">
              <FaQuoteLeft
                style={{
                  color: 'darkcyan',
                  fontSize: '30px',
                  marginTop: '2px',
                }}
              />

              <p className="quote">{quote.quote}</p>
              <p className="fst-italic text-end" id="author">
                {' '}
                -
                {quote.author}
              </p>
            </div>
          )}
          <button
            type="button"
            className="quote-btn"
            id="new-quote"
            onClick={this.getRandomIndex}
          >
            New Quote
          </button>
        </div>
      </>
    );
  }
}

export default Quotes;
