import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/contacts"
      >
        Contacts
      </NavLink>

      {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
    </nav>
  );
};

export default Navigation;
