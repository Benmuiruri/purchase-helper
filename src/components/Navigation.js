/* eslint-disable*/
import { NavLink } from 'react-router-dom';
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
     <nav className='navigation'>
       <div className='head'></div>
     </nav>
   )
  // return (
  //     <div className="header">
  //       <h2>Math Magicians</h2>
  //       <nav className="navigation">
  //         <Link to="/">Home</Link> |<Link to="/calculator">calculator</Link> |{' '}
  //         <Link to="/quotes">Quotes</Link>
  //       </nav>
  //     </div>
  // );
}

export default Navigation;
