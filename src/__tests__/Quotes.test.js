import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quotes from '../routes/Quotes';

describe('Test presence of Quotes component', () => {
  test('renders the Quotes component correctly', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <Quotes />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});
