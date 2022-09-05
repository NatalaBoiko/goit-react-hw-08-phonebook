import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';

const HomeView = () => (
  <div>
    <h1>Welcome to the phonebook </h1>
    <p>please</p>
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.home__linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p>or</p>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.home__linc)}
        to="/register"
      >
        Register
      </NavLink>
    </div>
  </div>
);

export default HomeView;
