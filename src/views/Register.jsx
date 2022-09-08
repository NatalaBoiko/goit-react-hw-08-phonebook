import s from '../Styles.module.css';

import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Registration</h2>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit " className={s.form__btn}>
          Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
