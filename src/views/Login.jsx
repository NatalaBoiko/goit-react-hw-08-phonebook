import s from '../Styles.module.css';

const Login = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Log in form</h2>
      <form className={s.form__container}>
        <input type="email" name="email" placeholder="example@email.com" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit " className={s.form__btn}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
