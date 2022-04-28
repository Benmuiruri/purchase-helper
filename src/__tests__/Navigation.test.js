import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Test presence of navigation header', () => {
  test('renders the navigation correctly', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});

describe('Test whether links lead to expected path', () => {
  test('Should load Home component', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByTestId('1'));
  });
});
