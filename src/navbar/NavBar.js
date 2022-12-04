import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/logout',
      text: 'Logout',
    },
    {
      id: 2,
      path: '/registration',
      text: 'Sign Up',
    },
  ];

  return (
    <>
      <nav className="nav-bar">
        <div className="brand-logo-container">
          <h2 className="nav-brand">Innova Labs</h2>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li className="nav-link" key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mobile-section">
        <div className="mobile-header">
          <div className="mobile-homeIcon">
            <NavLink to="/logout">
              <FaSignOutAlt className="mobile-home" />
            </NavLink>
          </div>
          <div className="titleHeader">
            Innova Labs
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
