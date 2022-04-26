import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="header">
      <h2>Math Magicians</h2>
      <nav className="navigation">
        <Link to="/">Home</Link>
        {' '}
        |
        {' '}
        <Link to="/calculator">calculator</Link>
        {' '}
        |
        {' '}
        <Link to="/quotes">Quotes</Link>
      </nav>
    </div>
  );
}

export default Navigation;
