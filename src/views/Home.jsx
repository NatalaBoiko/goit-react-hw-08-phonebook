import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';

const HomeView = () => (
  <div className={s.view__container}>
    <h1 className={s.home__title}>Welcome to the phonebook </h1>
    <p className={s.please}>please</p>
    <div className={s.please__container}>
      <NavLink
        className={({ active }) => (active ? s.active : s.home__linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p className={s.please}>or</p>
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
