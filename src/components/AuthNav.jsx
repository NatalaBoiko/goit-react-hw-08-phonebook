import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/login"
      >
        Log in
      </NavLink>
    </div>
  );
}
