import s from '../Styles.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import authOperations from '../redux/auth/auth-operations';
// import authSelectors from '../redux/auth/auth-selectors';
export default function UserMenu() {
  return (
    <div className={s.user__container}>
      <p className={s.user__link}>Welcome, </p>
      <p className={s.user__link}>' '</p>
      {/* <p className={s.user__smile}>😃</p> */}
      <button className={s.user__btn} type="submit">
        Log out
      </button>
    </div>
  );
}
