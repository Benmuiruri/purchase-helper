import { NavLink } from 'react-router-dom';
import Header from './Header';
import './Navigation.css';

function Navigation() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="header">
      <Header />
      <ul className="navigation">
        {links.map((link) => (
          <li key={link.id} className="navLink">
            <NavLink data-testid={link.id} to={link.path} className="link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
