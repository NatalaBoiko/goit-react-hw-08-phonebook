import s from '../Styles.module.css';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Log in form</h2>
      <form className={s.form__container} onSubmit={handleSubmit}>
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
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
