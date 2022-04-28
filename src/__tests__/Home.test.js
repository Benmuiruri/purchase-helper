import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../routes/Home';

describe('Test presence of Home component', () => {
  test('renders the Home component correctly', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});
