import s from '../Styles.module.css';

// import { useState } from 'react';

const Register = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Registration</h2>
      <form className={s.form__container}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="example@email.com" />
        <input type="password" name="password" placeholder="password" />
        <button type="button " className={s.form__btn}>
          Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
