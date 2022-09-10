import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.nav__link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}

      {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
    </nav>
  );
};

export default Navigation;
